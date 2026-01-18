"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({ title, mainLink, items, isMobile = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const closeTimeoutRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen && !isMobile) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, [isOpen, isMobile]);

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    if (isMobile) {
        return (
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <span className="flex-1 text-gray-700 py-2 font-medium">
                        {title}
                    </span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-2 py-2"
                    >
                        <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 text-gray-700 ${isOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="pl-4 space-y-2 py-2">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="block text-gray-600 hover:text-green-900 text-sm py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop dropdown
    return (
        <div
            ref={dropdownRef}
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="flex items-center gap-1 hover:text-green-900 transition-colors"
            >
                <span>{title}</span>
                <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 min-w-[200px] z-[100] ${isOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="py-2">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2.5 text-[16px] text-gray-700 hover:bg-[#FFF9EE] hover:text-green-900 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
