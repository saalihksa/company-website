"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  FaHome, 
  FaSearchDollar, 
  FaHandshake, 
  FaFileContract, 
  FaCity,
  FaChartLine,
  FaMoneyBillWave,
  FaUserTie,
  FaBuilding,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

// Animasyon varyantları
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function ServicesPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [activeTab, setActiveTab] = useState("konut");

  // Ana hizmet kategorileri
  const mainCategories = [
    {
      id: "konut",
      title: "Konut Hizmetleri",
      icon: <FaHome className="text-3xl mb-2" />,
      description: "Ev alım, satım ve kiralama süreçlerinde profesyonel destek",
    },
    {
      id: "ticari",
      title: "Ticari Gayrimenkul",
      icon: <FaBuilding className="text-3xl mb-2" />,
      description: "İşyeri, ofis ve diğer ticari mülkler için kapsamlı çözümler",
    },
    {
      id: "yatirim",
      title: "Yatırım Danışmanlığı",
      icon: <FaChartLine className="text-3xl mb-2" />,
      description: "Karlı gayrimenkul yatırımları için profesyonel analiz ve stratejiler",
    },
    {
      id: "hukuk",
      title: "Hukuki Hizmetler",
      icon: <FaFileContract className="text-3xl mb-2" />,
      description: "Gayrimenkul işlemlerindeki tüm hukuki süreçlerde uzman destek",
    },
  ];

  // Her kategori için alt hizmetler
  const serviceDetails = {
    konut: [
      {
        title: "Konut Alım Satım",
        icon: <FaHome />,
        description: "Hayalinizdeki eve kavuşmanız için profesyonel danışmanlık ve aracılık hizmetleri sunuyoruz. Geniş portföyümüz ve pazar bilgimizle, bütçenize ve ihtiyaçlarınıza en uygun konutu bulmanıza yardımcı oluyoruz.",
        features: [
          "Ücretsiz değerleme ve fiyat analizi",
          "Profesyonel fotoğraf ve video çekimi",
          "360° sanal tur imkanı",
          "İlan platformlarında öncelikli listeleme",
          "Alıcı ve satıcı arasında profesyonel müzakere"
        ],
        image: "/images/home-sales.jpg"
      },
      {
        title: "Kiralama Hizmetleri",
        icon: <FaHandshake />,
        description: "Kiracı bulma, kira sözleşmesi hazırlama ve süreç yönetimi konusunda tam destek sağlıyoruz. Güvenilir kiracı adaylarını titizlikle seçerek mülkünüzün güvende olmasını sağlıyoruz.",
        features: [
          "Kiracı kredi ve referans kontrolü",
          "Kapsamlı kira sözleşmesi hazırlama",
          "Düzenli mülk kontrolleri",
          "Zamanında kira tahsilatı",
          "Kiralama sürecinde 7/24 destek"
        ],
        image: "/images/rental-services.jpg"
      }
    ],
    ticari: [
      {
        title: "Ofis & İşyeri Çözümleri",
        icon: <FaCity />,
        description: "İşletmeniz için en uygun ofis, mağaza veya iş merkezini bulmanıza yardımcı oluyoruz. Kurumsal müşterilerimize özel, lokasyon analizi ve rekabetçi pazar araştırması sunuyoruz.",
        features: [
          "Lokasyon ve erişilebilirlik analizi",
          "Rakip ve müşteri yoğunluğu haritaları",
          "Kira optimizasyonu ve maliyet analizi",
          "Mimari ve teknik değerlendirme",
          "Kurumsal kiralama stratejileri"
        ],
        image: "/images/office-solutions.jpg"
    },
    {
        title: "Ticari Portföy Yönetimi",
        icon: <FaUserTie />,
        description: "Ticari mülk sahiplerine, varlıklarını en verimli şekilde değerlendirmeleri için profesyonel yönetim hizmetleri sunuyoruz. Doluluk oranlarını artırıyor, gelirleri maksimize ediyoruz.",
        features: [
          "Profesyonel kiracı yönetimi",
          "Pazarlama ve doluluk stratejileri",
          "Bina yönetimi ve bakım hizmetleri",
          "Düzenli performans raporları",
          "Varlık değerini artırıcı stratejiler"
        ],
        image: "/images/commercial-management.jpg"
      }
    ],
    yatirim: [
      {
        title: "Yatırım Fırsatları Analizi",
        icon: <FaSearchDollar />,
        description: "Piyasadaki yatırım fırsatlarını analiz ederek, getiri potansiyeli yüksek gayrimenkulleri belirliyoruz. Yatırımcılarımıza bölge, fiyat ve gelecek değer artışı konularında kapsamlı raporlar sunuyoruz.",
        features: [
          "Bölgesel değer artış analizleri",
          "Gelişmekte olan bölge tespiti",
          "Nakit akışı ve yatırım getirisi hesaplamaları",
          "Risk değerlendirmesi",
          "Portföy çeşitlendirme stratejileri"
        ],
        image: "/images/investment-analysis.jpg"
    },
    {
        title: "Gelir Getiren Mülkler",
        icon: <FaMoneyBillWave />,
        description: "Düzenli gelir arayan yatırımcılara, kiracılı veya kiralanabilir mülkler konusunda danışmanlık yapıyoruz. Kısa ve uzun vadeli kira geliri potansiyeline sahip gayrimenkuller için özel portföy oluşturuyoruz.",
        features: [
          "Hazır kiracılı mülk seçenekleri",
          "Kira çarpanı ve geri dönüş süresi analizi",
          "Kira geliri optimizasyonu",
          "Vergi avantajlı yatırım stratejileri",
          "Uzun vadeli servet oluşturma planları"
        ],
        image: "/images/income-properties.jpg"
      }
    ],
    hukuk: [
      {
        title: "Sözleşme ve Tapu İşlemleri",
        icon: <FaFileContract />,
        description: "Gayrimenkul alım-satım ve kiralama süreçlerindeki tüm hukuki işlemlerde yanınızdayız. Sözleşmelerin hazırlanması, tapu işlemleri ve belediye süreçlerinde profesyonel destek sağlıyoruz.",
        features: [
          "Satış ve kira sözleşmesi hazırlama",
          "Tapu ve belediye işlemlerinde temsil",
          "Kat mülkiyeti ve irtifak hakkı işlemleri",
          "Tapu sicil kayıtları incelemesi",
          "İpotek ve teminat işlemleri"
        ],
        image: "/images/legal-services.jpg"
      },
      {
        title: "Uyuşmazlık Çözümleri",
        icon: <FaHandshake />,
        description: "Gayrimenkul kaynaklı anlaşmazlıkların çözümünde uzman desteği sunuyoruz. Kiracı-ev sahibi ilişkileri, komşuluk hukuku ve diğer gayrimenkul uyuşmazlıklarında arabuluculuk ve çözüm odaklı yaklaşım.",
        features: [
          "Kiracı-mülk sahibi uyuşmazlık çözümü",
          "Tahliye ve icra süreçleri yönetimi",
          "Mülkiyet ve sınır anlaşmazlıkları",
          "Hasar ve tazminat talep yönetimi",
          "Alternatif uyuşmazlık çözüm yöntemleri"
        ],
        image: "/images/dispute-resolution.jpg"
      }
    ]
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={fadeIn}
      className={`pt-0 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Hero Section */}
      <section className="relative py-40 text-white overflow-hidden">
        {/* Arka plan ve efektleri */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-image.jpg"
            alt="Hizmetlerimiz"
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
                    Profesyonel Gayrimenkul Çözümleri
                  </motion.span>
                  
                  <motion.h1 
              variants={fadeInUp}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Hizmetlerimiz</span>
            </motion.h1>
                  
            <motion.p 
              variants={fadeInUp}
                    className="text-xl md:text-2xl text-blue-50/95 max-w-3xl leading-relaxed"
            >
                    Gayrimenkul sektöründeki uzmanlığımız ve kapsamlı hizmet yelpazemizle her adımda yanınızdayız.
            </motion.p>
            
            <motion.div 
                    variants={fadeInUp} 
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <motion.button
                      onClick={() => setActiveTab("konut")}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-all"
                    >
                      Hizmetleri Keşfedin <FaArrowRight className="ml-2" />
                    </motion.button>
                  </motion.div>
                  
                  {/* Keşfet Butonu - Ana butonun altında optimizasyon */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-14 flex justify-center"
                  >
                    <motion.a
                      href="#service-categories"
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

      {/* Ana Hizmet Kategorileri */}
      <section id="service-categories" className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span 
              variants={fadeInUp}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-600'}`}
            >
              HİZMET KATEGORİLERİMİZ
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Gayrimenkul İhtiyaçlarınız İçin <span className="text-blue-600">Kapsamlı Çözümler</span>
            </motion.h2>
            <motion.p 
            variants={fadeInUp}
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Size özel hizmet kategorilerimizi keşfedin ve ihtiyacınıza en uygun emlak çözümüne hemen ulaşın
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveTab(category.id)}
                className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform hover:shadow-xl ${
                  activeTab === category.id 
                    ? `ring-2 ring-blue-500 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'}` 
                    : isDarkMode ? 'bg-slate-800' : 'bg-white'
                }`}
              >
                <div className="px-6 py-8 text-center h-full flex flex-col items-center justify-center">
                  <div className={`text-blue-500 mb-4 transition-transform duration-300 transform ${activeTab === category.id ? 'scale-110' : 'scale-100'}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                    {category.description}
                      </p>
                  <div className={`h-1 w-16 mx-auto mt-6 rounded-full ${activeTab === category.id ? 'bg-blue-500' : isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}></div>
                            </div>
              </motion.div>
            ))}
                            </div>
                            </div>
      </section>

      {/* Hizmet Detayları */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {mainCategories.find(c => c.id === activeTab)?.title}
                </h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {mainCategories.find(c => c.id === activeTab)?.description}
                </p>
                            </div>

              <div className="space-y-16">
                {serviceDetails[activeTab as keyof typeof serviceDetails].map((service, idx) => (
                  <motion.div 
                    key={service.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
                  >
                    <div className={`grid md:grid-cols-2 ${idx % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                      {/* Görsel Alanı */}
                      <div className={`relative overflow-hidden h-80 md:h-auto ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <Image 
                          src={service.image || "/images/property-1.jpg"} 
                          alt={service.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <div className="flex items-center mb-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 mr-3 text-lg">
                              {service.icon}
                            </span>
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                            </div>
                            </div>
                      </div>
                      
                      {/* İçerik Alanı */}
                      <div className={`p-8 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} md:hidden`}>
                          {service.title}
                        </h3>
                        <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                        
                        <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                          Sağladığımız Hizmetler:
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                              className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                              <span className="inline-flex mr-3 mt-1 w-5 h-5 min-w-5 rounded-full bg-blue-100 text-blue-600 items-center justify-center text-xs">✓</span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`mt-8 inline-flex items-center font-medium rounded-lg px-6 py-3 ${
                            isDarkMode 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          <span>Daha Fazla Bilgi</span>
                          <FaArrowRight className="ml-2" />
                        </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* İletişim CTA Bölümü */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className={`rounded-3xl overflow-hidden relative ${isDarkMode ? 'bg-gradient-to-r from-blue-900 to-slate-800' : 'bg-gradient-to-r from-blue-50 to-blue-100'}`}>
            {/* Arka Plan Deseni */}
            <div className="absolute inset-0 opacity-10" style={{ 
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23000\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
              backgroundSize: "cover"
            }}></div>
        
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16 relative z-10">
              <div>
                <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  Emlak Danışmanlarımızla <br />
                  <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}>Hemen İletişime Geçin</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Gayrimenkul ihtiyaçlarınız için profesyonel ekibimizden ücretsiz danışmanlık alın. Size özel çözüm önerilerimizi keşfedin ve hayalinizdeki mülke kavuşma sürecini başlatın.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full inline-flex items-center space-x-2 shadow-lg"
                  >
                    <span>Bize Ulaşın</span>
                    <FaArrowRight />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border ${isDarkMode ? 'border-white/30 hover:border-white text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-50'} font-medium px-8 py-3 rounded-full`}
                  >
                    <span>Hizmet Fiyatlarımız</span>
                  </motion.button>
                </motion.div>
                </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-80 md:h-auto rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/property-1.jpg"
                  alt="İletişime Geçin"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
                <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-sm`}>
                  <div className="text-center p-6">
                    <span className={`text-5xl font-bold mb-2 block ${isDarkMode ? 'text-white' : 'text-blue-600'}`}>15+</span>
                    <p className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Yıllık Sektör Deneyimi</p>
                    <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Gayrimenkul danışmanlarımız, alanında uzman ve deneyimli profesyonellerden oluşmaktadır.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
} 