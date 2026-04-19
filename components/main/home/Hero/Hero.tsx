import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const stats = [
  { value: "200+", label: "Happy Clients" },
  { value: "5x", label: "Avg ROI" },
  { value: "10M+", label: "Leads Generated" },
  { value: "24/7", label: "Support" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="container relative py-20 mx-auto px-4 md:py-32">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/40 bg-transparent px-4 py-1.5 text-xs font-medium text-[#8b5cf6]">
            <Sparkles className="h-3.5 w-3.5" /> Lead Generation Agency
          </span>

          {/* Title */}
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.2] sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight text-[#1a1c23]">
            We help businesses
            <br />
            <span className="bg-gradient-to-r from-[#7a48fb] to-[#9b6cfb] bg-clip-text text-transparent">grow online</span> & generate
            <br />
            leads
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-500 md:text-xl font-medium">
            Digital Marketing | Design | Content Creation
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#7a48fb] to-[#9b6cfb] px-8 text-sm md:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-105 gap-2"
            >
              Get Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-[#25D366] px-8 text-sm md:text-base font-semibold text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#25D366]/90 transition-all hover:scale-105 gap-2"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 px-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white py-8 px-4 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <div className="font-display text-3xl md:text-[32px] font-bold text-[#7a48fb]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;