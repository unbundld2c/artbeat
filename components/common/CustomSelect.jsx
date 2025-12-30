"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CustomSelect = ({
    options = [],
    value,
    onChange,
    placeholder = "Select an option",
    className = "",
    label = "",
    required = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);
    const displayText = selectedOption ? selectedOption.label : placeholder;

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {label && (
                <label className="block text-[16px] text-[#2C2C2C] font-semibold mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative w-full">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-between w-full h-[42px] px-4 bg-white transition-all duration-300 text-left ${isOpen
                        ? 'rounded-t-[20px] border-2 border-b-0 border-[#E2725B] shadow-md'
                        : 'rounded-[52px] border border-gray-300 hover:border-gray-400'
                        }`}
                >
                    <span className={`text-[16px] ${!selectedOption ? 'text-gray-400' : 'text-[#2C2C2C]'}`}>
                        {displayText}
                    </span>
                    <ChevronDown
                        className={`w-5 h-5 text-[#E2725B] transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''
                            }`}
                    />
                </button>

                <div
                    className={`absolute z-50 w-full grid transition-[grid-template-rows,opacity,box-shadow] duration-500 ease-in-out bg-white ${isOpen
                        ? 'grid-rows-[1fr] opacity-100 border-2 border-t-0 border-[#E2725B] rounded-b-[20px] shadow-md'
                        : 'grid-rows-[0fr] opacity-0 border-0'
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="max-h-[240px] overflow-y-auto">
                            {options.map((option, index) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`w-full px-4 py-3 text-left text-[16px] transition-colors duration-200 ${value === option.value
                                        ? 'bg-[#E2725B] text-white font-medium'
                                        : 'text-[#2C2C2C] hover:bg-gray-50'
                                        } ${index === options.length - 1 ? 'rounded-b-[18px]' : ''}`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;
