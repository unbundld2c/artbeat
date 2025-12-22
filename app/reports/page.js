"use client";

import { useState } from "react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { assets } from "@/Assets/assets";
import { Plus, Minus } from "lucide-react";

export default function ReportsPage() {
    const [openLeft, setOpenLeft] = useState(null);
    const [openRight, setOpenRight] = useState(null);

    // Dummy PDF link
    const dummyPDF = "#";

    const executiveReports = [
        "The Executive Director’s Report 2021–22",
        "The Executive Director’s Report 2020–21",
        "The Executive Director’s Report 2018–20",
        "The Executive Director’s Report 2018–20 (31 Years)",
        "The Executive Director’s Report 2017–18",
        "The Executive Director’s Report 2016–17",
        "The Executive Director’s Report 2015–16",
        "The Executive Director’s Report 2014–15",
        "The Executive Director’s Report 2013–14",
        "The Executive Director’s Report 2012–13",
        "The Executive Director’s Report 2011–12",
        "The Executive Director’s Report 2010–11",
        "The Executive Director’s Report 2009–10",
        "The Executive Director’s Report 2008–09",
        "The Executive Director’s Report 2007–08",
        "The Executive Director’s Report 2005–06",
        "The Executive Director’s Report 2003–04",
        "The Executive Director’s Report 2002–03",
        "The Executive Director’s Report 2000–01",
        "The Executive Director’s Report 1998–99",
        "The Executive Director’s Report 1997–98",
        "The Executive Director’s Report 1995–96",
        "The Executive Director’s Report 1994–95",
        "The Executive Director’s Report 1992–93",
    ];

    const leftSections = [
        { title: "Executive Director's Reports", list: ["Details will be available soon."] },
        { title: "Audited Financial Statements", list: ["Details will be available soon."] },
        { title: "Other Reports", list: ["Details will be available soon."] },
        { title: "Documents", list: ["Details will be available soon."] },
    ];

    const rightSections = [
        {
            title: "Join Us",
            text: "Join the thousands of individuals who contribute monthly to help every child.",
        },
        {
            title: "Donate",
            text: "Help spread the joy of reading by donating books.",
        },
        {
            title: "Volunteer",
            text: "Opportunities exist to empower you as a change maker.",
        },
        
    ];

    return (
        <>
            <Header />

            <main className="bg-[#FFFCF7] min-h-screen text-[#2C2C2C]">

                {/* HERO SECTION */}
                <div className="w-full flex justify-center pt-10 px-4">
                    <div className="w-full max-w-[1000px] aspect-[1000/550]">
                        <img
                            src={assets.reportsHero1.src}
                            width={1000}
                            height={550}
                            className="w-full h-full object-cover"
                            alt="Reports Banner"
                            priority
                            unoptimized
                        />
                    </div>
                </div>

                <div className="py-[40px] md:py-[50px]">
                    <div className="max-w-[1500px] mx-auto px-[16px] md:px-[60px] grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* LEFT SIDE */}
                        <div className="md:col-span-2">
                            <p className="text-lg mb-4">
                                To know more about how we work, please go through our reports below.
                            </p>

                            {leftSections.map((sec, i) => {
                                const isOpen = openLeft === i;
                                return (
                                    <div key={i} className="my-4 rounded overflow-hidden bg-[#FFEDCE]">

                                        <button
                                            onClick={() => setOpenLeft(isOpen ? null : i)}
                                            className="w-full px-4 py-3 font-semibold text-left flex items-center gap-3 text-[#2C2C2C]"
                                        >
                                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            <span className="text-lg">{sec.title}</span>
                                        </button>

                                        {isOpen && (
                                            <div className="px-10 py-4">
                                                <ul className="list-disc pl-6 space-y-2 text-base">
                                                    {sec.list.map((item, idx) => (
                                                        <li key={idx}>
                                                            <a
                                                                href={dummyPDF}
                                                                target="_blank"
                                                                className="hover:underline text-[#2C2C2C]"
                                                            >
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT SIDE */}
                        <div>
                            <div className="bg-black py-2 px-4">
                                <h2 className="font-bold !text-[#FFEDCE] text-[18px] md:text-[22px]!">let's do Nourish a Child's Future: Support ArtBeat.</h2>
                            </div>

                            <div className="space-y-1">
                                {rightSections.map((sec, i) => {
                                    const isOpen = openRight === i;
                                    return (
                                        <div key={i} className="bg-[#FFEDCE] rounded">

                                            <button
                                                onClick={() => setOpenRight(isOpen ? null : i)}
                                                className="w-full px-4 py-3 font-semibold flex items-center gap-3 text-[#2C2C2C]"
                                            >
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                                <span className="text-lg">{sec.title}</span>
                                            </button>

                                            {isOpen && (
                                                <div className="px-6 pb-6 text-sm">
                                                    {sec.text}
                                                </div>
                                            )}

                                        </div>
                                    );
                                })}

                                {/* CERTIFICATE IMAGE */}
                                {/* <div className="flex justify-center mt-6">
                                    <img
                                        src="https://i0.wp.com/www.katha.org/wp-content/uploads/2022/04/GSN-852-PLATINUM.png?resize=150%2C150&ssl=1"
                                        width={150}
                                        height={150}
                                        alt="Certificate"
                                    />
                                </div> */}

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
