import Link from "next/link";
import { ArrowUpRight, MessageCircle, Zap } from "lucide-react";

const PersonalBrand = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1c4d34] to-[#123121] py-12 px-6 flex justify-center">
      {/* Width 50% on desktop, Full on mobile | Centered Content */}
      <div className="w-full lg:w-2/3 relative group overflow-hidden rounded-[2.5rem]   border border-white/10 p-10 flex flex-col items-center text-center">
        
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8419]/10 border border-[#FF8419]/20 text-[#FF8419] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
          <Zap className="w-3 h-3 fill-current" /> Personal Brand Authority
        </div>

        {/* Headline - Primary Focus */}
        <div className="space-y-2 mb-4">
          <h2 className="text-3xl md:text-7xl font-display font-black text-white leading-none tracking-tighter">
            SAJIB BD <span className="text-[#FF8419]">DOT COM</span>
          </h2>
          {/* Child Brand Connection */}
          <p className="text-white/50 text-sm font-medium tracking-wide">
            The Visionary Powerhouse Behind <span className="text-white border-b border-[#00B66E]/50">Beyond Dhaka</span>
          </p>
        </div>

        {/* Keywords - Single Line Centered */}
        <div className="flex items-center justify-center gap-3 md:gap-5 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-8">
          <span>Strategy</span>
          <span className="w-1 h-1 rounded-full bg-[#FF8419]" />
          <span>Growth</span>
          <span className="w-1 h-1 rounded-full bg-[#FF8419]" />
          <span>Authority</span>
        </div>

        {/* Action Buttons - Centered */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
          >
            Work with Sajib <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          
          <a 
            href="https://wa.me/8801819288583" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-[#00B66E]" /> Let&apos;s Talk
          </a>
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF8419]/5 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};

export default PersonalBrand;