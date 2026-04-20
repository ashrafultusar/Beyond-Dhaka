import React from 'react';

// Single Process Item Component
const ProcessItem: React.FC<{
  number: string;
  title: string;
  description: string;
}> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Number (01, 02, etc.) - Gold/Tan Color */}
      <span className="text-[56px] font-extrabold text-[#b8956b] mb-4 leading-none">
        {number}
      </span>
      {/* Step Title - White */}
      <h3 className="text-[20px] font-bold text-white mb-2 leading-tight">
        {title}
      </h3>
      {/* Step Description - Light Tan/Grey */}
      <p className="text-[14px] text-[#e0e0e0] leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

// Main Process Section Component
const ProcessSection = () => {
  // Array containing the details of each step
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We understand your brand, audience and goals."
    },
    {
      number: "02",
      title: "Strategize",
      description: "Custom roadmap built around real outcomes."
    },
    {
      number: "03",
      title: "Execute",
      description: "Premium creatives, smart targeting, sharp copy."
    },
    {
      number: "04",
      title: "Optimize",
      description: "Track, refine and scale what works."
    }
  ];

  return (
    // Section Container - Dark Green Gradient Background (Image specific)
    <section className="bg-gradient-to-b from-[#1c4d34] to-[#123121] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Section Subtitle (Our Process) - Deep Green */}
          <p className="text-[#f96020] font-semibold text-[14px] uppercase tracking-[0.2em] mb-3">
            Our Process
          </p>
          {/* Section Main Title (Simple. Strategic. Scalable.) - White */}
          <h2 className="text-[42px] font-extrabold text-white leading-tight">
            Simple. Strategic. Scalable.
          </h2>
        </div>

        {/* 4-Step Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-16 w-full max-w-6xl">
          {steps.map((step) => (
            <ProcessItem
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;