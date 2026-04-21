"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, LogOut, LayoutDashboard } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  // চেক করছি ইউজার হোম পেজে আছে কিনা
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // যদি হোম পেজ না হয়, অথবা স্ক্রল করা হয়, তাহলে ব্যাকগ্রাউন্ড সাদা হবে
  const isWhiteBg = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isWhiteBg ? "bg-white shadow-md border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-6 mx-auto">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center group">
          <Image src='/assets/logo.png' alt="Logo" width={70} height={44} className="transition-transform group-hover:scale-105" />
          <div className="leading-tight hidden sm:block ml-2">
            <div className="font-bold text-[#0d6335] text-lg">BEYOND</div>
            <div className="font-bold text-[#f96f1f] text-lg -mt-1">DHAKA</div>
          </div>
        </Link>

        {/* --- Desktop Nav --- */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`px-5 py-2 text-sm font-semibold transition-all rounded-full ${
                  isActive ? "text-[#0d6335] bg-[#f96f1f]/10" : "text-gray-600 hover:text-[#0d6335]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* --- Actions --- */}
        <div className="flex items-center gap-3">
          {session?.user?.role === "admin" && (
            <div className="hidden md:flex items-center gap-2 mr-2 border-r pr-3 border-gray-200">
              <Link 
                href="/dhaka-staff-portal"
                className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-[#0d6335] hover:bg-[#0d6335]/10 rounded-lg transition-all"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="p-2 text-red-500 cursor-pointer hover:text-red-500 transition-colors"
              >
                <LogOut size={20} />
              </button>
            </div>
          )}

          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-1 px-4 py-2 bg-[#fb7f2b] text-white font-bold rounded-xl hover:bg-[#0d6335] transition-all active:scale-95"
          >
            <Phone size={18} />
            <span>Get Free Consultation</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isWhiteBg ? "text-[#0d6335] hover:bg-gray-100" : "text-white bg-black/20 hover:bg-black/40"
            }`}
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      {/* Overlay: (Background Blur only for the overlay area) */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar Content: Solid White Background (No transparency) */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
             <Image src='/assets/logo.png' alt="Logo" width={40} height={25} />
             <span className="font-bold text-gray-800">Menu</span>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 flex flex-col gap-2 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`block p-4 rounded-xl font-semibold transition-colors ${ 
                pathname === item.to 
                  ? "bg-[#0d6335]/10 text-[#0d6335]" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Admin Options in Mobile */}
          {session?.user?.role === "admin" && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/dhaka-staff-portal"
                className="flex items-center gap-3 p-4 font-bold text-[#0d6335] bg-[#0d6335]/5 rounded-xl"
              >
                <LayoutDashboard size={20} />
                Admin Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-3 p-4 text-red-500 cursor-pointer 
                font-semibold hover:bg-red-50 rounded-xl w-full text-left transition-colors"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          )}

          <Link
            href="/contact"
            className="mt-6 flex justify-center items-center py-4 bg-[#fb7f2b] text-white font-bold rounded-xl shadow-md active:scale-95 transition-transform"
          >
         Get Free Consultation

          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;