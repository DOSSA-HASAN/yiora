"use client";

import { motion, Variants } from 'framer-motion';

interface TimelineEvent {
    date: string;
    title: string;
    location: string;
    dotBgClass: string;
    textVariantClass: string;
}

export default function UpcomingTimeline() {
    // 1. Explicitly type parent container timeline stagger properties
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    // 2. Explicitly type sequential item slides
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    };

    // 3. Line growth tracking configuration
    const lineVariants: Variants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const events: TimelineEvent[] = [
        {
            date: "Nov 10",
            title: "Morning Yoga",
            location: "Central Park, 8AM",
            dotBgClass: "bg-secondary",
            textVariantClass: "text-secondary"
        },
        {
            date: "Nov 14",
            title: "Glow Workshop",
            location: "L'Atelier Studio, 6PM",
            dotBgClass: "bg-tertiary",
            textVariantClass: "text-tertiary"
        },
        {
            date: "Nov 18",
            title: "Wine & Unwind",
            location: "The Terrace, 7PM",
            dotBgClass: "bg-primary",
            textVariantClass: "text-primary"
        },
        {
            date: "Nov 21",
            title: "Sweat & Social",
            location: "Riverside Path, 9AM",
            dotBgClass: "bg-secondary-container",
            textVariantClass: "text-on-secondary-container"
        }
    ];

    return (
        <section className="py-spacing-section-gap px-gutter overflow-hidden bg-background py-15">
            <div className="max-w-container-max mx-auto">

                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="font-display-lg text-headline-lg text-on-surface mb-16 text-center"
                >
                    Upcoming Timeline
                </motion.h2>

                {/* Timeline wrapper tracking viewport triggers */}
                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Animated Connecting Vector Background Line */}
                    <motion.div
                        variants={lineVariants}
                        className="absolute top-12 left-0 w-full h-1 bg-surface-container-highest origin-left -translate-y-1/2"
                    />

                    {/* Cards Flex Row Box */}
                    <motion.div
                        variants={containerVariants}
                        className="flex justify-between items-center relative z-10 gap-8 overflow-x-auto pb-8 snap-x no-scrollbar"
                    >
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex-shrink-0 w-64 snap-center group"
                            >
                                {/* Timeline Node Node Point */}
                                <div
                                    className={`${event.dotBgClass} w-4 h-4 rounded-full mx-auto mb-4 border-4 border-background shadow-md transform group-hover:scale-130 transition-transform duration-200`}
                                />

                                {/* Event Card Information Container */}
                                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm text-center border border-surface-container/50 group-hover:shadow-md transition-shadow duration-300">
                                    <span className={`${event.textVariantClass} font-bold text-label-md block mb-1`}>
                                        {event.date}
                                    </span>
                                    <h4 className="font-headline-md text-body-md text-on-surface">
                                        {event.title}
                                    </h4>
                                    <p className="text-on-surface-variant text-xs mt-2">
                                        {event.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}