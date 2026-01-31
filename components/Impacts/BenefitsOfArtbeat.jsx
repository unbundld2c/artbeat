import React from "react";

export default function BenefitsOfArtbeat() {
  const benefits = [
    {
      title: "Emotional Literacy (Identify)",
      description: "Children use the Atlas of Emotions to name complex feelings, moving from overwhelm to clarity."
    },
    {
      title: "Creative Articulation (Express)",
      description: "Students externalize thoughts through music, art, and writing to build a strong personal voice."
    },
    {
      title: "Adaptive Self-Regulation (Regulate)",
      description: "Children learn to transition from high-intensity emotions to calm, focused engagement."
    },
    {
      title: "Empathic Connection (Connect)",
      description: "Collaborative projects build social awareness and a deep sense of community belonging."
    },
    {
      title: "Cognitive Agency (Solve)",
      description: "Independent creative choices build the critical thinking and focus necessary for academic success and problem-solving."
    }
  ];

  return (
    <section className="w-full max-md:pt-[40px] py-[0] md:py-16 px-[16px] md:px-[60px]">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-[40px]">
          The ArtBeat Outcomes
        </h2>

        <div className="flex gap-[24px] md:gap-[40px] flex-wrap">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_calc(100%/2-24px/2)] md:flex-[0_0_calc(100%/4-40px*3/4)] flex flex-col bg-[#FFFAEB] md:p-[20px] p-[16px] md:rounded-[20px] rounded-[16px]"
            >
              <h3 className="text-[18px] md:text-[24px] leading-[140%] font-bold mb-4 text-left whitespace-normal! text-[#e2725b]">
                {item.title}
              </h3>
              <p className="text-[16px] md:text-[20px] text-[#000] leading-relaxed text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
