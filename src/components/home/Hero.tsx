"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Slide için değişkenler
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTitles = [
    "Hayalinizdeki Gayrimenkule Bir Adım Daha Yaklaşın",
    "Güvenilir ve Profesyonel Emlak Danışmanlığı",
    "Doğru Yatırımla Geleceğinizi Şekillendirin"
  ];

  // Paralaks efekti için scroll değerleri
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "5%"]);

  // Slide değiştirmek için useEffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideTitles.length);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [slideTitles.length]);

  // Video kontrolünü yönet
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Video oynatma kontrolü
      if (isPlaying) {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.error("Video oynatılamadı:", err);
            setVideoError(true);
            setIsPlaying(false);
          });
        }
      } else {
        video.pause();
      }
      
      // Ses kontrolü - doğrudan videoRef üzerinden yönetiliyor
      video.muted = true; // Videonun her zaman sessiz başlamasını sağlıyoruz
    }
  }, [isPlaying]);

  // Safari için otomatik oynatma özelliğini tekrar dene
  useEffect(() => {
    const video = videoRef.current;
    
    const handleUserInteraction = () => {
      if (video && !isPlaying && !videoError) {
        setIsPlaying(true);
        video.play().catch(err => {
          console.error("Kullanıcı etkileşimi sonrası oynatma hatası:", err);
          setVideoError(true);
        });
      }
      
      // Bir kez çalıştıktan sonra kaldır
      cleanup();
    };
    
    const cleanup = () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    
    return cleanup;
  }, [isPlaying, videoError]);
  
  const handleVideoError = () => {
    console.error("Video yüklenirken hata oluştu");
    setVideoError(true);
  };

  // Sayfalama işaretleyici animasyonu
  const scrollIndicatorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.5
      }
    },
    hover: {
      y: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  };

  return (
    <div ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video/Görsel Arka Planı - Paralaks efekti ile */}
      <motion.div 
        className="absolute inset-0 -z-10 scale-110" 
        style={{ y: backgroundY }}
      >
        {/* Yedek arka plan - Video yüklenene kadar veya hata durumunda görünür */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/property-1.jpg')" }}
          />
        </div>
        
        {/* Video - yalnızca hata olmadığında render et */}
        {!videoError && (
          <video 
            ref={videoRef}
            id="backgroundVideo"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted // video her zaman sessiz başlayacak
            playsInline
            preload="metadata"
            onError={handleVideoError}
          >
            <source src="/videos/real-estate-1.mp4" type="video/mp4" />
            {/* Video yüklenemezse gösterilecek mesaj */}
            Video tarayıcınız tarafından desteklenmiyor.
          </video>
        )}
        
        {/* Hafif karartma - kurumsal görünüm için gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>
      
      {/* İçerik */}
      <motion.div 
        className="container mx-auto relative h-full flex flex-col items-start justify-center text-white px-4 sm:px-6 lg:px-8 pt-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-block mb-4">
            <div className="h-0.5 w-16 bg-blue-500 mb-3"></div>
            <motion.h3 
              className="uppercase tracking-wider text-sm font-medium text-blue-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              PROFESYONEL EMLAK HİZMETLERİ
            </motion.h3>
          </div>
          
          <motion.h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              currentSlide === 0 ? 'text-white' : 'text-white'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {slideTitles[currentSlide]}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Piston Creative ile ister yeni bir ev arıyor olun, ister yatırım fırsatlarını değerlendirin. 
            Profesyonel ekibimiz, tüm süreçlerde yanınızda.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link 
                href="/properties"
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md font-medium shadow-lg transition-all duration-200 flex items-center gap-2 text-lg group"
              >
                <FaHome className="text-xl group-hover:scale-110 transition-transform" />
                İlanları Görüntüle
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link 
                href="/contact"
                className="bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 text-white py-4 px-8 rounded-md font-medium shadow-lg transition-all duration-200 flex items-center gap-2 text-lg group"
              >
                <FaMapMarkerAlt className="text-xl group-hover:scale-110 transition-transform" />
                Bize Ulaşın
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 text-base"
          >
            Veya doğrudan arayın: <a href="tel:+902121234567" className="font-semibold text-blue-300 hover:text-blue-200 hover:underline text-lg">+90 212 123 45 67</a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Sayfa Kaydırma İşaretleyicisi */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={scrollIndicatorVariants}
      >
        <div className="text-white text-sm mb-2 opacity-80">Keşfetmeye Başlayın</div>
        <div className="w-7 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full mt-1.5"
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 