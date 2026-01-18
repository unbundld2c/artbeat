import { assets } from "@/Assets/assets";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import AgeGroupTabs from "@/components/programs/AgeGroupTabs";
import BenefitsAccordion from "@/components/programs/BenefitsAccordion";
import CoreFrameworks from "@/components/programs/CoreFrameworks";
import ImplementationPrinciples from "@/components/programs/ImplementationPrinciples";
import Iwt from "@/components/programs/Iwt";
import ProgramMain from "@/components/programs/ProgramMain";
import { programContent } from "@/components/programContent";
import StakeholderRoles from "@/components/programs/StakeholderRoles";
import CompetenciesOutcomes from "@/components/programs/CompetenciesOutcomes";

export default function Home() {

  return (
    <>
      <Header />
      <ProgramMain />
      <CoreFrameworks />
      <StakeholderRoles />
      <ImplementationPrinciples />
      <CompetenciesOutcomes />
      {programContent.map((program) => (
        <section
          key={program.id}
          id={program.id}
          style={{ backgroundColor: program.bgColor }}
          className="max-w-[1500px] mx-0 md:mx-[60px] my-[60px] md:my-[92px] p-[16px] md:p-[40px] rounded-[20px]"
        >
          <Iwt data={program.iwt} />
          <AgeGroupTabs data={program.ageGroups} />
        </section>
      ))}
      <Footer />
    </>
  );
}
