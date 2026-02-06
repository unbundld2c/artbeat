import { assets } from "@/Assets/assets";
import Image from "next/image";

const teamMembers = [
  {
    name: "Supriya Iyengar",
    role: "Founding Member",
    imgSrc: assets.TeamMember1,
    linkedin: "https://www.linkedin.com/in/supriyaiyengar/",
  },
  {
    name: "Ekta Sethi",
    role: "Founder",
    imgSrc: assets.TeamMember2,
    linkedin: "https://www.linkedin.com/in/gurekta-sethi-944373b7/",
  },
  {
    name: "Pallavi J. Goswami",
    role: "Founding Member",
    imgSrc: assets.TeamMember3,
    linkedin: "https://www.linkedin.com/in/pallavi-goswami-54231517/",
  },
  {
    name: "Charu Chadha",
    role: "Founding Member",
    imgSrc: assets.TeamMember4,
    linkedin: "https://www.linkedin.com/in/charu-chadha-7a47b74/",
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

      <div className="flex flex-nowrap gap-[16px] md:gap-[40px] overflow-x-auto no-scrollbar max-md:px-[16px] md:justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="teamMember flex flex-col items-center gap-1 w-[280px] flex-shrink-0"
          >
            <div
              className={`mb-[8px] flex items-center justify-center overflow-hidden`}
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                width="100%"
                unoptimized
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-bold text-[16px] md:text-[20px] leading-[20px]  md:leading-[26px] text-[#2C2C2C]">{member.name}</h3>
            <p className="text-[16px] leading-[24px] text-[#2C2C2C] font-normal">{member.role}</p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-[#0077B5]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="#0077B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 17V13.75M11 13.75V10M11 13.75C11 10 17 10 17 13.75V17M7 7.01002L7.01 6.99902" stroke="#0077B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="text-[14px] md:text-[16px] font-semibold leading-[150%] text-[#0077B5] rounded hover:underline">
                View Profile
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
