import React from "react";
import { servicesData } from "@/data/servicesData"; // পাথ ঠিক করে নিবেন

const AllServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#fafcff] py-24">
      <div className="container mx-auto px-6 max-w-[1100px]">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-[40px] md:text-[44px] font-bold text-[#0f172a] mb-4 tracking-tight">
            All Services
          </h1>
          <p className="text-[#64748b] text-[15px] max-w-2xl mx-auto font-medium">
            Explore our complete range of digital solutions designed for your success.
          </p>
        </div>

        {/* Services Grid (Shows ALL items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
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
      </div>
    </div>
  );
};

export default AllServicesPage;