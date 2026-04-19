import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

interface DynamicCTAProps {
  title: string;
  description: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  gradientClass?: string;
}

const DynamicCTA: React.FC<DynamicCTAProps> = ({
  title,
  description,
  primaryBtnText = "Start a Project",
  primaryBtnLink = "/contact",
  secondaryBtnText = "WhatsApp Now",
  secondaryBtnLink = "https://wa.me/8801700000000",
 
  gradientClass = "from-[#7a48fb] to-[#06b6d4]", 
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto ">
        <div className={`relative overflow-hidden rounded-[32px] bg-gradient-to-r ${gradientClass} px-6 py-16 text-center shadow-xl`}>
          
          {/* Background Glows */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-xl  md:text-5xl md:text-[40px] font-bold text-white mb-4 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-white text-[16px] md:text-xl md:text-[18px] mb-8 font-medium">
              {description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryBtnText && (
                <Link
                  href={primaryBtnLink}
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-bold text-[#0f172a] shadow-lg transition-all hover:scale-105 hover:bg-slate-50 gap-2"
                >
                  {primaryBtnText} <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              {secondaryBtnText && (
                <a
                  href={secondaryBtnLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#25D366] px-8 text-[15px] font-bold text-white shadow-lg hover:bg-[#25D366]/90 transition-all hover:scale-105 gap-2 border border-[#25D366]"
                >
                  <MessageCircle className="h-5 w-5" /> {secondaryBtnText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicCTA;