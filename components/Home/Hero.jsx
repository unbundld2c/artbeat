import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  desktopImage = assets.HeroDesk,
  mobileImage = assets.HeroMob,
  imageAlt = "Child expressing art",
  title = null,
  subtitle = null,
  primaryButtonText = "Learn More",
  primaryButtonLink = "/about-us",
  secondaryButtonText = "Watch Our Story",
  secondaryButtonLink = "/coming-soon",
  showSecondaryButton = true,
}) => {
  const defaultTitle = (
    <>
      Every feeling has a rightful place—
      <br />
      your mood finds resonance here,
      <br />
      reminding us that all feelings are valid
      <br />
      and belong.
    </>
  );

  return (
    <section className="max-w-[1900px] mx-auto relative bg-[#fff8ee]">
      {/* Image Container */}
      <div className="relative">
        {/* Mobile Image */}
        <Image
          src={mobileImage}
          alt={imageAlt}
          unoptimized
          className="block md:hidden w-[100%]"
          priority
        />
        {/* Desktop Image */}
        <Image
          src={desktopImage}
          alt={imageAlt}
          unoptimized
          className="hidden md:block w-[100%]"
          priority
        />

        {/* Text & Buttons (absolute overlay) */}
        <div className="absolute md:top-1/4 bottom-[10%] right-[20px] left-[20px] md:left-[60px] md:max-w-[700px] max-w-[100%] z-10">
          <h1 className="md:text-[52px] md:leading-[52px] text-[30px] leading-[100%] text-[#2c2c2c] font-normal">
            {title || defaultTitle}
          </h1>

          {subtitle && (
            <p className="md:text-[32px] leading-[150%] text-[24px] text-[#2c2c2c] font-normal">
              {subtitle}
            </p>
          )}

          <div className="flex md:gap-[20px] gap-[16px] md:mt-[30px] mt-[16px]">
            <Link
              href={primaryButtonLink}
              className="bg-[#E2725B] flex items-center text-white px-[20px] py-[10px] rounded-[60px] md:text-[18px] md:leading-[18px] text-[16px] leading-[16px]"
            >
              {primaryButtonText}
            </Link>
            {showSecondaryButton && (
              <Link
                href={secondaryButtonLink}
                className="border-1 border-[#E2725B] text-[#E2725B] px-[20px] py-[10px] md:text-[18px] md:leading-[18px] text-[16px] leading-[16px] rounded-[60px] bg-white flex items-center gap-[10px]"
              >
                {secondaryButtonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#E2725B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z"
                    stroke="#E2725B"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
