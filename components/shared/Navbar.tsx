"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-[#2A9D8F] text-white font-bold text-xl rounded-lg">
            BD
          </div>
          <span className="text-xl text-black font-bold tracking-tight">
            Beyond Dhaka
          </span>
          
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive ? "text-[#2A9D8F]" : "text-[#667085] hover:text-[#2A9D8F]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Admin Dashboard & Logout - Only visible when logged in */}
          {session?.user?.role === "admin" && (
            <div className="hidden sm:flex items-center gap-2">
             <Link
                href="/dhaka-staff-portal"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 p-4 font-semibold rounded-xl transition-all ${
                  pathname === "/dhaka-staff-portal" 
                    ? "bg-[#2A9D8F] text-white" 
                    : "text-[#2A9D8F] hover:bg-[#2A9D8F]/5"
                }`}
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
              
              <button
                onClick={() => signOut()}
                className="p-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          )}

          {/* Book Now Button (Always Visible) */}
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#2A9D8F] text-white font-semibold rounded-xl hover:bg-[#23857a] transition-all shadow-sm">
            <Phone size={18} fill="currentColor" />
            <span className="hidden xs:block">Book Now</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-500 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-50"
          >
            Close <X size={18} />
          </button>
        </div>
        
        <ul className="p-6 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block p-4 rounded-xl font-medium transition-all ${
                    isActive ? "bg-[#2A9D8F]/10 text-[#2A9D8F]" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* Mobile Admin Section - Only visible when logged in */}
          {session?.user?.role === "admin" && (
            <li className="mt-4 border-t pt-4 flex flex-col gap-2">
              <Link
                href="/dhaka-staff-portal"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 p-4 font-semibold rounded-xl transition-all ${
                  pathname === "/dhaka-staff-portal" 
                    ? "bg-[#2A9D8F] text-white" 
                    : "text-[#2A9D8F] hover:bg-[#2A9D8F]/5"
                }`}
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-3 p-4 text-red-500 font-semibold hover:bg-red-50 rounded-xl transition-all w-full text-left"
              >
                <LogOut size={20} />
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default LandingPage;