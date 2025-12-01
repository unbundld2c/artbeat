import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import ImpactOverview from "@/components/Impacts/ImpactOverview";
import OurImpact from "@/components/Impacts/OurImpact";
import OutcomeSection from "@/components/Impacts/OutcomeSection";
import WhyChildren from "@/components/Impacts/WhyChildren";
import ImpactCollage from "@/components/Impacts/ImpactCollage";

export default function Home() {
  return (
    <>
      <Header/>
      <ImpactOverview/>
      <OutcomeSection/>
      <OurImpact/>
      <WhyChildren/>
      <ImpactCollage/>
      <Footer/>
    </>
  );
}
