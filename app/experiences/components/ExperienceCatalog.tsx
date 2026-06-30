"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Experience } from "../data";
import ExperienceCard from "./ExperienceCard";

interface CatalogProps {
    initialExperiences: Experience[];
}

export default function ExperienceCatalog({ initialExperiences }: CatalogProps) {
    const [activeFilter, setActiveFilter] = useState<string>("All");

    const categories = ["All", "Wellness", "Creative", "Fitness", "Lifestyle", "Girl Talk", "Games"];

    const filteredItems = activeFilter === "All"
        ? initialExperiences
        : initialExperiences.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (
        <>
            {/* Hero Section Header Wrapper */}
            <section className="relative mb-spacing-section-gap">
                <div className="absolute -top-10 -right-20 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary-container/40 rounded-full blur-3xl -z-10" />

                <div className="max-w-3xl">
                    <h1 className="font-display-lg text-display-lg mb-4 text-on-background tracking-tight">
                        Experience{" "}
                        <span className="text-secondary italic underline decoration-tertiary-fixed-dim decoration-4">
                            Collective
                        </span>{" "}
                        Magic.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        Curated moments designed to spark connection, creativity, and
                        belonging. Find your next favorite memory in the Y'IORA ecosystem.
                    </p>
                </div>
            </section>

            {/* Persistent Dynamic Nav Filter Row */}
            <section className="mb-12 sticky top-20 z-40 bg-background/80 backdrop-blur-md py-4">
                <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar whitespace-nowrap">
                    {categories.map((cat) => {
                        const isSelected = activeFilter === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-8 py-3 rounded-full font-label-md text-label-md transition-all duration-200 transform cursor-pointer ${isSelected
                                        ? "bg-secondary text-on-secondary shadow-lg shadow-secondary/20 scale-105"
                                        : "bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container"
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Catalog Grid Canvas Component */}
            <motion.section
                layout
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <ExperienceCard key={item.id} item={item} />
                    ))}
                </AnimatePresence>

                {/* Persistent Dynamic Call to Action Grid Box */}
                <div className="group bg-tertiary-container rounded-xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-sm h-full min-h-[440px]">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-on-tertiary-container/10 rounded-full rotate-45" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-on-tertiary-container/10 rounded-full" />
                    <span className="material-symbols-outlined text-[64px] text-on-tertiary-container mb-4">add_circle</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-tertiary-container mb-4">Host Your Own</h3>
                    <p className="text-on-tertiary-container/80 font-body-md text-body-md mb-8 max-w-xs">
                        Have a talent or a passion to share? Create your own experience and grow your community with Y'IORA.
                    </p>
                    <button className="bg-on-tertiary-container text-surface-container-lowest px-8 py-3 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-200 shadow-lg shadow-on-tertiary-container/20 cursor-pointer">
                        Get Started
                    </button>
                </div>
            </motion.section>
        </>
    );
}