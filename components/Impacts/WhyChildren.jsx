import ContentSection from "@/components/ContentSection";
import { assets } from "@/Assets/assets";
import Image from "next/image";

export default function WhyChildren() {
  return (
    <section className="bg-white py-[40px] md:py-[50px] px-[20px] md:px-[60px]">
      <div className="max-w-[1500px] mx-auto">
        <div className="w-full bg-gradient-to-b from-[#FFE6E0] to-[#FFF8E4] rounded-[28px] md:rounded-[32px] p-[0] md:p-[0] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center w-full">
            <div className="p-[40px] md:p-[60px]">
              <h2 className="text-[#2c2c2c] text-[30px] md:text-[48px] font-semibold mb-4">
                Our why is our children!
              </h2>

              <p className="text-[#2C2C2C] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] mb-[24px] max-w-[550px]">
                We founded Artbeat because we recognised
                the incredible, innate brilliance present in every classroom,
                and we are committed to removing the barriers preventing those
                young minds from reaching their fullest potential—academically,
                creatively, and emotionally.
              </p>

              <a
                href="/impacts"
                className="bg-[#E2725B] text-white px-[28px] py-[12px] rounded-[50px] inline-flex items-center text-[16px] md:text-[18px] font-medium hover:opacity-90 transition"
              >
                Impact Stories
              </a>
            </div>

            <div className="relative w-full aspect-[4/3] lg:h-[500px]">
              <Image
                src={assets.ImpactWhyChildren}
                alt="Child astronaut illustration"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
