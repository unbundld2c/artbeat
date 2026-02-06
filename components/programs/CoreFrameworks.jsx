import React from "react";

const frameworks = [
  {
    title: "The Foundation of Safety & Belonging",
    points: [
      "Framework: Trauma-Informed & Attachment-Based Care.",
      "The Shift: We move beyond \"safe spaces\" to cultivate a deep internal feeling of safety. Safety is the prerequisite for joy.",
      "The Impact: By ensuring every child feels fundamentally \"okay\" and accepted, we unlock their ability to take risks. Here, art is not a chore or a luxury—it is a fundamental right and a vehicle for authentic joy.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "The Science of Emotion",
    points: [
      "Frameworks:",
      "Atlas of Emotions: We utilize this scientific map of the five universal \"continent\" emotions—anger, fear, sadness, disgust, and enjoyment.",
      "Positive Psychology: We focus on fostering strengths, resilience, optimism, and flourishing.",
      "The Impact: By integrating these, we deepen emotional literacy and equip children with tools like agency and constructive coping for lifelong well-being.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "The Path to Growth",
    points: [
      "Whole-Child Development Framework: We emphasize balanced growth across cognitive (Head), emotional (Heart), and physical-social (Hand) domains.",
      "Social Emotional Learning (SEL): Our curriculum develops self-awareness, empathy, responsible decision-making, and relationship skills.",
      "The Impact: Programs are tailored to developmental milestones, ensuring children grow into emotionally intelligent and socially responsible individuals.",
    ],
    note: "Note for partners: Our SEL curriculum is globally benchmarked and ensures full compliance with India’s National Education Policy (NEP) 2024.",
    span: "md:col-span-2",
  },
];

const CoreFrameworks = () => {
  return (
    <section id="core-frameworks" className="max-w-[1500px] mx-auto px-[0] md:px-[60px] mt-[40px] md:mt-[60px] mb-[40px] md:mb-[92px]">
      <div>
        <div className="max-md:px-[16px] text-center">
          <h2 className="text-[36px] md:text-[48px] lh-[100%] text-[#2C2C2C] font-regular mb-[8px]">
            Our Core Methodology: The ArtBeat Trinity
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#2C2C2C] leading-[150%] font-normal mb-[20px] md:mb-[40px]">
            We don't just teach creative art; we use it as a vehicle for human flourishing. Our curriculum is built upon <span className="font-bold">five</span> synergistic, evidence-based frameworks categorized into <span className="font-bold">three</span> pillars of impact:
          </p>
        </div>

        <div
          className=" no-scrollbar max-md:px-[16px]
          grid grid-flow-col auto-cols-[85%] overflow-x-auto  gap-[24px]
          md:grid-cols-6 md:grid-flow-row md:overflow-visible md:gap-[40px] md:pb-0 md:auto-cols-auto
        "
        >
          {frameworks.map((item, index) => (
            <div
              key={index}
              className={`${item.span} bg-[#F3FFEB] p-[12px] md:p-[20px] rounded-[16px] md:rounded-[20px] snap-start`}
            >
              <h3 className="text-[16px] md:text-[20px] font-bold text-[#2C2C2C] mb-[8px] leading-[130%] whitespace-normal!">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[#2C2C2C] text-[14px] md:text-[16px] leading-[150%] font-normal"
                  >
                    <span className="mr-2 mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2C2C2C]" />
                    {point}
                  </li>
                ))}
              </ul>
              {item.note && (
                <p className="mt-3 text-[#2C2C2C] text-[12px] md:text-[14px] leading-[150%] italic">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFrameworks;
