"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    label: string;
    href: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navigationLinks: NavLink[] = [
        { label: "Discover", href: "/experiences" }, // Maps to your catalog grid layout
        { label: "Our Community", href: "/community" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm shadow-primary/10 transition-all duration-300 ease-out border-b border-outline/5">
            <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">

                {/* Brand Stamp Link Logo */}
                <Link
                    href="/"
                    className="font-display-lg text-headline-md text-secondary italic tracking-tighter hover:opacity-90 select-none"
                >
                    Y'IORA
                </Link>

                {/* Desktop Navigation Link Stack */}
                <div className="hidden md:flex items-center gap-8">
                    {navigationLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium transition-all duration-200 hover:text-secondary ${isActive
                                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                                    : "text-on-surface-variant hover:scale-105"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button Block (Desktop Only) */}
                <div className="hidden md:block">
                    <button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-md text-label-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
                        Join Community
                    </button>
                </div>

                {/* Mobile Menu Action Trigger Icon (Lucide Integrated) */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="text-primary p-2 focus:outline-none transition-transform active:scale-90 cursor-pointer"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Full-Screen / Dropdown Mobile Drawer System */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden w-full bg-surface border-t border-outline/10 overflow-hidden shadow-xl"
                    >
                        <div className="px-gutter py-6 flex flex-col gap-5 bg-surface-container-lowest">
                            {navigationLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`font-headline-md text-title-lg tracking-tight transition-colors py-2 ${isActive ? "text-secondary font-bold" : "text-on-surface-variant"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            <div className="pt-4 border-t border-outline/10">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-secondary text-on-secondary text-center py-3 rounded-xl font-headline-md shadow-md shadow-secondary/10 active:scale-98 transition-transform"
                                >
                                    Join Community
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}