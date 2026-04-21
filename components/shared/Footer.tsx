import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="font-sans text-white">
      {/* Main Footer Area - Deep Green Background */}
      <div className="bg-[#0d5435] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          
        {/* Column 1: Logo & Tagline */}
<div className="md:col-span-5 space-y-6">
  <div className="flex flex-col items-start gap-4">
    {/* Boro Logo Container */}
    <div className="relative w-52 h-24 transition-transform hover:scale-105 duration-300">
      <Image 
        src='/assets/logo.png'
        alt="Beyond Dhaka Logo"
        fill
        priority
        className="object-contain object-left" 
      />
    </div>
    
    {/* Tagline style - arektu clean kora holo */}
    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
      Create · Connect · Inspire. We help brands grow beyond boundaries with smart digital marketing.
    </p>
  </div>
</div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[#f97316] text-[13px] font-bold mb-6 tracking-[0.2em] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li><Link href="/" className="hover:text-[#f97316] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#f97316] transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#f97316] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[#f97316] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-[#f97316] text-[13px] font-bold mb-6 tracking-[0.2em] uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone size={16} className="text-[#f97316]" />
                <span className="group-hover:text-white transition-colors">+880 1819 288 583</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail size={16} className="text-[#f97316]" />
                <span className="group-hover:text-white transition-colors">sajib@beyonddhaka.com</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <MapPin size={16} className="text-[#f97316]" />
                <span className="group-hover:text-white transition-colors">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Follow */}
          <div className="md:col-span-2">
            <h4 className="text-[#f97316] text-[13px] font-bold mb-6 tracking-[0.2em] uppercase">
              Follow @BeyondDhaka
            </h4>
            <div className="flex items-center gap-3">
              {/* Facebook Icon (SVG) */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>

              {/* Instagram Icon (SVG) */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              {/* Youtube Icon (SVG) */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Sub-Dark Green matching the image footer */}
      <div className="bg-[#0a422a] py-6 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[12px] md:text-sm font-medium">
          <p>© {new Date().getFullYear()} Beyond Dhaka. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with care in <span className="text-white/60">Beyond Dhaka</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;