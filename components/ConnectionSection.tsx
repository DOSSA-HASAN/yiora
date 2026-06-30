"use client";

import { motion, Variants } from 'framer-motion';

export default function ConnectionSection() {
    // 1. Explicitly type the stagger container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    // 2. Explicitly type the dynamic function return shape as Variants
    const cardVariants = (initialX: number, initialRotate: number): Variants => ({
        hidden: {
            opacity: 0,
            x: initialX,
            rotate: initialRotate - 8,
            y: 30
        },
        visible: {
            opacity: 1,
            x: initialX,
            rotate: initialRotate,
            y: 0,
            transition: { duration: 0.7, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    });

    return (
        <section className="py-spacing-section-gap bg-surface-container-low px-gutter overflow-hidden relative py-15">
            <div className="max-w-3xl mx-auto text-center relative z-10">

                {/* Animated Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="font-display-lg text-headline-lg-mobile lg:text-headline-lg text-primary mb-12"
                >
                    Looking for something more?
                </motion.h2>

                {/* Stacked Cards Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={cardVariants(0, -1)}
                        whileHover={{ scale: 1.02, rotate: -0.5, y: -4 }}
                        className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-8 border-secondary cursor-default"
                    >
                        <p className="font-headline-md text-on-surface">
                            Searching for friends who actually 'get' you?
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={cardVariants(16, 1)} // 16px matches translate-x-4
                        whileHover={{ scale: 1.02, rotate: 0.5, y: -4 }}
                        className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-r-8 border-tertiary cursor-default"
                    >
                        <p className="font-headline-md text-on-surface">
                            Wanting to try new things but not alone?
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={cardVariants(-16, -2)} // -16px matches -translate-x-4
                        whileHover={{ scale: 1.02, rotate: -1, y: -4 }}
                        className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-8 border-primary-fixed-dim cursor-default"
                    >
                        <p className="font-headline-md text-on-surface">
                            Ready to trade scrolling for real soul-filling moments?
                        </p>
                    </motion.div>
                </motion.div>

                {/* Animated Footer Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto"
                >
                    Y'IORA was built for the dreamers, the doers, and the seekers. We
                    provide the container; you bring the magic.
                </motion.p>
            </div>

            {/* Decorative SVG Blob */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 8, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 pointer-events-none opacity-10"
            >
                <svg
                    height="400"
                    viewBox="0 0 200 200"
                    width="400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M45.7,-78.3C58.9,-71.4,69.1,-58.5,76.4,-44.7C83.7,-30.9,88.1,-16.2,88.4,-1.3C88.6,13.6,84.7,28.8,77.5,42.4C70.3,55.9,59.8,67.8,47,74.9C34.2,82,19.1,84.4,4,82.1C-11.1,79.8,-26.3,72.9,-39.8,64.9C-53.3,56.9,-65.2,47.8,-73.4,36C-81.6,24.2,-86.2,9.7,-86.1,-4.9C-86.1,-19.6,-81.4,-34.4,-72.7,-46.7C-64,-59,-51.3,-68.8,-38,-75.6C-24.7,-82.4,-10.8,-86.2,2.3,-89.6C15.4,-93,32.5,-85.2,45.7,-78.3Z"
                        fill="#8c4b54"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>
        </section>
    );
}