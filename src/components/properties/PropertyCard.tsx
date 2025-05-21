"use client";

import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

type PropertyCardProps = {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  featured?: boolean;
  type: 'sale' | 'rent';
  listView?: boolean;
};

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  size,
  featured = false,
  type,
  listView = false,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (listView) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <Link href={`/properties/${id}`} className="block overflow-hidden">
              <div className="w-full h-52 md:h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{title}</span>
                </div>
              </div>
            </Link>
            
            {featured && (
              <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                Öne Çıkan
              </div>
            )}
            
            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {type === 'sale' ? 'Satılık' : 'Kiralık'}
            </div>
          </div>
          
          <div className="p-6 md:w-2/3 flex flex-col">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaMapMarkerAlt className="mr-1.5 text-blue-500" />
              <span className="truncate">{location}</span>
            </div>
            
            <Link href={`/properties/${id}`}>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
            </Link>
            
            <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
              <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg">
                <FaBed className="mr-1.5 text-blue-500" />
                <span>{bedrooms} Yatak</span>
              </div>
              <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg">
                <FaBath className="mr-1.5 text-blue-500" />
                <span>{bathrooms} Banyo</span>
              </div>
              <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg">
                <FaRulerCombined className="mr-1.5 text-blue-500" />
                <span>{size} m²</span>
              </div>
            </div>
            
            <div className="mt-auto flex justify-between items-center">
              <div className="text-xl font-bold text-blue-600">
                {formatPrice(price)}
                {type === 'rent' && <span className="text-sm font-normal text-gray-500 ml-1">/ay</span>}
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isFavorite 
                      ? 'bg-red-50 text-red-500' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
                <Link 
                  href={`/properties/${id}`} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                >
                  Detaylar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ 
        type: "tween", 
        duration: 0.2, 
        ease: "easeOut" 
      }}
      className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg group border border-gray-100/40 h-full flex flex-col"
      style={{ willChange: "transform" }}
    >
      <div className="relative overflow-hidden">
        <Link href={`/properties/${id}`}>
          <div className="w-full h-52 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-blue-600/30 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500"
              style={{ willChange: "transform" }}
            >
              <span className="text-white text-lg font-semibold drop-shadow-md">{title}</span>
            </div>
          </div>
        </Link>
        
        {featured && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            Öne Çıkan
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          {type === 'sale' ? 'Satılık' : 'Kiralık'}
        </div>
        
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute bottom-3 right-3 p-2.5 rounded-full transition-colors duration-200 shadow-md ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-400 hover:text-gray-600'
          }`}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaMapMarkerAlt className="mr-1.5 text-blue-500" />
          <span className="truncate">{location}</span>
        </div>
        
        <Link href={`/properties/${id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        </Link>
        
        <div className="text-xl font-bold text-blue-600 mb-4">
          {formatPrice(price)}
          {type === 'rent' && <span className="text-sm font-normal text-gray-500 ml-1">/ay</span>}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600 pt-4 mt-auto border-t border-gray-100">
          <div className="flex items-center">
            <FaBed className="mr-1.5 text-blue-500" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1.5 text-blue-500" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1.5 text-blue-500" />
            <span>{size} m²</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;