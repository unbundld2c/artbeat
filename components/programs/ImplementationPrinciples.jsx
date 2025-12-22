import React from 'react';
import { assets } from "@/Assets/assets";

const principles = [
  {
    title: "Focused Immersion",
    description: "Deep engagement with a single creative art form to foster mastery and profound emotional impact—a critical difference from multi-activity programs",
    image: assets.Implementation1,
    alt: "Child painting illustration"
  },
  {
    title: "Developmental Alignment",
    description: "Age-appropriate modules tailored to distinct stages of development, ensuring maximum relevance and efficacy for every child aged",
    image: assets.Implementation2,
    alt: "Children of different heights illustration"
  },
  {
    title: "Trauma-Informed Facilitation",
    description: "Our team serves as trained mentors, not therapists, delivering programs with the sensitivity and ethical care required to ensure participant safety and psychological trust",
    image: assets.Implementation3,
    alt: "Mentor and child reading illustration"
  },
  {
    title: "Cultural and Contextual Relevance",
    description: "Program adaptations honor linguistic, cultural, and local contexts to ensure every child feels seen, heard, and connected to their environment",
    image:assets.Implementation4,
    alt: "Group of diverse children singing illustration"
  },
  {
    title: "Technology Integration",
    description: "Use of digital platforms for scale, fidelity, and data-driven management, ensuring high implementation quality and ease of use for schools",
    image: assets.Implementation5,
    alt: "Teacher and student with tablet illustration"
  },
  {
    title: "Family & Community Partnerships",
    description: "Meaningful engagement strategies that involve caregivers and communities as active stakeholders to reinforce and sustain learning beyond the session",
    image: assets.Implementation6,
    alt: "Family and child gardening illustration"
  }
];

const ImplementationPrinciples = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-[0] md:px-[60px] my-[40px] md:my-[92px]">
        {/* Section Header */}
        <h2 className="text-[36px] md:text-[48px] lh-[100%] text-[#2C2C2C] font-regular mb-[20px] md:mb-[40px] text-center">
          Implementation Principles
        </h2>

        {/* Flexbox Grid Container */}
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar max-md:px-[16px] md:flex-wrap gap-[20px] md:gap-[40px]">
          {principles.map((principle, index) => (
              <div className="bg-[#FFF9F0] rounded-[10px] md:rounded-[12px] py-[20px] px-[12px] flex flex-col items-center text-center flex-[0_0_85%] md:flex-[0_0_calc(100%/3-40px*2/3)]">
                {/* Illustration Placeholder */}
                <div className="h-40 w-full flex mb-[12px]">
                  <img 
                    src={typeof principle.image === 'object' ? principle.image.src : principle.image} 
                alt={principle.alt}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-left w-full text-[18px] md:text-[20px] font-bold text-[#2C2C2C] mb-[4px] leading-[130%] whitespace-normal!">
                  {principle.title}
                </h3>
                <p className="text-left text-[#2C2C2C] text-[14px] md:text-[16px] leading-[150%] font-normal">
                  {principle.description}
                </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ImplementationPrinciples;