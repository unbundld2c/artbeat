"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom Icons
const CustomPrevIcon = ({ onClick }) => (
    <button onClick={onClick} className="cursor-pointer hover:opacity-80 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" fill="#FFEDCE" />
            <rect x="-0.5" y="0.5" width="39" height="39" rx="19.5" transform="matrix(-1 0 0 1 39 0)" stroke="#E2725B" />
            <path d="M12.6095 20.7896C12.9629 22.043 14.6334 22.9288 17.9742 24.7004C21.204 26.4127 22.8188 27.2691 24.1202 26.9249C24.6582 26.7825 25.1484 26.5123 25.5438 26.1401C26.5 25.2396 26.5 23.493 26.5 20C26.5 16.507 26.5 14.7603 25.5438 13.8599C25.1484 13.4876 24.6582 13.2174 24.1202 13.0751C22.8188 12.7309 21.204 13.5871 17.9742 15.2996C14.6334 17.0712 12.9629 17.957 12.6095 19.2104C12.4637 19.7278 12.4637 20.2722 12.6095 20.7896Z" fill="white" stroke="#E2725B" strokeLinejoin="round" />
        </svg>
    </button>
);
const CustomNextIcon = ({ onClick }) => (
    <button onClick={onClick} className="cursor-pointer hover:opacity-80 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FFEDCE" />
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E2725B" />
            <path d="M27.3905 20.7896C27.0371 22.043 25.3666 22.9288 22.0258 24.7004C18.796 26.4127 17.1812 27.2691 15.8798 26.9249C15.3418 26.7825 14.8516 26.5123 14.4562 26.1401C13.5 25.2396 13.5 23.493 13.5 20C13.5 16.507 13.5 14.7603 14.4562 13.8599C14.8516 13.4876 15.3418 13.2174 15.8798 13.0751C17.1812 12.7309 18.796 13.5871 22.0258 15.2996C25.3666 17.0712 27.0371 17.957 27.3905 19.2104C27.5363 19.7278 27.5363 20.2722 27.3905 20.7896Z" fill="white" stroke="#E2725B" strokeLinejoin="round" />
        </svg>
    </button>
);

const stakeholderData = [
    {
        bg: assets.orangeBgShape,
        title: "Parents",
        text: "Act as partners in their child's development by co-creating activities and engaging with the program.",
        img: assets.StakeholderParents
    },
    {
        bg: assets.greenBgShape,
        title: "Teachers",
        text: "Children learn to identify and manage their emotions through creative art.",
        img: assets.StakeholderTeachers
    },
    {
        bg: assets.yellowBgShape,
        title: "Schools",
        text: "Provides the safe, physical space essential for the program's implementation.",
        img: assets.StakeholderSchools
    },
    {
        bg: assets.blueBgShape,
        title: <>Community, Peers, and <br /> Environment</>,
        text: "Provide a living context for the child's development, with interactions woven into the program's activities and outcomes.",
        img: assets.StakeholderCommunity
    }
];

