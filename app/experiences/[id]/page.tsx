import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { experiencesData } from "../data";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return experiencesData.map((exp) => ({
        id: exp.id,
    }));
}

export default async function ExperienceDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const data = experiencesData.find((exp) => exp.id === resolvedParams.id);

    if (!data) {
        notFound();
    }

    return (
        <section className="relative w-full min-h-[716px] md:min-h-[870px] flex items-center overflow-hidden bg-background">
            {/* Background Graphic Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.heroImage}
                    alt={data.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-transparent md:to-transparent" />
            </div>

            {/* Main Container Grid */}
            <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-16 md:py-0">

                {/* Left column meta content */}
                <div className="md:col-span-7 text-surface-container-lowest">
                    <Link href="/experiences" className="inline-flex items-center gap-2 text-sm mb-6 text-surface-container-lowest/80 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Catalog
                    </Link>
                    <br />
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-6 shadow-lg transform -rotate-2">
                        {data.category.toUpperCase()} EXPERIENCE
                    </span>
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 drop-shadow-md leading-tight text-white">
                        {data.title}
                    </h1>
                    <p className="font-body-lg text-body-lg max-w-lg mb-8 text-surface-container-lowest/90">
                        {data.description}
                    </p>
                </div>

                {/* Right column sticky registration terminal */}
                <div className="md:col-span-5 w-full">
                    <div className="bg-surface rounded-xl p-gutter shadow-xl border border-primary-container/20">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-secondary font-headline-md text-headline-md">${data.price}</span>
                                <span className="text-on-surface-variant font-body-md text-body-md"> / person</span>
                            </div>
                            <div className="flex items-center gap-1 bg-tertiary-container/30 px-3 py-1 rounded-full">
                                <span className="material-symbols-outlined text-tertiary text-sm">star</span>
                                <span className="font-bold text-tertiary text-label-md">{data.rating}</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                                <p className="font-label-md text-label-md text-on-surface-variant mb-1">Date</p>
                                <p className="font-body-md text-body-md font-bold text-on-surface">{data.date}, 2026</p>
                            </div>
                            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                                <p className="font-label-md text-label-md text-on-surface-variant mb-1">Time</p>
                                <p className="font-body-md text-body-md font-bold text-on-surface">{data.time}</p>
                            </div>
                        </div>

                        {data.isFull ? (
                            <div className="bg-surface-container text-on-surface-variant p-4 rounded-lg flex items-center justify-center gap-3 mb-6">
                                <span className="material-symbols-outlined">event_busy</span>
                                <span className="font-bold font-label-md text-label-md">This event is currently full</span>
                            </div>
                        ) : (
                            <div className="bg-error-container text-on-error-container p-4 rounded-lg flex items-center justify-center gap-3 mb-6 animate-pulse">
                                <span className="material-symbols-outlined">alarm</span>
                                <span className="font-bold font-label-md text-label-md">Only {data.spotsLeft} spots left!</span>
                            </div>
                        )}

                        <button
                            disabled={data.isFull}
                            className={`w-full py-4 rounded-full font-headline-md text-headline-md shadow-lg transition-all duration-150 text-center text-white ${data.isFull
                                ? "bg-outline/50 cursor-not-allowed shadow-none"
                                : "bg-secondary hover:bg-secondary/90 shadow-secondary/20 cursor-pointer active:scale-[0.98]"
                                }`}
                        >
                            {data.isFull ? "Join Waitlist" : "Reserve Your Spot"}
                        </button>
                        <p className="text-center mt-4 text-on-surface-variant font-body-md text-body-md">
                            No payment due yet
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}