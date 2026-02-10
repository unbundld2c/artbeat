import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import ContentSection from "@/components/ContentSection";
import SoundInformsSection from "@/components/Echoes/SoundInformsSection";
import SoundscapeMappingSection from "@/components/Echoes/SoundscapeMappingSection";
import ApproachSection from "@/components/Echoes/ApproachSection";
import BlogsSection from "@/components/Home/BlogsSection";
import { assets } from "@/Assets/assets";

const EchoesPlayIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
        <circle cx="40" cy="40" r="39.5" fill="#FFEDCE" stroke="#E2725B" />
        <path d="M27.5 26.8926C27.5001 24.2054 30.4031 22.5205 32.7363 23.8535L55.6738 36.9609C58.0252 38.3046 58.0252 41.6954 55.6738 43.0391L32.7363 56.1465C30.4031 57.4795 27.5001 55.7946 27.5 53.1074V26.8926Z" fill="white" stroke="#E2725B" />
    </svg>
);

// Hero Section Data for Echoes
const echoesHeroData = {
    desktopImage: assets.EchoesHeroDesk,
    mobileImage: assets.EchoesHeroMob,
    title: "ArtBeat Echoes",
    subtitle: "Where the sound of creativity meets the heartbeat of our community",
    primaryButtonText: "Learn More",
    primaryButtonLink: "/coming-soon"
};

// Listen First. Then Engage Data
const listenFirstData = {
    image: assets.EchoesListenFirst,
    imageAlt: "Person listening attentively",
    title: "Listen First. Then Engage",
    description: "ArtBeat Echoes is our focused effort to ensure ArtBeat program interventions are deeply rooted in the geographies they serve. We believe that truly impactful artistic work begins with listening. By understanding the acoustic environment—the sounds of a place—we gain critical insights into its daily life, culture, and unique rhythm."
};



// // Explore Our Work Data
// const exploreWorkData = {
//     heading: "Explore Our Work",
//     items: [
//         {
//             img: assets.blogImage,
//             title: "Our Work with Governments",
//             hasVideo: true
//         },
//         {
//             img: assets.blogImage,
//             title: "Our Work with Governments",
//             hasVideo: true
//         },
//         {
//             img: assets.blogImage,
//             title: "Our Work with Governments",
//             hasVideo: true
//         }
//     ],
//     buttonText: "Read more",
//     buttonLink: "/coming-soon"
// };

export default function Echoes() {
    return (
        <>
            <Header />

            {/*Echoes Hero Section */}
            <Hero
                desktopImage={echoesHeroData.desktopImage}
                mobileImage={echoesHeroData.mobileImage}
                imageAlt="Echoes Hero"
                title={echoesHeroData.title}
                subtitle={echoesHeroData.subtitle}
                primaryButtonText={echoesHeroData.primaryButtonText}
                primaryButtonLink={echoesHeroData.primaryButtonLink}
                showSecondaryButton={false}
            />

            {/* Listen First. Then Engage */}
            <ContentSection
                title={listenFirstData.title}
                imageSrc={listenFirstData.image}
                imageAlt={listenFirstData.imageAlt}
                reverse={false}
                titleAlign="text-left"
                customPadding="px-[20px] md:px-[60px]"
            >
                <p className="text-[#2C2C2C] md:text-[20px] md:text-left text-[16px] md:leading-[34px] leading-[24px]">
                    {listenFirstData.description}
                </p>
            </ContentSection>

            {/* What is Soundscape Mapping? */}
            <SoundscapeMappingSection />

            {/* Our Approach: Mapping the Local Context */}
            <ApproachSection />

            {/* How Sound Informs Our Art */}
            <SoundInformsSection />

            {/* Explore Our Work */}
            <BlogsSection
                title="Explore Our Work"
                buttonText="Read more"
                buttonLink="/blogs"
                showDate={false}
                showDesc={false}
                playIcon={EchoesPlayIcon}
            />

            <Footer />
        </>
    );
}
