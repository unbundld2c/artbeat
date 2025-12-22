"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BenefitsAccordion = ({ benefits }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-[#FFF9F0]">
      <h2 className="text-[#E97451] text-2xl font-bold mb-6">Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="flex flex-col">
              {/* Header / Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex items-center justify-between w-full p-4 bg-white transition-colors duration-300 text-left border border-gray-200 ${
                  isOpen ? 'rounded-t-lg' : 'rounded-lg'
                }`}
              >
                <span className="font-semibold text-[#5A4B41]">{item.title}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-500 ease-in-out ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Content Area using CSS Grid for perfect smoothness */}
              <div 
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out bg-white border-x border-gray-200 ${
                  isOpen 
                    ? 'grid-rows-[1fr] opacity-100 border-b rounded-b-lg' 
                    : 'grid-rows-[0fr] opacity-0 border-b-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 pt-0">
                    <ul className="space-y-3 py-2">
                      {item.content.map((bullet, i) => (
                        <li key={i} className="text-sm text-[#7A6B61] flex items-start">
                          <span className="mr-2 text-[#E97451] font-bold">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsAccordion;