"use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus("idle");

        try {
            // Replace these strings with your actual EmailJS dashboard credentials
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            );

            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden">
            <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-2">
                Send a Message
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Have a question or just want to say hi? Drop us a line below.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user_name" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            required
                            placeholder="Elara Vance"
                            className="w-full bg-white border border-outline/30 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors duration-200"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="user_phone" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="user_phone"
                            name="user_phone"
                            placeholder="+254 700 000000"
                            className="w-full bg-white border border-outline/30 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors duration-200"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="user_email" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        placeholder="elara@yiora.com"
                        className="w-full bg-white border border-outline/30 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors duration-200"
                    />
                </div>

                {/* Experience Dropdown (Context Field) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="interest_category" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                        What are you interested in?
                    </label>
                    <select
                        id="interest_category"
                        name="interest_category"
                        defaultValue="General Inquiry"
                        className="w-full bg-white border border-outline/30 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors duration-200 appearance-none cursor-pointer"
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Attending Experiences">Attending Experiences</option>
                        <option value="Hosting an Experience">Hosting an Experience</option>
                        <option value="Partnerships">Brand Partnerships</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Message Box */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        className="w-full bg-white border border-outline/30 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                    />
                </div>

                {/* Action Button & Feedback Status UI */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline-md hover:scale-105 active:scale-98 disabled:opacity-50 disabled:scale-100 transition-all duration-200 shadow-md shadow-primary/10 cursor-pointer text-center"
                    >
                        {isSubmitting ? "Sending Vibe..." : "Send Message"}
                    </button>

                    <AnimatePresence mode="popLayout">
                        {status === "success" && (
                            <motion.p
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-secondary font-label-md flex items-center gap-1"
                            >
                                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                Message sent successfully!
                            </motion.p>
                        )}
                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-error font-label-md flex items-center gap-1"
                            >
                                <span className="material-symbols-outlined text-[20px]">error</span>
                                Something went wrong. Try again.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </form>
        </div>
    );
}