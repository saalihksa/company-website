"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '@/components/properties/PropertyCard';
import Button from '@/components/ui/Button';
import { FaFilter, FaHome, FaBuilding, FaCity } from 'react-icons/fa';

// Örnek veri - gerçek projede API'den gelecektir
const mockProperties = [
  {
    id: "1",
    title: "Modern Lüks Villa",
    price: 7850000,
    location: "Beykoz, İstanbul",
    bedrooms: 5,
    bathrooms: 4,
    size: 380,
    imageUrl: "#",
    featured: true,
    type: "sale" as const,
  },
  {
    id: "2",
    title: "Deniz Manzaralı Daire",
    price: 4250000,
    location: "Karşıyaka, İzmir",
    bedrooms: 3,
    bathrooms: 2,
    size: 145,
    imageUrl: "#",
    featured: true,
    type: "sale" as const,
  },
  {
    id: "3",
    title: "Merkezi Konumda Ofis",
    price: 25000,
    location: "Levent, İstanbul",
    bedrooms: 0,
    bathrooms: 1,
    size: 120,
    imageUrl: "#",
    featured: true,
    type: "rent" as const,
  },
  {
    id: "4",
    title: "Bahçeli Müstakil Ev",
    price: 3950000,
    location: "Çeşme, İzmir",
    bedrooms: 4,
    bathrooms: 3,
    size: 220,
    imageUrl: "#",
    featured: true,
    type: "sale" as const,
  },
  {
    id: "5",
    title: "Prestijli Residence Dairesi",
    price: 18500,
    location: "Nişantaşı, İstanbul",
    bedrooms: 2,
    bathrooms: 1,
    size: 110,
    imageUrl: "#",
    featured: false,
    type: "rent" as const,
  },
  {
    id: "6",
    title: "Havuzlu Yazlık Villa",
    price: 5650000,
    location: "Bodrum, Muğla",
    bedrooms: 3,
    bathrooms: 3,
    size: 180,
    imageUrl: "#",
    featured: true,
    type: "sale" as const,
  },
];

const FeaturedProperties = () => {
  const [filter, setFilter] = useState<'all' | 'sale' | 'rent'>('all');
  
  const filteredProperties = mockProperties.filter(property => {
    if (filter === 'all') return property.featured;
    return property.featured && property.type === filter;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-medium text-sm rounded-full mb-2">Keşfedin</div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Öne Çıkan <span className="text-blue-600">Gayrimenkuller</span>
              </h2>
              <p className="text-gray-600 mt-2 md:max-w-xl">
                Sizin için özenle seçilmiş, konumu ve özellikleriyle öne çıkan gayrimenkuller
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white px-4 py-3 rounded-full shadow-sm border border-gray-100 flex gap-1 flex-wrap justify-center"
            >
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaFilter />
                <span>Tümü</span>
              </button>
              <button
                onClick={() => setFilter('sale')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  filter === 'sale' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaHome />
                <span>Satılık</span>
              </button>
              <button
                onClick={() => setFilter('rent')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  filter === 'rent' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaBuilding />
                <span>Kiralık</span>
              </button>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                easings: ["easeOut"]
              }}
              style={{ 
                willChange: 'opacity, transform',
                containIntrinsicSize: '0 500px'
              }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mt-12"
        >
          <Button 
            href="/properties" 
            variant="outline" 
            size="lg"
            className="rounded-full py-3 px-8 font-medium hover:shadow-md"
            icon={<FaCity className="mr-2" />}
          >
            Tüm Gayrimenkulleri Görüntüle
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties; 