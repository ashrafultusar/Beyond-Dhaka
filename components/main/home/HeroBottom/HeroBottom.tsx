// components/HeroBottom.tsx
import React from 'react';

const HeroBottom: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-4 px-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 border-y border-gray-200">
      
      {/* First Item */}
      <div className="flex items-center gap-2 text-gray-800 font-bold text-sm md:text-base">
        <span className="text-lg">👉</span>
        <span>100+ HAPPY LOCAL & INTERNATIONAL CLIENTS</span>
      </div>

      {/* Second Item */}
      <div className="flex items-center gap-2 text-gray-800 font-bold text-sm md:text-base">
        <span className="text-lg">👉</span>
        <span>Proven Growth Strategy</span>
      </div>

    </section>
  );
};

export default HeroBottom;