import Image from "next/image";
import { assets } from "@/Assets/assets";

const mobImages = [
    assets.outcomeMob1,
    assets.outcomeMob2,
    assets.outcomeMob3,
    assets.outcomeMob4,
    assets.outcomeMob5,
];

const CompetenciesOutcomes = () => (
    <section className="max-w-[1900px] mx-auto md:pt-[15px] pt-[180px] md:pb-[30px]">
        {/* Desktop layout */}
        <div className="relative competencies_outcomes">
            <div className="absolute w-full md:top-[4%] top-[-60%] py-[20px] md:px-[60px] px-[16px]">
                <h2 className="text-center md:mb-0 mb-[10px]">
                    Artbeat's Whole-Child Competencies and Outcomes
                </h2>
                <p className="text-center text-[#2C2C2C] md:text-[20px] text-[16px] md:leading-[30px] leading-[24px]">
                    Our program nurtures whole-child competencies to support emotional,
                    cognitive, creative, and social well-being—preparing children for
                    life, learning, and flourishing together.
                </p>
            </div>

            {/* Desktop Image */}
            <Image
                src={assets.outcomesDesk}
                alt="Benefits for the Child Desktop"
                className="w-full hidden md:block object-cover"
                width={1900}
                height={800}
                unoptimized
            />

            {/* Mobile layout */}
            <div className="flex flex-col items-center md:hidden mt-10 relative">
                <Image
                    src={assets.outcomesMob}
                    alt="Benefits for the Child Mobile"
                    width={400}
                    height={300}
                    className="w-full"
                    unoptimized
                />

                <div className="flex gap-[16px] overflow-x-auto no-scrollbar px-[16px] absolute top-[1%]">
                    {mobImages.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Outcome ${index + 1}`}
                            className="object-contain outcome_mob_img"
                            unoptimized
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default CompetenciesOutcomes;
