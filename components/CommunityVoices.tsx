"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    imgUrl: string;
    alt: string;
    containerClass: string;
    textClass: string;
    shapeClass: string;
    initialRotate: number;
    marginTop?: string;
}

export default function CommunityVoices() {
    // 1. Parent stagger logic
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    // 2. Individual card reveal with "tilt"
    const cardVariants = (initialRotate: number): Variants => ({
        hidden: {
            opacity: 0,
            y: 30,
            rotate: initialRotate
        },
        visible: {
            opacity: 1,
            y: 0,
            rotate: initialRotate,
            transition: { duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    });

    const testimonials: Testimonial[] = [
        {
            id: 13,
            name: "Sarah J.",
            role: "Member since 2023",
            quote: "I moved here not knowing a soul. Y'IORA gave me a space to meet my best friends. It’s more than events, it’s a feeling.",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAue4bx8VPHXcL-LhC7Ngtbxj4hz5jhJ4R2Y4FIomQPSzd3CBRx8ehmpwbXi9P0UirCko7AnlhuDoCyW9jKXPzUdB8YGOWAJ-sz9QVM4Zg2Lrcl4AgQ16rpEL5bKbBC8u0K55NY2EI9_EPn6-qsqdO1lmuBZqt24tc_0MNSq-6IdXshLmubD5LanYRSwl70SgX3cRMtvZgfqfC5pwD4UNX_A2JmO32-oAuaKJ08-_qG_zV6VhMaQSYgymmJxrESy-sTGTg0CPsj6TE",
            alt: "Sarah J portrait",
            containerClass: "bg-tertiary-container",
            textClass: "text-on-tertiary-container",
            shapeClass: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg",
            initialRotate: -2
        },
        {
            id: 14,
            name: "Maya R.",
            role: "Member since 2022",
            quote: "The 'Glow & Grow' sessions are the highlight of my month. I leave feeling refreshed, seen, and inspired every single time.",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBizzNvYOL2qagP0RHw2l2ecWYEafAF4c67FVw7sBR6yMfu9HEHRc_mLgqDysMNznmkHAsfhTHzvAj4AciO8XvM6HXoT_go-wK11mX4t-88rOwH2t4LaHNPcHOXa9sGXjkIEqJBFtgENjRR9Wa_22twYWMz2LhQh1j0UBhcLtpCnAFlwKlomvWvc2c9D8VM1gOKYwCd8GX7uPCfnBNczEjmtMkKQ04my9hEEG4nTCm4C9TnjCiFTjwG26MKqyUPNFTt9V8Uw2E4A1w",
            alt: "Maya R portrait",
            containerClass: "bg-secondary-container",
            textClass: "text-on-secondary-container",
            shapeClass: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg",
            initialRotate: 2,
            marginTop: "mt-8 lg:mt-16"
        },
        {
            id: 15,
            name: "Elena K.",
            role: "Member since 2024",
            quote: "Finding a community of creative women has changed my life. I finally feel like I can be my most authentic self.",
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiPCH2nFi9bh5GI3yWDWg8zV8Ku6dzcdfoBXgFimyjMO3_2TTJwXJAjucdkXo2OpDIl4jEk_6nqF4ERdSHgsCA2yrvp0ryFL9KvOP_I5vK6n92oo4b43uUSfJrNyQbqPMaeydNj3XqQKYbD79pATejApgmuBR6nKe_0eQvOfKVAdu6K81yqBgQLn2Z_5eIrBgPmwaph-z1whCfATA7VXizdUCTdqLBwQorJy0xzuucmhQD15oTYCzM2P064h3Afq3r2SKcL9mXkkc",
            alt: "Elena K portrait",
            containerClass: "bg-primary-container",
            textClass: "text-on-primary-container",
            shapeClass: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg",
            initialRotate: -1
        }
    ];

    return (
        <section className="py-spacing-section-gap px-gutter bg-background overflow-hidden py-15">
            <div className="max-w-container-max mx-auto">

                {/* Animated Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="font-display-lg text-headline-lg text-on-surface text-center mb-16"
                >
                    Community Voices
                </motion.h2>

                {/* Testimonials Grid Wrapper */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start"
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            variants={cardVariants(t.initialRotate)}
                            whileHover={{ rotate: 0, y: -5, scale: 1.02 }}
                            className={`relative group ${t.marginTop || ""}`}
                        >
                            <div
                                className={`${t.containerClass} ${t.shapeClass} p-8 shadow-sm transition-all duration-300 cursor-default`}
                            >
                                <p className={`font-body-lg ${t.textClass} italic mb-6 leading-relaxed`}>
                                    &quot;{t.quote}&quot;
                                </p>

                                <div className="flex items-center gap-4">
                                    {/* Portrait Image */}
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface-container-lowest relative">
                                        <Image
                                            src={t.imgUrl}
                                            alt={t.alt}
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className={t.textClass}>
                                        <span className="font-bold block">{t.name}</span>
                                        <span className="text-sm opacity-80">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}