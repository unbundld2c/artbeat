"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const CareTechnologySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const cards = [
    {
      title: "Human Centric",
      desc: "We scale with tech but value the human touch from teachers and community support.",
      img: assets.CareTech1,
    },
    {
      title: "Tech Guided by Research",
      desc: "Aligned with trusted frameworks to ensure safe, ethical AI in learning.",
      img: assets.CareTech2,
    },
    {
      title: "Joyful & Play-Based",
      desc: "Learning through fun, creativity, and exploration for deeper engagement.",
      img: assets.CareTech3,
    },
  ];

  // Calculate active index on scroll
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.firstChild.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    // console.log("scrollLeft:", scrollLeft, "cardWidth:", cardWidth, "index:", index);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.firstChild.offsetWidth;
    // console.log("Scrolling to index:", index, "cardWidth:", cardWidth);
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

const handleNext = () => {
  const container = containerRef.current;
  if (!container || activeIndex >= cards.length - 1) return;
  const cardWidth = container.firstChild.offsetWidth;
  container.scrollTo({
    left: cardWidth * (activeIndex + 1),
    behavior: "smooth",
  });
};

const handlePrev = () => {
  const container = containerRef.current;
  if (!container || activeIndex <= 0) return;
  const cardWidth = container.firstChild.offsetWidth;
  container.scrollTo({
    left: cardWidth * (activeIndex - 1),
    behavior: "smooth",
  });
};


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-[1500px] mx-auto px-[0px] md:px-[60px] md:py-[50px] py-[20px] text-center overflow-hidden">
      <h2 className="max-md:px-[16px]">Scaling with Care & Technology</h2>

      <p className="text-[#2C2C2C] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-[400] pt-[16px] md:pb-[40px] pb-[20px] max-md:px-[16px]">
        At Artbeat, technology helps us reach more children, but the human touch always comes first...
      </p>

      <div
        ref={containerRef}
        className="max-md:px-[16px] no-scrollbar flex md:grid md:grid-cols-3 gap-[20px] md:gap-[60px] overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="cardCareTech flex flex-col rounded-[16px] md:rounded-[40px] snap-center shrink-0 w-full md:w-auto"
            style={{ background: "linear-gradient(180deg, #FFEDCE 0%, #FFFFFF 100%)" }}
          >
            <div className="w-full flex justify-center mb-4 md:h-[340px] h-[255px]">
              <Image
                src={card.img}
                alt={card.title}
                width="100%"
                height="auto"
                className="object-contain w-auto h-auto"
                unoptimized
              />
            </div>
            <h3 className="font-bold text-[16px] md:text-[20px] leading-[20px] md:leading-[26px] text-[#2C2C2C] text-left px-[16px] md:px-[19px]">
              {card.title}
            </h3>
            <p className="text-[#2C2C2C] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] font-[400] text-left px-[16px] md:px-[19px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-4 md:hidden ">
        {/* Left Button */}
        <div className="left-btn cursor-pointer" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" fill="#FFEDCE"/>
            <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" stroke="#E2725B"/>
            <path d="M12.6094 20.7896C12.9628 22.043 14.6334 22.9288 17.9742 24.7004C21.204 26.4127 22.8188 27.2691 24.1201 26.9249C24.6581 26.7825 25.1483 26.5123 25.5437 26.1401C26.4999 25.2396 26.4999 23.493 26.4999 20C26.4999 16.507 26.4999 14.7603 25.5437 13.8599C25.1483 13.4876 24.6581 13.2174 24.1201 13.0751C22.8188 12.7309 21.204 13.5871 17.9742 15.2996C14.6334 17.0712 12.9628 17.957 12.6094 19.2104C12.4636 19.7278 12.4636 20.2722 12.6094 20.7896Z" fill="white" stroke="#E2725B" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-[20px]">
          {cards.map((_, i) => (
            <button key={i} onClick={() => { setActiveIndex(i); scrollToIndex(i); }}>
              <div className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-[#E2725B]" : "bg-gray-300"}`}></div>
            </button>
          ))}
        </div>

        {/* Right Button */}
        <div className="right-btn cursor-pointer" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FFEDCE"/>
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E2725B"/>
            <path d="M27.3906 20.7896C27.0372 22.043 25.3666 22.9288 22.0258 24.7004C18.796 26.4127 17.1812 27.2691 15.8799 26.9249C15.3419 26.7825 14.8517 26.5123 14.4563 26.1401C13.5001 25.2396 13.5001 23.493 13.5001 20C13.5001 16.507 13.5001 14.7603 14.4563 13.8599C14.8517 13.4876 15.3419 13.2174 15.8799 13.0751C17.1812 12.7309 18.796 13.5871 22.0258 15.2996C25.3666 17.0712 27.0372 17.957 27.3906 19.2104C27.5364 19.7278 27.5364 20.2722 27.3906 20.7896Z" fill="white" stroke="#E2725B" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CareTechnologySection;
