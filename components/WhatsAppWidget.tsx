"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppWidget = () => {
  const [showPopup, setShowPopup] = useState(false);

  // সাইটে ঢোকার ২ সেকেন্ড পর পপআপ ওপেন হবে
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // আপনার হোয়াটসঅ্যাপ নম্বর এবং ডিফল্ট মেসেজ
  const phoneNumber = "8801819288583";
  const defaultMessage = encodeURIComponent("Hi, I want a free consultation");
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      
      {/* --- Popup Message --- */}
      <div 
        className={`mb-4 transition-all duration-500 ease-out origin-bottom-right ${
          showPopup ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white border border-gray-100 w-[260px] rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#0d6335] px-4 py-3 flex justify-between items-center">
            <span className="text-white font-bold text-sm">Beyond Dhaka</span>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          {/* Body */}
          <div className="p-4 bg-gray-50/50">
            <div className="bg-white p-3 rounded-xl rounded-tl-sm text-sm text-gray-700 shadow-sm border border-gray-100 inline-block">
              Hi there! 👋<br/>
              Want a free consultation?
            </div>
          </div>
          {/* Footer (Action) */}
          <div className="p-3 bg-white border-t border-gray-50">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => setShowPopup(false)}
              className="flex items-center justify-center gap-2 w-full py-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-bold rounded-lg transition-colors"
            >
              <Send size={14} /> Start Chat
            </a>
          </div>
        </div>
      </div>

      {/* --- Floating Icon with Wave Effect --- */}
      <div className="relative group flex items-center justify-center">
        
        {/* Wave Animation Background (Ping Effect) */}
        <div className="absolute inset-0 w-full h-full bg-[#22c55e] rounded-full animate-ping opacity-60"></div>
        
        {/* Secondary Static Glow */}
        <div className="absolute -inset-2 bg-[#22c55e]/20 rounded-full blur-sm"></div>

        {/* Main Button */}
        <a 
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#22c55e] hover:bg-[#16a34a] rounded-full text-white shadow-xl transition-transform transform hover:scale-110 active:scale-95"
          onClick={() => setShowPopup(false)} 
        >
          <MessageCircle size={28} />
        </a>
      </div>

    </div>
  );
};

export default WhatsAppWidget;