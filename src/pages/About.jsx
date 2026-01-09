import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Globe, Award, Sparkles, MoveRight, Leaf, ShieldCheck, Recycle, Linkedin, Instagram } from 'lucide-react';

const AboutPage = () => {
  const [progress, setProgress] = useState(0);
  const stickyTrackRef = useRef(null);

  // Logic for the Masterwork Sticky Section - DO NOT TOUCH
  useEffect(() => {
    const handleScroll = () => {
      if (!stickyTrackRef.current) return;
      const rect = stickyTrackRef.current.getBoundingClientRect();
      const trackHeight = stickyTrackRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalScrollable = trackHeight - windowHeight;
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    { name: "Julian Fabuniqo", role: "Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&auto=format&fit=crop" },
    { name: "Elena Rossi", role: "Head of Atelier", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&h=800&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Sustainability Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=800&auto=format&fit=crop" }
  ];

  const pillars = [
    { icon: <Leaf size={32} strokeWidth={1} />, title: "Botanical Sourcing", desc: "Organic, closed-loop ecosystems that regenerate the soil." },
    { icon: <ShieldCheck size={32} strokeWidth={1} />, title: "Ethical Labor", desc: "Every artisan is a partner, receiving fair wages and healthcare." },
    { icon: <Recycle size={32} strokeWidth={1} />, title: "Zero Waste", desc: "Precision pattern-making to ensure 98% fabric utilization." }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-[rgb(209,167,67)] selection:text-black">
      
      {/* 1. HERO SECTION - ENHANCED VISUALS ONLY */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale scale-105" alt="Boutique" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10">
          <span className="text-[rgb(209,167,67)] tracking-[0.8em] text-[10px] font-bold uppercase block mb-8">Established MMXXIV</span>
          <h1 className="text-8xl md:text-[180px] font-light tracking-tighter leading-none uppercase">
            FAB<span className="italic font-serif">UNIQO</span>
          </h1>
          <p className="text-zinc-400 tracking-[0.3em] uppercase text-[10px] mt-4 font-light">The Art of Permanence</p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
            <div className="text-[9px] tracking-widest uppercase text-zinc-500 mb-2">Scroll</div>
            <ArrowDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* 2. MANIFESTO SECTION - ENHANCED VISUALS ONLY */}
      <section className="py-40 px-6 md:px-20 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative aspect-[4/5] bg-zinc-900 group overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" alt="Tailoring" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[rgb(209,167,67)]"></div>
            <span className="text-[rgb(209,167,67)] tracking-[0.8em] text-[10px] font-bold uppercase">Our Philosophy</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-light leading-tight tracking-tighter">Crafted for the <br /><span className="text-[rgb(209,167,67)] italic font-serif underline decoration-1 underline-offset-8">Iconoclast.</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-xl">
            Fabuniqo exists to bridge the gap between sculptural form and everyday wear. We don't follow trends; we create artifacts of personal expression.
          </p>
        </div>
      </section>

      {/* 3. THE DEEP ANALYZE STICKY SECTION (The Masterwork) - EXACTLY AS YOU PROVIDED */}
      <section ref={stickyTrackRef} className="relative h-[400vh] bg-white text-black">
        {/* The Content that stays "Pinned" */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* THE MASTER TYPOGRAPHY LAYER */}
          <div 
            className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none will-change-transform"
            style={{ 
              // The text starts completely off-right and ends completely off-left
              transform: `translateX(${100 - (progress * 250)}%)`,
              opacity: progress > 0.1 ? 0.07 : progress * 0.7, // Subtle fade in
            }}
          >
            <h2 className="text-[45vw] font-black tracking-tighter leading-none select-none">
              FABUNIQO
            </h2>
          </div>

          {/* THE FRONT CONTENT LAYER */}
          <div className="relative z-20 text-center space-y-12 px-6">
            <div className="overflow-hidden">
                <h3 className="text-xs font-bold tracking-[0.5em] uppercase text-[rgb(209,167,67)] mb-6 block">
                   The Visionary Archive
                </h3>
                <h2 className="text-6xl md:text-[120px] font-light tracking-tighter leading-none mb-4">
                  Define Your <br /> <span className="italic font-serif">Aura</span>.
                </h2>
            </div>
            
            <p className="text-zinc-500 max-w-lg mx-auto text-base md:text-xl font-light leading-relaxed">
              Our 2026 Collection is an exploration of silence and structure. 
              Limited to 100 hand-signed pieces per silhouette.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                <div className="group relative">
                    <input 
                        type="email" 
                        placeholder="ENTER RESIDENCE EMAIL" 
                        className="bg-transparent border-b border-zinc-300 py-4 px-2 w-72 md:w-96 text-black text-xs tracking-widest outline-none focus:border-black transition-colors"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
                </div>
                <button className="bg-black text-white px-14 py-5 rounded-none text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-[rgb(209,167,67)] transition-colors flex items-center gap-4">
                    Apply for Access <MoveRight size={14} />
                </button>
            </div>
          </div>

          {/* Progress Indicator Dots */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20">
             <div className={`w-1.5 h-1.5 rounded-full ${progress > 0.2 ? 'bg-black' : 'bg-zinc-300'}`}></div>
             <div className={`w-1.5 h-1.5 rounded-full ${progress > 0.5 ? 'bg-black' : 'bg-zinc-300'}`}></div>
             <div className={`w-1.5 h-1.5 rounded-full ${progress > 0.8 ? 'bg-black' : 'bg-zinc-300'}`}></div>
          </div>
        </div>
      </section>

      {/* 4. SUSTAINABILITY SECTION - ENHANCED VISUALS ONLY */}
      <section className="bg-zinc-900/50 py-32 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[10px] tracking-[0.8em] uppercase text-[rgb(209,167,67)] mb-4">Our Commitment</h3>
            <h2 className="text-5xl font-light tracking-tighter mb-6">Beyond Sustainable</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Creating fashion that regenerates our planet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((p, i) => (
              <div key={i} className="space-y-6 p-8 border border-white/10 hover:border-[rgb(209,167,67)]/30 transition-all duration-500">
                <div className="text-[rgb(209,167,67)]">{p.icon}</div>
                <h4 className="text-lg tracking-widest uppercase font-medium">{p.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION - ENHANCED VISUALS ONLY */}
      <section className="py-40 px-6 md:px-20 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-12">
            <div>
              <h3 className="text-[10px] tracking-[0.8em] uppercase text-[rgb(209,167,67)] mb-4">The Visionaries</h3>
              <h2 className="text-5xl font-light tracking-tighter uppercase">The <span className="italic font-serif lowercase text-zinc-500">ateliers</span></h2>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-zinc-500">Founding Board</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {team.map((member, i) => (
                <div key={i} className="group cursor-none">
                    <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 bg-zinc-800 border border-white/10">
                        <img src={member.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" alt={member.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-sm font-bold tracking-widest uppercase">{member.name}</h4>
                        <p className="text-[rgb(209,167,67)] text-[9px] tracking-[0.4em] uppercase mt-2">{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* FOOTER - ENHANCED VISUALS ONLY */}
      <footer className="py-24 px-6 text-center bg-black border-t border-white/10">
         <div className="max-w-[1400px] mx-auto">
           <div className="mb-12">
             <h3 className="text-2xl font-light tracking-tight uppercase mb-4">FAB<span className="italic font-serif">UNIQO</span></h3>
             <p className="text-zinc-400 text-sm max-w-md mx-auto">Crafting the future of luxury fashion through sustainable innovation</p>
           </div>
           
           <div className="flex justify-center gap-8 mb-12">
             <Instagram size={20} className="text-zinc-400 hover:text-[rgb(209,167,67)] cursor-pointer transition-colors" />
             <Linkedin size={20} className="text-zinc-400 hover:text-[rgb(209,167,67)] cursor-pointer transition-colors" />
           </div>
           
           <p className="text-zinc-600 text-[9px] tracking-[0.6em] uppercase">
              Designed for the Discerning. © 2026.
           </p>
         </div>
      </footer>

    </div>
  );
};

export default AboutPage;