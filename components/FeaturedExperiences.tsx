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

                {/* Cards Grid Container */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group bg-surface-container-lowest rounded-lg overflow-hidden scrapbook-card cursor-pointer shadow-sm transition-shadow duration-300 hover:shadow-md"
                        >
                            {/* Media Block Wrapper */}
                            <div className="h-64 overflow-hidden relative">
                                <Image
                                    src={exp.imgUrl}
                                    alt={exp.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className={`absolute top-4 left-4 text-white px-4 py-1 rounded-full text-label-md font-bold ${exp.badgeBg}`}>
                                    {exp.category}
                                </div>
                            </div>

                            {/* Text Description Container */}
                            <div className="p-8">
                                <h3 className="font-headline-md text-on-surface mb-2 transition-colors duration-200 group-hover:text-primary">
                                    {exp.title}
                                </h3>
                                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                                    {exp.description}
                                </p>

                                {/* Meta Detail Footer Row */}
                                <div className="flex items-center justify-between border-t border-surface-variant pt-4">
                                    <div className="flex items-center gap-2 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-secondary text-[20px]">
                                            calendar_today
                                        </span>
                                        <span className="text-label-md">{exp.date}</span>
                                    </div>
                                    <span className="font-bold text-secondary relative overflow-hidden group-hover:text-primary transition-colors duration-300">
                                        Join Now
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}