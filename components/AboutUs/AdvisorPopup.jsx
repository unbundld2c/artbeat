"use client";

import React from "react";
import Image from "next/image";

const AdvisorPopup = ({ advisor, onClose }) => {
    if (!advisor) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-[20px] max-w-[900px] w-full h-[700px] overflow-y-auto scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8 p-5 md:p-10">
                    <div className="flex-shrink-0">
                        <div className="w-full md:w-[320px] h-[280px] md:h-[320px] rounded-[20px] overflow-hidden">
                            <Image
                                src={advisor.imgSrc}
                                alt={advisor.name}
                                unoptimized
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="!text-[28px] md:!text-[36px] font-bold text-[#000000] mb-1">
                            {advisor.name}
                        </h2>
                        {advisor.title && (
                            <p className="text-[16px] md:text-[18px] md:text-[20px] font-semibold text-[#e2725b] mb-3 md:mb-6">
                                {advisor.title}
                            </p>
                        )}
                        <div className="text-[14px] md:text-[16px] leading-[26px] text-[#2C2C2C] space-y-2 md:space-y-4">
                            {advisor.fullBio.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorPopup;
