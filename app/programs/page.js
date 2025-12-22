import { assets } from "@/Assets/assets";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import AgeGroupTabs from "@/components/programs/AgeGroupTabs";
import BenefitsAccordion from "@/components/programs/BenefitsAccordion";
import CoreFrameworks from "@/components/programs/CoreFrameworks";
import ImplementationPrinciples from "@/components/programs/ImplementationPrinciples";
import Iwt from "@/components/programs/Iwt";
import ProgramMain from "@/components/programs/ProgramMain";

export default function Home() {
  const aarohIwt = {
  title: "Aaroh",
  subtitle: "Music Pedagogy",
  illustrationUrl: assets.Aaroh,
  description: "Aaroh is an immersive music program that introduces children to a rich tapestry of musical genres through exploration of various instruments, sounds, and rhythms.",
  sections: [
    {
      heading: "Neurological Foundations",
      content: "Research shows musical engagement enhances brain plasticity, activates language and executive function areas, and supports emotional regulation circuits."
    },
    {
      heading: "Musical Genres and Instruments",
      content: "In Aaroh, children discover and engage with a diverse range of musical traditions and instruments suited to their age and interests, including:",
      listItems: [
        { label: "Carnatic Classical", description: "Exploring melodic intricacies and rhythm patterns (tala)" },
        { label: "Hindustani Classical", description: "Raga-based improvisation and vocal styles" },
        { label: "Jazz", description: "Syncopation, blues scales, and improvisational creativity" },
        { label: "Folk and World Music", description: "Traditional beats and cultural storytelling" },
        { label: "Contemporary Styles", description: "Popular music, fusion, and digital sound exploration" }
      ]
    }
  ]
};
const ageGroupsData = [
  {
    id: "3-5",
    label: "Age 3-5",
    curriculumOverview: "At every stage, participants engage with core thematic areas...",
    curriculumList: [
      "Emotional 'Continents' Exploration",
      "Body & Breath Awareness",
      "Sound & Rhythm Foundations",
      // ... add the rest from the image
    ],
    goalsTitle: "Through playful and embodied musical experiences, children begin to:",
    goalsList: [
      "Recognize and explore basic emotions through sound and movement.",
      "Develop early breath control and body awareness...",
      // ... add the rest from the image
    ]
  },
  {
    id: "6-8",
    label: "Age 6-8",
    curriculumOverview: "Advanced exploration for older children...",
    curriculumList: ["Rhythmic complexity", "Instrumental basics"],
    goalsTitle: "Children will achieve:",
    goalsList: ["Team collaboration", "Musical literacy"]
  },
  // Add 9-12 and 16-24 here...
];

const benefitsData = [
    {
      title: "For Students",
      content: [
        "Enhanced emotional intelligence and self-regulation.",
        "Improved focus and cognitive development.",
        "Cultural awareness and appreciation."
      ]
    },
    {
      title: "For Schools",
      content: [
        "A turn-key music curriculum aligned with NEP goals.",
        "Supports holistic student development.",
        "Easy integration into existing schedules."
      ]
    },
    {
      title: "For Parents",
      content: [
        "Regular updates on child's musical progress.",
        "Tools to support emotional bonding at home.",
        "A safe space for creative expression."
      ]
    },
    {
      title: "For Teachers",
      content: [
        "Comprehensive lesson plans and resources.",
        "Professional development workshops.",
        "Structured frameworks for assessment."
      ]
    }
  ];
  return (
    <>
      <Header/>
      <ProgramMain />
      <CoreFrameworks />
      <ImplementationPrinciples />
      <section className="max-w-[1500px] mx-[60px] my-[92px] bg-[#FFFAEB] p-[40px] rounded-[20px]">
      <Iwt data={aarohIwt}/>
      <AgeGroupTabs data={ageGroupsData} />
      <BenefitsAccordion benefits={benefitsData} />
      </section>
      <Footer/>
    </>
  );
}
