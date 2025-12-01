import Image from "next/image";
import { assets } from "@/Assets/assets";

export default function ImpactCollageSection() {
  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-[1500px] mx-auto">

        <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
          <Image
            src={assets.ImpactCollage}
            alt="Impact collage"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
