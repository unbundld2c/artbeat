"use client";

import React, { useState, useRef, useEffect } from "react";

const Iwt = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update the custom scrollbar thumb position
  const handleScroll = () => {
    const element = scrollContainerRef.current;
    if (element) {
      const totalScroll = element.scrollHeight - element.clientHeight;
      const currentProgress = (element.scrollTop / totalScroll) * 100;
      setScrollProgress(currentProgress);
    }
  };

  if (!data) return null;

  return (
    <div className="flex flex-col md:flex-row min-h-[532px] w-full  overflow-hidden text-[#5A4B41] mb-[60px] gap-[60px]">
      {/* Left Section: Illustration */}
      <div className="flex flex-[0_0_calc(41%-30px)]">
        <img
          src={data.illustrationUrl.src}
          alt="Program Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex flex-[0_0_calc(59%-30px)] relative">
        {/* Scrollable Area */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 pr-[60px] overflow-y-auto max-h-[532px] custom-scrollbar"
        >
          <header className="mb-8">
            <h2 className="text-[24px]! md:text-[48px]! font-normal text-[#E2725B]! mb-2 leading-1">
              {data.title}
            </h2>
            <p className="text-[16px] md:text-[20px] font-normal mb-[20px] md:mb-[40px] leading-[150%] text-[#2C2C2C]">
              {data.description}
            </p>
          </header>

          {data.sections.map((section, index) => (
            <section key={index} className="mb-8">
              <p className="text-[16px] md:text-[20px] font-bold mb-1 text-[#2C2C2C] leading-[130%]">
                {section.heading}
              </p>
              <p
                className={`text-[14px] md:text-[16px] leading-[130%] text-[#2C2C2C] ${
                  index === 0 ? "mb-[20px] md:mb-[40px]" : ""
                }`}
              >
                {section.content}
              </p>

              {section.listItems && (
                <ul className="space-y-4">
                  {section.listItems.map((item, i) => (
                    <li
                      key={i}
                      className="mb-0"
                    >
                      <span className="text-[#2C2C2C] text-[16px]  mr-2 mt-0.5">•</span>
                      <span className="text-[14px] md:text-[16px] leading-[130%] text-[#2C2C2C]">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Dynamic Custom Scrollbar */}
        <div className="absolute right-2 top-0 bottom-0 w-[12px] bg-[#fff] border border-[#E8B156] rounded-[30px] overflow-hidden">
          <div
            className="bg-[#E97451] w-full rounded-full transition-all duration-75 ease-out"
            style={{
              height: "20%",
              transform: `translateY(${scrollProgress * 4}%)`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </div>
  );
};

export default Iwt;
