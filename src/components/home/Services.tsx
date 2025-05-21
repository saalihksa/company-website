"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  FaHome, 
  FaChartLine, 
  FaBalanceScale, 
  FaHandshake, 
  FaLongArrowAltRight,
  FaCalendarAlt,
  FaBuilding,
  FaUsers,
  FaStar,
  FaCheck
} from 'react-icons/fa';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useRef, useState, useEffect } from 'react';

const services = [
  {
    icon: <FaHome className="w-6 h-6 text-blue-600" />,
    title: "Gayrimenkul Satış & Kiralama",
    description: "Konut ve ticari gayrimenkul portföyümüz ile ihtiyaçlarınıza uygun seçenekler sunuyoruz.",
    features: ["Kapsamlı gayrimenkul portföyü", "Kişiselleştirilmiş arama desteği", "Detaylı mülk bilgileri"],
    link: "/services#sales"
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    title: "Yatırım Danışmanlığı",
    description: "Gayrimenkul piyasasındaki fırsatları değerlendirmeniz için stratejik yatırım danışmanlığı.",
    features: ["Piyasa analizi ve trendler", "Yatırım geri dönüş hesaplaması", "Portföy çeşitlendirme stratejileri"],
    link: "/services#investment"
  },
  {
    icon: <FaBalanceScale className="w-6 h-6 text-blue-600" />,
    title: "Değerleme & Ekspertiz",
    description: "Mülkünüzün piyasa koşullarına uygun gerçek değerini profesyonel ekibimizle belirleyin.",
    features: ["Kapsamlı değerleme raporları", "Lisanslı eksperler", "Güncel piyasa karşılaştırması"],
    link: "/services#valuation"
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-blue-600" />,
    title: "Hukuki Danışmanlık",
    description: "Gayrimenkul işlemlerinizde karşılaşabileceğiniz hukuki süreçlerde güvenilir destek.",
    features: ["Sözleşme hazırlığı ve inceleme", "Tapu ve ruhsat işlemleri", "Hukuki risk değerlendirmesi"],
    link: "/services#legal"
  }
];

const stats = [
  {
    icon: <FaCalendarAlt className="w-8 h-8 text-blue-600" />,
    value: 18,
    suffix: "+",
    description: "Yıllık Deneyim"
  },
  {
    icon: <FaBuilding className="w-8 h-8 text-blue-600" />,
    value: 1250,
    suffix: "+",
    description: "Başarılı Gayrimenkul Satışı"
  },
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600" />,
    value: 3800,
    suffix: "+",
    description: "Mutlu Müşteri"
  },
  {
    icon: <FaStar className="w-8 h-8 text-blue-600" />,
    value: 98,
    suffix: "%",
    description: "Müşteri Memnuniyeti"
  }
];

