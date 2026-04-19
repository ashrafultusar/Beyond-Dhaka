import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24 font-sans">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6366f1] mb-3 block">
            CONTACT
          </span>
          <h2 className="text-[42px] md:text-[56px] font-extrabold text-[#0f172a] mb-4 tracking-tight leading-tight">
            Let&apos;s <span className="text-[#7c3aed]">talk</span> about your project
          </h2>
          <p className="text-[#64748b] text-[16px] md:text-lg max-w-2xl mx-auto">
            Free consultation. No obligation. We&apos;ll reply within 24 hours.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Get in touch</h3>
              <p className="text-[#64748b] mb-8">
                Have a question or a project in mind? Drop us a message, and we&apos;ll help you scale your business to the next level.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7c3aed]/10 rounded-xl flex items-center justify-center text-[#7c3aed] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a]">Email us</h4>
                  <p className="text-[#64748b]">hello@youragency.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7c3aed]/10 rounded-xl flex items-center justify-center text-[#7c3aed] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a]">Visit us</h4>
                  <p className="text-[#64748b]">Banani, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0f172a] mb-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#7c3aed] focus:bg-white focus:ring-0 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0f172a] mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#7c3aed] focus:bg-white focus:ring-0 transition-all outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#0f172a] mb-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#7c3aed] focus:bg-white focus:ring-0 transition-all outline-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0f172a] mb-2">Message</label>
                <textarea placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#7c3aed] focus:bg-white focus:ring-0 transition-all outline-none resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-[#7c3aed]/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;