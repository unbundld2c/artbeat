import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import REHeroSection from "@/components/Research&Evidence/REHeroSection";
import ContentSection from "@/components/ContentSection";
import PartnerLogos from "@/components/Partners/PartnerLogos";
import WhyPartnerSection from "@/components/Partners/WhyPartnerSection";
import Contact from "@/components/ContactUs/contact";
import { assets } from "@/Assets/assets";

export default function Partners() {
    return (
        <>
            <Header />
            {/* Partner Hero Section */}
            <REHeroSection
                title="Built to be Shared, Ready to Scale"
                description="We collaborate with like-minded organizations to bring creative wellbeing to more children, providing the resources and support you need to implement them in your own space"
                buttonText="Learn More"
                buttonLink="/contact-us"
                imageSrc={assets.PartnerHero}
                imageAlt="Partner collaboration illustration"
                bgMobile="bg-[#FFF5D7]"
                bgDesktop="bg-[linear-gradient(260.15deg,rgba(255,255,255,0)_0%,rgba(255,245,215,0.89)_32.2%)]"
            />

            {/* Our Shared Vision */}
            <ContentSection
                title="Our Shared Vision"
                imageSrc={assets.PartnerVision}
                imageAlt="Children collaborating in creative arts"
                reverse={false}
                titleAlign="text-left"
                customPadding="px-[20px] md:px-[60px]"
            >
                <p className="text-[16px] md:text-[20px] leading-[150%] text-[#2C2C2C] font-normal">
                    Maximizing Potential: At Artbeat, we believe every child deserves the opportunity to flourish. We actively seek partnerships with organizations, schools, and businesses that share our commitment to unleashing the academic, creative, and emotional brilliance of young learners through transformative arts programs.
                </p>
            </ContentSection>

            {/* Why Partner with Artbeat Section */}
            <WhyPartnerSection
                imageSrc={assets.WhyPartner}
                imageAlt="Child thinking about partnership"
            />

            {/* Our Partners Section */}
            <PartnerLogos
                heading="Our Partners"
                partners={[
                    { name: "Shiksharth", logo: assets.PartnerLogo1 },
                    { name: "AAGAZZ Theatre Trust", logo: assets.PartnerLogo2 },
                    { name: "Starfire Education", logo: assets.PartnerLogo3 }
                ]}
            />

            {/* Contact Section - Without business enquiries and map */}
            <Contact
                showBusinessEnquiries={false}
                customImage={assets.PartnerContact}
                showDivider={false}
                showMap={false}
                showImageOnMobile={false}
            />

            <Footer />
        </>
    );
}
