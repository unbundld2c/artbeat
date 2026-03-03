"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const techAdvisors = [
    {
        id: 1,
        name: "Unbundl",
        title: "Digital Marketing, Design & Development Agency",
        imgSrc: assets.TechAdvisor1,
        linkedinUrl: "https://www.linkedin.com/company/unbundl/posts/?feedView=all",
        websiteUrl: "https://www.unbundl.com",
    },
    // {
    //     id: 2,
    //     name: "Swarsat K Nath",
    //     title: "AI Operations Lead @ Fortis Healthcare",
    //     imgSrc: assets.TechAdvisor2,
    //     linkedinUrl: "https://www.linkedin.com/in/swarsat-k-nath-4a13b315a/",
    // },
];

const TechAdvisorsSection = () => {
    return (
        <section className="max-w-[1500px] mx-auto px-[0px] md:px-[60px] py-[50px] md:py-[50px]">
            <div className="text-center mb-[16px] md:mb-[40px] max-md:px-[16px]">
                <h2 className="">Technical Advisors</h2>
            </div>

            <div className="flex flex-nowrap justify-center gap-[20px] md:gap-[60px] overflow-x-auto no-scrollbar max-md:px-[16px] md:flex-wrap md:justify-center md:px-0">
                {techAdvisors.map((advisor) => (
                    <div
                        key={advisor.id}
                        className="flex flex-col items-start w-[260px] md:w-[calc(50%-30px)] md:max-w-[400px] flex-shrink-0 h-full"
                    >
                        <div className="w-full mb-4 aspect-[4/3] overflow-hidden rounded-[24px]">
                            <Image
                                src={advisor.imgSrc}
                                alt={advisor.name}
                                unoptimized
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-bold text-[16px] md:text-[20px] leading-[26px] text-[#2C2C2C] mb-[4px]">
                            {advisor.name}
                        </h3>
                        <p className="text-left text-[14px] md:text-[16px] leading-[24px] text-[#2C2C2C] mb-[12px]">
                            {advisor.title}
                        </p>
                        <div className="flex items-center gap-[16px] md:gap-[24px] flex-wrap">
                            <a
                                href={advisor.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 font-semibold text-[#0077B5]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="#0077B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11 17V13.75M11 13.75V10M11 13.75C11 10 17 10 17 13.75V17M7 7.01002L7.01 6.99902" stroke="#0077B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[14px] md:text-[16px] font-semibold leading-[150%] text-[#0077B5] rounded hover:underline">
                                    View Profile
                                </span>
                            </a>
                            {advisor.websiteUrl && (
                                <a
                                    href={advisor.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 font-semibold text-[#0077B5]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g transform="translate(1,1) scale(0.9)">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0077B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12H22M12 2C9.33 6.67 8 9.33 8 12C8 14.67 9.33 17.33 12 22C14.67 17.33 16 14.67 16 12C16 9.33 14.67 6.67 12 2Z" stroke="#0077B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <span className="text-[14px] md:text-[16px] font-semibold leading-[150%] text-[#0077B5] rounded hover:underline">
                                        Visit Website
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechAdvisorsSection;
