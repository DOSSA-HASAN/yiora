"use client";

import { motion } from "framer-motion";

export default function ContactDetails() {
    return (
        <div className="space-y-10 lg:pr-8">
            {/* Editorial Title Block */}
            <div className="space-y-4">
                <span className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-label-md uppercase tracking-widest">
                    Connect Here
                </span>
                <h1 className="font-display-lg text-display-lg leading-tight text-primary tracking-tight">
                    Let’s start the{" "}
                    <span className="text-secondary italic font-serif">conversation.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    We treat every email with presence. Whether you want to spin up a custom event, ask about active hubs, or partner with our ecosystem, we are here for it.
                </p>
            </div>

            {/* Info Channels List */}
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-0.5">Email Us</h4>
                        <p className="font-headline-md text-headline-md text-primary">yiora.co.tz@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-0.5">Global Presence</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Tanzania • Dar • Upanga
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Stamp Links */}
            <div className="pt-4 border-t border-outline/20">
                <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Follow the Vibe</h4>
                <div className="flex gap-4">
                    {["Instagram", "Twitter", "Community Slack"].map((platform) => (
                        <span
                            key={platform}
                            className="text-secondary font-label-md text-label-md underline cursor-pointer hover:text-primary transition-colors duration-200"
                        >
                            {platform}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}