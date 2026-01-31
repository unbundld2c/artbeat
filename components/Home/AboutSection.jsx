import Image from "next/image";
import Link from "next/link";
import { assets } from "@/Assets/assets";

const AboutSection = () => {
  return (
    <section className="bg-white max-w-[1500px] mx-auto py-[43px] md:py-[60px] px-[20px]  md:px-[60px]">
      <div className="  mx-auto grid md:grid-cols-2 md:gap-[100px] gap-[24px] items-center">
        {/* Left Image */}
        <div className="relative w-full h-full  rounded-xl overflow-hidden">
          <Image
            src={assets.About} 
            alt="Children doing creative activity"
            className="object-cover h-full rounded-xl"
            unoptimized
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="md:mb-[16px] mb-[8px]">
            Who are we ?
          </h2>
          <p className="text-[#2C2C2C] md:text-[20px] text-[16px] md:leading-[30px] leading-[24px] mb-[20px]">
            Artbeat is an innovative <b className="text-[#e2725b]">creative arts ecosystem</b> focused on empowering
            children to build emotional literacy, cognitive agility,
            and social resilience through deep, trauma-informed engagement with
            music, visual arts, and writing. While we fully support the holistic mandates of the
            <b className="text-[#e2725b]"> National Education Policy (NEP) 2024</b>, our standards are benchmarked against global pedagogical best practices and universal developmental milestones. Grounded in Positive Psychology
            and Social Emotional Learning (SEL) frameworks, Artbeat nurtures the
            whole child—<b className="text-[#e2725b]">Head, Heart, and Hand</b>—to <b className="text-[#e2725b]">thrive</b> academically and
            socially in any educational context, from Montessori and IB to national streams.
          </p>
          <Link
              href="/about-us"
              className="bg-[#E2725B] inline-flex items-center text-white px-[20px] py-[10px] rounded-[60px] md:text-[18px] md:leading-[18px] text-[16px] leading-[16px]"
            >
              Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
