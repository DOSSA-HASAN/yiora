"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface GalleryItem {
    id: number;
    imgUrl: string;
    alt: string;
    initialRotate: number;
}

export default function CandidMoments() {
    // 1. Explicitly type the parent stagger container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    // 2. Explicitly type the dynamic scrapbook entry fade/scale effect
    const cardVariants = (initialRotate: number): Variants => ({
        hidden: {
            opacity: 0,
            scale: 0.9,
            rotate: initialRotate - 5,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: initialRotate,
            y: 0,
            transition: { duration: 0.6, ease: [0.21, 1.02, 0.43, 1.01] }
        }
    });

    const galleryItems: GalleryItem[] = [
        {
            id: 7,
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuALovN3BxJGuk6EjZv0DBVLdg8PWejKGNHSd1o0jt57fUuef25rvfwtV5i5ehNeV8AlgtRvluRNL2djD7xmBESOcrVO5GRChK4ME7uE0dLvYyw5NsOAud4-RSFhcKWHmpUHb722Iuxo_mJ67olHrGNChDoaZTYt6oU5zqkwv7Trer2OVHAc_u28wDfWGqYERb1joHP3XNLw4Za25dKftGzK0SDL-EhAA-bL1dj1VRuQftTdosNkpZcpqqHtiuylG86lsd0KMph0aFQ",
            alt: "A group of smiling women sitting around a coffee table laughing. The setting is bright and airy with warm wood tones and soft sunlight filtering through large windows.",
            initialRotate: 1
        },
        {
            id: 8,
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAZPi-lUJKOlzIiTHkyizig7vAWYvfzUMh6veih1finSut7nCGHvAtryxAr0i7V7mOdUIdygFQ_d78Y1hXciSbE15bIV1Omh8UoLXc_YPT9QexaEXw6rnOpaIWyZklWHRHm6QsSVnJOYB5T8t99ZBZ_Xppp2EEUXeMlN-hsM8K_6JmkGCoU_mHYDUYexKAArzPU8cE-hxbAy734I7cb3Ti7B2LHNHfptnC0utVcHF6S_YwIoiTn0XCREDZtlOOa3EgHbo-Qx8leRw",
            alt: "A beautiful, colorful flat-lay of craft supplies, including watercolors, brushes, and sketchbooks, laid out on a rustic wooden table.",
            initialRotate: -2
        },
        {
            id: 9,
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCziJ3cyZjT2mxGyuSpCfsn2yvD3KJ_Soa4IESA4gzCLXyeQvWkiN6Uz4U1-nWvtsveUQunext_8JD_WuDMH_LHQxeo7cNjg8hambFPQzJwXhS9APISCNjKjNwC-OrzRN0l1AqEwvzt6ngsDR8kUUR3kHk1oIsesKkisjOXiZkatP6pJjUKkVk9DH8fTGiJjcv9BE90e49D6IMyqM8Av6ksUAOcptdjYDsovAHG0dxR2NDxb1s-v4wGaePgCKxQeQ0Y6uD4vuFv7IY",
            alt: "Two women in stylish yoga wear clinking smoothie glasses after a workout. They are outside in a lush park setting with bright, golden-hour light.",
            initialRotate: 3
        },
        {
            id: 10,
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDznUGLfAYXBgCGTnKIZSBdMJ4qjsaE3ctUXOlHKvF3to33zPoZ0Is9xlrfaKLMiobKL9ILfIQ5hbZOUKJsd2HtSrq_UnGF_ev3RKpgtJdp9z3j0AdJ7IhE3deO4d6nI3X1L7fOwewvvflIDTJzmhkj3e4D-EmWHrzOGTJp-Q-4A2f_20NknA174TUkvLW5PPkohXJ16vbDBXrVgmuIh_YK80tWqpZHDsnFRENm6Eg3j2RUipfWM6Fy6EdgyavPQqlCYbHt1MpV8Hs",
            alt: "A medium shot of a woman with a large smile, holding up a completed painting. She is surrounded by greenery in an outdoor studio.",
            initialRotate: -1
        },
        {
            id: 11,
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiRGAsMfyH3bDFi0Hmg7adjBDlu8ge8olgnN04W0E8VKiIwwA0KhmoT1_fC4G5neiSVwkreyGuLi8tgDjDmC9AFObU5muUpbZPioLrY6hX-fxPCD8_RaSJNphLGD5myoAukJEOegcW6PTzHaMlPaXs2FX3ifucKDV6wxHDVGVr8dgsvIezI2Ro-FxagqJfP56tJS38jR6_6X9G-I5fY3DTej-X1SALah5pPZdzAWkQRlDIuRi7uESphw4uiA4GJSiD6hXTk35JAys",
            alt: "A long table set for a communal dinner outdoors at night, lit by string lights. The mood is warm, inviting, and festive.",
            initialRotate: 2
        },
        {
            id: 12,
            imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZOkuTxF1gHpBKrV_KAMFMQUIOWfNboOxUNsDAY2Cf6hvFjMF_UFTV_xs0iX5vq-24LgxHphV2kkONCenxZ7K60t0RCeDLMiS8InruQDrs00Qi3FkGPKjz1C_9e2Oreylo1PabuBWW0KqAfWBiCAdqhKc5MHt8GA3h_TdwmfudT0ghCbLcCQNSLFoOJHkhKZRlhl9xqqsrXDHengtai-0dbVoL2XjpN_1Xmk3vbdvF-JsHQ3tf9cRAUgegVlJMe2bM3afbbUGnZRk",
            alt: "Close up of two friends hugging, with soft focus flowers in the foreground. High-key, sentimental aesthetic.",
            initialRotate: -3
        }
    ];

    return (
        <section className="py-spacing-section-gap px-gutter bg-surface-container-low py-15">
            <div className="max-w-container-max mx-auto">

                {/* Gallery Title Block */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="font-display-lg text-headline-lg text-on-surface"
                    >
                        Candid Moments
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-body-md text-on-surface-variant mt-2"
                    >
                        See what our community has been up to.
                    </motion.p>
                </div>

                {/* CSS Masonry Columns Wrap */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants(item.initialRotate)}
                            whileHover={{
                                scale: 1.04,
                                rotate: item.initialRotate > 0 ? item.initialRotate + 1 : item.initialRotate - 1,
                                zIndex: 20,
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                            }}
                            className="break-inside-avoid rounded-lg overflow-hidden scrapbook-card cursor-pointer bg-surface-container-lowest shadow-sm origin-center block"
                        >
                            {/* Image Container utilizing standard Next.js image components without fixed-height wrappers to maintain fluid aspect ratios */}
                            <Image
                                src={item.imgUrl}
                                alt={item.alt}
                                width={500}
                                height={500}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="w-full h-auto object-cover select-none pointer-events-none display-block"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}