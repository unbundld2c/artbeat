"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const REHeroSection = () => {
    return (
        <section className="max-w-[1500px] mx-auto">
            <div className="flex flex-col md:hidden bg-gradient-to-b from-[rgba(255,245,215,0.89)] to-white">
                <div className="w-full flex justify-center">
                    <Image
                        src={assets.RnEBanner}
                        alt="Children engaging in creative arts"
                        className="w-full max-w-[400px] h-auto object-contain"
                        unoptimized
                        priority
                    />
                </div>

                <div className="px-4 pb-8">
                    <h1 className="text-[28px] leading-[28px] md:text-[40px] md:leading-[40px] text-[#2C2C2C] font-[500] mb-6">
                        Creative arts are not a hobby but a high-impact, evidence-based tool for nurturing the whole child.
                    </h1>

                    <Link
                        href="/coming-soon"
                        className="bg-[#E2725B] inline-flex items-center text-white px-[20px] py-[12px] rounded-[60px] text-[16px] leading-[16px]"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex relative h-[600px] items-center bg-[linear-gradient(270deg,rgba(255,255,255,0)_34.24%,rgba(255,245,215,0.89)_47.03%)]">
                <div className="relative pl-[60px] max-w-[700px] z-10">
                    <h1 className="text-[52px] leading-[52px] text-[#2C2C2C] font-[500] mb-[36px]">
                        Creative arts are not a hobby but a high-impact, evidence-based tool for nurturing the whole child.
                    </h1>

                    <Link
                        href="/coming-soon"
                        className="bg-[#E2725B] inline-flex items-center text-white px-[20px] py-[12px] rounded-[60px] text-[18px] leading-[18px]"
                    >
                        Learn More
                    </Link>
                </div>

                <div className="absolute right-0 top-0 h-full flex items-center">
                    <Image
                        src={assets.RnEBanner}
                        alt="Children engaging in creative arts"
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
