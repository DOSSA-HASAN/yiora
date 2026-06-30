"use client";

import { motion, Variants, TargetAndTransition } from 'framer-motion';

export default function JoinTheMagic() {
    // 1. Explicitly type the primary container scale reveal
    const boxVariants: Variants = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    };

    // 2. Explicitly type the content block stagger cascade
    const contentVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 }
        }
    };

    // 3. Explicitly type the loop utility shape as TargetAndTransition
    const floatLoop = (delay: number, yDistance: number = -8): TargetAndTransition => ({
        y: [0, yDistance, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }
    });

    return (
        <section className="py-spacing-section-gap px-gutter py-15">
            <motion.div
                variants={boxVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-container-max mx-auto bg-primary text-on-primary rounded-xl overflow-hidden relative p-12 lg:p-24 text-center"
            >
                {/* Content Box Layer */}
                <motion.div
                    variants={contentVariants}
                    className="relative z-10 max-w-2xl mx-auto"
                >
                    <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg mb-6 text-surface-container-lowest">
                        Join the Y'IORA Magic
                    </h2>
                    <p className="font-body-lg text-body-lg mb-12 text-primary-fixed">
                        Your seat at the table is waiting. Whether you're here to create,
                        move, or simply belong—we're ready for you.
                    </p>

                    {/* Action Row Links */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-label-md hover:bg-secondary-fixed transition-colors duration-200 shadow-md"
                        >
                            Join Community
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-transparent border-2 border-surface-container-lowest/50 text-surface-container-lowest px-10 py-4 rounded-full font-label-md transition-colors duration-200 flex items-center gap-2"
                        >
                            Follow Instagram
                        </motion.button>
                    </div>
                </motion.div>

                {/* Decorative Ambient Background Doodles */}
                <div className="absolute inset-0 opacity-10 pointer-events-none select-none text-surface-container-lowest">
                    <motion.span
                        animate={floatLoop(0, -12)}
                        className="material-symbols-outlined absolute top-10 left-10 text-8xl"
                    >
                        local_florist
                    </motion.span>
                    <motion.span
                        animate={floatLoop(1.5, -15)}
                        className="material-symbols-outlined absolute bottom-10 right-10 text-8xl"
                    >
                        auto_awesome
                    </motion.span>
                    <motion.span
                        animate={floatLoop(0.7, -10)}
                        className="material-symbols-outlined absolute top-1/2 right-20 text-6xl"
                    >
                        favorite
                    </motion.span>
                    <motion.span
                        animate={floatLoop(2.2, -14)}
                        className="material-symbols-outlined absolute bottom-20 left-1/4 text-7xl"
                    >
                        palette
                    </motion.span>
                </div>
            </motion.div>
        </section>
    );
}