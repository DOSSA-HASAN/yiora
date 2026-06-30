"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Experience } from "../data";

interface ExperienceCardProps {
    item: Experience;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
    // Explicitly typing variants as Variants resolves the strict layout type matching error
    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 15 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            layout
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            whileHover={{ y: -6 }}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col h-full"
        >
            {/* Media Graphic Frame */}
            <Link href={`/experiences/${item.id}`}
                className="relative h-72 w-full">
                <Image
                    src={item.heroImage}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full font-label-md text-label-md shadow-sm">
                    {item.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {item.date}
                </div>
            </Link>

            {/* Data Content Box */}
            <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="font-headline-md text-headline-md text-on-background line-clamp-1">
                            {item.title}
                        </h3>
                        <span className={`font-bold font-label-md text-label-md shrink-0 ${item.isFull ? 'text-on-surface-variant' : 'text-error'}`}>
                            {item.isFull ? "Full House" : `${item.spotsLeft} spots left`}
                        </span>
                    </div>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-2">
                        {item.description}
                    </p>
                </div>

                <div>
                    {/* Facilitator Meta Row */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden relative shrink-0">
                            <Image
                                src={item.host.avatar}
                                alt={item.host.name}
                                fill
                                sizes="40px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-label-md text-label-md text-on-surface">{item.host.name}</p>
                            <p className="text-on-surface-variant text-[12px]">{item.host.location}</p>
                        </div>
                    </div>

                    {/* Operational Controls Routing Block */}
                    <div className="flex gap-3 mt-auto">
                        {item.isFull ? (
                            <button className="flex-1 bg-outline text-on-surface-variant py-3 rounded-full font-label-md text-label-md cursor-not-allowed" disabled>
                                Waitlist
                            </button>
                        ) : (
                            <Link href={`/experiences/${item.id}`} className="flex-1">
                                <button className="w-full bg-primary text-on-primary py-3 rounded-full font-label-md text-label-md hover:bg-secondary transition-colors duration-200 cursor-pointer text-center">
                                    Register
                                </button>
                            </Link>
                        )}
                        <Link href={`/experiences/${item.id}`}>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-secondary-container transition-colors duration-200 cursor-pointer">
                                <span className="material-symbols-outlined">visibility</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}