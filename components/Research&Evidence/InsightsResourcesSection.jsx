"use client";
import Link from "next/link";

const InsightsResourcesSection = () => {
    const articles = [
        {
            title: "What is the whole-child framework?",
            url: "https://www.pta.org/docs/default-source/files/cfe/2019/what-is-whole-child-education.pdf"
        },
        {
            title: "Effectiveness of Trauma-Informed Care Implementation in Health Care Settings: Systematic Review of Reviews and Realist Synthesis",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10940237/"
        },
        {
            title: "What-Does-Positive-Psychology-Mean-to-the-People-of-India",
            url: "https://www.researchgate.net/publication/378213129_What-Does-Positive-Psychology-Mean-to-the-People-of-India"
        },
        {
            title: "The Emotional Atlas: Charting the Terrain of Human Feelings",
            url: "https://medium.com/@kerubeekalaw/the-emotional-atlas-charting-the-terrain-of-human-feelings-964ce5c37465"
        },
        {
            title: "Art Education in Rural vs. Urban Settings in India: A Comparative Study and Analysis",
            url: "https://www.ijsdr.org/papers/IJSDR2503170.pdf"
        },
        {
            title: "Indian Classical Music,Raag as Music Therapy: Scope and Opportunities",
            url: "https://www.researchgate.net/publication/380292573_Indian_Classical_MusicRaag_as_Music_Therapy_Scope_and_Opportunities#:~:text=Ancient%20Indian%20traditions%20like%20yo,For%20example%2C%20Raga%20Puriya"
        },
        {
            title: "Impact Of Visual Arts on Students' Academic Performance",
            url: "https://share.google/sRnWmUqqheiss1edT"
        },
        {
            title: "The Importance of Arts and Crafts for Early Childhood Development",
            url: "https://www.cmosc.org/benefits-of-art-during-early-childhood/"
        },
        {
            title: "AI competency framework for teachers",
            url: "https://www.unesco.org/en/articles/ai-competency-framework-teachers"
        },
        {
            title: "What are UNESCO's broader policy recommendations for AI in education?",
            url: "https://www.unesco.org/en/articles/what-you-need-know-about-unescos-new-ai-competency-frameworks-students-and-teachers#:~:text=What%20are%20UNESCO's%20broader%20policy,promoting%20environmentally%2Dfriendly%20AI%20practices."
        },
        {
            title: "Artificial Intelligence (AI) In Education: Using AI Tools for Teaching and Learning Process",
            url: "https://www.researchgate.net/publication/357447234_Artificial_Intelligence_AI_In_Education_Using_AI_Tools_for_Teaching_and_Learning_Process"
        }
    ];

    return (
        <section className="max-w-[1500px] mx-auto px-[16px] md:px-[60px] py-[30px] md:py-[60px] text-center">
            <h2 className="pb-[8px] md:pb-[14px]">Insights & Resources</h2>

            <p className="text-[#2C2C2C] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mb-[30px] md:mb-[40px]">
                Our approach is rooted in rigorous secondary research and proven frameworks that prioritize the mental wellbeing of children through creative expression
            </p>

            <div className="flex flex-col items-start mx-auto">
                {articles.map((article, index) => (
                    <Link
                        key={index}
                        href={article.url}
                        className="text-[#2C2C2C] text-[14px] md:text-[16px] leading-[130%] p-[16px] font-semibold underline decoration-solid hover:text-[#E2725B] transition-colors text-left"
                    >
                        {article.title}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default InsightsResourcesSection;
