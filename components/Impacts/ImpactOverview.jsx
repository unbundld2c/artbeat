import ContentSection from "@/components/ContentSection";
import { assets } from "@/Assets/assets";

const ImpactOverview = () => {
  return (
    <ContentSection
      title="Impact Overview"
      imageSrc={assets.ImpactOverviewImage}
      imageAlt="Children exploring nature together"
      reverse={false}
    >
      <p className="text-[#2C2C2C] md:text-[20px] text-[16px] text-center md:text-left md:leading-[34px] leading-[24px]">
        ArtBeat is at the forefront of nurturing emotional wellbeing and creative
        expression in children. Through <b className="text-[#E2725B]">art, music, storytelling, and joyful play</b>,
        we help young learners build <b className="text-[#E2725B]">confidence, empathy, and resilience</b>.
        Our programs are grounded in evidence-based SEL practices and developed
        with insights from educators, child psychologists, and community partners.
      </p>

      <br />

      <p className="text-[#2C2C2C] md:text-[20px] text-[16px] text-center md:text-left md:leading-[34px] leading-[24px]">
        We continuously gather <b className="text-[#E2725B]">feedback</b> from children, families, and teachers
        to refine our approach and ensure that every program supports emotional
        growth, creative freedom, and a safe space for self-expression.
      </p>
    </ContentSection>
  );
};

export default ImpactOverview;
