"use client";

import React, { useState } from "react";
import Image from "next/image";
import AdvisorPopup from "./AdvisorPopup";
import { assets } from "@/Assets/assets";

const advisors = [
    {
        id: 1,
        name: "Anna Jesseman, LICSW",
        title: "Clinical Consultant",
        shortDesc: "Clinician and consultant with focus on teacher well-being and trauma-informed teaching practices.",
        imgSrc: assets.Advisor1,
        fullBio: `Anna Jesseman is a clinician and consultant with the MedStar Georgetown Center for Wellbeing in School Environments (WISe Center) and a member of the Georgetown School of Medicine faculty in the Department of Child and Adolescent Psychiatry. Her clinical focus is on teacher well-being and trauma-informed teaching practices. She is a Licensed Independent Clinical Social Worker in the District of Columbia, Maryland, and Virginia and holds master's degrees in Social Work from Columbia University and the Science of Teaching from Pace University.

She is presently a doctoral candidate at the University of Edinburgh, Moray House of Education. Her research interest is on the distal impact of adult educator wellbeing interventions on student socio-emotional capacity. Anna has worked to support students and teachers throughout her career, both as a school social worker, teacher, administrator, and clinical psychotherapist both locally and internationally. She began her career as a Teach For America Corps Member teaching Middle School Special Education at CIS 339 in the South Bronx.`,
    },
    {
        id: 2,
        name: "Dr. Shrinidhi Nathany",
        title: "Consultant Molecular Hematology & Oncology | Fortis Gurgaon",
        shortDesc: "Medical expert with focus on molecular diagnostics and oncology research.",
        imgSrc: assets.Advisor2,
        fullBio: `Dr. Shrinidhi is Consultant Molecular Hematology and Oncology in the department of Hematology and BMT Fortis Memorial Research Institute, Gurugram. Dr Shrinidhi Nathany has completed his MBBS from Rajiv Gandhi University of Health Sciences, Karnataka & Masters In Pathology from Kasturba Medical College, Manipal in 2018 was awarded the best outgoing postgraduate in the university. She has been a National awardee and has been conferred with Rashtrapati Puraskar by Former Honorable President of India Late Shri APJ Abdul Kalam Azad.

She has been awarded many state and regional awards for paper presentations and scholarly acumen. She has a rich 5-year experience of molecular diagnostics to her credit and has trained at institutions of national and international importance: Tata Memorial hospital, Mumbai and European School of Oncology, Spain. She has been awarded the International Association of Study on Lung Cancer Academy Award in 2023 as well Scholar at Asia Thoracic Oncology research Group. She serves as committee member in these organizations and her contributions to lung cancer have been awarded by the Institute of Scholars with The Young Achiever Award. She has also served as Junior Master for European Hematology Association for two years imparting molecular hematology knowledge to hematology resident across the globe. Dr. Shrinidhi prior to joining FMRI has worked as consultant in Rajiv Gandhi Cancer Institute and Research Centre, New Delhi`,
    },
    {
        id: 3,
        name: "Dr. Deepti Navaratna",
        title: "T V Raman Pai Chair Professor",
        shortDesc: "Musician and neuroscientist exploring the intersection of arts, science, and humanities.",
        imgSrc: assets.Advisor3,
        fullBio: `Dr. Deepti Navaratna is a musician and neuroscientist interested in an alchemy of research and performance. After several years of neuroscience research at Harvard Medical School, USA, her current research interests span neuroscience, arts and humanities; exploring new frontiers of interdisciplinary knowledge such as cognitive hermeneutics, neuropsychology and empirical musicology. She is a Chevening Clore Fellow (2021-'23), recognized by the UK Government as one of the most creative artists and dynamic leaders across the globe.

Until, recently she served as the Regional Director, Indira Gandhi National Centre for the Arts, Ministry of Culture, Government of India, Bengaluru, India. She directed the centre's research, academic and outreach activities at the intersection of science and humanities - with a focus on Indian knowledge systems. Under her leadership the centre was deemed a 'Centre for Excellence' under the Bangalore University and initiated a one-of-a-kind Post Graduate Diploma in Manuscriptology and Paleography. She served as the Chairman, Board of Studies, IGNCA Bangalore for curriculum development across music research, manusciptology and paleography. As an arts curator, she has curated over a thousand academic/outreach events such as seminars, symposiums and public engagements.

While at IGNCA she was instrumental in the scientific documentation of several vanishing art forms such as the Kinhal art, Kerala Mural paintings and Ayyavar Terracota Votive Art. In 2018, she created the Raaga Laboratory, a first-of-its-kind laboratory studying Indian music from neuroscientific and cultural perspectives. The laboratory undertakes interdisciplinary research in Cognitive Musicology, Science of Raagas, Chants and Rhythm, Brain body computer interfaces for special needs and performance and Hermaneutics of Indian Music Cognition — study of texts of Nada Yoga & Natyashastra.

Deepti holds a doctorate degree in Neuroscience and has authored over twenty original scientific research papers, book chapters to her credit.`,
    },
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
                            className="flex flex-col items-start cursor-pointer w-[320px] md:w-auto flex-shrink-0 h-full"
                            onClick={() => setSelectedAdvisor(advisor)}
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
                            <p className="text-left text-[14px] md:text-[16px] leading-[24px] text-[#2C2C2C]">
                                {advisor.shortDesc}{" "}
                                <span className="text-[#E2725B] font-bold text-[14px] md:text-[16px] leading-[24px] border-b-[1px] border-[#E2725B]">
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
