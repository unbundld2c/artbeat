import Image from "next/image";
import { assets } from "@/Assets/assets";

const AboutSection = () => {
  return (
    <section className="bg-white max-w-[1500px] mx-auto py-[43px] md:py-[60px] px-[20px]  md:px-[60px]">
      <div className="  mx-auto grid md:grid-cols-2 md:gap-[100px] gap-[24px] items-center">
        {/* Left Image */}
        <div className="relative w-full  rounded-xl overflow-hidden">
          <Image
            src={assets.About} 
            alt="Children doing creative activity"
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="md:mb-[16px] mb-[8px]">
            Who are we ?
          </h2>
          <p className="text-[#2C2C2C md:text-[20px] text-[16px] md:leading-[30px] leading-[24px]">
            Artbeat is an innovative <b className="text-[#e2725b]">creative arts program</b> focused on empowering
            children across India to build emotional literacy, cognitive skills,
            and social resilience through deep, trauma-informed engagement with
            music, visual arts, storytelling, and writing. Aligned with the
            <b className="text-[#e2725b]"> National Education Policy 2024</b> and grounded in Positive Psychology
            and Social Emotional Learning (SEL) frameworks, Artbeat nurtures the
            whole child—<b className="text-[#e2725b]">Head, Heart, and Hand</b>—to <b className="text-[#e2725b]">thrive</b> academically and
            socially.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
