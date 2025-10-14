import { assets } from "@/Assets/assets";
import Image from "next/image";

export default function VisionSection() {
    return (
        <section className="bg-white md:max-w-[1500px] mx-auto md:py-[43px] md:py-[50px] md:px-[43px]">
            <div className="bg-gradient-to-b from-[#FFE6E0] to-[#FFF8E4] md:rounded-[28px] flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-12 md:py-3">
                <div className="md:w-1/2 md:text-left"> 
                    <h2 className="text-[#2c2c2c] text-[28px] md:text-[36px] font-semibold mb-4">
                        Our Vision
                    </h2>
                    <p className="text-[#2c2c2c] text-[18px] md:text-[20px] leading-relaxed">
                        We aspire to spark a movement where every child
                        feels seen, heard,
                        and strong—resilient to life’s
                        challenges, connected to self and others, and
                        confident as creative problem-solvers.
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end"> 
                    <Image
                        src={assets.visionImage}
                        alt="Children forming a heart shape, representing our vision" 
                        className="w-full h-auto object-contain max-w-md md:max-w-full"
                        unoptimized
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
