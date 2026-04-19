import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";


const Services = () => {
  
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="py-24 bg-[#fafcff]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[44px] font-bold text-[#0f172a] mb-4 tracking-tight">
            What we do
          </h2>
          <p className="text-[#64748b] text-[15px] max-w-2xl mx-auto font-medium">
            End-to-end services designed to grow your business and bring real leads.
          </p>
        </div>

        {/* Services Grid (Only 3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#7a48fb] flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-[19px] font-bold text-[#0f172a] mb-3">
                {service.title}
              </h3>
              <p className="text-[14px] text-[#64748b] leading-[1.6]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/services">
            <button className="flex cursor-pointer items-center gap-2 px-6 py-2.5 bg-transparent text-[#0f172a] text-[14px] font-medium border border-[#c4a6fb] rounded-full hover:bg-purple-50 transition-colors">
              View All Services <ArrowRight size={16} className="text-[#0f172a]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;