"use client";
import { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FFF9EE]">
      <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex justify-between items-center h-[76px]">
          {/* Left side (mobile hamburger + logo) */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Logo */}
            <Image src={assets.logo} alt="artbeat" className="h-8 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[44px] text-[#2C2C2C] text-[18px] leading-[27px] font-medium">
            <Link href="/" className="hover:text-green-900">Home</Link>
            <Link href="/coming-soon" className="hover:text-green-900">Programs</Link>
            <Link href="/coming-soon" className="hover:text-green-900">About us</Link>
            <Link href="/coming-soon" className="hover:text-green-900">Testimonials</Link>
            <Link href="/coming-soon" className="hover:text-green-900">News</Link>
            <Link href="/coming-soon" className="hover:text-green-900">Contact us</Link>
          </nav>

          {/* Join Us Button */}
          <div>
            <a
              href="#"
              className="bg-[#E2725B] text-white px-[20px] py-[11px] rounded-[60px] hover:bg-[#d85a44] transition text-[18px] leading-[27px] font-medium"
            >
              Join us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#fffdf6] border-t border-gray-200 px-[20px] py-[20px] space-y-4 absolute w-[100%] z-[99] mobile_nav ">
          <a href="#" className="block text-gray-700 hover:text-green-900">Home</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Programs</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">About us</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Testimonials</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">News</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Contact us</a>
        </div>
      )}
    </header>
  );
};

export default Header;
