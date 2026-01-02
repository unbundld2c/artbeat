import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import REHeroSection from "@/components/Research&Evidence/REHeroSection";
import ProblemContextSection from "@/components/Research&Evidence/ProblemContextSection";
import InsightsResourcesSection from "@/components/Research&Evidence/InsightsResourcesSection";

export default function Home() {
  return (
    <>
      <Header />  
      <REHeroSection />
      <ProblemContextSection />
      <InsightsResourcesSection />
      <Footer />
    </>
  );
}