const Services = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Her bir istatistik için ayrı state değerleri
  const [stat1Value, setStat1Value] = useState(0);
  const [stat2Value, setStat2Value] = useState(0);
  const [stat3Value, setStat3Value] = useState(0);
  const [stat4Value, setStat4Value] = useState(0);
  
  // Scroll progress için değerler
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Başlık için transform değerleri 
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  // Açıklama için transform değerleri
  const descOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  
  // Bölücü için transform değerleri
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.15], ["0%", "100%"]);
  
  // Kart container için transform değerleri
  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.2, 0.4], [0.9, 1]);
  
  // Stats için transform değerleri
  const statsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // Sayaç animasyonu için useEffect
  useEffect(() => {
    if (!statsRef.current) return;
    
    // IntersectionObserver oluştur
    const observer = new IntersectionObserver((entries) => {
      // Eleman görünür olduğunda
      if (entries[0].isIntersecting) {
        // İlk istatistik için animasyon (18+)
        let count1 = 0;
        const interval1 = setInterval(() => {
          count1 = Math.min(count1 + 1, stats[0].value);
          setStat1Value(count1);
          if (count1 >= stats[0].value) clearInterval(interval1);
        }, 100);
        
        // İkinci istatistik için animasyon (1250+)
        let count2 = 0;
        const interval2 = setInterval(() => {
          count2 = Math.min(count2 + 25, stats[1].value);
          setStat2Value(count2);
          if (count2 >= stats[1].value) clearInterval(interval2);
        }, 10);
        
        // Üçüncü istatistik için animasyon (3800+)
        let count3 = 0;
        const interval3 = setInterval(() => {
          count3 = Math.min(count3 + 76, stats[2].value);
          setStat3Value(count3);
          if (count3 >= stats[2].value) clearInterval(interval3);
        }, 10);
        
        // Dördüncü istatistik için animasyon (98%)
        let count4 = 0;
        const interval4 = setInterval(() => {
          count4 = Math.min(count4 + 2, stats[3].value);
          setStat4Value(count4);
          if (count4 >= stats[3].value) clearInterval(interval4);
        }, 40);
        
        // İzlemeyi durdur
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    // İzlemeyi başlat
    observer.observe(statsRef.current);
    
    // Temizlik
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-24 ${
      isDarkMode 
        ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" 
        : "bg-gradient-to-b from-gray-50 via-gray-100 to-white"
      } overflow-hidden relative`}
    >
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sağ üst köşe geometrik şekil */}
        <div className={`absolute -top-20 right-0 w-96 h-96 rounded-full ${
          isDarkMode ? "bg-blue-900/10" : "bg-blue-200/40"
        } blur-3xl z-0`}></div>
        
        {/* Sol alt köşe geometrik şekil */}
        <div className={`absolute bottom-0 -left-20 w-80 h-80 rounded-full ${
          isDarkMode ? "bg-blue-900/10" : "bg-blue-200/40"
        } blur-3xl z-0`}></div>
        
        {/* Desen arka planı */}
        <div className={`absolute inset-0 opacity-5 ${isDarkMode ? "opacity-3" : "opacity-5"}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDarkMode ? "#3b82f6" : "#1e40af"} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Başlık ve Açıklama */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{ opacity: titleOpacity }}
        >
          <motion.div 
            className="inline-block mb-2"
            style={{ y: titleY }}
          >
            <motion.div 
              className={`h-0.5 ${isDarkMode ? "bg-blue-500" : "bg-blue-600"} mb-3 mx-auto w-20`}
              style={{ width: lineWidth }}
            ></motion.div>
            
            <motion.h3 
              className={`uppercase tracking-wider text-sm font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
            >
              HİZMETLERİMİZ
            </motion.h3>
          </motion.div>
          
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
            style={{ y: titleY }}
          >
            Profesyonel Gayrimenkul Çözümleri
          </motion.h2>
          
          <motion.p 
              className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-base md:text-lg max-w-2xl mx-auto leading-relaxed`}
            style={{ 
              opacity: descOpacity, 
              y: descY 
            }}
            >
            20 yılı aşkın sektör deneyimimizle, gayrimenkul alanındaki tüm ihtiyaçlarınız için kapsamlı ve profesyonel hizmetler sunuyoruz.
          </motion.p>
        </motion.div>

        {/* Hizmet Kartları Bölümü */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          style={{ 
            opacity: cardsOpacity,
            scale: cardsScale 
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
              className={`${
                isDarkMode 
                  ? "bg-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-blue-500/50" 
                  : "bg-white/90 backdrop-blur-sm border-gray-100 hover:border-blue-500/50"
              } rounded-lg transition-all duration-300 border shadow-lg group h-full flex flex-col relative overflow-hidden`}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                borderColor: isDarkMode ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.3)"
              }}
            >
              {/* Kart başlık alanı */}
              <div className={`p-6 border-b ${
                isDarkMode ? "border-slate-700" : "border-gray-100"
              }`}>
                <motion.div 
                  className={`relative z-10 mb-4 flex justify-center items-center w-14 h-14 rounded-full ${
                    isDarkMode ? "bg-blue-900/30" : "bg-blue-100"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className={`relative z-10 text-xl font-semibold ${
                  isDarkMode ? "text-gray-100" : "text-gray-800"
                }`}>
                  {service.title}
                </h3>
              </div>
              
              {/* Kart içeriği */}
              <div className="p-6 flex-grow flex flex-col">
                <p className={`relative z-10 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-base mb-4`}>
                  {service.description}
                </p>
                
                {/* Özellik listesi */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className={`mt-1 mr-2 flex-shrink-0 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } text-xs`} />
                      <span className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.link} 
                  className={`relative z-10 inline-flex items-center text-sm font-medium mt-auto ${
                    isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Detaylı bilgi 
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block ml-2"
                  >
                    <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>
              
              {/* Dekoratif arka plan efekti */}
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-blue-500/10 rounded-full blur-xl transform transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
            </motion.div>
          ))}
        </motion.div>

        {/* İstatistik Bölümü */}
        <motion.div 
          className="mt-12 relative"
          style={{ opacity: statsOpacity }}
          ref={statsRef}
        >
          {/* İstatistikler */}
          <div className={`relative z-10 rounded-2xl p-12 ${
            isDarkMode ? "bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-xl" : "bg-white/90 backdrop-blur-sm shadow-xl border border-gray-100"
          }`}>
            <div className="text-center mb-10">
              <motion.h3 
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Sektörde Güven ve Deneyim
              </motion.h3>
              <motion.div 
                className={`h-1 w-20 mx-auto rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-600"
                } mb-6`}
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.p 
                className={`max-w-2xl mx-auto ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Sektördeki uzun yıllar boyunca oluşturduğumuz güvenilir hizmet anlayışımız ve başarı hikayelerimiz
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {/* İstatistik Kartı 1 - Yıllık Deneyim */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1,
                  type: "spring",
                  stiffness: 50
                }}
                className={`flex flex-col items-center p-6 rounded-xl ${
                  isDarkMode ? "bg-gradient-to-br from-slate-700 to-slate-800" : "bg-gradient-to-br from-white to-blue-50"
                } relative overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`mb-3 relative z-10 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stats[0].icon}
                  </motion.div>
                </div>
                
                <div className="flex items-baseline justify-center relative z-10">
                  <motion.span 
                    className={`text-5xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat1Value}
                  </motion.span>
                  <span className={`text-2xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {stats[0].suffix}
                  </span>
                </div>
                
                <p className={`text-sm mt-2 text-center relative z-10 font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {stats[0].description}
                </p>
                
                {/* Geliştirilmiş hover efekti */}
                <div className={`absolute inset-0 ${
                  isDarkMode ? "bg-blue-900/10" : "bg-blue-50"
                } scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right`}></div>
                
                {/* Vurgu halkası efekti */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${
                  isDarkMode ? "bg-blue-400/10" : "bg-blue-200/50"
                } blur-xl`}></div>
              </motion.div>

              {/* İstatistik Kartı 2 - Başarılı Gayrimenkul Satışı */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 50
                }}
                className={`flex flex-col items-center p-6 rounded-xl ${
                  isDarkMode ? "bg-gradient-to-br from-slate-700 to-slate-800" : "bg-gradient-to-br from-white to-blue-50"
                } relative overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`mb-3 relative z-10 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stats[1].icon}
                  </motion.div>
                </div>
                
                <div className="flex items-baseline justify-center relative z-10">
                  <motion.span 
                    className={`text-5xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat2Value}
                  </motion.span>
                  <span className={`text-2xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {stats[1].suffix}
                  </span>
                </div>
                
                <p className={`text-sm mt-2 text-center relative z-10 font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {stats[1].description}
                </p>
                
                {/* Geliştirilmiş hover efekti */}
                <div className={`absolute inset-0 ${
                  isDarkMode ? "bg-blue-900/10" : "bg-blue-50"
                } scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right`}></div>
                
                {/* Vurgu halkası efekti */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${
                  isDarkMode ? "bg-blue-400/10" : "bg-blue-200/50"
                } blur-xl`}></div>
              </motion.div>

              {/* İstatistik Kartı 3 - Mutlu Müşteri */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 50
                }}
                className={`flex flex-col items-center p-6 rounded-xl ${
                  isDarkMode ? "bg-gradient-to-br from-slate-700 to-slate-800" : "bg-gradient-to-br from-white to-blue-50"
                } relative overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`mb-3 relative z-10 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stats[2].icon}
                  </motion.div>
                </div>
                
                <div className="flex items-baseline justify-center relative z-10">
                  <motion.span 
                    className={`text-5xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat3Value}
                  </motion.span>
                  <span className={`text-2xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {stats[2].suffix}
                  </span>
                </div>
                
                <p className={`text-sm mt-2 text-center relative z-10 font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {stats[2].description}
                </p>
                
                {/* Geliştirilmiş hover efekti */}
                <div className={`absolute inset-0 ${
                  isDarkMode ? "bg-blue-900/10" : "bg-blue-50"
                } scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right`}></div>
                
                {/* Vurgu halkası efekti */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${
                  isDarkMode ? "bg-blue-400/10" : "bg-blue-200/50"
                } blur-xl`}></div>
              </motion.div>

              {/* İstatistik Kartı 4 - Müşteri Memnuniyeti */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 50
                }}
                className={`flex flex-col items-center p-6 rounded-xl ${
                  isDarkMode ? "bg-gradient-to-br from-slate-700 to-slate-800" : "bg-gradient-to-br from-white to-blue-50"
                } relative overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`mb-3 relative z-10 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stats[3].icon}
                  </motion.div>
                </div>
                
                <div className="flex items-baseline justify-center relative z-10">
                  <motion.span 
                    className={`text-5xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat4Value}
                  </motion.span>
                  <span className={`text-2xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {stats[3].suffix}
                  </span>
                </div>
                
                <p className={`text-sm mt-2 text-center relative z-10 font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {stats[3].description}
                </p>
                
                {/* Geliştirilmiş hover efekti */}
                <div className={`absolute inset-0 ${
                  isDarkMode ? "bg-blue-900/10" : "bg-blue-50"
                } scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right`}></div>
                
                {/* Vurgu halkası efekti */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${
                  isDarkMode ? "bg-blue-400/10" : "bg-blue-200/50"
                } blur-xl`}></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;