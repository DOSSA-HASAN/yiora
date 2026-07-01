"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutStory() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-spacing-section-gap bg-secondary-container/20 rounded-t-lg overflow-hidden py-15">
            <div className="max-w-container-max mx-auto px-gutter">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Asymmetrical Bento Grid Block */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="order-2 lg:order-1 grid grid-cols-2 gap-4"
                    >
                        {/* Left Staggered Column */}
                        <div className="space-y-4 pt-12">
                            <motion.div
                                variants={itemVariants}
                                className="rounded-lg overflow-hidden h-64 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative w-full"
                            >
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEDpVxMp3HpcMkBYQ2A4cWds4fGOtoORMhYe2jnnnrhLpgrrXNNGGtWs5x7hFp7Rer07sQ0k8_dQzOa5F3o_ZhzRIvw4fZelt-8PXHlvBTA-qp-o6usjjZRP0m3YSUdEte3ru5gJhQHSJzTXVDermoRvRbOe9_QHT9q6_hx36aEEiktP-sRPObH-GwiNFaSzYY5YttOBP33mfJ0SwW0KqOZw926DghDsaz5_Wferx4rKiQY5NC4GBIlKKXrpxj26a-XFOmFSkAmI"
                                    alt="Close-up artistic shot of two people's hands together, one holding a blooming pink flower, against a soft-focus background of a green garden."
                                    fill
                                    sizes="(max-w-1024px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-tertiary-fixed rounded-lg p-6 shadow-sm">
                                <span className="material-symbols-outlined text-on-tertiary-fixed text-4xl mb-2 select-none">
                                    favorite
                                </span>
                                <p className="font-headline-md text-on-tertiary-fixed font-bold">
                                    Founded on empathy.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Staggered Column */}
                        <div className="space-y-4">
                            <motion.div variants={itemVariants} className="bg-primary-container rounded-lg p-6 shadow-sm">
                                <span className="material-symbols-outlined text-on-primary-container text-4xl mb-2 select-none">
                                    handshake
                                </span>
                                <p className="font-headline-md text-on-primary-container font-bold">
                                    Built by hands.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="rounded-lg overflow-hidden h-64 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative w-full"
                            >
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjoALcSbVG3PVYAg5Ko4x338uCdweupTVo-VmDEmSaAq_QQZM092w4lolkLNsiuJdjAwqChOGBqXynOU6ofq5HimMX2kKu7b22BDo80IQNysgB5WfAyEcrKJuu9kw5gvKBcnCtmh1ZFSaH7MelAfYXJ0Tvn-C26UmkwgueeU2Ia3_v600jdfVCEX_q6hNbVDwjItAYCVqKoAlyzuHr9mR_hZqY3PEvc5P8bqt6ap57h4VRF7uWc4PMWuAf3G7MgDHap8nii1BYenw"
                                    alt="A minimalist photograph of a vintage film camera sitting on a wooden table next to a cup of latte with heart-shaped foam."
                                    fill
                                    sizes="(max-w-1024px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Editorial Text Blocks */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <h2 className="font-display-lg text-headline-lg text-secondary tracking-tight">
                            Our Story
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            It started in a small cafe in 2022. We noticed how everyone was
                            connected to their screens but disconnected from each other.
                            Y&apos;IORA was born from a simple question: &ldquo;How can we use
                            technology to make us more human?&rdquo;
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant opacity-80 leading-relaxed">
                            We began as a series of local pop-up dinners and &ldquo;stranger
                            picnics.&rdquo; The energy was infectious. We realized people weren&apos;t
                            just looking for events; they were looking for a tribe. Today,
                            we&apos;ve scaled that intimacy to thousands of members worldwide.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}