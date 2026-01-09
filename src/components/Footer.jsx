import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const fabniquoGold = "rgb(209,167,67)";

  return (
    <footer className="bg-[#080808] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        
        {/* LARGE BRAND SIGNATURE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-end">
          <div>
            <h1 className="text-[12vw] lg:text-[10vw] font-serif leading-[0.8] tracking-tighter opacity-10 select-none">
              FABNIQUO
            </h1>
            <p className="mt-8 text-lg font-light max-w-sm text-gray-400 leading-relaxed">
              Redefining the landscape of <span className="text-white italic">Indian Luxury</span> through curated craft and modern silhouettes.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <div className="w-full max-w-md">
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-4">Newsletter Concierge</p>
              <div className="relative w-full border-b border-white/20 pb-2 group">
                <input 
                  type="text" 
                  placeholder="Enter your email for the inner circle" 
                  className="bg-transparent w-full outline-none text-xl font-light placeholder:text-gray-700 focus:placeholder:text-gray-500 transition-all"
                />
                <button className="absolute right-0 bottom-3 hover:scale-110 transition-transform">
                  <ArrowUpRight size={24} style={{ color: fabniquoGold }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* REFINED NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-20 border-b border-white/5">
          {/* Section 1 */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">The Collections</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Hidden Gems</a></li>
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Traditional Pret</a></li>
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Modern Ethnic</a></li>
              <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Accessories</a></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Assistance</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Security</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Corporate</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">The Brand Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Editorial</a></li>
            </ul>
          </div>

          {/* Section 4: Social (Minimalist) */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Youtube size={20} /></a>
            </div>
          </div>
          
          {/* Section 5: Address */}
          <div className="lg:text-right space-y-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-6">Flagship Atelier</p>
            <p className="text-xs font-light leading-relaxed text-gray-400">
              Chanakyapuri, New Delhi<br />
              India, 110021
            </p>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-600 uppercase">
          <p>© 2026 Fabniquo Retail. All Rights Reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;