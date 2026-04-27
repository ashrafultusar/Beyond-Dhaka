"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="font-sans text-white">
      {/* Main Footer Area - Deep Green Background */}
      <div className="bg-[#0a422a] pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          {/* Column 1: Logo & Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="relative w-28 h-20 md:w-32 md:h-24 transition-transform group-hover:scale-105 duration-300">
                  <Image
                    src="/assets/logo.png"
                    alt="Beyond Dhaka Logo"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>

                <div className="h-12 w-[1px] bg-white/20 hidden sm:block"></div>

                <div className="flex flex-col justify-center">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#f97316] font-bold leading-none mb-1">
                    Personal Brand Authority
                  </span>
                  <span className="text-xl md:text-2xl font-black tracking-tight text-white leading-none">
                    SAJIB BD DOT COM
                  </span>
                </div>
              </div>

              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                Address : 67/3, G7, Shantinagar, Dhaka 1217, Bangladesh
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[#f97316] text-[13px] font-bold mb-6 tracking-[0.2em] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         {/* Column 3: Contact Info & Location */}
<div className="md:col-span-3">
  <h4 className="text-[#f97316] text-[13px] font-bold mb-6 tracking-[0.2em] uppercase">
    Contact & Location
  </h4>
  <ul className="space-y-4 text-white/70 text-sm font-medium">
    <li className="flex items-center gap-3 group cursor-pointer">
      <FaPhoneAlt size={14} className="text-[#f97316]" />
      <a href="tel:+8801819288583" className="group-hover:text-white transition-colors text-sm">
        +880 1819 288 583
      </a>
    </li>
    <li className="flex items-center gap-3 group cursor-pointer">
      <FaEnvelope size={14} className="text-[#f97316]" />
      <a href="mailto:info@beyonddhaka.com" className="group-hover:text-white transition-colors text-sm">
        info@beyonddhaka.com
      </a>
    </li>
    
    {/* Updated Location Section with your Link */}
    <li className="flex items-start gap-3 group cursor-pointer">
      <FaMapMarkerAlt size={16} className="text-[#f97316] mt-1 shrink-0" />
      <div className="flex flex-col gap-1">
        <a 
          href="https://maps.app.goo.gl/4qMLpMQrNpewLqju7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group-hover:text-white transition-colors underline underline-offset-4 decoration-white/20 text-sm leading-relaxed"
        >
          67/3, G7, Shantinagar, Dhaka 1217, Bangladesh
          <FaExternalLinkAlt size={10} className="inline ml-2 opacity-50 group-hover:opacity-100" />
        </a>
      </div>
    </li>
  </ul>
</div>

          {/* Column 4: Social Follow */}
          <div className="md:col-span-2">
            <h4 className="text-[#f97316] text-[13px] font-bold mb-6 tracking-[0.2em] uppercase">
              Follow @BeyondDhaka
            </h4>
            <div className="grid grid-cols-3 gap-3 w-fit">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/beyonddhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaFacebookF size={16} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/beyonddhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaInstagram size={18} />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@BeyondDhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaYoutube size={18} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/beyonddhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaLinkedinIn size={18} />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@beyond.dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaTiktok size={16} />
              </a>
              {/* Fiverr */}
              <a
                href="https://www.fiverr.com/beyonddhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn group"
              >
                <SiFiverr
                  size={24}
                  className="text-[#1DBF73] group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a422a] py-6 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[12px] md:text-sm font-medium">
          <p>© {new Date().getFullYear()} Beyond Dhaka. All rights reserved.</p>
          <p className="flex items-center gap-1 uppercase tracking-widest text-[10px]">
            A Digital Venture of Sajib BD
          </p>
        </div>
      </div>

      <style jsx>{`
        .social-btn {
          @apply w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 transition-all duration-300;
        }
        .social-btn:hover {
          @apply bg-[#f97316] text-white border-[#f97316] scale-110;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
