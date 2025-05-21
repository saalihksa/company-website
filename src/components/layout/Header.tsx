"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  FaHome, 
  FaBuilding, 
  FaPhoneAlt, 
  FaInfoCircle, 
  FaBars, 
  FaTimes, 
  FaTools, 
  FaBullhorn, 
  FaTimes as FaClose,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [showPopup, setShowPopup] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about"; // Hakkımızda sayfası kontrolü
  const isServicesPage = pathname === "/services"; // Hizmetlerimiz sayfası kontrolü 
  const isContactPage = pathname === "/contact"; // İletişim sayfası kontrolü
  
  // Pop-up'ın gösterilip gösterilmeyeceğini kontrol et
  const shouldShowPopup = ["/services", "/about", "/contact"].includes(pathname) && showPopup;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) { // Slider alanından çıkma değeri (yaklaşık tam ekran yüksekliği)
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (isHomePage || isAboutPage || isServicesPage || isContactPage) { // Tüm hero sayfalarında scroll listener ekle
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // Diğer sayfalarda her zaman "scrolled" gibi davranacak
    }
  }, [pathname, isHomePage, isAboutPage, isServicesPage, isContactPage]);
  
  useEffect(() => {
    // Sayfa değiştiğinde popup göster durumunu sıfırla
    setShowPopup(true);
    setActiveItem(pathname);
  }, [pathname]);

  const navItems = [
    { name: "Ana Sayfa", path: "/", icon: <FaHome className="mr-2" /> },
    { name: "Hizmetlerimiz", path: "/services", icon: <FaTools className="mr-2" /> },
    { name: "Hakkımızda", path: "/about", icon: <FaInfoCircle className="mr-2" /> },
    { name: "İletişim", path: "/contact", icon: <FaPhoneAlt className="mr-2" /> },
  ];

  // Dinamik class'ları belirle
  const headerClasses = (isHomePage || isAboutPage || isServicesPage || isContactPage) 
    ? scrolled 
      ? isDarkMode 
        ? "bg-slate-900 shadow-md shadow-slate-800/20 py-4 border-b border-slate-800" 
        : "bg-white shadow-md py-4"
      : "bg-transparent py-6"
    : isDarkMode
      ? "bg-slate-900 shadow-md shadow-slate-800/20 py-4 border-b border-slate-800"
      : "bg-white shadow-md py-4 border-b border-gray-200"; // Sabit arka plan diğer sayfalar için

  const logoFilter = (isHomePage || isAboutPage || isServicesPage || isContactPage) && !scrolled 
    ? "brightness-110 contrast-110" 
    : isDarkMode
      ? "brightness-110 contrast-110"
      : "brightness-100 contrast-100";

  const navLinkColor = (itemPath: string) => {
    if (activeItem === itemPath) return "bg-blue-600 text-white";
    return (isHomePage || isAboutPage || isServicesPage || isContactPage) && !scrolled 
      ? "text-white hover:bg-white/20" 
      : isDarkMode
        ? "text-gray-300 hover:bg-slate-800"
        : "text-gray-700 hover:bg-blue-50";
  };

  const mobileToggleColor = (isHomePage || isAboutPage || isServicesPage || isContactPage) && !scrolled 
    ? "text-white" 
    : isDarkMode
      ? "text-gray-300"
      : "text-gray-700";

  // Popup içeriği
  const getPopupContent = () => {
    return "ilanlarımızı hemen inceleyin";
  };

  return (
    <>
      {/* Pop-up Bar */}
      <AnimatePresence>
        {shouldShowPopup && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed w-full z-[60] bg-yellow-400 text-gray-900 py-2 shadow-md flex justify-center"
            style={{ height: "40px" }}
          >
            <div className="container max-w-4xl mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center flex-1 justify-center">
                <span className="text-xl font-bold tracking-tight mr-3">sahibinden.com</span>
                <p className="text-sm md:text-base">{getPopupContent()}</p>
                <Link 
                  href="https://www.sahibinden.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-3 text-sm font-medium bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow flex items-center"
                >
                  İlanları Görüntüle
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <button 
                onClick={() => setShowPopup(false)} 
                className="text-gray-800 p-1 hover:bg-yellow-500 rounded-full transition-colors"
                aria-label="Kapat"
              >
                <FaClose />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${headerClasses} ${shouldShowPopup ? 'mt-[40px]' : 'mt-0'} ${(isHomePage || isAboutPage || isServicesPage || isContactPage) && !scrolled ? 'backdrop-blur-sm bg-black/10' : ''}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative flex items-center">
              <Image 
                src="/images/nav-bar-logo.png" 
                alt="Piston Creative Logo" 
                width={120} 
                height={40} 
                className={`transition-all duration-300 ${logoFilter}`}
                priority
              />
            </Link>

            {/* Desktop Navigation - Ortalanmış */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center justify-start ml-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center px-5 py-3 rounded-full text-base font-medium transition-all duration-200 ${navLinkColor(item.path)}`}
                >
                  {item.name}
                </Link>
              ))}
              </div>
            </nav>

              {/* Karanlık/Aydınlık Mod Butonu */}
            <div className="hidden md:flex items-center justify-end">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  (isHomePage || isAboutPage || isServicesPage || isContactPage) && !scrolled 
                    ? 'text-white hover:bg-white/20' 
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-slate-700'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label={isDarkMode ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
              >
                {isDarkMode ? (
                  <FaSun className="text-xl" />
                ) : (
                  <FaMoon className="text-xl" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Toggle ve Tema Değiştirici */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${mobileToggleColor}`}
                aria-label={isDarkMode ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
              >
                {isDarkMode ? (
                  <FaSun className="text-lg" />
                ) : (
                  <FaMoon className="text-lg" />
                )}
              </button>
              
              <button
                className={`p-3 rounded-full ${mobileToggleColor}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${isDarkMode ? 'bg-slate-900 shadow-lg border-t border-slate-800' : 'bg-white shadow-lg'} overflow-hidden`}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col divide-y divide-gray-100 dark:divide-slate-800">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`flex items-center justify-center py-4 px-4 transition-colors ${
                        activeItem === item.path
                          ? "text-blue-600 font-medium"
                          : isDarkMode
                            ? "text-gray-300" 
                            : "text-gray-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="text-base">{item.name}</span>
                      {activeItem === item.path && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1 h-full absolute right-0 bg-blue-600 rounded-l-full"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header; 