import { assets } from "@/Assets/assets";
import Image from "next/image";

export default function VisionSection() {
    return (
        <section className="relative bg-white h-auto mx-auto md:max-w-[1500px] md:py-[40px] md:px-[60px]">
            <div className="bg-gradient-to-b from-[#FFE6E0] to-[#FFF8E4] md:rounded-[28px] flex flex-col-reverse md:flex-row items-center justify-between md:gap-2 md:pl-[60px] md:pr-[4px] md:py-[0]">
                <div className="md:w-1/2 md:text-left md:py-[140px] md:p-0 p-[16px] mb-1"> 
                    <h2 className="text-[#2c2c2c] text-[30px] md:text-[50px] font-semibold mb-2">
                        Our Vision
                    </h2>
                    <p className="text-[#2c2c2c] text-[20px] md:text-[24px] md:leading-relaxed">
                        We aspire to spark a movement where every child
                        feels seen, heard,
                        and strong—resilient to life’s
                        challenges, connected to self and others, and
                        confident as creative problem-solvers.
                    </p>
                </div>

                <div className="flex justify-center pt-[10px] md:w-1/2 md:justify-end"> 
                    <Image
                        src={assets.visionImage}
                        alt="Children forming a heart shape, representing our vision" 
                        className="w-[115%] h-auto object-contain  md:max-w-[600px]"
                        unoptimized
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
