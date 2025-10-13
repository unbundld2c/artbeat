import AboutSection from "@/components/Home/AboutSection";
import Approach from "@/components/Home/ApproachSection";
import BenefitsSection from "@/components/Home/BenefitSection";
import BlogsSection from "@/components/Home/BlogsSection";
import ExpertVoices from "@/components/Home/ExpertVoices";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Involved from "@/components/Home/InvolvedSection";
import Outcomes from "@/components/Home/Outcomes";
import ProgramsSection from "@/components/Home/ProgramsSection";
import WhyCreativeArts from "@/components/Home/WhyCreativeArts";

export default function Home() {
  return (
    <>
     <Header />
     <Hero/>
     <AboutSection/>
     <WhyCreativeArts/>
     <ProgramsSection />
     <ExpertVoices/>
     <Approach/>
     <Involved/>
     <Outcomes/>
     <BenefitsSection/>
     <BlogsSection/>
     <Footer/>
    </>
  );
}
