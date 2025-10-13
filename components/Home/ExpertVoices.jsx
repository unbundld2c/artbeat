const experts = [
  {
    quote:
      "Creativity now is as important in education as literacy, and we should treat it with the same statusArtistic experiences help children develop the full range of their capacities, including the intellectual, emotional and social dimensions",
    name: "Sir Ken Robinson",
    role: "Education Expert",
    source: "TED Talk, 2006",
  },
  {
    quote:
      "Artistic experiences help children develop the full range of their capacities, including the intellectual, emotional and social dimensions.",
    name: "Dr. Howard Gardner",
    role: "Psychologist and Creator of Multiple Intelligences Theory",
    source: "Frames of Mind, 1983",
  },
  {
    quote:
      "for children to explore their emotions safely, develop resilience, and build self-confidence, especially in today’s fast-paced and stressful environment.",
    name: "Dr. Shailja Sen",
    role: `Child Psychologist, Children's First"Creative expression is an essential tool`,
    source: "Column in The Hindu, 2023",
  },
  {
    quote:
      "Arts-based interventions create inclusive, nurturing environments that support holistic development, healing, and cognitive growth in children.",
    name: "Dr. Rajalakshmi Lakshman",
    role: "Child Development Specialist",
    source: "Published talk at Asia Pacific Conference on Child Development, 2021",
  },
  {
    quote:
      "Research consistently shows that arts education strengthens children's social and emotional development, boosts academic achievement, and reduces behavioral problems.",
    name: "National Endowment for the Arts (USA)",
    role: "",
    source: "NEA Report, 2016",
  },
];

const ExpertVoices = () => {
  return (
    <section className="bg-white max-w-[1900px] mx-auto">
      <div className="text-center">
        {/* Heading */}
        <h2 className="md:mt-[40px] mb-[40px] mt-[0]">Expert Voices</h2>

        {/* Grid of Quotes */}
        <div className="overflow-x-auto flex  md:gap-[40px] gap-[20px] expert-cards no-scrollbar md:px-[60px] px-[20px]">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-[#FFFAEB] md:p-[20px] p-[16px] md:rounded-[20px] rounded-[16px]  text-left expert-card flex justify-between flex-col"
            >
                <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
              >
                <path
                  d="M22.7537 0L14.5816 0.979589C14.9555 7.29252 15.9436 14.966 17.546 24L27 21.0612C24.8101 14.3129 23.3947 7.29252 22.7537 0ZM8.17211 0L-1.90735e-06 0.979589C0.373886 7.29252 1.36202 14.966 2.96439 24L12.4184 21.0612C10.2285 14.3129 8.81306 7.29252 8.17211 0Z"
                  fill="#E2725B"
                />
              </svg>
              
              <p className="text-[#2C2C2C] font-normal mb-[22px] mt-[12px] md:text-[16px] md:leading-[24px] text-[14px] leading-[21px]">
                {expert.quote}
              </p>
              </div>    
              <div>
              <p className="text-[#E2725B] font-semibold md:text-[20px] md:leading-[20px] text-[14px] leading-[18px] ">{expert.name}</p>
              <p className="text-[#2C2C2C] mt-[8px] mb-[12px] md:text-[16px] md:leading-[21px] text-[14px] leading-[18px]">{expert.role}</p>
              <p className="text-[#8B8B8B] md:text-[14px] md:leading-[14px] text-[12px] leading-[12px]"> {expert.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVoices;
