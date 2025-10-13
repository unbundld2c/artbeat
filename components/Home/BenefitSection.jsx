import { assets } from "@/Assets/assets";
import Image from "next/image";

const BenefitsSection = () => (
  <section className="max-w-[1500px] mx-auto  md:px-[60px] px-[20px]">
    {/* Desktop image */}
    <div className="relative">
    {/* <h2 className=" text-center absolute w-[100%] top-[5%]">Benefits for the Child</h2> */}
      <Image
        src={assets.BenefitsDesk}
        alt="Benefits for the Child Desktop"
        className="w-[100%] hidden md:block"
        height="auto"
        unoptimized
      />
       {/* Mobile image */}
    <div className="flex md:hidden justify-center">
      <Image
        src={assets.BenefitsMob}
        alt="Benefits for the Child Mobile"
        width="100%"
        height="auto"
        className="w-[100%]"
        unoptimized
      />
    </div>
    </div>
   
  </section>
);

export default BenefitsSection;
