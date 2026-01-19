"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const REHeroSection = ({
    title = "Creative arts are not a hobby but a high-impact, evidence-based tool for nurturing the whole child.",
    description = null,
    buttonText = "Learn More",
    buttonLink = "/coming-soon",
    imageSrc = null,
    imageAlt = "Children engaging in creative arts",
    bgMobile = "bg-gradient-to-b from-[rgba(255,245,215,0.89)] to-white",
    bgDesktop = "bg-[linear-gradient(270deg,rgba(255,255,255,0)_34.24%,rgba(255,245,215,0.89)_47.03%)]",
}) => {
    const heroImage = imageSrc || assets.RnEBanner;

    return (
        <section className="w-full overflow-hidden">
            <div className={`flex flex-col md:hidden ${bgMobile}`}>
                <div className="w-full flex justify-center">
                    <Image
                        src={heroImage}
                        alt={imageAlt}
                        className="w-full max-w-[400px] h-auto object-contain"
                        unoptimized
                        priority
                    />
                </div>

                <div className="px-4 pb-8">
                    <h1 className="text-[28px] leading-[28px] md:text-[40px] md:leading-[40px] text-[#2C2C2C] font-[500]">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-[20px] md:text-[30px] leading-[150%] text-[#2C2C2C] font-[400] mt-2">
                            {description}
                        </p>
                    )}

                    <div className="mt-6">
                        <Link
                            href={buttonLink}
                            className="bg-[#E2725B] inline-flex items-center text-white px-[20px] py-[12px] rounded-[60px] text-[16px] leading-[16px] mt-6"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`hidden md:flex relative h-[600px] items-center ${bgDesktop}`}>
                <div className="relative pl-[60px] max-w-[700px] z-10">
                    <h1 className="text-[52px] leading-[52px] text-[#2C2C2C] font-[500]">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-[20px] md:text-[30px] leading-[150%] text-[#2C2C2C] font-[400] mt-2">
                            {description}
                        </p>
                    )}
                    
                    <div className="mt-6">
                        <Link
                            href={buttonLink}
                            className="bg-[#E2725B] inline-flex items-center text-white px-[20px] py-[12px] rounded-[60px] text-[18px] leading-[18px]"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>

                <div className="absolute right-0 top-0 h-full flex items-center">
                    <Image
                        src={heroImage}
                        alt={imageAlt}
                        className="h-full w-auto object-contain"
                        unoptimized
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default REHeroSection;
