"use client";

import { motion, Variants } from 'framer-motion';

interface CategoryItem {
    label: string;
    icon: string;
    iconColorClass: string;
    circleBgClass: string;
}

export default function FindYourVibe() {
    // 1. Explicitly type the stagger parent container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    // 2. Explicitly type the card entrance variants (pop-in scale effect)
    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 15 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    };

    const categories: CategoryItem[] = [
        {
            label: "Wellness",
            icon: "spa",
            iconColorClass: "text-primary",
            circleBgClass: "bg-primary-container",
        },
        {
            label: "Creative",
            icon: "brush",
            iconColorClass: "text-secondary",
            circleBgClass: "bg-secondary-fixed",
        },
        {
            label: "Fitness",
            icon: "fitness_center",
            iconColorClass: "text-tertiary",
            circleBgClass: "bg-tertiary-fixed",
        },
        {
            label: "Games",
            icon: "casino",
            iconColorClass: "text-primary",
            circleBgClass: "bg-primary-fixed",
        },
        {
            label: "Girl Talk",
            icon: "forum",
            iconColorClass: "text-on-secondary-fixed-variant",
            circleBgClass: "bg-secondary-fixed-dim",
        },
        {
            label: "Lifestyle",
            icon: "local_cafe",
            iconColorClass: "text-on-tertiary-container",
            circleBgClass: "bg-tertiary-container",
        }
    ];

    return (
        <section className="py-spacing-section-gap bg-secondary-container/20 px-gutter py-15">
            <div className="max-w-container-max mx-auto text-center">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="font-display-lg text-headline-lg text-on-surface mb-12"
                >
                    Find Your Vibe
                </motion.h2>

                {/* Categories Grid Array Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -6,
                                transition: { type: "spring", stiffness: 400, damping: 15 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-surface-container-lowest p-6 rounded-lg shadow-sm hover:bg-secondary-container transition-all duration-200 cursor-pointer group select-none"
                        >
                            {/* Dynamic Bubble Shape Layer */}
                            <div
                                className={`w-16 h-16 ${cat.circleBgClass} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-surface-container-lowest transition-colors duration-200`}
                            >
                                <span className={`material-symbols-outlined ${cat.iconColorClass} text-3xl`}>
                                    {cat.icon}
                                </span>
                            </div>
                            <span className="font-headline-md text-body-md block text-on-surface transition-colors duration-200">
                                {cat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}