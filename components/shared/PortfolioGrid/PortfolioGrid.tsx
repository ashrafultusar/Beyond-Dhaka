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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedData.map((item) => (
          <div
            key={item._id}
            className="group bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
          >
            <div className="w-full aspect-square overflow-hidden bg-slate-100 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a48fb] mb-2 block">
                {item.category}
              </span>
              <h3 className="text-[18px] font-bold text-[#0f172a]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {showSeeMoreBtn && (
        <div className="flex justify-center mt-12">
          <Link href="/portfolio">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#0f172a] text-[14px] font-medium border border-[#c4a6fb] rounded-full hover:bg-purple-50 transition-colors">
              See More Projects <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;