"use client";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const soundscapeData = {
    heading: "What is Soundscape Mapping?",
    subheading: "A soundscape is the full acoustic environment of a location, how it is heard and interpreted by the people who live there. Our mapping process is a simple, methodical way of observing the world through sound, focusing on three general categories:",
    cards: [
        {
            img: assets.EchoesSoundscape1,
            title: "Geophony (Nature Sound)",
            subtitle: "Wind, water, and local flora/fauna"
        },
        {
            img: assets.EchoesSoundscape2,
            title: "Biophony (Animal Sound)",
            subtitle: "Birds, insects, and other creatures"
        },
        {
            img: assets.EchoesSoundscape3,
            title: "Anthropophony (Human sound)",
            subtitle: "Speech, work, traffic, and community activities"
        }
    ],
    footerText: "We are primarily interested in the Anthropophony of our target regions—the sounds that define the community—to make sure ArtBeat's presence is always relevant and connected."
};

const SoundscapeMappingSection = () => {
    return (
        <section className="max-w-[1500px] mx-auto pt-[40px] md:pt-0 md:px-[60px] px-[20px]">
            <h2 className="text-center mb-[16px]">{soundscapeData.heading}</h2>

            <p className="text-center text-[#2C2C2C] md:text-[20px] text-[16px] leading-[150%]">
                {soundscapeData.subheading}
            </p>

            <div className="flex md:flex-row flex-row md:gap-[40px] gap-[20px] mt-[40px] overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory scroll-smooth pb-[10px]">
                {soundscapeData.cards.map((card, idx) => (
                    <div key={idx} className="flex-shrink-0 md:flex-1 w-[280px] md:w-auto flex flex-col items-center text-center snap-center">
                        <div className="w-full flex justify-center">
                            <Image
                                src={card.img}
                                alt={card.title}
                                unoptimized
                                className="w-auto max-h-[280px] md:max-h-[320px] object-contain"
                            />
                        </div>

                        <h3 className="text-[#2C2C2C] font-bold md:text-[20px] text-[16px] leading-[130%] mt-[16px]">
                            {card.title}
                        </h3>

                        <p className="text-[#2C2C2C] font-normal md:text-[16px] text-[14px] leading-[150%] mt-[4px]">
                            {card.subtitle}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer Text */}
            <p className="text-center text-[#2C2C2C] md:text-[20px] text-[16px] leading-[150%] mt-[40px]">
                {soundscapeData.footerText}
            </p>
        </section>
    );
};

export default SoundscapeMappingSection;
