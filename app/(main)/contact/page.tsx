import ContactForm from '@/components/main/ContactForm/ContactForm';
import React from 'react';

const page = () => {
  return (
    <div>
 <section className="relative bg-[#0b2f1d] py-24 md:py-32 px-6 mt-12 md:px-12 overflow-hidden w-full">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f96f1f]/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            {/* Eyebrow Text (Small Title) */}
            <p className="text-[#f96f1f] font-bold tracking-wider text-sm uppercase mb-4">
            CONTACT
            </p>

            {/* Main Heading */}
            <h1 className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold text-white mb-6 uppercase tracking-tight">
            Let&apos;s grow your brand 
                  <span className="text-[#f96f1f]"> together</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-gray-300 text-lg md:text-[20px] max-w-2xl font-normal leading-relaxed">
            Free 30-min consultation. No pressure, just a clear plan.
            </p>
          </div>
        </div>
      </section>

      <ContactForm/>
    </div>
  );
};

export default page;