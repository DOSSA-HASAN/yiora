"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    altText: string;
}

export default function AboutTeam() {
    const team: TeamMember[] = [
        {
            name: "Elara Vance",
            role: "Founder & Vibe Lead",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHAuolKrDBmoz-ROr_HEKDDgvuwxUB6h0gDNG67z5VRHQQxfViScKyJUcpwS1lk8PTTikvnQw3r7zFXEe3hCnzZdlbPNvu0M8K7uhOYLEVl4GiSQchDoduX7ksqvlnGPzQQlFuZA4ZDE4_9fFrn-C4JI6XMfC6qmgUy0Z_a5wh813y1UXovW_ZLl55ZyEvUiT8KT62xYtnGbP16W6T7C078RPwsa44qgJedWGHJStLbtysGHHLH_Fwx2rn6uHT_TI4O58jJ6lYNbk",
            altText: "Professional yet approachable headshot of a female creative founder with curly hair, laughing naturally in a sunlit studio environment.",
        },
        {
            name: "Julian Grey",
            role: "Product Experience",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUM_EYEagLmIcwt8h7cYWyX4v3zl7gH4FcTUGS2s4PwTchf9O8rEWhC2Sw9sHAQ0E3mwn0YCgwGrQKJNz_4viAe2RpYZwVashpV9VjaY5OLUkqd1-gyTV4qs3EX9_fm_K_LvrANa8aGgmShReKdoQgGxVJR8JO09rVXQm3GycewhrBvIM0QGXx4C1qh6u__8HyyQXdMAWKhiiyLT9XnqxKhcSNc6wioPOM0tWPqetIwb4gieoei9ItSpVWaIHIk4HNJYrXXB49mq8",
            altText: "Portrait of a male product designer wearing round glasses, sitting in a minimalist, plant-filled office with warm wood accents.",
        },
        {
            name: "Sana Khan",
            role: "Community Growth",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEuBXOqLDxhUDNEZZTAccCJCba4_bBIFZKMkfFCY37VCMEXwN-TUtCJGrJKDnISawQyUhiT2zPyBlOVuya0N0oHg6B3foDy2VDrZnhI_67rGblJmP-n5lpP8b6qewGkjgeveaiNGsrEAQizQku-hVNGo6lBdl2_xbpGI0xz1h0mkeUdb8Zej6bb1XzoZJUE9upNsvFqlxE19W2LG_QTywm9pcU_cclLfDuhZwyz7FS24_I4cb7wMU7N14UeBvJxJY2_wrDWmSjpDw",
            altText: "A candid portrait of a woman with colorful braids outdoors at a festival-like setting, smiling broadly.",
        },
        {
            name: "Mori Chen",
            role: "Strategy & Ops",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4e1DjQmq3S-6t03vT5PeTm_xQgT6SQFhU4DPWH1Wq31RijvWkybwiqUzruOfeouig_sQ25q3ZgokkeSLTl75AmoRFOU-zpS6VQ3Q_53MyU7-UQXVLnKtc2ZcCgRVleS3r2oXz3jaCg3Weu7LhjTZys9bh62dLx-fDV2K30KWVcQDciRovmT061thim9tWiAj2WR7XbDoRYeqKgUz1Mj5DAlKaSinjVfNAS3IdL1OpcjdkDRrj0YHxUP7vBuo_F52fKviUCjL3R48",
            altText: "Close-up artistic portrait of a non-binary person wearing an earthly clay colored jacket in front of a soft linen wall.",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-spacing-section-gap bg-background py-15">
            <div className="max-w-container-max mx-auto px-gutter">

                {/* Header Block with CTA alignment */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-display-lg text-headline-lg text-primary tracking-tight mb-2">
                            The Curators
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            A ragtag team of dreamers, designers, and community builders
                            making the magic happen behind the scenes.
                        </p>
                    </div>
                    <button className="text-secondary font-label-md text-label-md border-2 border-secondary px-6 py-2 rounded-full hover:bg-secondary hover:text-on-secondary transition-colors duration-200 cursor-pointer shrink-0">
                        Work with Us
                    </button>
                </div>

                {/* Dynamic Alternating Team Member Grid Deck */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {team.map((member, idx) => {
                        // Apply the mt-8 offset to even-indexed columns on desktop for an asymmetrical editorial rhythm
                        const isEven = idx % 2 !== 0;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                className={`space-y-4 group ${isEven ? "md:mt-8" : ""}`}
                            >
                                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md group-hover:scale-[1.02] transition-transform duration-300 relative w-full bg-surface-container-low">
                                    <Image
                                        src={member.imageSrc}
                                        alt={member.altText}
                                        fill
                                        sizes="(max-w-640px) 50vw, 25vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h5 className="font-headline-md text-headline-md text-primary tracking-tight">
                                        {member.name}
                                    </h5>
                                    <p className="font-label-md text-label-md text-secondary uppercase tracking-tight">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}