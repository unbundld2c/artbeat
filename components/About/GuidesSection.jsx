"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { assets } from "@/Assets/assets";

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
        desc: "We focus on practical, scalable, and comprehensive implementation that meets the needs of diverse children and the educators involved.",
    },
    {
        image: assets.Guide5,
        title: "Child Voice and Agency",
        desc: "Children are not passive recipients. We create space for their voices, choices, and creative direction within each Artbeat session.",
    },
];

const GuidesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length;
        setActiveIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % sliderItems.length;
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        if (sliderRef.current && sliderRef.current.children[activeIndex]) {
            sliderRef.current.children[activeIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [activeIndex]);

    return (
        <section className="bg-white py-[40px] md:py-[50px]">
            <div className="max-w-[1500px] mx-auto px-[12px] md:px-[43px]">
                <h2 className="text-center text-[28px] md:text-[36px] font-semibold mb-4">
                    What Guides What We Build
                </h2>
                <p className="text-center text-[#2C2C2C] text-[16px] md:text-[18px] mx-auto mb-9">
                    Artbeat is distinguished by being neither a clinical therapy nor a traditional art class but a child-centric well-being program that
                    integrates music, visual arts, writing, and storytelling with contemporary research and endorsed practices in child development,
                    social-emotional learning (SEL), and trauma-informed care in India. Artbeat draws on current evidence and recognized educational
                    frameworks as well as learnings from leading initiatives in the country to shape its holistic approach to children’s well-being.
                </p>
            </div>

            <div className="w-full mx-auto md:pl-[1px]">
                <div className="w-full overflow-x-auto no-scrollbar">
                    <div ref={sliderRef} className="flex gap-6 md:gap-8 pl-[20px] md:pl-[43px]">
                        {sliderItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#FFF3F0] flex-shrink-0 w-[260px] sm:w-[300px] md:w-[330px] rounded-2xl p-4"
                            >
                                <div className="rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto"
                                        width={320}
                                        height={220}
                                        unoptimized
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-[16px] md:text-[18px] font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] text-[#2C2C2C] font-normal">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-8 gap-4">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border-2 border-[#E2725B] text-[#E2725B] hover:bg-[#FFEDCE]"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={22} />
                </button>
                <div className="flex items-center gap-2">
                    {sliderItems.map((_, i) => (
                        <button key={i} onClick={() => setActiveIndex(i)}>
                            {i === activeIndex ? (
                                <div className="w-3 h-3 bg-[#E2725B] rounded-full"></div>
                            ) : (
                                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border-2 border-[#E2725B] text-[#E2725B] hover:bg-[#FFEDCE]"
                    aria-label="Next slide"
                >
                    <ChevronRight size={22} />
                </button>
            </div>
        </section>
    );
};

export default GuidesSection;
