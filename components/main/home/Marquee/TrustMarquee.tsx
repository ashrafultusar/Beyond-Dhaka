import React from "react";
import "./TrustMarquee.css"; // CSS ফাইলটি ইম্পোর্ট নিশ্চিত করুন

const TrustMarquee: React.FC = () => {
  const items: string[] = [
    "SEO",
    "Meta Ads",
    "Google Ads",
    "Branding",
    "Content",
    "TikTok",
    "Shopify",
    "Lead Gen",
  ];

  return (
    <section className="border-y border-gray-200 bg-[#f9fafb]/40 overflow-hidden py-6">
      <div className="relative overflow-hidden">
        {/* Marquee Wrapper */}
        <div className="animate-marquee-container">
          
          {/* First set of items */}
          <div className="marquee-item text-2xl font-sans font-bold text-[#6b7280]/60 px-8">
            {items.map((text, i) => (
              <span key={`original-${i}`} className="flex items-center gap-16">
                {text} <span className="text-[#f97316]">●</span>
              </span>
            ))}
          </div>
          
          {/* Duplicate set for seamless looping (Infinite effect) */}
          <div className="marquee-item text-2xl font-sans font-bold text-[#6b7280]/60 px-8">
            {items.map((text, i) => (
              <span key={`duplicate-${i}`} className="flex items-center gap-16">
                {text} <span className="text-[#f97316]">●</span>
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;