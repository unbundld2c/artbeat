"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { assets } from "@/Assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

const CustomPrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" fill="#FFEDCE" />
    <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" stroke="#E2725B" />
    <path d="M12.6095 20.7896C12.9629 22.043 14.6334 22.9288 17.9742 24.7004C21.204 26.4127 22.8188 27.2691 24.1202 26.9249C24.6582 26.7825 25.1484 26.5123 25.5438 26.1401C26.5 25.2396 26.5 23.493 26.5 20C26.5 16.507 26.5 14.7603 25.5438 13.8599C25.1484 13.4876 24.6582 13.2174 24.1202 13.0751C22.8188 12.7309 21.204 13.5871 17.9742 15.2996C14.6334 17.0712 12.9629 17.957 12.6095 19.2104C12.4637 19.7278 12.4637 20.2722 12.6095 20.7896Z" fill="white" stroke="#E2725B" strokeLinejoin="round" />
  </svg>
);

const CustomNextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FFEDCE" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E2725B" />
    <path d="M27.3905 20.7896C27.0371 22.043 25.3666 22.9288 22.0258 24.7004C18.796 26.4127 17.1812 27.2691 15.8798 26.9249C15.3418 26.7825 14.8516 26.5123 14.4562 26.1401C13.5 25.2396 13.5 23.493 13.5 20C13.5 16.507 13.5 14.7603 14.4562 13.8599C14.8516 13.4876 15.3418 13.2174 15.8798 13.0751C17.1812 12.7309 18.796 13.5871 22.0258 15.2996C25.3666 17.0712 27.0371 17.957 27.3905 19.2104C27.5363 19.7278 27.5363 20.2722 27.3905 20.7896Z" fill="white" stroke="#E2725B" strokeLinejoin="round" />
  </svg>
);

const sliderItems = [
  {
    image: assets.Guide1,
    title: "Playful, Joyful Learning",
    desc: "Every Artbeat experience is designed with the conviction that all learning should be engaging, meaningful, and fun. Our play-based approach celebrates curiosity, creativity, and the natural joy children find in exploring music and the arts.",
  },
  {
    image: assets.Guide2,
    title: <>Research-Driven & Evidence-  <br /> Informed</>,
    desc: "Each program is rooted in the latest global research and best practice, evolving with new insights to ensure a positive and lasting impact for every child.",
  },
  {
    image: assets.Guide3,
    title: "Equity & Safety First",
    desc: "Beyond \"average effects,\" we are committed to supporting every learner—ensuring our approach is safe, trauma-aware, and free from unintended harm or exclusion.",
  },
  {
    image: assets.Guide4,
    title: "Excellence in Execution",
    desc: "We focus on thoughtful, high-quality implementation, providing comprehensive training and balancing the needs of facilitators and organizations so artful experiences are sustainable for all involved.",
  },
  {
    image: assets.Guide5,
    title: "Child Voice and Agency",
    desc: "Artbeat’s modules are age-appropriate, opt-in, and culturally relevant—adapting to local contexts, valuing every child’s background, and always respecting personal choice and readiness.",
  },
];

const GuidesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(0);
  const swiperRef = useRef(null);

  const updateState = (swiper) => {
    const idx = typeof swiper?.snapIndex === "number" ? swiper.snapIndex : (swiper?.activeIndex || 0);
    setActiveIndex(idx);
    setTotalDots(Array.isArray(swiper?.snapGrid) ? swiper.snapGrid.length : 0);
  };

  const handlePrev = () => swiperRef.current && swiperRef.current.slidePrev();
  const handleNext = () => swiperRef.current && swiperRef.current.slideNext();
  const goToDot = (i) => swiperRef.current && swiperRef.current.slideTo(i);

  return (
    <section className="bg-white py-[40px] md:py-[50px]">
      <div className="max-w-[1500px] mx-auto px-[16px] md:px-[60px]">
        <h2 className="text-center text-[36px] md:text-[48px] font-semibold mb-4">
          What Guides What We Build
        </h2>
        <p className="text-center text-[#2C2C2C] text-[16px] md:text-[20px] mx-auto">
          Artbeat is distinguished by being neither a clinical therapy nor a traditional art class but a child-centric well-being program that
          integrates music, visual arts, writing, and storytelling with contemporary research and endorsed practices in child development,
          social-emotional learning (SEL), and trauma-informed care in India. Artbeat draws on current evidence and recognized educational
          frameworks as well as learnings from leading initiatives in the country to shape its holistic approach to children’s well-being.
        </p>
      </div>

      <div className="w-full mx-auto pt-[20px] md:pt-[40px]">
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesOffsetBefore={16}
            breakpoints={{
              768: { spaceBetween: 40, slidesOffsetBefore: 60 },
            }}
            slidesPerView={"auto"}
            centeredSlides={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateState(swiper);
            }}
            onResize={(swiper) => updateState(swiper)}
            onBreakpoint={(_, swiper) => updateState(swiper)}
            onSlidesLengthChange={(swiper) => updateState(swiper)}
            onSlideChange={(swiper) => updateState(swiper)}
            wrapperClass="items-stretch"
            className="h-[445px] md:h-[530px]"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index} className="!w-[280px] md:!w-[380px]">
                <div className="bg-[#FFF3F0] rounded-[20px] p-5 h-full flex flex-col">
                  <div className="rounded-xl overflow-hidden mb-[12px] h-[200px] md:h-[300px]">
                    <Image
                      src={item.image}
                      alt={typeof item.title === "string" ? item.title : "Guide"}
                      className="object-cover w-full h-full"
                      width={340}
                      height={300}
                      unoptimized
                    />
                  </div>

                  <div className="space-y-[4px] flex-1 min-h-0 overflow-hidden">
                    <h3 className="text-[16px] md:text-[20px] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[#2C2C2C] overflow-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center items-center pt-[20px] md:pt-[40px] gap-x-5">
        <button onClick={handlePrev}>
          <CustomPrevIcon />
        </button>

        <div className="flex items-center gap-x-5 gap-y-4">
          {Array.from({ length: Math.max(totalDots, 1) }).map((_, i) => (
            <button key={i} onClick={() => goToDot(i)} aria-label={`Go to slide ${i + 1}`}>
              <div className={`w-3 h-3 rounded-full ${activeIndex === i ? "bg-[#E2725B]" : "bg-gray-300"}`}></div>
            </button>
          ))}
        </div>

        <button onClick={handleNext}>
          <CustomNextIcon />
        </button>
      </div>
    </section>
  );
};


  const handlePrev = () => swiperRef.current && swiperRef.current.slidePrev();
  const handleNext = () => swiperRef.current && swiperRef.current.slideNext();
  const goToDot = (i) => swiperRef.current && swiperRef.current.slideTo(i);

  return (
    <section className="bg-white py-[40px] md:py-[50px]">
      <div className="max-w-[1500px] mx-auto px-[16px] md:px-[60px]">
        <h2 className="text-center text-[36px] md:text-[48px] font-semibold mb-4">
          What Guides What We Build
        </h2>
        <p className="text-center text-[#2C2C2C] text-[16px] md:text-[20px] mx-auto">
          Artbeat is distinguished by being neither a clinical therapy nor a traditional art class but a child-centric well-being program that
          integrates music, visual arts, writing, and storytelling with contemporary research and endorsed practices in child development,
          social-emotional learning (SEL), and trauma-informed care in India. Artbeat draws on current evidence and recognized educational
          frameworks as well as learnings from leading initiatives in the country to shape its holistic approach to children’s well-being.
        </p>
      </div>

      <div className="w-full mx-auto pt-[20px] md:pt-[40px]">
        <div className="w-full">
          <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  slidesOffsetBefore={16}
  breakpoints={{
    0: { slidesPerView: 1.3, spaceBetween: 20, slidesOffsetBefore: 16 },
    768: { slidesPerView: 3.4, spaceBetween: 40, slidesOffsetBefore: 60 },
  }}
  centeredSlides={false}
  slidesPerGroup={1}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    updateState(swiper);
  }}
  onSlideChange={(swiper) => updateState(swiper)}
  onResize={(swiper) => updateState(swiper)}
  onBreakpoint={(_, swiper) => updateState(swiper)}
  onSlidesLengthChange={(swiper) => updateState(swiper)}
  wrapperClass="items-stretch"
  className="h-[445px] md:h-[530px]"
>

            {sliderItems.map((item, index) => (
              <SwiperSlide key={index} className="!w-[280px] md:!w-[380px]">
                <div className="bg-[#FFF3F0] rounded-[20px] p-5 h-full flex flex-col">
                  <div className="rounded-xl overflow-hidden mb-[12px] h-[200px] md:h-[300px]">
                    <Image
                      src={item.image}
                      alt={typeof item.title === "string" ? item.title : "Guide"}
                      className="object-cover w-full h-full"
                      width={340}
                      height={300}
                      unoptimized
                    />
                  </div>

                  <div className="space-y-[4px] flex-1 min-h-0 overflow-hidden">
                    <h3 className="text-[16px] md:text-[20px] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[#2C2C2C] overflow-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center items-center pt-[20px] md:pt-[40px] gap-x-5">
        <button onClick={handlePrev}>
          <CustomPrevIcon />
        </button>

        <div className="flex items-center gap-x-5 gap-y-4">
          {Array.from({ length: Math.max(totalDots, 1) }).map((_, i) => (
            <button key={i} onClick={() => goToDot(i)} aria-label={`Go to slide ${i + 1}`}>
              <div className={`w-3 h-3 rounded-full ${activeIndex === i ? "bg-[#E2725B]" : "bg-gray-300"}`}></div>
            </button>
          ))}
        </div>

        <button onClick={handleNext}>
          <CustomNextIcon />
        </button>
      </div>
    </section>
  );
};

export default GuidesSection;