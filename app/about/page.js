import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import VisionSection from "@/components/About/VisionSection";
import MissionSection from "@/components/About/MissionSection";
import DifferenceSection from "@/components/About/DifferenceSection";
import GuidesSection from "@/components/About/GuidesSection";
import CareTechnologySection from "@/components/About/CareTechnologySection";
import TeamSection from "@/components/About/TeamSection";
import JoinUsSection from "@/components/About/JoinUsSection";

export default function About() {
    return (
        <>
            <Header />
            <VisionSection />
            <MissionSection />            
            <DifferenceSection />
            <GuidesSection />
            <CareTechnologySection/>
            <TeamSection />
            <JoinUsSection />
            <Footer />
        </>
    );
}
