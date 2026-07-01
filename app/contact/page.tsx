import { Metadata } from "next";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Y'IORA",
    description: "Get in touch with the Y'IORA community team. Send inquiries about attending experiences, hosting, or brand collaboration.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-on-background py-20 relative overflow-hidden">
            {/* Subtle organic background decoration to blend with the About style layouts */}
            <div className="absolute top-[-10%] right-[-15%] w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-5%] left-[-10%] w-80 h-80 bg-tertiary-container/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-container-max mx-auto px-gutter relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}