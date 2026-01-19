"use client";

const approachData = {
    heading: "Our Approach: Mapping the Local Context",
    subheading: "ArtBeat Echoes is a collaborative effort to document and understand the unique sound profile of our intervention areas.",
    cards: [
        {
            title: "Simple Acoustic Documentation",
            description: "We conduct basic field recordings and documentation within the ArtBeat program regions. This means capturing the everyday sounds of the community—the marketplace, the schoolyard, the local trades—to build an archive of the regional acoustic signature."
        },
        {
            title: "Community Sound Conversations",
            description: "We talk with local residents and participants to get their perspective on the soundscape. We ask questions like:",
            bullets: [
                "What is the loudest sound in your community?",
                "Are there sounds you remember from childhood that are now gone?",
                "Which sounds make this place feel like home?"
            ]
        },
        {
            title: "Focusing on the Child's Experience",
            description: "A key element is engaging with the young ArtBeat participants to understand their auditory world. We explore:",
            bullets: [
                "What sounds do children naturally tune into or identify with in their surroundings?",
                "How do these familiar sounds influence their comfort and spark their creative imagination?"
            ]
        }
    ]
};

const ApproachSection = () => {
    return (
        <section className="max-w-[1500px] mx-auto md:pt-[60px] pt-[40px] md:px-[60px] px-[20px]">
            {/* Heading */}
            <h2 className="text-center mb-[16px]">{approachData.heading}</h2>

            {/* Subheading */}
            <p className="text-center text-[#2C2C2C] md:text-[20px] text-[16px] md:leading-[34px] leading-[24px] md:mb-[40px] mb-[20px]">
                {approachData.subheading}
            </p>

            {/* Cards Container */}
            <div className="flex md:flex-row flex-col md:gap-[60px] gap-[20px]">
                {approachData.cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="flex-1 md:p-[40px] p-[20px] rounded-[40px]"
                        style={{
                            background: "linear-gradient(180deg, #FFEDCE 0%, #E3C89A 100%)"
                        }}
                    >
                        <h3 className="text-[#2C2C2C] font-bold text-[16px] md:text-[20px] leading-[130%] !whitespace-normal">
                            {card.title}
                        </h3>

                        <p className="text-[#2C2C2C] font-normal text-[14px] md:text-[16px] leading-[150%]">
                            {card.description}
                        </p>

                        {card.bullets && (
                            <ul className="pl-[20px] list-disc marker:text-[8px]">
                                {card.bullets.map((bullet, bulletIdx) => (
                                    <li
                                        key={bulletIdx}
                                        className="text-[#2C2C2C] font-normal text-[14px] md:text-[16px] leading-[150%]"
                                    >
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ApproachSection;
