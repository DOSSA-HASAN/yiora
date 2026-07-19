import { Metadata } from "next";
import AboutHero from "./components/Hero";
import AboutStory from "./components/AboutStory";
import AboutVision from "./components/AboutVision";
import AboutValues from "./components/AboutValues";
import AboutTeam from "./components/AboutTeam";
import AboutTimeline from "./components/AboutTimeline";
import AboutCta from "./components/AboutCta";

export const metadata: Metadata = {
    title: "About Us | Y'IORA",
    description: "Discover the story, mission, and identity behind Y'IORA—a living, breathing ecosystem built for offline community belonging.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-on-background relative">
            <AboutHero />
            <AboutStory />
            <AboutVision />
            <AboutValues />
            {/* <AboutTeam /> */}
            {/* <AboutTimeline /> */}
            <AboutCta />
        </main>
    );
}