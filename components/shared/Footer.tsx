import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="font-sans text-white">
      {/* Main Footer Area */}
      <div className="bg-[#0A1A30] pt-16 pb-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className="flex items-center justify-center w-8 h-8 bg-[#00E5FF] rounded-md">
                <span className="text-[#0A1A30] font-bold text-lg leading-none">C</span>
              </div>
              <span className="text-xl font-bold tracking-wide">Beyond Dhaka</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              We help businesses grow online & generate qualified leads through
              digital marketing, design, and content creation.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="md:col-span-3">
            <h4 className="text-[#00E5FF] text-xs font-bold mb-5 tracking-widest uppercase">
              Pages
            </h4>
            <ul className="space-y-3 text-[#B0BAC5] text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & WhatsApp */}
          <div className="md:col-span-3">
            <h4 className="text-[#00E5FF] text-xs font-bold mb-5 tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-[#B0BAC5] text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#B0BAC5]" />
                <span>+880 1819 288 583</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#B0BAC5]" />
                <span>sajib@beyonddhaka.com</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/8801819288583" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="bg-[#061122] py-5 border-t border-[#1C2C45] text-center text-[#6B7C93] text-sm">
        <p>© {new Date().getFullYear()} Beyond Dhaka. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;