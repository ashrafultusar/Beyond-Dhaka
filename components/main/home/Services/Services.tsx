import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/Card/ServiceCard";


const Services = () => {

  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="py-24 bg-[#fafcff]">
      <div className="container mx-auto px-6 ">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#f96f1f] font-bold uppercase tracking-[0.2em] text-[13px] mb-3 ">
            What we do
          </p>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0d6335] mb-4 tracking-tight leading-tight uppercase">
            Services that drive real growth
          </h2>
          <p className="text-[#64748b] text-lg font-medium">
            Digital marketing and visual design — engineered for results.
          </p>
        </div>

        {/* Services Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        
        <div className="flex justify-center">
          <Link href="/services">
            <button className="group flex cursor-pointer items-center gap-3 px-8 py-3.5 bg-transparent text-[#11502e] text-[15px] font-bold border-2 border-[#0d6335]/20 rounded-full hover:bg-[#11502e] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7a48fb]/30">
              Explore All Services 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;