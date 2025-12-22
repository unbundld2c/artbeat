import Image from "next/image";
import { assets } from "@/Assets/assets";

const OurImpact = () => {
  return (
    <section className="w-full bg-white py-[40px] md:py-[50px] px-[20px] md:px-[60px]">
      <div className="max-w-[1500px] mx-auto text-center">

        <h2 className="text-[#2C2C2C] mb-[20px]">
          Our Impact
        </h2>

        <p className="text-[#2C2C2C] text-[16px] md:text-[18px] leading-[26px] max-w-[750px] mx-auto mb-[20px]">
          ArtBeat partners with schools, educators, and communities to bring 
          <b className="text-[#E2725B]"> creativity-driven wellbeing programs </b>
          that help children thrive emotionally, socially, and academically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[20px] mt-[20px]">

          {/* Children */}
          <div className="flex flex-col items-center">
            <Image
              src={assets.ImpactChildren}
              alt="Children Illustration"
              width={200}
              height={200}
              className="mb-[20px] h-full"
              unoptimized
            />
            
            <p className="text-[16px] md:text-[18px] font-medium text-[#333]">
              Children
            </p>
          </div>

          {/* Teachers */}
          <div className="flex flex-col items-center">
            <Image
              src={assets.ImpactTeachers}
              alt="Teachers Illustration"
              width={200}
              height={200}
              className="mb-[20px] h-full"
              unoptimized
            />
            <p className="text-[16px] md:text-[18px] font-medium text-[#333]">
              Teachers
            </p>
          </div>

          {/* Schools */}
          <div className="flex flex-col items-center">
            <Image
              src={assets.ImpactSchools}
              alt="Schools Illustration"
              width={200}
              height={200}
              className="mb-[20px] h-full"
              unoptimized
            />
            <p className="text-[16px] md:text-[18px] font-medium text-[#333]">
              Schools
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurImpact;
