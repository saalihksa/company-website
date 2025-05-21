"use client";

import Link from "next/link";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaYoutube,
  FaChevronRight
} from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <footer className={`${
      isDarkMode 
        ? "bg-slate-900" 
        : "bg-white border-t border-gray-100"
      } ${isDarkMode ? "text-white" : "text-gray-800"}`}
    >
      {/* Ana Footer */}
      <div className="container mx-auto px-4 py-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Firma Bilgileri */}
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/images/nav-bar-logo.png" 
                alt="Piston Creative" 
                width={150} 
                height={50} 
                className="transition-all hover:scale-105 duration-300"
              />
            </div>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6 leading-relaxed`}>
              2005 yılından beri profesyonel emlak ve gayrimenkul danışmanlık hizmetleri ile hayalinizdeki mülke ulaşmanızı sağlıyoruz.
            </p>
            <div className="flex space-x-3">
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-blue-600" : "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white"} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}>
                <FaFacebook size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-blue-400" : "bg-blue-50 text-blue-500 hover:bg-blue-400 hover:text-white"} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}>
                <FaTwitter size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-pink-600" : "bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white"} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}>
                <FaInstagram size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-blue-700" : "bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white"} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}>
                <FaLinkedin size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-red-600" : "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}>
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className={`text-lg font-bold mb-6 pb-2 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { title: "Ana Sayfa", url: "/" },
                { title: "Hizmetlerimiz", url: "/services" },
                { title: "Hakkımızda", url: "/about" },
                { title: "Blog", url: "/blog" },
                { title: "İletişim", url: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} ${isDarkMode ? "hover:text-white" : "hover:text-blue-600"} transition-colors flex items-center group`}>
                    <FaChevronRight className={`mr-2 text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"} transition-transform duration-300 group-hover:translate-x-1`} />
                    <span className="transition-colors duration-300">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className={`text-lg font-bold mb-6 pb-2 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {[
                "Konut Satışı", 
                "Kiralama Hizmetleri", 
                "Gayrimenkul Değerleme", 
                "Danışmanlık Hizmetleri", 
                "Emlak Yönetimi"
              ].map((service, index) => (
                <li key={index} className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} transition-colors flex items-center group cursor-pointer`}>
                  <FaChevronRight className={`mr-2 text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"} transition-transform duration-300 group-hover:translate-x-1`} />
                  <span className={`transition-colors duration-300 ${isDarkMode ? "group-hover:text-white" : "group-hover:text-blue-600"}`}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className={`text-lg font-bold mb-6 pb-2 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <FaMapMarkerAlt className={`mr-3 mt-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"} group-hover:scale-110 transition-transform duration-300`} />
                <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} group-hover:text-blue-600 transition-colors duration-300`}>Levent Mah, Büyükdere Cad. No:123, İstanbul</span>
              </li>
              <li className="flex items-center group">
                <FaPhoneAlt className={`mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"} group-hover:scale-110 transition-transform duration-300`} />
                <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} group-hover:text-blue-600 transition-colors duration-300`}>+90 212 123 45 67</span>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className={`mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"} group-hover:scale-110 transition-transform duration-300`} />
                <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} group-hover:text-blue-600 transition-colors duration-300`}>info@pistoncreative.com</span>
              </li>
            </ul>
            <Button 
              href="/contact" 
              variant={isDarkMode ? "outline" : "primary"} 
              className={`mt-6 ${isDarkMode ? "border-blue-500 text-blue-400 hover:bg-blue-800 hover:text-white" : "shadow-md hover:shadow-lg"}`}
            >
              Bize Ulaşın
            </Button>
          </div>
        </div>

        <div className={`border-t ${isDarkMode ? "border-slate-800" : "border-gray-100"} mt-10 pt-8 pb-6`}>
          {/* Alt bilgi metni veya telif hakkı metni eklemek için bu alanı kullanabilirsiniz */}
          <div className="text-center">
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              © {currentYear} Piston Creative. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 