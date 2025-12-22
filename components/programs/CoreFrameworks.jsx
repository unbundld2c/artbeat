import React from "react";

const frameworks = [
  {
    title: "Whole-Child Development Framework",
    points: [
      "Emphasising development across the cognitive (Head), emotional (Heart), and physical-social (Hand) domains to ensure balanced growth.",
      "Programs are tailored to meet developmental milestones and needs within different age groups, from early childhood through adolescence and beyond.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "Trauma-Informed Care",
    points: [
      "Understanding the impact of trauma, Artbeat fosters safe, predictable, and supportive environments.",
      "Facilitators are trained to recognize trauma signs, ensuring psychological safety and trust through ethical care, predictable routines, and sensitivity to individual needs.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "Social Emotional Learning (SEL) — Aligned with NEP 2024",
    points: [
      "The curriculum aligns with SEL competencies highlighted in India's National Education Policy 2024:",
      "Self-awareness and emotional management.",
      "Social awareness and empathy.",
      "Responsible decision-making.",
      "Relationship skills and communication.",
      "This ensures relevancy and compliance with educational priorities.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "Positive Psychology",
    points: [
      "Artbeat focuses on fostering strengths, resilience, optimism, and flourishing.",
      "Activities promote agency, hope, self-efficacy, and constructive coping to equip children with tools for lifelong well-being.",
    ],
    span: "md:col-span-3",
  },
  {
    title: "Atlas of Emotions",
    points: [
      'This framework provides a scientific map of the five universal "continent" emotions (anger, fear, sadness, disgust, and enjoyment).',
      "It is integrated to deepen emotional literacy, helping children identify the full spectrum of emotions, understand their triggers, and practice choosing constructive responses over destructive actions.",
    ],
    span: "md:col-span-3",
  },
];

const CoreFrameworks = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-[0] md:px-[60px] mt-[40px] md:mt-[60px] mb-[40px] md:mb-[92px]">
      <div>
        <div className="max-md:px-[16px] text-center">
          <h2 className="text-[36px] md:text-[48px] lh-[100%] text-[#2C2C2C] font-regular mb-[8px]">
            Core Frameworks
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#2C2C2C] leading-[150%] font-normal mb-[20px] md:mb-[40px]">
            Artbeat's curriculum is deliberately built upon{" "}
            <span className="font-bold">five</span> synergistic, evidence-based
            frameworks to ensure a holistic, safe, and measurable impact on
            every child.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFrameworks;
