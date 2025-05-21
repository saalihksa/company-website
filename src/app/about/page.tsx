"use client";

import Image from "next/image";
import { 
  FaPhoneAlt,
  FaArrowRight,
  FaChevronDown,
  FaBuilding,
  FaHandshake,
  FaUsers,
  FaAward
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

// Yükselme animasyonu
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Kurumsal değerler
  const companyValues = [
    {
      icon: <FaHandshake />,
      title: "Güvenilirlik",
      description: "Her işlemde şeffaflık ve dürüstlük ilkesiyle hareket ediyoruz."
    },
    {
      icon: <FaUsers />,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin ihtiyaçlarını anlamak ve onlara özel çözümler sunmak önceliğimizdir."
    },
    {
      icon: <FaBuilding />,
      title: "Uzmanlık",
      description: "Emlak sektöründeki 18 yıllık deneyimimizle profesyonel hizmet sunuyoruz."
    },
    {
      icon: <FaAward />,
      title: "Kalite",
      description: "Her aşamada en yüksek kalite standartlarını koruyoruz."
    }
  ];

  return (
    <div className={`pt-0 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative py-40 text-white overflow-hidden">
        {/* Arka plan ve efektleri */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hakkimizda-hero.jpg"
            alt="Hakkımızda Piston Creative"
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
          className={`absolute bottom-0 left-0 w-full h-24 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'} z-1`} 
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
              2005&apos;ten Beri Hizmetinizdeyiz
            </motion.span>
                  
            <motion.h1 
              variants={fadeInUp}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Hakkımızda</span>
            </motion.h1>
                  
            <motion.p 
              variants={fadeInUp}
                    className="text-xl md:text-2xl text-blue-50/95 max-w-3xl leading-relaxed"
            >
              Piston Creative olarak 2005 yılından bu yana gayrimenkul sektöründe kaliteli hizmet anlayışıyla müşterilerimize değer katıyoruz.
            </motion.p>
            
                  <motion.div
                    variants={fadeInUp} 
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <motion.a
                      href="#hikayemiz"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-all"
                    >
                      Hikayemizi Keşfedin <FaArrowRight className="ml-2" />
                    </motion.a>
                  </motion.div>
                  
                  {/* Keşfet Butonu - Ana butonun altında optimizasyon */}
            <motion.div 
                    variants={fadeInUp}
                    className="mt-14 flex justify-center"
                  >
                    <motion.a
                      href="#hikayemiz"
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

      {/* Kurumsal Hikayemiz - Zenginleştirilmiş */}
      <section id="hikayemiz" className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <span className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-600'} font-medium text-sm rounded-lg mb-4`}>
                KURUMSAL GEÇMİŞİMİZ
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Sektörde <span className="text-blue-600">18 Yıllık</span> Başarı Hikayemiz
              </h2>
              <div className={`mb-8 h-1 w-20 bg-blue-600`}></div>
              
              <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="leading-relaxed">
                  2005 yılında İstanbul&apos;da küçük bir ofiste başlayan serüvenimiz, bugün Türkiye&apos;nin önde gelen gayrimenkul danışmanlık şirketlerinden biri olma başarısına ulaştı. Kuruluşumuzdan bu yana, sektördeki değişimleri ve yenilikleri yakından takip ederek müşterilerimize en iyi hizmeti sunmayı hedefledik.
                </p>
                <p className="leading-relaxed">
                  Müşteri memnuniyetini her zaman birinci önceliğimiz olarak belirledik ve bu prensip doğrultusunda binlerce ailenin doğru gayrimenkul kararları almasına destek olduk. Pazar analizinden finansal danışmanlığa kadar gayrimenkulle ilgili her alanda uzman kadromuzla yanınızdayız.
                </p>
                <p className="leading-relaxed">
                  Günümüzde 50&apos;den fazla profesyonel gayrimenkul danışmanımız ile konut, işyeri, arsa ve her türlü gayrimenkul alım-satım işlemlerinizde size özel çözümler sunuyoruz. Teknoloji ile geleneksel emlak danışmanlığını birleştirerek sektörde öncü uygulamalara imza atıyoruz.
                </p>
              </div>
              
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 inline-flex items-center px-6 py-3 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-lg transition-all`}
              >
                Hizmetlerimizi Keşfedin <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg z-0`}></div>
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg z-0`}></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl h-[500px]">
                <Image
                  src="/images/about-company.jpg"
                  alt="EmlakPlus Kurumsal"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kurumsal Değerlerimiz - Yeni Bölüm */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-600'} font-medium text-sm rounded-lg mb-4`}
            >
              KURUMSAL DEĞERLERİMİZ
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Bizi Özel Kılan <span className="text-blue-600">Değerler</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-20 bg-blue-600 mx-auto mb-8"
            ></motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Piston Creative olarak başarımızın temelinde yatan kurumsal değerlerimiz, her projede ve her müşteri ilişkisinde rehberimiz olmaya devam ediyor.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg shadow-lg hover:shadow-xl transition-all group`}
              >
                <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-lg text-2xl bg-blue-600 text-white group-hover:bg-blue-700 transition-colors`}>
                  {value.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
                  {value.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon - Kurumsal Tasarım */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className={`relative rounded-lg shadow-lg overflow-hidden h-full`}
            >
              <div className="bg-blue-600 p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
                <div className="h-1 w-16 bg-white mb-6"></div>
                <p className="text-white/90 leading-relaxed mb-8 flex-grow">
                  Gayrimenkul sektöründe müşteri memnuniyetini ön planda tutarak, güven ve şeffaflık ilkelerine bağlı kalarak, profesyonel hizmet sunmak ve müşterilerimizin beklentilerini aşarak hayallerine kavuşmalarını sağlamak.
                </p>
                
                <motion.button
                  onClick={() => toggleSection('misyon')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-white font-medium mt-auto"
                >
                  {expandedSection === 'misyon' ? 'Daha Az Göster' : 'Daha Fazla Bilgi'} 
                  <FaArrowRight className="ml-2" />
                </motion.button>
                
                {expandedSection === 'misyon' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80"
                  >
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Teknoloji odaklı gayrimenkul çözümleri</li>
                      <li>Kişiselleştirilmiş müşteri deneyimi</li>
                      <li>Şeffaf ve dürüst iş süreçleri</li>
                      <li>Sürdürülebilir müşteri ilişkileri</li>
                      <li>Bölgesel pazar uzmanlığı</li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative rounded-lg shadow-lg overflow-hidden h-full`}
            >
              <div className="bg-gray-900 p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h2>
                <div className="h-1 w-16 bg-blue-600 mb-6"></div>
                <p className="text-white/90 leading-relaxed mb-8 flex-grow">
                  Türkiye&apos;nin gayrimenkul sektöründe lider konuma gelerek, teknoloji ve insan odaklı yaklaşımımızla sektöre yön veren bir marka olmak ve uluslararası standartlarda hizmet kalitesini sürdürülebilir kılmak.
                </p>
                
                <motion.button
                  onClick={() => toggleSection('vizyon')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-white font-medium mt-auto"
                >
                  {expandedSection === 'vizyon' ? 'Daha Az Göster' : 'Daha Fazla Bilgi'} 
                  <FaArrowRight className="ml-2" />
                </motion.button>
                
                {expandedSection === 'vizyon' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80"
                  >
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Sektörde dijital dönüşümün öncüsü olmak</li>
                      <li>Müşteri memnuniyetinde %100 başarı</li>
                      <li>Ulusal ve uluslararası alanda büyüme</li>
                      <li>Sektör standartlarını yükseltme</li>
                      <li>Yenilikçi gayrimenkul çözümleri</li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* İletişim CTA - Kurumsal */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-12 text-white text-center max-w-4xl mx-auto">
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-4">Gayrimenkul Danışmanlığında Profesyonel Çözümler</h2>
                <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
                <p className="text-blue-100 mb-8 text-lg">
                  Gayrimenkul alım, satım ve yatırım süreçlerinde uzman ekibimizle yanınızdayız. Size özel hizmet için hemen iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <motion.a 
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg inline-flex items-center shadow-md hover:shadow-lg transition-all"
                  >
                    <FaPhoneAlt className="mr-2" /> İletişime Geçin
                  </motion.a>
                  <motion.a 
                    href="/properties"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg inline-flex items-center hover:bg-white/10 transition-all"
                  >
                    İlanlarımızı İnceleyin
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 