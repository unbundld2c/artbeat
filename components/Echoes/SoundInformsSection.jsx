import ContentSection from "@/components/ContentSection";
import Link from "next/link";
import { assets } from "@/Assets/assets";

const soundInformsData = {
    image: assets.EchoesSoundInform,
    imageAlt: "Person wearing headphones, enjoying sound",
    title: "How Sound Informs Our Art",
    description: "The soundscapes we gather serve as valuable contextual data for planning ArtBeat interventions. These recordings and insights help us to:",
    points: [
        "Design Relevant Workshops: We draw inspiration from local rhythms and sound textures to inform our music, movement, and visual arts activities.",
        "Use Local Narratives: Community sound conversations provide genuine, local stories that can be the basis for theatre and storytelling projects.",
        "Ensure Connection: By grounding our programs in the actual sonic environment, we ensure our artistic projects feel familiar and meaningful to the community."
    ],
    // buttonText: "Explore Our Work",
    // buttonLink: "/coming-soon"
};

const SoundInformsSection = () => {
    return (
        <ContentSection
            title={soundInformsData.title}
            imageSrc={soundInformsData.image}
            imageAlt={soundInformsData.imageAlt}
            reverse={false}
            customGap="gap-[24px] md:gap-x-[60px]"
            customPadding="px-[20px] md:px-[60px] md:pb-0"
            titleAlign="text-left"
        >
            <div>
                <p className="text-[#2C2C2C] text-[16px] md:text-[20px] text-left leading-[150%]">
                    {soundInformsData.description}
                </p>

                <ul className="text-[#2C2C2C] md:text-[20px] text-[16px] leading-[150%] list-disc pl-[24px] marker:text-[12px]">
                    {soundInformsData.points.map((point, idx) => (
                        <li key={idx} className="pl-[6px]">{point}</li>
                    ))}

                </ul>
                {/* <div className="flex justify-start mt-[16px]">
                    <Link
                        href={soundInformsData.buttonLink}
                        className="bg-[#E2725B] rounded-[60px] text-white font-medium md:text-[18px] md:leading-[18px] text-[16px] leading-[16px] py-[10px] px-[20px] flex items-center gap-[10px]"
                    >
                        {soundInformsData.buttonText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.5001 12.0001H8.5M13.0002 8.5C13.0002 8.5 16.5001 11.0777 16.5001 12C16.5001 12.9224 13.0002 15.5 13.0002 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div> */}
            </div>
        </ContentSection>
    );
};

export default SoundInformsSection;
