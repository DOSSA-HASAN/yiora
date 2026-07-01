"use client";

import { motion, Variants } from "framer-motion";

interface TimelineStep {
    year: string;
    title: string;
    description: string;
    borderColorClass: string;
    dotColorClass: string;
    yearColorClass: string;
    alignment: "top" | "bottom";
}

export default function AboutTimeline() {
    const steps: TimelineStep[] = [
        {
            year: "2022",
            title: "The First Spark",
            description: "The very first Y'IORA supper club was hosted for 12 strangers in a Brooklyn loft.",
            borderColorClass: "border-t-secondary",
            dotColorClass: "bg-secondary",
            yearColorClass: "text-secondary opacity-20",
            alignment: "bottom",
        },
        {
            year: "2023",
            title: "Vibe Expansion",
            description: "Launched the Vibe engine, connecting 1,000+ members through shared creative rituals.",
            borderColorClass: "border-t-tertiary",
            dotColorClass: "bg-tertiary",
            yearColorClass: "text-tertiary opacity-20",
            alignment: "top",
        },
        {
            year: "2024",
            title: "Going Global",
            description: "Official community hubs opened in London, Berlin, and Tokyo.",
            borderColorClass: "border-t-primary",
            dotColorClass: "bg-primary",
            yearColorClass: "text-primary opacity-20",
            alignment: "bottom",
        },
        {
            year: "Future",
            title: "Beyond Digital",
            description: "Building the first physical \"Y'IORA Houses\" for nomadic community living.",
            borderColorClass: "border-t-secondary-container",
            dotColorClass: "bg-secondary-container",
            yearColorClass: "text-secondary-container opacity-60",
            alignment: "top",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-spacing-section-gap bg-primary-container/30 relative overflow-hidden py-15">
            <div className="max-w-container-max mx-auto px-gutter">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display-lg text-headline-lg text-primary tracking-tight">
                        Our Journey
                    </h2>
                </div>

                {/* Timeline Dynamic Runway Area */}
                <div className="relative">

                    {/* Horizontal Axis Tracking Spine Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 z-0" />

                    {/* Timeline Grid Deck Frame Wrapper */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
                    >
                        {steps.map((step, idx) => {
                            const isTopAligned = step.alignment === "top";
                            return (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ y: isTopAligned ? 4 : -4 }}
                                    className={`relative bg-white p-6 rounded-lg shadow-sm border-t-4 ${step.borderColorClass} hover:shadow-md transition-all duration-300 ${isTopAligned ? "md:mt-12" : ""}`}
                                >
                                    {/* Dynamic Alternating Node Trackers (Desktop Only) */}
                                    {isTopAligned ? (
                                        <div className={`hidden md:block absolute top-[-40px] left-1/2 -translate-x-1/2 w-6 h-6 ${step.dotColorClass} rounded-full border-4 border-background shadow-sm`} />
                                    ) : (
                                        <div className={`hidden md:block absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-6 h-6 ${step.dotColorClass} rounded-full border-4 border-background shadow-sm`} />
                                    )}

                                    {/* Year Layout Stamp */}
                                    <span className={`font-display-lg text-display-lg font-bold block mb-2 select-none leading-none tracking-tighter ${step.yearColorClass}`}>
                                        {step.year}
                                    </span>

                                    {/* Step Metadata Details */}
                                    <h6 className="font-headline-md text-headline-md font-bold text-primary mb-2 tracking-tight">
                                        {step.title}
                                    </h6>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}