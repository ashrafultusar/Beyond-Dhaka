import React from "react";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/Card/ServiceCard";
import CallToAction from "@/components/shared/CallToAction/CallToAction";

const AllServicesPage = () => {
  return (
    <main>
      <section className="relative bg-[#0b2f1d] py-24 md:py-32 px-6 mt-12 md:px-12 overflow-hidden w-full">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f96f1f]/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            {/* Eyebrow Text (Small Title) */}
            <p className="text-[#f96f1f] font-bold tracking-wider text-sm uppercase mb-4">
              Our services
            </p>

            {/* Main Heading */}
            <h1 className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold text-white mb-6 uppercase tracking-tight">
              Our Full Suite of Services{" "}
              <span className="text-[#f96f1f]">grow online</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-gray-300 text-lg md:text-[20px] max-w-2xl font-normal leading-relaxed">
              From SEO to scroll-stopping creatives — full-stack digital
              marketing & design under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        {/* Grid showing ALL servicesData */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <CallToAction
        title="Not sure which service fits?"
        description="Get a free 30-minute strategy call and we'll map a plan that fits your goals & budget."
        primaryBtnText="Get Free Consultation"
        primaryBtnLink="/contact"
        secondaryBtnText="WhatsApp Now"
        secondaryBtnLink="https://wa.me/8801700000000"
       gradientClass="from-[#0d5435] via-[#0b4129] to-[#083320]"
      />

    </main>
  );
};

export default AllServicesPage;
