"use client";

import React, { useState, useRef, useEffect } from "react";

const Iwt = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const scrollbarTrackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);

  const handleScroll = () => {
    const element = scrollContainerRef.current;
    if (element) {
      const totalScroll = element.scrollHeight - element.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (element.scrollTop / totalScroll) * 100;
        setScrollProgress(currentProgress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    startY.current = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
    startScrollTop.current = scrollContainerRef.current.scrollTop;
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const clientY = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
      const deltaY = clientY - startY.current;

      const element = scrollContainerRef.current;
      const track = scrollbarTrackRef.current;
      if (!element || !track) return;

      const thumbHeight = track.clientHeight * 0.2; // 20%
      const maxThumbScroll = track.clientHeight - thumbHeight;
      const maxContentScroll = element.scrollHeight - element.clientHeight;

      if (maxThumbScroll <= 0) return;

      const scrollRatio = maxContentScroll / maxThumbScroll;
      const newScrollTop = startScrollTop.current + deltaY * scrollRatio;

      element.scrollTop = newScrollTop;
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handlePointerMove, { passive: false });
      document.addEventListener("mouseup", handlePointerUp);
      document.addEventListener("touchmove", handlePointerMove, { passive: false });
      document.addEventListener("touchend", handlePointerUp);
    }

    return () => {
      document.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging]);

  const handleTrackClick = (e) => {
    if (isDragging) return;
    const track = scrollbarTrackRef.current;
    const element = scrollContainerRef.current;
    if (!track || !element) return;

    const thumbHeight = track.clientHeight * 0.2;
    const maxThumbScroll = track.clientHeight - thumbHeight;
    const maxContentScroll = element.scrollHeight - element.clientHeight;

    const trackRect = track.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;

    const currentThumbY = (scrollProgress / 100) * maxThumbScroll;

    if (clickY >= currentThumbY && clickY <= currentThumbY + thumbHeight) return;

    let newThumbY = clickY - thumbHeight / 2;
    if (newThumbY < 0) newThumbY = 0;
    if (newThumbY > maxThumbScroll) newThumbY = maxThumbScroll;

    const scrollRatio = maxContentScroll / maxThumbScroll;
    element.scrollTop = newThumbY * scrollRatio;
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
                className={`text-[14px] md:text-[16px] leading-[130%] text-[#2C2C2C] ${index === 0 ? "mb-[20px] md:mb-[40px]" : ""
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
        <div
          ref={scrollbarTrackRef}
          onClick={handleTrackClick}
          className="absolute right-2 top-0 bottom-0 w-[12px] bg-[#fff] border border-[#E8B156] rounded-[30px] overflow-hidden cursor-pointer"
        >
          <div
            onMouseDown={handlePointerDown}
            onTouchStart={handlePointerDown}
            className={`bg-[#E97451] w-full rounded-full duration-75 ease-out cursor-grab active:cursor-grabbing ${isDragging ? '' : 'transition-all'}`}
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
