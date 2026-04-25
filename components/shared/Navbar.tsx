"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut, LayoutDashboard, ArrowRight } from "lucide-react";
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

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isWhiteBg = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isWhiteBg ? "bg-white shadow-md border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24 px-6 mx-auto">
        {/* --- Logo Section --- */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-32 h-12 md:w-48 md:h-16 transition-transform group-hover:scale-105">
            <Image 
              src='/assets/logo.png' 
              alt="Beyond Dhaka Logo" 
              fill
              priority
              className="object-contain object-left" 
            />
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
                className="p-2 text-red-500 cursor-pointer hover:text-red-700 transition-colors"
              >
                <LogOut size={20} />
              </button>
            </div>
          )}

          <Link
            href="/contact"
            className="hidden sm:flex group items-center gap-2 py-2.5 px-6 border-2 border-[#fb7f2b] text-[#fb7f2b] font-bold text-sm rounded-full shadow-sm overflow-hidden relative transition-all duration-300 hover:bg-[#fb7f2b] hover:text-white active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
             Get Free Consultation
              <ArrowRight 
                size={16} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isWhiteBg ? "text-[#0d6335] hover:bg-gray-100" : "text-[#0d6335] bg-white/80 hover:bg-white"
            }`}
            onClick={() => setOpen(true)}
          >
            <Menu className="cursor-pointer" size={28} />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <div className="relative w-32 h-10">
            <Image 
              src='/assets/logo.png' 
              alt="Logo" 
              fill
              className="object-contain object-left" 
            />
          </div>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <X className="cursor-pointer" size={24} />
          </button>
        </div>
        
        <div className="p-6 flex flex-col gap-2">
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
                className="flex items-center gap-3 p-4 text-red-500 font-semibold hover:bg-red-50 rounded-xl w-full text-left transition-colors"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          )}

          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center gap-2 py-3 px-5 bg-[#fb7f2b] text-white font-bold text-sm rounded-full shadow-lg"
          >
           Get Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;