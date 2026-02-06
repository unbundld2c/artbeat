import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import VisionSection from "@/components/AboutUs/VisionSection";
import MissionSection from "@/components/AboutUs/MissionSection";
import DifferenceSection from "@/components/AboutUs/DifferenceSection";
import GuidesSection from "@/components/AboutUs/GuidesSection";
import CareTechnologySection from "@/components/AboutUs/CareTechnologySection";
import TeamSection from "@/components/AboutUs/TeamSection";
import AdvisorsSection from "@/components/AboutUs/AdvisorsSection";
import TechAdvisorsSection from "@/components/AboutUs/TechAdvisorsSection";
import JoinUsSection from "@/components/AboutUs/JoinUsSection";

export default function AboutUs() {
    return (
        <>
            <Header />
            <VisionSection />
            <MissionSection />
            <DifferenceSection />
            <GuidesSection />
            <CareTechnologySection />
            <TeamSection />
            <AdvisorsSection />
            <TechAdvisorsSection />
            <JoinUsSection />
            <Footer />
        </>
    );
}
