"use client";
import React, { useEffect } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const WhyCreativeArts = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animated-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".counter-child")?.classList.add("animated-text-translate");
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      elements.forEach((item) => {
        let rect = item.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          item.querySelector(".counter-child")?.classList.remove("animated-text-translate");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="max-w-[1500px] mx-auto  px-[20px] md:px-[60px]">
      <div className="text-center bg-[#FFFCF7] border-1 border-[#FFEDCE] rounded-[40px] md:px-[40px] px-[12px] md:py-[40px] py-[24px]">
        {/* Heading */}
        <h2 className="mb-[40px]">Why Creative Arts for Child Well-being?</h2>

        {/* Grid Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-[80px] gap-[16px]">

          {/* Item 1 */}
          <div className="flex flex-col items-center text-left md:gap-[20px] gap-[12px]">
            <Image
              src={assets.Creative1}
              alt="Mental Health"
              width={250}
              height="auto"
              unoptimized
            />
            <div className="bottom_txt">
              <div className="animated-text overflow-hidden md:h-[42px] h-[24px]">
                <h3 className="counter-child md:text-center text-left text-[#E2725B] md:text-[42px] md:leading-[42px] text-[24px] leading-[24px] font-bold flex flex-col ">
                  <span>5</span>
                  <span>15</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35</span>
                  <span>45</span>
                  <span>50%</span>
                </h3>
              </div>
              <p className="text-[#2C2C2C] md:text-[16px] md:leading-[24px] text-[12px] leading-[18px] font-medium mt-[4px]">
                of lifelong mental illnesses begin before age 14 (WHO)
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-left md:gap-[20px] gap-[12px]">
            <Image
              src={assets.Creative2}
              alt="Developmental Stunting"
              width={250}
              height="auto"
              unoptimized
            />
            <div className="bottom_txt">
              <div className="animated-text overflow-hidden md:h-[42px] h-[24px]">
                <h3 className="counter-child md:text-center text-left text-[#E2725B] md:text-[42px] md:leading-[42px] text-[24px] leading-[24px] font-bold flex flex-col">
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35%</span>
                </h3>
              </div>
              <p className="text-[#2C2C2C] md:text-[16px] md:leading-[24px] text-[12px] leading-[18px]  font-medium mt-[4px]">
                of children under 5 years in India suffer developmental stunting. (NFHS-5, 2019-21)
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-left md:gap-[20px] gap-[12px]">
            <Image
              src={assets.Creative3}
              alt="Juvenile Offences"
              width={250}
              height="auto"
              unoptimized
            />
            <div className="bottom_txt">
              <div className="animated-text overflow-hidden md:h-[42px] h-[24px]">
                <h3 className="counter-child md:text-center text-left text-[#E2725B] md:text-[42px] md:leading-[42px] text-[24px] leading-[24px] font-bold flex flex-col">
                  <span>5</span>
                  <span>15</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35</span>
                  <span>45</span>
                  <span>50%</span>
                </h3>
              </div>
              <p className="text-[#2C2C2C] md:text-[16px] md:leading-[24px] text-[12px] leading-[18px]   font-medium mt-[4px]">
                of juvenile apprehensions were for violent offences (NCRB, 2022)
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-left md:gap-[20px] gap-[12px]">
            <Image
              src={assets.Creative4}
              alt="Literacy"
              width={250}
              height="auto"
              unoptimized
            />
            <div className="bottom_txt">
              <div className="animated-text overflow-hidden md:h-[42px] h-[24px]">
                <div className="flex md:justify-center justify-start">
                  <h3 className="counter-child md:text-center text-left text-[#E2725B] md:text-[42px] md:leading-[42px] text-[24px] leading-[24px] font-bold flex flex-col">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                  </h3>
                  <h3 className="text-center text-[#E2725B] md:text-[42px] md:leading-[42px] text-[24px] leading-[24px]  font-bold">/10</h3>
                </div>
              </div>
              <p className="text-[#2C2C2C] md:text-[16px] md:leading-[24px] text-[12px] leading-[18px]  font-medium mt-[4px]">
                children in low-income settings struggle with basic literacy by age 10. (UNESCO)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCreativeArts;
