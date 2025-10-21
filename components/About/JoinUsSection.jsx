import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function JoinUsSection() {
  return (
    <section className="max-w-[1500px] mx-auto px-[16px] md:px-[60px] pb-[40px] pt-[20px] md:pt-[145px]">
      <div className="bg-[#FFEDCE] rounded-[20px] flex flex-col-reverse md:flex-row items-center relative justify-between gap-6 max-md:pb-[30px]">
      <div className="w-[100%] md:w-[63%] md:py-[30px] md:pl-[40px] max-md:px-[16px]">
        <h2 className="">Join Us</h2>
        <p className="text-[#2C2C2C] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-[400] py-[16px]">
          We invite educators, parents, psychologists, and changemakers to help us shape the future of child well-being.
        </p>
        <Link href="/coming-soon" className="bg-[#E2725B] text-white inline-block  itext-[16px] md:text-[18px] font-medium rounded-full px-[20px] py-[11px]">
          Apply here !
        </Link>
      </div>
      <div className="md:absolute static top-[-25%] right-[3%] max-md:p-[16px]">
        <Image
          src={assets.joinUs}
          alt="Join Us Illustration"
          unoptimized
          width="395"
          height="auto"
          className="rounded"
        />
      </div>
      </div>
    </section>
  );
}
