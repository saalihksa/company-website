"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaCheckCircle, FaChevronDown, FaMapSigns, FaPaperPlane } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

// Yükselme animasyonu (about/page.tsx dosyasından alındı)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Burada normalde API çağrısı yapılacak, örnek için setTimeout kullanıyoruz
    setTimeout(() => {
      console.log("Form data:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className={`pt-0 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative py-40 text-white overflow-hidden">
        {/* Arka plan ve efektleri */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="İletişim"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="scale-105"
          />
          {/* Katmanlı Arkaplan Efektleri */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 
            bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ij48L3BhdGg+Cjwvc3ZnPg==')] 
            opacity-20">
          </div>
        </div>
        
        {/* Yumuşatılmış Köşegen Kesim Efekti */}
        <div 
          className={`absolute bottom-0 left-0 w-full h-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} z-1`} 
          style={{ 
            clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 0 100%)",
            backdropFilter: "blur(5px)"
          }}
        ></div>
        
        {/* Hero İçerik */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Dekoratif desen */}
              <div className="absolute -left-16 -top-16 w-32 h-32 border border-white/10 rounded-full"></div>
              <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-white/5 rounded-full"></div>
              
              <div className="bg-black/20 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/5 shadow-2xl">
                <motion.div 
              initial="hidden"
              animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { staggerChildren: 0.2 } 
                    }
                  }}
                >
                  <motion.span 
                    variants={fadeInUp}
                    className="inline-block px-4 py-1.5 mb-5 bg-blue-800/40 text-blue-100 text-sm font-medium rounded-full backdrop-blur-sm border border-blue-500/20 shadow-lg"
                  >
                    Bize Ulaşın
                  </motion.span>
                  
                  <motion.h1 
              variants={fadeInUp}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">İletişim</span>
            </motion.h1>
                  
            <motion.p 
              variants={fadeInUp}
                    className="text-xl md:text-2xl text-blue-50/95 max-w-3xl leading-relaxed"
            >
              Sorularınız, önerileriniz veya emlak ihtiyaçlarınız için bizimle iletişime geçin.
            </motion.p>
            
            <motion.div 
                    variants={fadeInUp} 
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <motion.a
                      href="#contact-details"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-all"
                    >
                      İletişim Bilgileri <FaPhoneAlt className="ml-2" />
                    </motion.a>
                  </motion.div>
                  
                  {/* Keşfet Butonu - Ana butonun altında optimizasyon */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-14 flex justify-center"
                  >
                    <motion.a
                      href="#contact-details"
                      initial={{ y: 0 }}
                      animate={{ y: [0, 8, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                      className="group flex flex-col items-center text-white/80 hover:text-white transition-colors"
                    >
                      <span className="mb-2 font-medium text-sm group-hover:text-blue-300 transition-all">Keşfedin</span>
                      <div className="p-2 rounded-full border border-white/20 group-hover:border-blue-500 group-hover:bg-blue-600/20 transition-all">
                        <FaChevronDown className="text-lg group-hover:text-blue-300" />
                      </div>
                    </motion.a>
                  </motion.div>
            </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form - YENİ TASARIM */}
      <section id="contact-details" className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Bizimle İletişime Geçin
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto my-4"></div>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Sorularınız, önerileriniz veya emlak ihtiyaçlarınız için her zaman buradayız.
              </p>
            </div>

            {/* İletişim Bilgileri ve Form - Yeni Kart Tasarımı */}
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl overflow-hidden shadow-2xl`}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Sol Taraf - İletişim Detayları */}
                <div className={`relative p-8 md:p-12 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-600'}`}>
                  {/* Dekoratif Elementler */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-700/20 rounded-full -ml-20 -mb-20"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-8">İletişim Detayları</h3>
                    
                    <div className="space-y-6 text-white">
                      <div className="flex items-start group">
                        <div className="mr-4 mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                          <FaMapMarkerAlt className="text-xl text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">Adresimiz</h4>
                          <p className="text-blue-100">Levent Mah, Büyükdere Cad. No:123</p>
                          <p className="text-blue-100">Şişli / İstanbul, 34394</p>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="mr-4 mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                          <FaPhoneAlt className="text-xl text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">Telefon Numaralarımız</h4>
                          <p><a href="tel:+902121234567" className="text-blue-100 hover:text-white transition-colors">+90 212 123 45 67</a></p>
                          <p><a href="tel:+905331234567" className="text-blue-100 hover:text-white transition-colors">+90 533 123 45 67</a></p>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="mr-4 mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                          <FaEnvelope className="text-xl text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">E-posta Adreslerimiz</h4>
                          <p><a href="mailto:info@pistoncreative.com" className="text-blue-100 hover:text-white transition-colors">info@pistoncreative.com</a></p>
                          <p><a href="mailto:satis@pistoncreative.com" className="text-blue-100 hover:text-white transition-colors">satis@pistoncreative.com</a></p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex space-x-4">
                      <a
                        href="https://wa.me/905311234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                      >
                        <FaWhatsapp className="text-xl" />
                        <span className="font-medium">WhatsApp</span>
                      </a>
                      
                      <a
                        href="https://www.sahibinden.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl"
                      >
                        <span className="font-medium">sahibinden.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sağ Taraf - İletişim Formu */}
                <div className={`p-8 md:p-12 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Bize Mesaj Gönderin</h3>
                  
                  {submitted ? (
                    <div className="bg-green-50 rounded-lg p-6 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-green-100 rounded-full p-3 mb-4">
                          <FaCheckCircle size={40} className="text-green-500" />
                        </div>
                        <h4 className="text-xl font-bold text-green-800 mb-2">Teşekkürler!</h4>
                        <p className="text-green-700">Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Üst kısım - İsim ve Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            Adınız Soyadınız*
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg ${
                              isDarkMode 
                                ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-400' 
                                : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                            } border focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none`}
                            placeholder="Adınız Soyadınız"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            E-posta Adresiniz*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg ${
                              isDarkMode 
                                ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-400' 
                                : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                            } border focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none`}
                            placeholder="örnek@email.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Orta kısım - Telefon ve Konu */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            Telefon Numaranız
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg ${
                              isDarkMode 
                                ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-400' 
                                : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                            } border focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none`}
                            placeholder="0212 123 45 67"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            Konu*
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg ${
                              isDarkMode 
                                ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-400' 
                                : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                            } border focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none`}
                            required
                          >
                            <option value="">Seçiniz</option>
                            <option value="Satılık Gayrimenkul">Satılık Gayrimenkul</option>
                            <option value="Kiralık Gayrimenkul">Kiralık Gayrimenkul</option>
                            <option value="Değerleme">Değerleme</option>
                            <option value="Danışmanlık">Danışmanlık</option>
                            <option value="Diğer">Diğer</option>
                          </select>
                        </div>
                      </div>

                      {/* Mesaj */}
                      <div className="space-y-2">
                        <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                          Mesajınız*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg resize-none ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-400' 
                              : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                          } border focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none`}
                          placeholder="Mesajınızı buraya yazabilirsiniz..."
                          required
                        ></textarea>
                      </div>

                      {/* Gönder Butonu */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-6 ${
                          isDarkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'
                        } text-white font-medium rounded-lg transition-all duration-200 relative overflow-hidden group`}
                      >
                        <span className="relative z-10 flex items-center">
                          {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                          {!isSubmitting && (
                            <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                          )}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harita Bölümü - Geliştirilmiş */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Bizi Ziyaret Edin
              </h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto my-4"></div>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Ofisimize gelerek bir kahvemizi içebilir, gayrimenkul ihtiyaçlarınız hakkında detaylı görüşebiliriz.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4372232829937!2d29.00534431547773!3d41.07913087929381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0x5973d0633ddb7d4d!2sLevent%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%2034330%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1633510226658!5m2!1sen!2str"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="z-0"
              ></iframe>
              
              {/* Yol Tarifi Butonu */}
              <div className="absolute bottom-6 right-6 z-10">
                <button
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Levent%2C%20Büyükdere%20Cd.%2C%2034330%20Beşiktaş%2Fİstanbul', '_blank')}
                  className={`flex items-center gap-2 px-5 py-3 ${
                    isDarkMode ? 'bg-slate-800' : 'bg-white'
                  } text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
                >
                  <FaMapSigns className="text-lg" />
                  Yol Tarifi
                </button>
              </div>
              
              {/* Adres Kartı */}
              <div className="absolute top-6 left-6 z-10">
                <div className={`p-4 ${
                  isDarkMode ? 'bg-slate-800/90' : 'bg-white/90'
                } backdrop-blur-sm rounded-lg shadow-lg max-w-sm`}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        isDarkMode ? 'bg-blue-600' : 'bg-blue-600'
                      } text-white`}>
                        <FaMapMarkerAlt />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Piston Creative
                      </h3>
                      <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Levent Mah, Büyükdere Cad. No:123, Şişli/İstanbul
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 