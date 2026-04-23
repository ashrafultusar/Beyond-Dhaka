import React from "react";
import Link from "next/link";
import { generateSlug } from "@/data/servicesData";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// আইকনে কী কী প্রপস পাঠানো হবে তার জন্য একটি নির্দিষ্ট ইন্টারফেস ডিফাইন করা হলো
interface IconProps {
  size?: number | string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Link href={`/services/${generateSlug(title)}`}>
      <div className="group relative bg-white rounded-[24px] p-8 border border-[#e5f1e8]/70 hover:border-[#f97316]/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 overflow-hidden min-h-[320px] flex flex-col justify-between cursor-pointer">

        {/* Background Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#fff9f6] group-hover:bg-[#f97316]/5 rounded-full z-0 transition-colors duration-500" />

        <div className="relative z-10">
          {/* Icon Box */}
          <div className="w-[64px] h-[64px] rounded-[16px] bg-[#11502e] flex items-center justify-center mb-10 group-hover:bg-[#f97316] group-hover:rotate-[8deg] transition-all duration-500 shadow-sm">
            {React.isValidElement(icon) ? (
              React.cloneElement(icon as React.ReactElement<IconProps>, {
                size: 28,
                className: "text-white transition-colors duration-500"
              })
            ) : (
              <span className="text-3xl text-white transition-colors duration-500">
                {icon}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-[26px] font-extrabold text-[#11502e] mb-5 leading-tight tracking-tight group-hover:text-[#0e4b2d] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[16px] text-[#718a7c] leading-[1.7] font-normal">
            {description}
          </p>
        </div>

        <div className="mt-4 h-1 w-0 group-hover:w-16 bg-[#f97316] transition-all duration-500 rounded-full" />

      </div>
    </Link>
  );
};

export default ServiceCard;