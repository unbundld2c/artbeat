import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import ImpactOverview from "@/components/Impacts/ImpactOverview";
import OurImpact from "@/components/Impacts/OurImpact";
import WhyChildren from "@/components/Impacts/WhyChildren";
import ImpactCollage from "@/components/Impacts/ImpactCollage";
import BenefitsOfArtbeat from "@/components/Impacts/BenefitsOfArtbeat";

export default function Home() {
  return (
    <>
      <Header/>
      <ImpactOverview/>
      <BenefitsOfArtbeat/>
      <OurImpact/>
      <WhyChildren/>
      <ImpactCollage/>
      <Footer/>
    </>
  );
}
