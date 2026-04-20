"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Star, 
  TrendingUp 
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff7f0] pt-20 lg:pt-32 pb-24 min-h-screen flex items-center">
      {/* --- Background Mesh Glows (Requested Colors) --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Upper Left Glow - #fed9c4 */}
        <div className="absolute -top-[15%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[#fed9c4] blur-[120px] opacity-70" />
        
        {/* Lower Right Glow - #bddccb */}
        <div className="absolute -bottom-[10%] -right-[5%] h-[700px] w-[700px] rounded-full bg-[#bddccb] blur-[140px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* --- Left Content --- */}
        <div className="flex flex-col animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#065f46]/5 text-[#065f46]/70 text-xs font-bold mb-8 w-fit border border-[#065f46]/10">
            <Sparkles className="h-3.5 w-3.5" /> 
            Beyond Dhaka — Create · Connect · Inspire
          </div>

          <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-[5.5rem] leading-[1] text-[#064e3b] mb-8 tracking-tight">
            We help businesses <br />
            <span className="text-[#f97316]">grow online</span> <span className="text-[#064e3b]">&</span> <br />
            generate leads
          </h1>

          <p className="text-lg lg:text-xl text-[#064e3b]/70 mb-10 max-w-2xl leading-relaxed">
            Digital Marketing | Design | Content Creation — strategy that turns 
            scrolls into sales for ambitious brands.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="flex items-center gap-3 px-10 py-5 bg-[#ff914d] text-white font-bold rounded-full hover:bg-[#f97316] hover:shadow-2xl hover:shadow-[#ff914d]/40 transition-all active:scale-95 group"
            >
              Get Free Consultation 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/8801819288583"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-[#22c55e] text-white font-bold rounded-full hover:bg-[#16a34a] hover:shadow-2xl hover:shadow-[#22c55e]/40 transition-all active:scale-95"
            >
              <MessageCircle className="h-5 w-5 fill-white/20" /> 
              WhatsApp Now
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[1, 2, 4, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full bg-[#064e3b] border-2 border-[#fff7f0] flex items-center justify-center text-[10px] text-white font-black shadow-sm"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-[#f97316] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#064e3b]/60 uppercase tracking-widest">
                100+ happy brands grown
              </p>
            </div>
          </div>
        </div>

        {/* --- Right Visual Section (Optimized Image) --- */}
        <div className="relative animate-fade-in-slow">
          <div className="relative bg-white rounded-[3.5rem] p-4 shadow-[-20px_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white">
            <div className="relative overflow-hidden rounded-[3rem] bg-white aspect-square flex items-center justify-center">
                {/* Next.js Optimized Image */}
                <Image 
                  src="/assets/hero-bg.jpg"
                  alt="Beyond Dhaka Growth Illustration" 
                  width={800}
                  height={800}
                  priority
                  className="w-[90%] h-auto object-contain"
                />
            </div>

            {/* Lead Growth Card */}
            <div className="absolute -bottom-8 -left-10 bg-white rounded-3xl shadow-2xl p-6 flex items-center gap-4 border border-gray-50/50 animate-float">
              <div className="h-14 w-14 rounded-2xl bg-[#ff914d]/10 flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-[#ff914d]" />
              </div>
              <div>
                <div className="text-3xl font-black text-[#064e3b] leading-none tracking-tighter">+248%</div>
                <div className="text-[11px] uppercase font-bold text-[#064e3b]/40 tracking-wider mt-1.5">Avg. lead growth</div>
              </div>
            </div>

            {/* ROI Card */}
            <div className="absolute -top-6 -right-6 bg-[#14532d] text-[#ff914d] rounded-2xl shadow-2xl px-6 py-5 flex flex-col items-center animate-float-delayed">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">Live ROI</div>
              <div className="font-black text-3xl tracking-tighter">5.4x</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 1s;
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fadeUp 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;