import ContentSection from "@/components/ContentSection";
import { assets } from "@/Assets/assets";

const MissionSection = () => {
  return (
    <>
       {/* Image on Left */}
      <ContentSection
        title="Our Mission"
        imageSrc={assets.missionImage}
        imageAlt="Teacher in a classroom with students raising their hands"
        reverse={false}
      >
        {/* Text on Right */}
        <div className="text-[#2C2C2C md:text-[18px] text-[16px] md:text-left text-center md:leading-[30px] leading-[24px] space-y-4">
            <p>
                To provide safe, inclusive, and engaging creative arts
                experiences—rooted in evidence-based practices—that help children
                explore feelings, develop skills, and flourish in mind, heart, and body.
            </p>
            <p className="text-[#E2725B] font-semibold italic">
                "Artbeat integrates research-supported principles from creative arts and
                child well-being into every program, designing original modules to foster
                children's growth, confidence, and voice."
            </p>
        </div>
      </ContentSection>
    </>
  );
};

export default MissionSection;