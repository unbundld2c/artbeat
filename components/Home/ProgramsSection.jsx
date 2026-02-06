import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    img: assets.Program1,
    title: "Aaroh — Music Pedagogy",
    desc: "Aaroh harnesses the power of sound and rhythm to develop children's emotional agility, listening skills, and creative expression through immersive, interactive music experiences.",
    link: "/programs#aaroh",
  },
  {
    img: assets.Program3,
    title: "Anand — Storytelling",
    desc: "Anand sparks imagination and empathy by leveraging the art of storytelling to help children build emotional resilience, social connection, and expressive confidence.",
    link: "/programs#anand",
  },
  {
    img: assets.Program2,
    title: "Akshar — Writing Pedagogy",
    desc: "Akshar empowers children to explore their inner world and strengthen self-awareness by nurturing their narrative voice through guided writing and storytelling activities.",
    link: "/programs#akshar",
  },
  {
    img: assets.Program4,
    title: "Aakaar — Visual Arts",
    desc: "Aakaar uses visual arts as a medium for nonverbal communication, enabling children to process emotions, solve problems metaphorically, and enhance cognitive and emotional well-being.",
    link: "/programs#aakaar",
  },
];

const ProgramsSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto  md:px-[60px] py-[43px] md:py-[60px] ">
      <div className="text-center">
        {/* Heading */}
        <h2 className="my-[40px]">Evidence-Informed Programs</h2>

        {/* Grid of Programs */}
        <div className="flex overflow-x-auto  md:grid md:grid-cols-4 md:gap-[40px] gap-[24px] no-scrollbar md:px-[0px] px-[20px]">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-start program-card">
              <Image
                src={program.img}
                alt={program.title}
                width={300}
                height={300}
                unoptimized
              />
              <h3 className="font-bold text-[#2C2C2C] mb-[4px] md:text-[20px] text-[16px] md:leading-[26px] leading-[20px]">
                {program.title}
              </h3>
              <p className="text-left md:text-[16px] text-[14px] md:leading-[24px] leading-[21px] text-[#2C2C2C] ">
                {program.desc}{" "}
                <Link
                  href={program.link}
                  className="text-[#E2725B] font-bold md:text-[16px] text-[14px] md:leading-[24px] leading-[21px] border-b-[1] border-[#E2725B]"
                >
                  Read more...
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
