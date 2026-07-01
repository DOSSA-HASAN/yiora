"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative min-h-[819px] flex items-center pt-10 overflow-hidden bg-background">
            <div className="max-w-container-max mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Side Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-md uppercase tracking-widest">
                        Our Identity
                    </span>
                    <h1 className="font-display-lg text-display-lg leading-tight text-primary tracking-tight">
                        A Space Built for{" "}
                        <span className="text-secondary italic font-serif">Belonging.</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                        Y'IORA isn't just a platform; it's a living, breathing ecosystem
                        designed to foster spontaneous human connection in a digital-first
                        world.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-md hover:scale-105 active:scale-98 transition-transform shadow-lg shadow-primary/20 cursor-pointer">
                            Explore the Vibe
                        </button>
                    </div>
                </motion.div>

                {/* Right Side Visual/Media Column */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="relative z-10 rounded-xl overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500 h-[500px] w-full"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXi-HcfEp39EgtWVkQq5Fw3RLuj9fdPMdCZqKS7cvbb5brymOZ3KOvN2pGDHdIS216D43H4Sgcn_ot7U2YRNRBXaLZzk2JszBf4f7WQNZaUVjoRtR9Gv1F6TaM7um_edSf5Omio1IDjqI8VIkg-GymJbF50fyKj2ROKn2_a-XuFXJCRteCfuW55BDuMkniRXT-pXutwm4cCNvDKvWtN161zMAPFfKi-CfdRXHvNgQsI92K0_9MtOh7pRBTe4runKD2BnsB5ofWGqY"
                            alt="A candid photograph of a diverse group of young creatives laughing and sharing a meal at a long outdoor table during golden hour."
                            fill
                            priority
                            sizes="(max-w-1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container rounded-full opacity-30 blur-3xl animate-pulse duration-4000" />
                    <div
                        className="absolute -bottom-8 -left-8 w-32 h-32 bg-tertiary-container rounded-full opacity-40 blur-2xl animate-pulse duration-4000"
                        style={{ animationDelay: "2s" }}
                    />
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [12, 15, 12] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-1/2 -right-4 material-symbols-outlined text-tertiary text-6xl opacity-50 select-none pointer-events-none"
                    >
                        auto_awesome
                    </motion.div>
                </div>

            </div>
        </section>
    );
}