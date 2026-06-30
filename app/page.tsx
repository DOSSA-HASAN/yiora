import Image from "next/image";
import Hero from "../components/Hero";
import ConnectionSection from "@/components/ConnectionSection";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import FindYourVibe from "@/components/FindYourVibe";
import UpcomingTimeline from "@/components/UpcomingTimeline";
import CandidMoments from "@/components/CandidMoments";
import CommunityVoices from "@/components/CommunityVoices";
import JoinTheMagic from "@/components/JoinTheMagic";

export default function Home() {
  return (
    <section>
      <main>
        <Hero />
        <ConnectionSection />
        <FeaturedExperiences />
        <FindYourVibe />
        <UpcomingTimeline />
        <CandidMoments />
        <CommunityVoices />
        <JoinTheMagic />
      </main>
    </section>
  );
}
