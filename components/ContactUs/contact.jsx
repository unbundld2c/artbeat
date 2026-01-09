"use client";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import CustomSelect from "@/components/common/CustomSelect";

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <g clipPath="url(#clip0_788_251)">
            <path d="M12.7781 27.6816C12.504 27.9556 12.504 28.4 12.7781 28.674C13.0521 28.9481 13.4965 28.9481 13.7705 28.674L13.2743 28.1778L12.7781 27.6816ZM29.1485 13.0054C29.1485 12.6178 28.8343 12.3036 28.4467 12.3036L22.1309 12.3036C21.7433 12.3036 21.4292 12.6178 21.4292 13.0054C21.4292 13.3929 21.7434 13.7071 22.1309 13.7071L27.745 13.7071L27.745 19.3212C27.745 19.7087 28.0591 20.0229 28.4467 20.0229C28.8343 20.0229 29.1485 19.7087 29.1485 19.3212L29.1485 13.0054ZM13.2743 28.1778L13.7705 28.674L28.9429 13.5016L28.4467 13.0054L27.9505 12.5092L12.7781 27.6816L13.2743 28.1778Z" fill="#003D96" />
        </g>
        <defs>
            <clipPath id="clip0_788_251">
                <rect width="40" height="40" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M2.66666 8L11.884 13.2226C15.2821 15.148 16.7179 15.148 20.116 13.2226L29.3333 8" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2.68768 17.9675C2.77484 22.055 2.81843 24.0986 4.3266 25.6126C5.83476 27.1264 7.93376 27.1791 12.1318 27.2846C14.7191 27.3496 17.2809 27.3496 19.8683 27.2846C24.0663 27.1791 26.1652 27.1264 27.6735 25.6126C29.1816 24.0986 29.2252 22.055 29.3123 17.9675C29.3404 16.6532 29.3404 15.3468 29.3123 14.0326C29.2252 9.94517 29.1816 7.90148 27.6735 6.38757C26.1652 4.87366 24.0663 4.82093 19.8683 4.71545C17.2809 4.65044 14.7191 4.65044 12.1317 4.71544C7.93376 4.8209 5.83476 4.87364 4.32659 6.38756C2.81842 7.90146 2.77484 9.94515 2.68767 14.0326C2.65964 15.3468 2.65966 16.6532 2.68768 17.9675Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

