import { assets } from "@/Assets/assets";
import Image from "next/image";

const teamMembers = [
  {
    name: "Supriya Iyengar",
    role: "Founding Member",
    imgSrc: assets.TeamMember1,
  },
  {
    name: "Ekta Sethi",
    role: "Founder",
    imgSrc: assets.TeamMember2,
  },
  {
    name: "Pallavi J. Goswami",
    role: "Founding Member",
    imgSrc: assets.TeamMember3,
  },
  {
    name: "Charu Chadha",
    role: "Founding Member",
    imgSrc: assets.TeamMember4,
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-[0px] md:px-[60px] md:py-[50px] py-[20px] ">
      <div className="text-center">
        <h2 className="">Our Team</h2>
        <p className="text-[#2C2C2C] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-[400] pt-[16px] pb-[40px] max-md:px-[16px]">
          We believe learning is a continuous journey enriched by collaboration.
          Artbeat brings together a dedicated team of child development
          specialists, experts in early childhood, passionate artists,
          psychologists, design thinkers, and social entrepreneurs.
        </p>
      </div>

      <div className="flex flex-nowrap gap-[16px] md:gap-[40px] overflow-x-auto no-scrollbar max-md:px-[16px]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="teamMember flex flex-col items-center rounded-lg "
          >
            <div
              className={` mb-[8px] rounded-full flex items-center justify-center`}
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                width="100%"
                unoptimized
                height="auto"
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-[16px] md:text-[20px] leading-[20px]  md:leading-[26px] text-[#2C2C2C] mb-[4px[">{member.name}</h3>
            <p className="text-[16px] leading-[24px] text-[#2C2C2C] font-normal">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
