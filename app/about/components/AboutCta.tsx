"use client";

import { motion } from "framer-motion";

export default function AboutCta() {
    return (
        <section className="py-spacing-section-gap bg-background py-15">
            <div className="max-w-container-max mx-auto px-gutter text-center">
                <div className="bg-secondary-fixed p-12 md:p-20 rounded-xl relative overflow-hidden shadow-sm">

                    {/* Main Context Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="z-10 relative space-y-8"
                    >
                        <h2 className="font-display-lg text-display-lg text-on-secondary-fixed tracking-tight">
                            Ready to find <span className="italic font-serif">your</span> people?
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-secondary-fixed-variant max-w-2xl mx-auto leading-relaxed">
                            The community is waiting for exactly what you bring. No
                            pretenses, just presence.
                        </p>
                        <button className="bg-on-secondary-fixed text-white px-10 py-5 rounded-full font-headline-md hover:scale-105 active:scale-98 transition-all duration-200 shadow-xl cursor-pointer">
                            Join Y'IORA Today
                        </button>
                    </motion.div>

                    {/* Organic Background Radial Aura Blobs */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary rounded-full opacity-10 blur-3xl select-none pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-fixed rounded-full opacity-30 blur-3xl select-none pointer-events-none" />

                </div>
            </div>
        </section>
    );
}