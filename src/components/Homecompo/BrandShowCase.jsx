import React, { useRef } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const BrandShowcase = () => {
  const scrollRef = useRef(null);
  const fabniquoGold = "rgb(209,167,67)";

  const brands = [
    { name: "AAVARAN", desc: "Handcrafted block prints from Udaipur", category: "Sustainable Ethnic" },
    { name: "SHAZÉ", desc: "Bold, edgy jewelry for the modern woman", category: "Luxury Accessories" },
    { name: "RAW MANGO", desc: "Redefining Indian textiles", category: "High Fashion" },
    { name: "MULMUL", desc: "Lightweight embroidery on pure cotton", category: "Designer Kurtas" },
    { name: "ANITA D.", desc: "Timeless elegance in luxury pret", category: "Couture" },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span style={{ color: fabniquoGold }} className="text-xs font-bold tracking-[0.4em] uppercase mb-4 block animate-pulse">
          Featured Labels
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">The Artisans of Fabniquo</h2>
        <p className="text-gray-500 font-light max-w-xl mx-auto">
          Discover the soul of Indian craftsmanship through our handpicked selection of niche luxury brands.
        </p>
      </div>

      {/* INFINITE LOGO MARQUEE */}
      <div className="relative flex overflow-x-hidden border-y border-gray-100 py-10 mb-20">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {brands.map((brand, idx) => (
                <span key={idx} className="mx-12 text-3xl md:text-4xl font-serif text-gray-300 hover:text-[#D1A743] transition-colors cursor-default uppercase tracking-widest">
                  {brand.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BRAND STORY CARDS */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.slice(0, 3).map((brand, index) => (
            <div key={index} className="group relative bg-[#FBFBFB] p-10 border border-transparent hover:border-gray-200 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">{brand.category}</span>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#D1A743] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <h3 className="text-3xl font-serif mb-4 group-hover:text-[#D1A743] transition-colors">
                {brand.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {brand.desc}
              </p>
              
              <button 
                style={{ borderColor: 'transparent' }} 
                className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:border-[#D1A743] hover:text-[#D1A743] transition-all"
              >
                View Collection
              </button>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-2 -right-2 text-6xl font-serif text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INLINE CSS FOR MARQUEE */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default BrandShowcase;