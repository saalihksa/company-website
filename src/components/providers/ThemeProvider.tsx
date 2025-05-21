"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Başlangıç değerleriyle context'i oluştur, böylece undefined check yapmaya gerek kalmaz
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
});

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // Tarayıcı yerel depolamasına kaydet
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      return newTheme;
    });
  };

  // Sayfa ilk yüklendiğinde yerel depolamadaki tema tercihini al
  useEffect(() => {
    // Sunucu tarafında çalışmasını engelle
    setMounted(true);
    
    // Tarayıcı ortamında olduğumuzdan emin olalım
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Tema değişikliğinde HTML kök elementine dark class'ını ekle/kaldır
  useEffect(() => {
    if (!mounted) return;
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mounted]);

  // Context değeri
  const contextValue = {
    theme,
    toggleTheme
  };

  // Sunucu/istemci uyuşmazlığını önlemek için montajdan sonra tam içeriği render et
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
} 