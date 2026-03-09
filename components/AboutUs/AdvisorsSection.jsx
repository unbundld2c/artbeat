"use client";

import React, { useState } from "react";
import Image from "next/image";
import AdvisorPopup from "./AdvisorPopup";
import { assets } from "@/Assets/assets";

const advisors = [
    {
        id: 1,
        name: "Dr. Anna Jesseman",
        title: "Clinical Consultant, MedStar Georgetown WISE Center | Faculty, Georgetown School of Medicine",
        shortDesc: "Dr. Anna Jesseman is a clinician and consultant at the MedStar Georgetown Center for Wellbeing in School Environments (WISE) and a faculty member in the Department of Child and Adolescent Psychiatry at Georgetown School of Medicine.",
        imgSrc: assets.Advisor1,
        fullBio: `Dr. Anna Jesseman is a clinician and consultant at the MedStar Georgetown Center for Wellbeing
        in School Environments (WISE) and a faculty member in the Department of Child and Adolescent Psychiatry 
        at Georgetown School of Medicine. A Licensed Independent Clinical Social Worker (LICSW), she specializes 
        in trauma-informed teaching practices and the link between educator well-being and student socio-emotional 
        development. A former Teach For America Corps member, Anna’s career spans roles as a school social worker, 
        administrator, and psychotherapist. She holds master’s degrees from Columbia University and Pace University 
        and is currently a doctoral candidate at the University of Edinburgh, researching the distal impacts of 
        mental health interventions on student capacity.`,
    },
    {
        id: 2,
        name: "Dr. Deepti Navaratna",
        title: "Neuroscientist & Musician | Principal Investigator & Senior Research Associate, NIMHANS",
        shortDesc: "Dr. Deepti Navaratna is a pioneering neuroscientist and acclaimed musician currently serving as a Principal Investigator at the National Institute of Mental Health and Neurosciences (NIMHANS), Bangalore.",
        imgSrc: assets.Advisor3,
        fullBio: `Dr. Deepti Navaratna is a pioneering neuroscientist and acclaimed musician currently serving 
        as a Principal Investigator at the National Institute of Mental Health and Neurosciences (NIMHANS), 
        Bangalore. Her work is at the forefront of the neuroscience of music, exploring how traditional Indian 
        aesthetics—specifically Raga and Thala—can be utilized as clinical tools for neuro-rehabilitation and 
        emotional regulation. A former faculty member at Harvard Medical School and Regional Director of the IGNCA, 
        Dr. Deepti’s research bridges ancient wisdom with modern brain science. At Artbeat, she provides scientific 
        oversight, ensuring that our music and art pedagogies are rigorously mapped to neurological developmental 
        milestones and validated through clinical-grade data.`,
    },
    {
        id: 3,
        name: "Dr. Shrinidhi Nathany",
        title: "Senior Consultant, Pathology & Laboratory Medicine | Fortis Memorial Research Institute (FMRI)",
        shortDesc: "Dr. Shrinidhi Nathany is a Senior Consultant at Fortis Memorial Research Institute, Gurgaon, with over a decade of clinical experience in diagnostic medicine and molecular pathology.",
        imgSrc: assets.Advisor2,
        fullBio: `Dr. Shrinidhi Nathany is a Senior Consultant at Fortis Memorial Research Institute, Gurgaon, 
        with over a decade of clinical experience in diagnostic medicine and molecular pathology. A recognized 
        expert in her field, she has published extensively in international medical journals and serves as a 
        critical bridge between clinical health standards and community-based developmental interventions.`,
    }
];

const AdvisorsSection = () => {
    const [selectedAdvisor, setSelectedAdvisor] = useState(null);

    return (
        <>
            <section className="max-w-[1500px] mx-auto px-[0px] md:px-[60px] py-[50px] md:py-[50px]">
                <div className="text-center mb-[16px] md:mb-[40px] max-md:px-[16px]">
                    <h2 className="">Advisors</h2>
                </div>

                <div className="flex flex-nowrap gap-[20px] md:gap-[60px] overflow-x-auto no-scrollbar max-md:px-[16px] md:grid md:grid-cols-3 md:px-0">
                    {advisors.map((advisor) => (
                        <div
                            key={advisor.id}
                            className="flex flex-col items-start w-[260px] md:w-auto flex-shrink-0 h-full"
                        >
                            <div className="w-full mb-4 aspect-[1] overflow-hidden rounded-[24px]">
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
                            <p className="text-left text-[14px] md:text-[16px] leading-[24px] text-[#2C2C2C]">
                                {advisor.shortDesc}{" "}
                                <span
                                    className="text-[#E2725B] font-bold text-[14px] md:text-[16px] leading-[24px] border-b-[1px] border-[#E2725B] cursor-pointer"
                                    onClick={() => setSelectedAdvisor(advisor)}
                                >
                                    Read more...
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {selectedAdvisor && (
                <AdvisorPopup
                    advisor={selectedAdvisor}
                    onClose={() => setSelectedAdvisor(null)}
                />
            )}
        </>
    );
};

export default AdvisorsSection;
