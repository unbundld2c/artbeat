import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Involved = () => {
  return (
    <section className="relative max-w-[1500px] mx-auto md:px-[60px]  md:mt-[85px] md:mb-[45px] my-[43px] flex items-center justify-center">
      {/* Background Image (changes for desktop & mobile) */}
      <div className="w-[100%]">
        {/* Desktop Background */}
        <Image
          src={assets.InvolvedDesk}
          alt="Sky background"
          className="hidden md:block object-cover"
          unoptimized
        />
        {/* Mobile Background */}
        <Image
          src={assets.InvolvedMob}
          alt="Sky background"
          className="block md:hidden object-cover w-[100%] h-[auto]"
          unoptimized
        />
      </div>

      {/* Content Layer */}
      <div className="absolute z-10 text-center w-full">
        {/* Heading */}
        <h2 className="md:mb-[25px] mb-[12px]">
          Get Involved 
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-[330px] gap-[12px]">
          {/* Connect with us */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={assets.Involved1}
              alt="Connect with us"
              className="md:w-[275px] w-[240px] md:h-[auto] h-[200px]"
              height="auto"
              unoptimized
            />
            <Link
              href="/contact-us"
              className="text-[#2C2C2C] md:text-[20px] md:leading-[20px] leading-[16px] text-[16px] font-bold mt-[12px] border-b-[1px] border-[#2C2C2C]"
            >
              Connect with us
            </Link>
          </div>

          {/* Adopt a School */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={assets.Involved2}
              alt="Adopt a School"
              className="md:w-[275px] w-[240px] md:h-[auto] h-[200px]"
              height="auto"
              unoptimized
            />
            <Link
              href="/contact-us"
              className="text-[#2C2C2C] md:text-[20px] md:leading-[20px] leading-[16px] text-[16px] font-bold mt-[12px] border-b-[1px] border-[#2C2C2C]"
            >
              Adopt a School
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involved;
