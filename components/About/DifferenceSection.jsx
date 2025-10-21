import ContentSection from "@/components/ContentSection";
import { assets } from "@/Assets/assets"; 

const DifferenceImage = () => {
  return (
    <>
      {/* Image on Right */}
      <ContentSection
        title="What Makes Us Different"
        imageSrc={assets.differenceImage} 
        imageAlt="Children collaborate on a hexagonal floor art project"
        reverse={true}
      >
        {/* Text in left */}
        <p className="text-[#2C2C2C] md:text-[20px] md:text-left text-center text-[16px] md:leading-[34px] leading-[24px]">
          Artbeat is distinguished by being neither a clinical therapy nor a
          traditional art class but a child-centric well-being program that
          integrates music, visual arts, writing, and storytelling with
          contemporary research and endorsed practices in child development,
          social-emotional learning (SEL), and trauma-informed care in India.
          Artbeat draws on current evidence and recognized educational
          frameworks as well as learnings from leading initiatives in the
          country to shape its holistic approach to children's well-being.
        </p>
      </ContentSection>
    </>
  );
};

export default DifferenceImage;