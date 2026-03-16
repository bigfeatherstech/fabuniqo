import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Star, Sparkles, Send } from 'lucide-react';

const VIPMembershipSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Logic for API call would go here
    }
  };

  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[rgb(209,167,67)]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgb(209,167,67)]/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Value Proposition */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[rgb(209,167,67)]/30 rounded-full">
              <Sparkles size={14} className="text-[rgb(209,167,67)]" />
              <span className="text-[10px] tracking-[0.3em] text-[rgb(209,167,67)] uppercase font-bold">
                Priority Access
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter leading-tight">
              Join the <br />
              <span className=" text-[rgb(209,167,67)]">Inner Circle</span>
            </h2>

            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Our most coveted pieces never reach the public. Become a member to unlock private collections and artisanal drops.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                { icon: <Star size={18} />, text: "Early access to limited 'Edition Zero' drops" },
                { icon: <ShieldCheck size={18} />, text: "Private 1-on-1 styling consultations" },
                { icon: <Send size={18} />, text: "Invitations to global runway showcases" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300 group">
                  <div className="text-[rgb(209,167,67)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm tracking-wide font-light">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: The Premium "Black Box" Card */}
          <div className="relative">
            {!isSubscribed ? (
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
                
                <h3 className="text-2xl text-white font-medium mb-2 tracking-tight">Create your Profile</h3>
                <p className="text-zinc-500 text-sm mb-10 tracking-wide uppercase">Step into the Fabuniqo Universe</p>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="luxury@lifestyle.com"
                      className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[rgb(209,167,67)] transition-colors duration-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[rgb(209,167,67)] hover:bg-[rgb(180,140,50)] text-black font-bold py-5 px-8 rounded-sm tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                  >
                    Request Invitation <ArrowRight size={16} />
                  </button>
                </form>

                <p className="mt-8 text-[10px] text-zinc-600 text-center uppercase tracking-widest leading-relaxed">
                  By joining, you agree to our <span className="text-zinc-400 underline cursor-pointer">Privacy Policy</span>. <br />
                  Exclusivity is our promise.
                </p>
              </div>
            ) : (
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-[rgb(209,167,67)]/30 p-12 rounded-2xl text-center animate-in zoom-in duration-500">
                <div className="w-16 h-16 bg-[rgb(209,167,67)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} className="text-[rgb(209,167,67)]" />
                </div>
                <h3 className="text-2xl text-white font-light mb-2">Registration Received</h3>
                <p className="text-zinc-400 text-sm font-light">A concierge will review your application and reach out shortly via email.</p>
              </div>
            )}

            {/* Decorative "Member" Watermark */}
            <div className="absolute -bottom-6 -right-6 text-[80px] font-bold text-white/[0.03] select-none pointer-events-none">
              MEMBER
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VIPMembershipSection;