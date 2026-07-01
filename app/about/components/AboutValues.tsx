"use client";

import { motion, Variants } from "framer-motion";

interface ValueItem {
    icon: string;
    title: string;
    description: string;
    rotationClass: string;
    bgContainer: string;
    textContainer: string;
}

export default function AboutValues() {
    const values: ValueItem[] = [
        {
            icon: "diversity_3",
            title: "Radical Inclusion",
            description: "We believe the table is always big enough for one more chair.",
            rotationClass: "-rotate-2 hover:rotate-0",
            bgContainer: "bg-secondary-container",
            textContainer: "text-on-secondary-container",
        },
        {
            icon: "bolt",
            title: "Spontaneity",
            description: "The best moments are the ones we didn't plan for.",
            rotationClass: "rotate-3 hover:rotate-0",
            bgContainer: "bg-tertiary-container",
            textContainer: "text-on-tertiary-container",
        },
        {
            icon: "eco",
            title: "Earthly Care",
            description: "We protect the physical spaces where we gather and grow.",
            rotationClass: "-rotate-1 hover:rotate-0",
            bgContainer: "bg-primary-container",
            textContainer: "text-on-primary-container",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-spacing-section-gap bg-surface-container-low relative overflow-hidden py-15">
            {/* Dynamic Background Layout Text Watermarks */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 select-none">
                <div className="absolute top-10 left-10 transform -rotate-12 font-display-lg text-headline-lg text-primary/10 italic font-serif">
                    Authenticity
                </div>
                <div className="absolute bottom-20 right-10 transform rotate-6 font-display-lg text-headline-lg text-secondary/10 italic font-serif">
                    Belonging
                </div>
            </div>

            {/* Section Typography Intro Context */}
            <div className="max-w-container-max mx-auto px-gutter text-center mb-16 relative z-10">
                <h2 className="font-display-lg text-headline-lg text-primary tracking-tight mb-2">
                    What We Live By
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Our values aren't corporate posters; they're our daily pulse.
                </p>
            </div>

            {/* Flexible Grid Core Deck Canvas */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="max-w-container-max mx-auto px-gutter flex flex-wrap justify-center gap-10 relative z-10"
            >
                {values.map((val, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover={{ y: -8 }}
                        className={`w-full md:w-72 bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform ${val.rotationClass}`}
                    >
                        {/* Modular Adaptive Icon Frame Box */}
                        <div className={`w-16 h-16 ${val.bgContainer} rounded-full flex items-center justify-center mb-6`}>
                            <span className={`material-symbols-outlined ${val.textContainer} text-3xl select-none`}>
                                {val.icon}
                            </span>
                        </div>

                        <h4 className="font-headline-md text-headline-md font-bold text-primary mb-2 tracking-tight">
                            {val.title}
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            {val.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}