export default function StakeholderRoles() {
    // Pagination State
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const totalDots = stakeholderData.length;
    const updateState = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };
    const handlePrev = () => swiperRef.current && swiperRef.current.slidePrev();
    const handleNext = () => swiperRef.current && swiperRef.current.slideNext();
    const goToDot = (i) => swiperRef.current && swiperRef.current.slideToLoop(i);
    return (
        <section className="max-w-[1500px] mx-auto px-[0] md:px-[60px] mt-[40px] md:mt-[60px] mb-[40px] md:mb-[92px]">
            <div className="max-md:px-[16px] text-center">
                <h2 className="text-[36px] md:text-[48px] lh-[100%] text-[#2C2C2C] font-regular mb-[8px]">
                    Stakeholder Roles
                </h2>
                <p className="hidden md:block text-[16px] md:text-[20px] text-[#2C2C2C] leading-[150%] font-normal mb-[20px] md:mb-[40px]">
                    We believe that every stakeholder—including teachers, parents, schools,
                    and the wider community—is a crucial partner in a child's holistic development.
                </p>
            </div>

            <div className="hidden md:flex flex-row items-center justify-between gap-x-4 lg:gap-x-8">

                <div className="flex flex-col gap-y-[10px] w-full md:w-1/3 max-w-[480px]">
                    <SideCard
                        bg={assets.orangeBgShape}
                        title="Parents"
                        text="Act as partners in their child's development by co-creating activities and engaging with the program."
                        img={assets.StakeholderParents}
                    />
                    <SideCard
                        bg={assets.yellowBgShape}
                        title="Schools"
                        text="Provides the safe, physical space essential for the program's implementation."
                        img={assets.StakeholderSchools}
                        className="pl-4"
                    />
                </div>

                <div className="flex flex-col items-center text-center gap-6 w-full md:w-1/3 max-w-[350px] shrink-0">
                    <div className="relative w-full aspect-square max-w-[280px]">
                        <Image
                            src={assets.StakeholderChild}
                            alt="Child"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <div className="space-y-2">
                        <p
                            className="text-[#5A5A5A]"
                            style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '130%',
                                textAlign: 'center'
                            }}
                        >
                            Artbeat reframes the child from passive beneficiaries to active co-creators in their development.
                        </p>
                        <div
                            className="text-[#2C2C2C]"
                            style={{
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '130%',
                                textAlign: 'center'
                            }}
                        >
                            <p>Their role:</p>
                            <p>1) Active Participation</p>
                            <p>2) Willingness to Explore</p>
                            <p>3) Respect for space and peers</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[10px] w-full md:w-1/3 max-w-[480px]">
                    <SideCard
                        bg={assets.greenBgShape}
                        title="Teachers"
                        text="Children learn to identify and manage their emotions through creative art."
                        img={assets.StakeholderTeachers}
                        imageRightAlign
                        textAlign="left"
                    />
                    <SideCard
                        bg={assets.blueBgShape}
                        title={<>Community, Peers, and <br /> Environment</>}
                        text="Provide a living context for the child's development, with interactions woven into the program's activities and outcomes."
                        img={assets.StakeholderCommunity}
                        imageRightAlign
                        textAlign="left"
                    />
                </div>
            </div>

            <div className="flex md:hidden flex-col items-center w-full">

                <div className="flex flex-col items-center text-center gap-4 w-full px-4 mb-8">
                    <div className="relative w-full h-[280px] max-w-[280px]">
                        <Image
                            src={assets.StakeholderChild}
                            alt="Child"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <div className="space-y-2 max-w-[320px]">
                        <p
                            className="text-[#5A5A5A]"
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '140%',
                                textAlign: 'center'
                            }}
                        >
                            Artbeat reframes the child from passive beneficiaries to active co-creators in their development.
                        </p>
                        <div
                            className="text-[#2C2C2C]"
                            style={{
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '140%',
                                textAlign: 'center'
                            }}
                        >
                            <p>Their role:</p>
                            <p>1) Active Participation</p>
                            <p>2) Willingness to Explore</p>
                            <p>3) Respect for space and peers</p>
                        </div>
                    </div>
                </div>

                <div className="w-full relative px-0 ">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        loop={false}
                        centeredSlides={false}
                        speed={600}
                        spaceBetween={16}
                        slidesOffsetBefore={16}
                        slidesOffsetAfter={16}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.15,
                                spaceBetween: 16,
                            },
                            360: {
                                slidesPerView: 1.25,
                                spaceBetween: 16,
                            },
                            420: {
                                slidesPerView: 1.35,
                                spaceBetween: 18,
                            },
                            480: {
                                slidesPerView: 1.45,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1.8,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 24,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => updateState(swiper)}
                        className="w-full pb-4"
                    >

                        {stakeholderData.map((data, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <SideCard
                                    bg={data.bg}
                                    title={data.title}
                                    text={data.text}
                                    textAlign="left"
                                    centeredContent={true}
                                    className="max-w-[324px] w-full min-h-[197px] p-6 mx-auto"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Controls */}
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <CustomPrevIcon onClick={handlePrev} />
                        <div className="flex items-center gap-x-6">
                            {Array.from({ length: totalDots }).map((_, i) => (
                                <button key={i} onClick={() => goToDot(i)}>
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === i ? "bg-[#E2725B]" : "bg-gray-300"}`}></div>
                                </button>
                            ))}
                        </div>
                        <CustomNextIcon onClick={handleNext} />
                    </div>
                </div>
            </div>
        </section>
    );
}
function SideCard({ bg, title, text, img, className = "", imageRightAlign = false, textAlign = "center", centeredContent = false }) {
    const alignClass = textAlign === "left" ? "items-start text-left" : "items-center text-center";
    const justifyClass = centeredContent ? "justify-center" : "";
    return (
        <div className={`relative w-full flex flex-col justify-center min-h-[320px] p-6 md:p-10 ${alignClass} ${className}`}>
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                    src={bg}
                    alt=""
                    fill
                    className="object-fill"
                    unoptimized
                />
            </div>
            <div className={`relative z-10 flex flex-col h-full w-full ${alignClass} ${justifyClass}`}>
                <h3 className="font-bold text-[20px] md:text-[22px] leading-[130%] text-[#2C2C2C] mb-2 break-words !whitespace-normal">
                    {title}
                </h3>
                <p className={`text-[14px] md:text-[16px] leading-[150%] font-normal text-[#2C2C2C] mb-2 ${centeredContent ? '' : 'flex-grow'}`}>
                    {text}
                </p>
                {img && (
                    <div className={`relative w-full flex ${imageRightAlign ? 'justify-end pr-4' : 'justify-center'}`}>
                        <Image
                            src={img}
                            alt={typeof title === 'string' ? title : "icon"}
                            className="object-contain w-auto h-auto max-h-[160px]"
                            unoptimized
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