// const DropdownIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
//         <path d="M8.30066 5.30823C8.30066 4.76012 7.85633 4.3158 7.30823 4.3158C6.76012 4.3158 6.3158 4.76012 6.3158 5.30823L7.30823 5.30823L8.30066 5.30823ZM6.60647 8.00998C6.99404 8.39755 7.62241 8.39755 8.00998 8.00998L14.3258 1.69419C14.7133 1.30662 14.7133 0.678252 14.3258 0.290684C13.9382 -0.0968841 13.3098 -0.096884 12.9223 0.290684L7.30823 5.90472L1.69419 0.290685C1.30662 -0.0968835 0.678252 -0.0968835 0.290684 0.290685C-0.096884 0.678253 -0.0968839 1.30663 0.290685 1.69419L6.60647 8.00998ZM7.30823 5.30823L6.3158 5.30823L6.3158 7.30823L7.30823 7.30823L8.30066 7.30823L8.30066 5.30823L7.30823 5.30823Z" fill="#E2725B" />
//     </svg>
// );

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        phoneNumber: '',
        message: ''
    });

    const subjectOptions = [
        { value: 'General Inquiry', label: 'General Inquiry' },
        { value: 'Business Enquiry', label: 'Business Enquiry' },
        { value: 'Program Information', label: 'Program Information' },
        { value: 'Collaboration', label: 'Collaboration' },
        { value: 'Other', label: 'Other' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = new URLSearchParams(formData).toString();
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzZ1yzva3fSwRGSzVYY22lPTU4CrPUHuCU5iPKsQovLdzPHyK-BVmRlnLnUpsqsPAUzUw/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body,
                }
            );

            alert("Message sent successfully!");
            setFormData({
                fullName: "",
                email: "",
                subject: "General Inquiry",
                phoneNumber: "",
                message: "",
            });

        } catch (error) {
            console.error("Form submission error:", error);
            alert("Error submitting form. Please try again or contact us directly at contact@artbeat.space");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubjectChange = (value) => {
        setFormData({
            ...formData,
            subject: value
        });
    };

    return (
        <section className="w-full py-[40px] md:py-[60px] bg-white">
            <div className="max-w-[1500px] mx-auto px-[16px] md:px-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex flex-col">
                        <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden mb-6">
                            <Image
                                src={assets.ContactUsHero}
                                alt="Contact Us"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div>
                            <p className="text-[16px] md:text-[24px] text-[#2C2C2C] font-normal mb-3" style={{ fontFamily: 'Boogaloo' }}>
                                For Business Enquiries
                            </p>
                            <a
                                href="mailto:artbeat@gmail.com"
                                className="flex items-center justify-between text-[16px] md:text-[18px] text-[#212121] font-medium hover:opacity-80 group"
                            >
                                <div className="flex items-center gap-3">
                                    <EmailIcon />
                                    <span className="underline">contact@artbeat.space</span>
                                </div>
                                <span className="transition-transform group-hover:translate-x-1">
                                    <ArrowIcon />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div>
                        <h2 className="text-[36px] md:text-[48px] leading-[100%] text-[#2C2C2C] font-normal mb-4">
                            We're Here to Listen, Support, and Guide You
                        </h2>
                        <p className="text-[16px] md:text-[20px] leading-[150%] text-[#2C2C2C] font-normal mb-[40px]">
                            Whether you're curious about our programs, want to collaborate, or simply need someone to talk to — we'd love to hear from you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5" style={{ fontFamily: 'Montserrat' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                <div>
                                    <label htmlFor="fullName" className="block text-[16px] text-[#2C2C2C] font-semibold mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full h-[42px] px-4 border border-gray-300 rounded-[52px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent"
                                        required
                                    />
                                </div>

                                <CustomSelect
                                    options={subjectOptions}
                                    value={formData.subject}
                                    onChange={handleSubjectChange}
                                    label="Subject"
                                    placeholder="Select a subject"
                                    required
                                />
                            </div>

                            {/* Email & Phone Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                <div>
                                    <label htmlFor="email" className="block text-[16px] text-[#2C2C2C] font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-[42px] px-4 border border-gray-300 rounded-[52px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="block text-[16px] text-[#2C2C2C] font-semibold mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full h-[42px] px-4 border border-gray-300 rounded-[52px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[16px] text-[#2C2C2C] font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-[56px] px-4 border border-gray-300 rounded-[20px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-5 items-center md:items-start">
                                <button
                                    type="submit"
                                    className="w-[200px] h-[44px] bg-[#E2725B] text-white rounded-[60px] text-[16px] font-medium hover:bg-[#d66550] transition-colors"
                                >
                                    Get in Touch
                                </button>

                                <p className="text-[16px] text-[#2C2C2C] leading-[150%] font-normal text-center md:text-left">
                                    Your privacy is important to us. We never share personal information.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="max-w-[1500px] mx-auto px-[16px] md:px-[60px] mt-[60px]">
                <div className="w-full h-[1px] bg-[#000000]"></div>
            </div>

            <div className="max-w-[1500px] mx-auto px-[16px] md:px-[60px] mt-[60px]">
                <div className="flex flex-row items-start justify-between gap-4 md:gap-6 mb-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="leading-[100%] text-[#2C2C2C] font-normal">
                            Meet us Here
                        </h2>
                        <p className="text-[#2C2C2C] leading-[150%] font-normal">
                            Bangalore, India
                        </p>
                    </div>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Bangalore,India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[150px] h-[36px] md:w-[200px] md:h-[44px] bg-[#E2725B] text-white rounded-[60px] text-[16px] font-medium hover:bg-[#d66550] transition-colors flex items-center justify-center flex-shrink-0"
                    >
                        Get Directions
                    </a>
                </div>

                {/* Google Map Embed */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[12px] overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=Bangalore,India&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bangalore Location Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
