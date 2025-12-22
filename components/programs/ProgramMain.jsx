import { assets } from "@/Assets/assets";
import Image from "next/image";

const ProgramMain = () => {
  return (
    <section className="max-w-[1900px] mx-auto relative">
      {/* Image Container */}
      <div className="relative">
        {/* Mobile Image */}
        <Image
          src={assets.ProgramMobBanner}
          alt="Child expressing art"
          unoptimized
          className="block md:hidden w-[100%]"
          priority
        />
        {/* Desktop Image */}
        <Image
          src={assets.ProgramDeskBanner}
          alt="Child expressing art"
          unoptimized
          className="hidden md:block w-[100%]"
          priority
        />

        {/* Text & Buttons (absolute overlay) */}
        <div className="absolute md:top-1/4 bottom-[10%] left-[16px] md:left-[60px] md:max-w-[700px] max-w-[100%] z-10 max-md:top-[10%]">
          <h1 className="md:text-[52px] md:leading-[52px] text-[30px] md:mb-[36px] mb-[16px] leading-[28px] text-[#2c2c2c] font-normal max-md:text-center">
            Nurturing growth from childhood to 
            <br />
            adulthood—fostering lifelong well-
            <br />
            being and expression
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProgramMain;
