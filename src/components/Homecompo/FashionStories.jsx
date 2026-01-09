import React from 'react';
import { ArrowRight } from 'lucide-react';

const EliteBanner = () => {
  const fabniquoGold = "rgb(209,167,67)";

  return (
    <section className="relative w-full h-[300px] md:h-[350px] bg-[#050505] overflow-visible my-32">
      {/* Background Text Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/[0.02] leading-none uppercase">
          Series
        </span>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        
        {/* ASYMMETRIC IMAGE BOX */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[120%] hidden lg:block">
          <div className="relative w-full h-full overflow-hidden group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80" 
              alt="Fabniquo Couture"
              className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          {/* Decorative Gold Frame */}
          <div 
            className="absolute -bottom-4 -right-4 w-full h-full border border-[#D1A743]/30 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
          />
        </div>

        {/* CONTENT AREA */}
        <div className="w-full lg:w-[50%] z-10">
          <div className="flex items-center gap-4 mb-6 animate-pulse">
            <span className="w-8 h-[1px]" style={{ backgroundColor: fabniquoGold }}></span>
            <span className="text-[10px] tracking-[0.6em] uppercase text-gray-500 font-bold">Atelier Collection</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
            Curated <br /> <span className="italic" style={{ color: fabniquoGold }}>Excellence</span>
          </h2>

          <div className="flex items-center gap-12">
            <button className="group flex items-center gap-3 text-white">
              <span className="text-xs font-bold tracking-[0.3em] uppercase border-b border-white/20 pb-1 group-hover:border-[#D1A743] transition-all">
                Shop The Edit
              </span>
              <div 
                className="p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500"
              >
                <ArrowRight size={16} />
              </div>
            </button>

            <div className="hidden sm:block text-[10px] tracking-[0.2em] text-gray-600 uppercase italic">
              *Limited Edition Series 01
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING BADGE (Breaks the bottom border) */}
      <div 
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[42%] bg-white px-8 py-4 shadow-xl z-20 border border-gray-100"
      >
        <p className="text-[9px] text-black font-black tracking-[0.4em] uppercase whitespace-nowrap">
          Handcrafted in India
        </p>
      </div>

    </section>
  );
};

export default EliteBanner;