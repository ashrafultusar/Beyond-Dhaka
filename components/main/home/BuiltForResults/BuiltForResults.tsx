import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Medal, Target, Users, BarChart3 } from "lucide-react";

const resultsStats = [
  {
    icon: <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />,
    value: "200+ Clients",
    label: "Trusted globally",
    iconBg: "bg-gradient-to-br from-[#11502e] to-[#1a6b3e]",
  },
  {
    icon: <Medal className="h-6 w-6 md:h-7 md:w-7 text-white" />,
    value: "Award Winning",
    label: "Industry recognized",
    iconBg: "bg-gradient-to-br from-[#f97316] to-[#fb923c]",
  },
  {
    icon: <BarChart3 className="h-6 w-6 md:h-7 md:w-7 text-white" />,
    value: "5x ROI",
    label: "Average return",
    iconBg: "bg-gradient-to-br from-[#11502e] to-[#0e3d25]",
  },
  {
    icon: <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />,
    value: "Lead Focused",
    label: "Conversion driven",
    iconBg: "bg-gradient-to-br from-[#f97316] to-[#ea580c]",
  },
];

const BuiltForResults = () => {
  return (
    <section className="py-16 md:py-28 bg-[#f8faf9] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side Content */}
          <div className="relative space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#11502e]/5 rounded-full blur-3xl -z-10" />
            
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11502e]/10 border border-[#11502e]/20">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-[#11502e]">
                  Why GrowLeads
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] lg:leading-[1.1] tracking-tight text-[#11502e]">
                Built for <span className="text-[#f97316]">results</span>, <br className="hidden sm:block" />
                <span className="italic font-medium text-[#718a7c]">not vanity.</span>
              </h2>
              
              <p className="text-base md:text-xl text-[#5a7164] font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Every campaign we build is engineered for one goal: bringing you customers who pay.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 text-[#4a5f52] font-semibold max-w-md mx-auto lg:mx-0">
              {[
                "Lead-focused strategy, not just pretty design",
                "Transparent reporting & real ROI tracking",
                "Fast turnaround with dedicated support",
                "Affordable plans for every business size",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-lg bg-white border border-[#11502e]/10 shadow-sm group-hover:bg-[#11502e] transition-colors duration-300 mt-0.5">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-[#f97316] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex h-14 md:h-16 items-center justify-center rounded-2xl bg-[#11502e] px-8 md:px-10 text-base font-bold text-white shadow-xl shadow-[#11502e]/20 transition-all hover:bg-[#0e3d25] hover:-translate-y-1 gap-3"
              >
                Start Your Project 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Side Cards Grid */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#f97316]/5 rounded-full blur-[80px] -z-10" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {resultsStats.map((stat, index) => (
                <div
                  key={index}
                  className="relative rounded-[24px] md:rounded-[32px] bg-white p-6 md:p-8 border border-[#e5f1e8] shadow-[0_10px_30px_-15px_rgba(17,80,46,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl min-h-[180px] md:min-h-[220px] justify-center"
                >
                  <div
                    className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl ${stat.iconBg} mb-4 md:mb-5 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg md:text-2xl font-black text-[#11502e] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-sm font-bold text-[#718a7c] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuiltForResults;