"use client";
import { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu structure
  const navigationMenu = [
    {
      title: "About Us",
      items: [
        { label: "Our Story", href: "/about-us" },
        { label: "Reports and Financials", href: "/reports" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Programs",
      items: [
        { label: "Core Concepts", href: "/programs" },
        { label: "Aaroh", href: "/programs#aaroh" },
        { label: "Anand", href: "/programs#anand" },
        { label: "Aakaar", href: "/programs#aakaar" },
        { label: "Akshar", href: "/programs#akshar" },
        { label: "Echoes", href: "/echoes" },
      ],
    },
    {
      title: "Impact",
      items: [
        { label: "Overview", href: "/impacts" },
        { label: "Research and Evidence", href: "/research-evidence" },
      ],
    },
    {
      title: "Collaborate",
      items: [
        { label: "Contact Us", href: "/contact-us" },
        { label: "Partners", href: "/partners" },
      ],
    },
  ];

  return (
    <header className="bg-[#FFF9EE] relative z-50">
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
            <Link href="/">
              <Image src={assets.logo} alt="artbeat" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[44px] text-[#2C2C2C] text-[18px] leading-[27px] font-medium">
            {navigationMenu.map((menu, index) => (
              <DropdownMenu
                key={index}
                title={menu.title}
                items={menu.items}
              />
            ))}
          </nav>

          {/* Join Us Button */}
          <div>
            <Link
              href="/contact-us"
              className="bg-[#E2725B] text-white px-[20px] py-[11px] rounded-[60px] hover:bg-[#d85a44] transition text-[18px] leading-[27px] font-medium"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#fffdf6] border-t border-gray-200 px-[20px] py-[20px] space-y-4 absolute w-[100%] z-[99] mobile_nav">
          {navigationMenu.map((menu, index) => (
            <DropdownMenu
              key={index}
              title={menu.title}
              items={menu.items}
              isMobile={true}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
