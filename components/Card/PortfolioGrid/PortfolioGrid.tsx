import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  image: string;
  projectUrl?: string;
}

interface PortfolioGridProps {
  data: PortfolioItem[];
  limit?: number;
  showSeeMoreBtn?: boolean;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ data, limit, showSeeMoreBtn = false }) => {
  const displayedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {displayedData.map((item) => (
          <div
            key={item._id}
            className="group cursor-pointer relative bg-white   overflow-hidden border border-[#e5f1e8] shadow-[0_5px_15px_-10px_rgba(17,80,46,0.05)] hover:shadow-2xl transition-all duration-500 aspect-[4/5]"
          >
            {/* Image Section */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Hover Content Overlay (Text only appears here) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#11502e]/90 via-[#11502e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-8 translate-y-4 group-hover:translate-y-0">
              
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#f97316] mb-1 md:mb-2">
                {item.category}
              </span>
              
              <h3 className="text-[14px] md:text-[22px] font-bold text-white leading-tight mb-3 md:mb-5 line-clamp-2">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-white/80 text-[10px] md:text-sm font-medium border-t border-white/10 pt-3 md:pt-4">
                View Project 
                <ArrowRight size={14} className="text-[#f97316]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {showSeeMoreBtn && (
        <div className="flex justify-center mt-10 md:mt-16">
          <Link href="/portfolio">
            <button className="group flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent text-[#11502e] text-[13px] md:text-[15px] font-bold border-2 border-[#11502e]/10 rounded-full hover:bg-[#11502e] hover:text-white transition-all duration-300">
              Explore All Projects 
              <ArrowRight size={18} className="text-[#f97316] group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;