"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutVision() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const blockVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-spacing-section-gap bg-background py-15">
            <div className="max-w-container-max mx-auto px-gutter">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-gap-gutter h-auto md:h-[600px] gap-10"
                >
                    {/* 1. The Vision Wide Box */}
                    <motion.div
                        variants={blockVariants}
                        className="md:col-span-2 md:row-span-1 bg-surface-container-high rounded-lg p-10 flex flex-col justify-center relative overflow-hidden group"
                    >
                        <div className="z-10 space-y-4">
                            <h3 className="font-display-lg text-headline-lg text-primary tracking-tight">
                                The Vision
                            </h3>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md leading-relaxed">
                                To become the world's most human-centric social
                                infrastructure, where loneliness is obsolete and spontaneity
                                is a way of life.
                            </p>
                        </div>
                        <span className="absolute right-[-10%] top-[-10%] material-symbols-outlined text-[200px] text-primary/5 group-hover:rotate-12 transition-transform duration-700 select-none pointer-events-none">
                            visibility
                        </span>
                    </motion.div>

                    {/* 2. The Mission Tall Box */}
                    <motion.div
                        variants={blockVariants}
                        className="md:col-span-1 md:row-span-2 bg-tertiary-container rounded-lg p-10 flex flex-col justify-between items-start relative overflow-hidden"
                    >
                        <div className="space-y-4">
                            <h3 className="font-display-lg text-headline-lg text-on-tertiary-container tracking-tight">
                                The Mission
                            </h3>
                            <p className="font-body-md text-body-md text-on-tertiary-container/80 leading-relaxed">
                                To facilitate 10 million authentic offline connections by 2026
                                through intuitive, community-driven tools.
                            </p>
                        </div>
                        <div className="w-full h-48 mt-4 rounded-xl overflow-hidden shadow-lg relative shrink-0">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5nGadeSgraWZ5wOEb2BWGTBs7fAs3rwbQStp0hcL8_zdfDxGAQkjD4lsLZLH9rpnk6B3OuoBknQ7bNqtROW9RCb_HxFjRl_E3KdH58mL5i3BgAyBKPtgWCxq4EdCQ-XoVnONGUahxJyK7ButkDs7QA7jdaR5adVAdsHzjv1pVLI4gX_vqFP_2aXR9znITzA9p8YLFUWRzRJLpxDvST4WVlmlUih4eXcQwss7Nruyx8iU9R28mZZS_75WtQIlWBxDzFkQUgNqvJ70"
                                alt="A group of diverse people engaged in a collaborative community mural painting activity."
                                fill
                                sizes="(max-w-768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* 3. Connection Rate Metric Box */}
                    <motion.div
                        variants={blockVariants}
                        whileHover={{ y: -4 }}
                        className="md:col-span-1 md:row-span-1 bg-secondary text-on-secondary rounded-lg p-10 flex flex-col justify-center text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-secondary/10"
                    >
                        <div className="font-display-lg text-[64px] font-bold mb-2 tracking-tight">94%</div>
                        <p className="font-label-md text-label-md uppercase tracking-widest font-medium">
                            Higher Connection Rate
                        </p>
                    </motion.div>

                    {/* 4. Global Members Metric Box */}
                    <motion.div
                        variants={blockVariants}
                        whileHover={{ y: -4 }}
                        className="md:col-span-1 md:row-span-1 bg-primary text-on-primary rounded-lg p-10 flex flex-col justify-center text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                        <div className="font-display-lg text-[64px] font-bold mb-2 tracking-tight">50k+</div>
                        <p className="font-label-md text-label-md uppercase tracking-widest font-medium">
                            Global Members
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}