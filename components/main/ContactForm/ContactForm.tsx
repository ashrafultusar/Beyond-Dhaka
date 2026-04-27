"use client";
import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  // Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp Submission Logic
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Data check (Basic validation)
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill name, phone, and message fields.");
      return;
    }

    // WhatsApp Number (International format without +)
    const whatsappNumber = "8801819288583";

    // Creating the encoded message
    const text = `*New Inquiry from Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Email:* ${formData.email || 'N/A'}%0A` +
                 `*Service:* ${formData.service || 'Not Selected'}%0A` +
                 `*Message:* ${formData.message}`;

    // Opening WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans py-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
          
          {/* --- Left Side: Form --- */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full flex flex-col">
            <h2 className="text-3xl font-extrabold text-[#0d6335] mb-2 tracking-tight">
              Send us a message
            </h2>
            <p className="text-gray-500 mb-8 text-sm md:text-base">
              Fill the form — we&apos;ll connect you on WhatsApp instantly.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6 flex-grow flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Your Name *</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Mohammad Sajib" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d6335] focus:ring-1 focus:ring-[#0d6335] transition-all outline-none text-sm" 
                  />
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Phone / WhatsApp *</label>
                  <input 
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX XXXXXX" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d6335] focus:ring-1 focus:ring-[#0d6335] transition-all outline-none text-sm" 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@brand.com" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d6335] focus:ring-1 focus:ring-[#0d6335] transition-all outline-none text-sm" 
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Interested Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d6335] focus:ring-1 focus:ring-[#0d6335] transition-all outline-none text-sm text-gray-600 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="SEO">Search Engine Optimization</option>
                    <option value="SMM">Social Media Marketing</option>
                    <option value="Ads">Paid Advertising</option>
                    <option value="Web Development">Website Development</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 flex-grow">
                <label className="block text-sm font-semibold text-gray-800">Your Message *</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals & budget..." 
                  className="w-full h-[120px] lg:h-[180px] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d6335] focus:ring-1 focus:ring-[#0d6335] transition-all outline-none resize-none text-sm"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto">
                <button 
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#f96f1f] hover:bg-[#e05f15] text-white font-bold rounded-full transition-all active:scale-95 shadow-lg shadow-[#f96f1f]/30"
                >
                  Send Message
                  <Send size={18} />
                </button>
                
                <a 
                  href="https://wa.me/8801819288583" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-full transition-all active:scale-95 shadow-lg shadow-[#22c55e]/30"
                >
                  <MessageCircle size={20} />
                  WhatsApp Direct
                </a>
              </div>
            </form>
          </div>

          {/* --- Right Side: Cards --- (Keeping your existing UI) */}
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-[#155d34] rounded-[2rem] p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-8">Quick Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f96f1f] rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-green-200/80 font-semibold">Call Us</p>
                    <p className="font-bold text-sm md:text-base">+880 1819 288 583</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f96f1f] rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-green-200/80 font-semibold">Email</p>
                    <p className="font-bold text-sm md:text-base">info@beyonddhaka.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#f96f1f] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                   <li className="flex items-start gap-3 group cursor-pointer">
                      
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
                </div>
              
              </div>
            </div>

            <div className="bg-[#22c55e] rounded-[2rem] p-8 text-white shadow-lg">
              <MessageCircle size={32} className="mb-4 text-white" />
              <h3 className="text-xl font-bold mb-1">Chat on WhatsApp</h3>
              <p className="text-green-50 text-sm font-medium">Fastest response • usually within minutes</p>
            </div>

            <div className="bg-[#f8fafc] rounded-[2rem] p-8 border border-gray-100 flex-grow">
              <h3 className="text-lg font-bold text-[#0d6335] mb-5">Why work with us?</h3>
              <ul className="space-y-3">
                {["Free strategy call", "Transparent pricing", "Dedicated strategist", "Results-driven approach"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <CheckCircle2 size={18} className="text-[#f96f1f] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;