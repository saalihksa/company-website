import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ClientOnly from "@/components/utils/ClientOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piston Creative | Profesyonel Gayrimenkul Hizmetleri",
  description: "Piston Creative ile hayalinizdeki gayrimenkullere ulaşın. Konut, ticari ve yatırımlık gayrimenkul çözümleri için profesyonel danışmanlık hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientOnly>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">
        {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
