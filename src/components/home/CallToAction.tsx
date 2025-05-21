"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/providers/ThemeProvider';

// Özel CSS sınıfları
const textShadowStyle = {
  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
};

const CallToAction = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Referansları oluştur
  const faqSectionRef = useRef<HTMLDivElement>(null);
  
  // FAQ bölümü için scroll animasyonu
  const { scrollYProgress: faqScrollProgress } = useScroll({
    target: faqSectionRef,
    offset: ["start end", "end start"]
  });
  
  // FAQ bölümü animasyon değerleri
  const faqHeadingY = useTransform(faqScrollProgress, [0, 0.3], [50, 0]);
  const faqHeadingOpacity = useTransform(faqScrollProgress, [0, 0.3], [0, 1]);

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  // Sık sorulan sorular - Site içeriğine uyarlandı
  const faqData = [
    {
      question: "Hangi Emlak Hizmetleri Sunuyorsunuz?",
      answer: "Konut, ticari ve lüks gayrimenkul satış ve kiralama hizmetleri, gayrimenkul değerleme, yatırım danışmanlığı ve emlak yönetimi hizmetleri sunuyoruz.",
      path: "/services"
    },
    {
      question: "Ev Satın Alırken Nelere Dikkat Etmeliyim?",
      answer: "Bütçe, konum, ev özellikleri, tapu durumu ve kredi seçenekleri hakkında detaylı bilgi ve önerilere blog sayfamızdan ulaşabilirsiniz.",
      path: "/blog/ev-satin-alma-rehberi"
    },
    {
      question: "Yatırım İçin Doğru Bölgeler Hangileri?",
      answer: "Gelişmekte olan bölgeler, altyapı projeleri ve getiri oranları hakkında kapsamlı analizlere özel gayrimenkul yatırım danışmanlığı hizmetimizle ulaşabilirsiniz.",
      path: "/properties?filter=investment"
    },
    {
      question: "Kiralık Daire Fiyatları Nedir?",
      answer: "Farklı bölgelerdeki kiralık daire fiyatları, özelliklerine göre değişmektedir. Güncel kiralık emlak ilanlarımızı inceleyerek detaylı bilgiye ulaşabilirsiniz.",
      path: "/properties?type=rent"
    },
    {
      question: "Emlak Danışmanlarınız Kimler?",
      answer: "Profesyonel ve deneyimli emlak danışmanlarımız hakkında bilgi almak, uzmanlık alanlarını ve iletişim bilgilerini görmek için ekibimiz sayfamızı ziyaret edebilirsiniz.",
      path: "/about#team"
    },
    {
      question: "Portföyünüzdeki Fırsatlar Neler?",
      answer: "Özel fırsatlar, indirimli gayrimenkuller ve yeni listelemeler hakkında güncel bilgilere mülklerimiz sayfasından ulaşabilirsiniz.",
      path: "/properties"
    },
    {
      question: "Satış Süreciniz Nasıl İşliyor?",
      answer: "Emlak değerleme, pazarlama stratejisi, alıcı bulma ve tapu işlemlerine kadar tüm satış sürecimizin detayları için hizmetlerimiz sayfasını inceleyebilirsiniz.",
      path: "/services#sales-process"
    },
    {
      question: "Nasıl İletişime Geçebilirim?",
      answer: "Ofislerimiz, telefon numaralarımız, e-posta adreslerimiz ve çalışma saatlerimiz için iletişim sayfamızı ziyaret edebilirsiniz.",
      path: "/contact"
    }
  ];

  return (
    <>
      {/* Sık Sorulan Sorular Bölümü - Grid Düzeni */}
      <section 
        ref={faqSectionRef}
        className={`py-16 sm:py-20 relative overflow-hidden ${
          isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-br from-blue-50 to-gray-50'
        }`}
      >
        {/* Arka Plan Desenleri ve Efektleri */}
        <div className={`absolute inset-0 ${
          isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
          : 'bg-gradient-to-br from-blue-50 to-gray-50'
        } z-0`}></div>
        
        {/* Desen Katmanı */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: isDarkMode
              ? 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)'
              : 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Sağ Üst Dekoratif Şekil */}
        <motion.div 
          className={`absolute -top-32 -right-32 w-64 sm:w-[500px] h-64 sm:h-[500px] rounded-full ${
            isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
          } blur-3xl z-0`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        ></motion.div>
        
        {/* Sol Alt Dekoratif Şekil */}
        <motion.div 
          className={`absolute -bottom-40 -left-20 w-64 sm:w-[400px] h-64 sm:h-[400px] rounded-full ${
            isDarkMode ? 'bg-blue-500/15' : 'bg-blue-500/10'
          } blur-3xl z-0`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.div>

        <div className="container px-4 sm:px-5 mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Başlık alanı */}
            <motion.div 
              className="text-center mb-10 relative z-20"
              style={{ y: faqHeadingY, opacity: faqHeadingOpacity }}
            >
              <FaQuestionCircle className="text-blue-500 text-4xl mx-auto mb-4" />
              <motion.h2 
                className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Sıkça Sorulan Sorular
              </motion.h2>
              <motion.p 
                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto text-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Gayrimenkul dünyasında sıkça sorulan sorular için yanıtlarımız ve yönlendirmelerimiz
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {faqData.slice(0, 4).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    easings: ["easeOut"]  
                  }}
                  className={`rounded-lg ${isDarkMode 
                    ? 'shadow-md border border-slate-700 bg-slate-800/80' 
                    : 'shadow-md border border-gray-100 bg-white/80'} 
                    overflow-hidden transition-all duration-400 cursor-pointer transform relative backdrop-blur-sm
                    ${hoveredCard === index 
                      ? 'scale-[1.25] shadow-xl -translate-y-3 z-30' 
                      : 'hover:shadow-md z-10'}
                    ${hoveredCard !== null && hoveredCard !== index ? 'blur-[1px] opacity-50 scale-[0.98]' : ''}
                    aspect-[4/3] sm:aspect-square will-change-transform`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(faq.path)}
                  style={{ willChange: hoveredCard === index ? 'transform' : 'auto' }}
                >
                  <div className="p-4 sm:p-6 flex flex-col justify-center items-center h-full text-center relative z-10">
                    {hoveredCard === index ? (
                      <>
                        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" 
                             style={{ backgroundImage: 'url("/images/property-bg.jpg")' }}></div>
                        <div className="absolute inset-0 bg-blue-500 z-1 opacity-30"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 relative z-10 drop-shadow-lg" style={textShadowStyle}>
                          {faq.question}
                        </h4>
                        <p className="text-white text-xs font-medium relative z-10 drop-shadow-md hidden sm:block line-clamp-3" style={textShadowStyle}>
                          {faq.answer}
                        </p>
                        <div className="absolute bottom-3 left-0 right-0 text-center z-10">
                          <span className="inline-block text-white font-medium text-xs bg-blue-600/70 backdrop-blur-sm rounded-full px-2 py-1 shadow-md drop-shadow-lg">
                            Detaylı bilgi için tıklayın
                          </span>
                        </div>
                      </>
                    ) : (
                      <h4 className={`text-lg sm:text-xl font-bold ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        {faq.question}
                      </h4>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {faqData.slice(4, 8).map((faq, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    easings: ["easeOut"] 
                  }}
                  className={`rounded-lg ${isDarkMode 
                    ? 'shadow-md border border-slate-700 bg-slate-800/80' 
                    : 'shadow-md border border-gray-100 bg-white/80'} 
                    overflow-hidden transition-all duration-400 cursor-pointer transform relative backdrop-blur-sm
                    ${hoveredCard === index + 4 
                      ? 'scale-[1.25] shadow-xl -translate-y-3 z-30' 
                      : 'hover:shadow-md z-10'}
                    ${hoveredCard !== null && hoveredCard !== index + 4 ? 'blur-[1px] opacity-50 scale-[0.98]' : ''}
                    aspect-[4/3] sm:aspect-square will-change-transform`}
                  onMouseEnter={() => setHoveredCard(index + 4)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(faq.path)}
                  style={{ willChange: hoveredCard === index + 4 ? 'transform' : 'auto' }}
                >
                  <div className="p-4 sm:p-6 flex flex-col justify-center items-center h-full text-center relative z-10">
                    {hoveredCard === index + 4 ? (
                      <>
                        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" 
                             style={{ backgroundImage: 'url("/images/property-bg.jpg")' }}></div>
                        <div className="absolute inset-0 bg-blue-500 z-1 opacity-30"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 relative z-10 drop-shadow-lg" style={textShadowStyle}>
                          {faq.question}
                        </h4>
                        <p className="text-white text-xs font-medium relative z-10 drop-shadow-md hidden sm:block line-clamp-3" style={textShadowStyle}>
                          {faq.answer}
                        </p>
                        <div className="absolute bottom-3 left-0 right-0 text-center z-10">
                          <span className="inline-block text-white font-medium text-xs bg-blue-600/70 backdrop-blur-sm rounded-full px-2 py-1 shadow-md drop-shadow-lg">
                            Detaylı bilgi için tıklayın
                          </span>
                        </div>
                      </>
                    ) : (
                      <h4 className={`text-lg sm:text-xl font-bold ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        {faq.question}
                      </h4>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction; 