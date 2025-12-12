import Image from "next/image";
import { assets } from "@/Assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#FFF1EF] ">
      <div className="max-w-[1500px] mx-auto ">
        <p className="footer-subtext text-center text-[#E2725B] font-normal md:text-[32px] md:leading-[41px] text-[24px] leading-[32px] md:pt-[81px] pt-[24px] md:pb-[60px] pb-[40px] px-[20px]">
          You&apos;ve reached the end of the page
          <br /> but the journey of creativity and collaboration can begin right
          here. Let&apos;s make something beautiful together.
        </p>

        <div className="flex flex-col justify-between items-start gap-10 relative z-10">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-[40px]  justify-between md:px-[60px] px-[20px] w-[100%] max-md:text-center">
            {/* Logo + tagline */}
            <div>
              <div className="flex items-center justify-center">
                <Image
                  src={assets.logo}
                  alt="Artbeat Logo"
                  unoptimized
                  className="md:w-[224px] w-[183px]"
                />
              </div>
              <p className="py-[16px] font-semibold text-[#212121] md:text-[18px] md:leading-[18px] text-[16px] leading-[16px]">
                Every heart has a beat. Every beat has a voice
              </p>
              {/* Social Icons */}
              <div className="flex md:gap-[26px] gap-[16px] justify-center">
                <a href="#" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                  >
                    <rect
                      x="2.31048"
                      y="3.31048"
                      width="25.3793"
                      height="25.3793"
                      rx="5.51724"
                      stroke="#212121"
                      strokeWidth="2.2069"
                    />
                    <path
                      d="M22.1535 10.2178H17.8641C16.3437 10.2178 15.108 11.4443 15.0967 12.9647V28.138M12.1841 18.921H19.1795"
                      stroke="#212121"
                      strokeWidth="2.18481"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                  >
                    <rect
                      x="2.20696"
                      y="3.31048"
                      width="25.3793"
                      height="25.3793"
                      rx="5.51724"
                      stroke="#212121"
                      strokeWidth="2.2069"
                    />
                    <path
                      d="M21.7823 16.1159C21.7823 19.7358 18.8478 22.6703 15.2278 22.6703C11.6079 22.6703 8.67334 19.7358 8.67334 16.1159C8.67334 12.496 11.6079 9.56152 15.2278 9.56152C18.8478 9.56152 21.7823 12.496 21.7823 16.1159Z"
                      stroke="#212121"
                      strokeWidth="2.18481"
                    />
                    <path
                      d="M23.2512 8.10449H23.2373"
                      stroke="#212121"
                      strokeWidth="2.91309"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <rect
                      x="4.20696"
                      y="3.31048"
                      width="25.3793"
                      height="25.3793"
                      rx="5.51724"
                      stroke="#212121"
                      strokeWidth="2.2069"
                    />
                    <path
                      d="M22.8882 16.6093C22.6721 17.4916 21.522 18.1254 19.2218 19.393C16.7199 20.7715 15.469 21.4608 14.4558 21.1953C14.1126 21.1053 13.7966 20.9471 13.5312 20.7326C12.7476 20.0991 12.7476 18.7839 12.7476 16.1535C12.7476 13.5232 12.7476 12.208 13.5312 11.5744C13.7966 11.3599 14.1126 11.2017 14.4558 11.1118C15.469 10.8462 16.7199 11.5355 19.2218 12.9141C21.522 14.1817 22.6721 14.8154 22.8882 15.6978C22.9618 15.9981 22.9618 16.3089 22.8882 16.6093Z"
                      stroke="#212121"
                      strokeWidth="2.18481"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-[#212121] md:text-[20px] md:leading-[20px] text-[16px] leading-[16px]">
                You Can Reach Us At
              </h3>
              <div className="flex items-center gap-[18px] md:my-[16px] my-[12px] max-md:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M2.33301 7L10.3982 11.5698C13.3715 13.2545 14.6278 13.2545 17.6012 11.5698L25.6663 7"
                    stroke="black"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.35141 15.7212C2.42767 19.2977 2.46581 21.0859 3.78546 22.4106C5.1051 23.7353 6.94173 23.7814 10.615 23.8736C12.8789 23.9306 15.1205 23.9306 17.3844 23.8736C21.0577 23.7814 22.8942 23.7353 24.214 22.4106C25.5336 21.0859 25.5717 19.2977 25.6479 15.7212C25.6725 14.5712 25.6725 13.4281 25.6479 12.2781C25.5717 8.70168 25.5336 6.91345 24.214 5.58878C22.8942 4.26411 21.0577 4.21797 17.3844 4.12567C15.1205 4.06879 12.8789 4.06879 10.615 4.12566C6.94173 4.21795 5.1051 4.26409 3.78545 5.58877C2.4658 6.91344 2.42767 8.70167 2.35139 12.2781C2.32687 13.4281 2.32688 14.5712 2.35141 15.7212Z"
                    stroke="black"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#212121] md:text-[16px] md:[16px] text-[14px]">
                  contact@artbeat.space
                </span>
              </div>
              <div className="flex items-center gap-[18px] max-md:justify-center max-md:max-w-[90%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M10.6846 6.66427L10.2149 5.60729C9.9077 4.91619 9.75412 4.57063 9.52444 4.30618C9.23659 3.97476 8.86138 3.73093 8.44162 3.60249C8.10668 3.5 7.72853 3.5 6.97224 3.5C5.86589 3.5 5.31272 3.5 4.84835 3.71267C4.30135 3.96319 3.80734 4.50716 3.61052 5.0757C3.44343 5.55834 3.49129 6.05433 3.58701 7.04632C4.60589 17.6052 10.3948 23.3941 20.9536 24.413C21.9456 24.5087 22.4417 24.5566 22.9242 24.3895C23.4929 24.1927 24.0368 23.6986 24.2874 23.1517C24.5 22.6872 24.5 22.1341 24.5 21.0278C24.5 20.2714 24.4999 19.8933 24.3975 19.5583C24.2691 19.1386 24.0252 18.7634 23.6938 18.4756C23.4294 18.2458 23.0839 18.0923 22.3927 17.7851L21.3357 17.3153C20.5873 16.9827 20.213 16.8164 19.8328 16.7803C19.4688 16.7456 19.1019 16.7967 18.7612 16.9294C18.4053 17.068 18.0907 17.3301 17.4614 17.8544C16.8352 18.3764 16.522 18.6374 16.1394 18.7771C15.8001 18.901 15.3516 18.947 14.9944 18.8943C14.5913 18.8349 14.2827 18.67 13.6655 18.3401C11.7451 17.3139 10.6861 16.2549 9.65985 14.3345C9.32999 13.7173 9.16507 13.4086 9.10568 13.0057C9.05303 12.6483 9.09892 12.1998 9.22285 11.8607C9.36264 11.478 9.62361 11.1648 10.1456 10.5385C10.6699 9.90929 10.9321 9.59469 11.0707 9.23873C11.2033 8.8981 11.2544 8.53113 11.2198 8.16723C11.1836 7.78694 11.0173 7.41272 10.6846 6.66427Z"
                    stroke="#141B34"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[#212121] md:text-[16px] md:[16px] text-[14px]">
                  +91 9880292522
                </span>
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="font-bold text-[#212121] md:text-[20px] md:leading-[20px] text-[16px] leading-[16px]">
                Join the Family
              </h3>
              <p className="text-[#212121] md:text-[16px] md:leading-[16px] text-[14px] leading-[14px] mb-[20px] font-medium mt-[4px]">
                Get updates on latest news and events
              </p>
              <div className="flex gap-[10px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2  bg-[#fff] text-[#AFAFAF] md:text-[16px] md:leading-[16px] text-[14px] leading-[14px] border border-[#D5D5D5] rounded-[52px] w-full max-w-xs focus:outline-none"
                />
                <button className="flex items-center gap-[10px] bg-[#E2725B] text-white text-[16px] font-medium leading-[16px] px-[16px] py-[12px] rounded-[52px]">
                  Subscribe{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-[100%] md:px-[60px] px-[0]">
            {/* Desktop Illustration */}
            <Image
              src={assets.FooterDesk}
              alt="Footer Illustration"
              width="100%"
              height="auto"
              unoptimized
              className="hidden md:block h-auto"
            />

            {/* Mobile Illustration */}
            <Image
              src={assets.FooterMob}
              alt="Footer Illustration"
              width="100%"
              height="auto"
              unoptimized
              className="block md:hidden w-full h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
