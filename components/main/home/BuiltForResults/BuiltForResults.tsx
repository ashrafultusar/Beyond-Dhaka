import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Medal, Target, Users, BarChart3 } from "lucide-react";

const resultsStats = [
  {
    icon: <Users className="h-6 w-6 text-white" />,
    value: "200+ Clients",
    iconBg: "bg-gradient-to-r from-[#7a48fb] to-[#9b6cfb]",
  },
  {
    icon: <Medal className="h-6 w-6 text-white" />,
    value: "Award Winning",
    iconBg: "bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9]",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    value: "5x ROI",
    iconBg: "bg-gradient-to-r from-[#2563eb] to-[#7c3aed]",
  },
  {
    icon: <Target className="h-6 w-6 text-white" />,
    value: "Lead Focused",
    iconBg: "bg-gradient-to-r from-[#f97316] to-[#ec4899]",
  },
];

const BuiltForResults = () => {
  return (
    <section className="py-24 bg-[#fafcff]">
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7a48fb]">
                WHY GROWLEADS
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl tracking-tight text-[#1a1c23]">
                Built for <span className="bg-gradient-to-r from-[#7a48fb] to-[#9b6cfb] bg-clip-text text-transparent">results</span>, not vanity.
              </h2>
              <p className="text-lg text-slate-500 md:text-xl font-medium max-w-lg">
                Every campaign we build is engineered for one goal: bringing you customers who pay.
              </p>
            </div>

            <ul className="space-y-4 text-base text-slate-600 font-medium">
              {[
                "Lead-focused strategy, not just pretty design",
                "Transparent reporting & real ROI tracking",
                "Fast turnaround with dedicated support",
                "Affordable plans for every business size",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3e8ff]">
                    <Check className="h-4 w-4 text-[#7a48fb]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/project-start"
              className="inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#7a48fb] to-[#9b6cfb] px-8 text-sm md:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-105 gap-2"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right Side Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {resultsStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] aspect-[1.1] flex flex-col items-center text-center group transition-all hover:shadow-2xl hover:scale-105"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl ${stat.iconBg} p-4 shadow-inner mb-6 transition-all group-hover:scale-110`}
                >
                  {stat.icon}
                </div>
                <div className="mt-2 text-xl font-semibold text-slate-800 tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForResults;