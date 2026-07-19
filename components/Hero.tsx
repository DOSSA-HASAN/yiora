"use client";

import Image from 'next/image';
import { motion, Variants, TargetAndTransition } from 'framer-motion';

export default function HeroHeader() {
    // 1. Explicitly type the stagger container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // 2. Explicitly type the fade up text elements
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    };

    // 3. Explicitly type the function's return shape as TargetAndTransition
    const floatAnimation = (
        delay: number,
        duration: number = 2,
        yDistance: number = -12
    ): TargetAndTransition => ({
        y: [0, yDistance, 0],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }
    });

    return (
        <header className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 px-gutter bg-background">
            <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side: Typography & CTAs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={fadeUpVariants}
                        className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface mb-6 leading-tight"
                    >
                        Life's Better <br />
                        <motion.span
                            className="text-secondary italic inline-block"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Together.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariants}
                        className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md"
                    >
                        Y'IORA is a sanctuary for the modern woman. A space to rediscover
                        joy, spark creativity, and build friendships that actually feel like
                        home.
                    </motion.p>

                    <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4">
                        <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-transform duration-200">
                            Explore Experiences
                        </button>
                        <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-label-md hover:bg-tertiary-container hover:text-on-tertiary active:scale-95 transition-colors duration-200">
                            Join Our Community
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side: Scrapbook Collage */}
                <div className="relative h-[500px] lg:h-[600px]">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                        animate={{ opacity: 1, scale: 1, rotate: -6 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, zIndex: 40, rotate: -2 }}
                        className="absolute top-0 left-0 w-100 md:w-150 h-100 rounded-lg overflow-hidden shadow-xl scrapbook-card z-20 cursor-pointer origin-center"
                    >
                        <div style={{ backgroundImage: "url(/Asset-10-vectors.svg);" }} className='flex justify-center items-center h-full w-full bg-center bg-no-repeat'>
                            <Image
                                src="/yiora-branding-18.png"
                                alt="A warm, candid photograph of two young women laughing heartily while sharing a picnic on a sunny afternoon."
                                // fill
                                width={500}
                                height={500}
                                // sizes="50px"
                                className="w-auto h-full object-cover select-none"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Floating Doodles */}
                    <motion.span
                        animate={floatAnimation(0, 5, -10)}
                        className="material-symbols-outlined absolute top-4 left-1/2 text-secondary text-4xl select-none"
                    >
                        auto_awesome
                    </motion.span>
                    <motion.span
                        animate={floatAnimation(1, 6, -14)}
                        className="material-symbols-outlined absolute bottom-1/4 right-0 text-tertiary text-5xl select-none"
                    >
                        local_florist
                    </motion.span>
                    <motion.span
                        animate={floatAnimation(2, 4.5, -8)}
                        className="material-symbols-outlined absolute top-1/3 left-0 text-primary text-3xl select-none"
                    >
                        palette
                    </motion.span>
                    <motion.span
                        animate={floatAnimation(1.5, 5.5, -12)}
                        className="material-symbols-outlined absolute bottom-4 left-1/4 text-secondary text-4xl select-none"
                    >
                        favorite
                    </motion.span>
                    <motion.span
                        animate={floatAnimation(0.5, 4, -10)}
                        className="material-symbols-outlined absolute top-10 right-1/4 text-tertiary-fixed-dim text-4xl select-none"
                    >
                        wb_sunny
                    </motion.span>
                </div>
            </div>

            {/* Background Blobs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container rounded-full blob-bg pointer-events-none" />
            <div className="absolute bottom-0 -left-24 w-80 h-80 bg-secondary-container rounded-full blob-bg pointer-events-none" style={{ animationDelay: '-4s' }} />
        </header>
    );
}