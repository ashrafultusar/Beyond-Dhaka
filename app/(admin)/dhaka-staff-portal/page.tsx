"use client";

import React from 'react';
import { useSession } from "next-auth/react";
import { Sparkles, LayoutDashboard, Clock } from "lucide-react";

export default function AdminDashboard() {
  const { data: session } = useSession();

  
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="min-h-[400px] flex flex-col justify-center py-10">
      <div className="max-w-4xl">
        {/* Badge Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 mb-6 animate-fade-in">
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider">System Online</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-2">
          <h2 className="text-gray-500 font-medium text-xl md:text-2xl flex items-center gap-3">
            {greeting},
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0f172a]">
            {session?.user?.name?.split(' ')[0] || "Admin"} 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">.</span>
          </h1>
        </div>

        {/* Description & Quick Stats Row */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-8 text-[#64748b]">
          <p className="text-lg max-w-lg leading-relaxed">
            Welcome to the <span className="text-[#0f172a] font-semibold">Beyond Dhaka</span> command center. 
            Everything is set up and ready for your next project.
          </p>

          <div className="h-px md:h-12 w-12 md:w-px bg-gray-200"></div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[#0f172a] font-bold text-xl">100%</span>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-70">Uptime</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0f172a] font-bold text-xl">v2.4.0</span>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-70">Version</span>
            </div>
          </div>
        </div>

        {/* Minimal Action Hints */}
        <div className="mt-12 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium border border-gray-100">
            <LayoutDashboard size={16} className="text-teal-600" />
            Active Session
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium border border-gray-100">
            <Clock size={16} className="text-teal-600" />
            Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Background Subtle Gradient Glow */}
      <div className="fixed top-20 right-0 -z-10 h-[500px] w-[500px] bg-teal-50/50 rounded-full blur-[120px]"></div>
      <div className="fixed bottom-0 left-0 -z-10 h-[300px] w-[300px] bg-emerald-50/30 rounded-full blur-[100px]"></div>
    </div>
  );
}