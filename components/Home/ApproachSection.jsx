
import { assets } from "@/Assets/assets";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="max-w-[1500px] mx-auto md:mt-[100px] mt-[42px] md:mb-[52px] mb-[42px] md:px-[60px] px-[20px]">
      {/* Heading */}
      <h2 className="text-center md:mb-[0px] mb-[18px]">
        Our Approach
      </h2>

      {/* Image Wrapper */}
      <div className="flex justify-center">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src={assets.ApproachMob}
            alt="Our Approach Mobile"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src={assets.ApproachDesk}
            alt="Our Approach Desktop"
            width="100%"
            height="auto"
            className="w-[100%]"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;
