import ExperienceCatalog from "./components/ExperienceCatalog";
import { experiencesData } from "./data";

export const metadata = {
    title: "Experiences Collective | Y'IORA",
    description: "Curated moments designed to spark connection, creativity, and belonging.",
};

export default function ExperiencesPage() {
    return (
        <main className="max-w-container-max mx-auto px-gutter py-12 bg-background overflow-x-hidden">
            {/* Dynamic Interactive Filter and Bento Card Canvas Grid */}
            <ExperienceCatalog initialExperiences={experiencesData} />
        </main>
    );
}