"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaTree, FaLeaf, FaSeedling, FaSolarPanel } from 'react-icons/fa';

const Sustainability = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Paralaks efekti için scroll değerleri
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Geliştirilmiş paralaks efekti - daha geniş hareket aralığı
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [30, 0]);

  // Özellikler listesi
  const features = [
    { icon: <FaLeaf />, text: "Çevre Dostu" },
    { icon: <FaSeedling />, text: "Enerji Tasarruflu" },
    { icon: <FaSolarPanel />, text: "Sürdürülebilir" },
    { icon: <FaTree />, text: "Yeşil Sertifikalı" }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden min-h-[650px] flex items-center"
    >
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Koyu gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>
        
        {/* Desen arka planı */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay z-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0,40 l 40,-40 M -10,10 l 20,-20 M 30,50 l 20,-20" 
                      stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
      </div>
      
      {/* Paralaks arka plan */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        {/* Arka plan görüntüsü - daha büyük scale değeri */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/photo.jpg')`,
            transform: "scale(1.5)",
            transformOrigin: "center center",
            filter: "brightness(0.75)" // Parlaklığı azalt - tüm fotoğrafa eşit filtre etkisi
          }}
        ></div>
      </motion.div>
      
      {/* İçerik - genişletilmiş */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Üst dekoratif çizgi */}
          <motion.div 
            className="h-0.5 w-20 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          
          {/* Başlık - modern görünüm */}
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg uppercase leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SÜRDÜRÜLEBİLİR <span className="text-blue-400">GAYRİMENKUL</span>
          </motion.h2>
          
          {/* Alt başlık - modern ve daha büyük */}
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto drop-shadow-md font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Yeşil bina sertifikalarıyla tasarlanmış, enerji verimliliği yüksek projeler.
          </motion.p>
          
          {/* Sürdürülebilirlik özellikleri */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)" 
                }}
              >
                <span className="text-blue-300 mr-2">
                  {feature.icon}
                </span>
                <span className="text-white text-sm font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA butonu - mavi renk */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 relative"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center py-3 px-8 bg-blue-600 hover:bg-blue-500 rounded-md transition-all duration-300 text-white font-medium shadow-lg group text-lg"
            >
              BİZE ULAŞIN 
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          {/* Alt bilgi */}
          <motion.div 
            className="mt-8 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Çevre dostu gayrimenkul projeleri ile geleceğe yatırım yapın
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability; 