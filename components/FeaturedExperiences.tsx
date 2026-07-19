"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface ExperienceItem {
    id: number;
    title: string;
    category: string;
    badgeBg: string;
    description: string;
    date: string;
    imgUrl: string;
    alt: string;
}

export default function FeaturedExperiences() {
    // 1. Explicitly type the stagger grid container
    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // 2. Explicitly type the card cascade animation
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    };

    // 3. Strongly type the dynamic array data structure
    const experiences: ExperienceItem[] = [
        {
            id: 4,
            title: "Glow & Grow",
            category: "Wellness",
            badgeBg: "bg-secondary",
            description: "A guided mindfulness session followed by a skincare and self-love workshop.",
            date: "Nov 14th",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkn6sG6QuA1zKW55abbxPxdSVr4-23sEb7se4nbgq-zf2ylTTJgeuvY5AELJP3ehB1FVOINwyeGQFvByGEsYxIlv4sOx587V2x5W8wG1GEYBjTp-Qc8yFAaY-StO6K6H5XCH71qhMjvue6MgoD6mwL2aG5C6pxpK_y7AlNG1oZ53wOhBgfmN0tnuCQOfTZUnSKTTKDWIm9Iw5MWhOMzZA004O_giBKwumZktmwQEEICAodsgyOpnzWaC8yne7Cy0-cowLkKY9ieNc",
            alt: "A vibrant, aesthetic setup for a 'Glow & Grow' workshop. Soft candlelight, crystals, and beautifully designed journals are arranged on a low wooden table."
        },
        {
            id: 5,
            title: "Sweat & Social",
            category: "Fitness",
            badgeBg: "bg-tertiary",
            description: "45-min Pilates flow followed by healthy smoothies and community chat.",
            date: "Nov 21st",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD11qiAxfmjifjQG3Bla9KDD7iXG1HipO-p1upSceDL3wKyJDA-pIzsThcalXFtdbBlLn6wNoe_C_9RysCEbMZmt07fYRrrDPgrIVN5u8yKpi0oRYIq6N3BTxm-m8mQCnO8k1KtcIm9mkBoplsrOrjwfkhRgI-y5JzlWlFNYDZPKWObKftDOjXLIWJC07SFhGpMAFxCr90t2tsN8v1PLcuuqLbto3Sd-4qj-Jon7t4KSehcH1Yt3_4_gXBw2A9Nhx0zbzfVOhnGRqE",
            alt: "A high-energy, outdoor 'Sweat & Social' fitness event. A group of cheerful women in coordinated, colorful activewear are stretching together."
        },
        {
            id: 6,
            title: "Picnic & Paint",
            category: "Creative",
            badgeBg: "bg-primary",
            description: "Unleash your inner artist with watercolor painting in the park.",
            date: "Dec 5th",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAORDpkgT5qCHNXtpvjXStsGl7lAhWQd7wgTn-j7ZLLYFbnTadQy5c4LtoKENA4ZiHsBaNtthZGVArwzg89jmJt1VfbKdUIeJ5p09WEVarNwbh698gJgA_gxglSH44GpgclBmT6lVKOxmbKz33uQAB7QDmdFtIH5IGXON5oYcy4lEF8uwSyqdYfbit6eIci0LrsWMCOEr3S6lvzHLblZDj6Fh2kfsSmV4Cl0XTuhq1_qHd82MYZGFDG_4rbR3zFmAUoYDE1JVz7hb0",
            alt: "A festive and creative 'Picnic & Paint' setting. A long white tablecloth on the grass is laden with fresh fruits, sparkling juices, and small easels."
        }
    ];

    return (
        <section className="py-spacing-section-gap px-gutter bg-background py-15">
            <div className="max-w-container-max mx-auto">

                {/* Header Block */}
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-label-md text-secondary uppercase tracking-widest block">
                            Our Top Vibes
                        </span>
                        <h2 className="font-display-lg text-headline-lg text-on-surface mt-2">
                            Featured Experiences
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:block"
                    >
                    </motion.div>
                </div>

                <div className='flex flex-col justify-center items-center w-full relative'>
                    <Image
                        src={"/Asset 2-vectors.svg"}
                        alt=''
                        width={500}
                        height={500}
                        priority
                        className='object-cover w-full md:w-[50%]'
                    />
                    <Image
                        src={"/yiora-branding-19.png"}
                        alt=''
                        width={500}
                        height={500}
                        priority
                        className='object-cover w-full md:w-[50%]'
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-[70%] font-display-sm  shadow-md rounded-md text-center p-3 text-white bg-secondary  mb-12 italic font-bold"
                    >
                        We are officially at the starting line! While our events calendar is empty right now, we are busy crafting unforgettable experiences that will be worth the wait. Don't go anywhere—keep an eye on this space, because we’re about to drop something great.s
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}