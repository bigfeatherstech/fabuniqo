import React, { useEffect, useRef } from 'react';
import { Plus, MoveRight } from 'lucide-react';

const ButterGallery = () => {
  const galleryRef = useRef(null);
  const scrollRef = useRef({ ticking: false });

  // HIGH-PERFORMANCE INTERSECTION & SCROLL LOGIC
  useEffect(() => {
    const updateGalleryParallax = () => {
      if (!galleryRef.current) return;
      
      const rect = galleryRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate global progress of the gallery section (0 to 1)
      const current = windowHeight - rect.top;
      const total = windowHeight + rect.height;
      const progress = Math.max(0, Math.min(1, current / total));
      
      // Push the progress to a CSS Variable on the container
      galleryRef.current.style.setProperty('--gallery-p', progress);
      scrollRef.current.ticking = false;
    };

    const onScroll = () => {
      if (!scrollRef.current.ticking) {
        requestAnimationFrame(updateGalleryParallax);
        scrollRef.current.ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', onScroll);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const products = [
    { id: '01', title: 'Velvet Overcoat', price: '$3,200', speed: '40px', img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800' },
    { id: '02', title: 'Silk Trousers', price: '$1,100', speed: '-60px', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800' },
    { id: '03', title: 'Glass Knit', price: '$850', speed: '20px', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800' },
    { id: '04', title: 'Monolith Blazer', price: '$2,800', speed: '-30px', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800' },
  ];

  return (
    <section 
      ref={galleryRef}
      className="bg-[#0a0a0a] py-40 px-6 md:px-20 overflow-hidden"
      style={{ '--gallery-p': 0 }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header Content */}
        <div className="mb-32 space-y-4">
          <span className="text-[rgb(209,167,67)] text-[10px] tracking-[0.6em] uppercase block">Collection 01</span>
          <h2 className="text-6xl md:text-8xl font-light text-white tracking-tighter">THE <span className="italic font-serif">SILHOUETTE</span></h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
          {products.map((item) => (
            <div 
              key={item.id}
              className="relative group will-change-transform"
              style={{ 
                // The "Butter" Formula: Progress * individual speed
                transform: `translateY(calc(var(--gallery-p) * ${item.speed}))`
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-[1.5s] ease-out"
                />
                
                {/* Reveal Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Plus size={24} strokeWidth={1} />
                  </button>
                </div>
              </div>

              {/* Minimalist Info */}
              <div className="mt-8 flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                  <p className="text-[rgb(209,167,67)] text-[8px] font-bold tracking-[0.4em] mb-2 uppercase">{item.id} / ARCHIVE</p>
                  <h3 className="text-xl text-white font-light tracking-wide uppercase">{item.title}</h3>
                </div>
                <span className="text-zinc-500 font-serif italic text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-60 flex flex-col items-center">
          <button className="group text-white text-[10px] tracking-[0.5em] uppercase flex items-center gap-6 border border-white/10 px-12 py-6 hover:bg-white hover:text-black transition-all duration-500">
            View Full Archive <MoveRight className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButterGallery;