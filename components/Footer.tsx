import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-tertiary-container w-full rounded-t-lg transition-colors duration-200 p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-spacing-section-gap px-gutter max-w-container-max mx-auto">

                {/* Brand Narrative Block */}
                <div className="flex flex-col gap-4">
                    <div className="font-display-lg text-headline-lg text-tertiary-fixed-dim italic tracking-tighter select-none">
                        Y&apos;IORA
                    </div>
                    <p className="text-on-tertiary-container dark:text-tertiary-fixed font-body-md max-w-xs leading-relaxed">
                        Curating meaningful human experiences in an increasingly digital world.
                    </p>
                </div>

                {/* Link Directories */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Socials Column */}
                    <div className="flex flex-col gap-3">
                        <h5 className="text-on-tertiary-container font-bold font-label-md uppercase tracking-widest text-label-md">
                            Connect
                        </h5>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-on-tertiary-container/80 font-body-md hover:underline hover:text-on-tertiary-fixed transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://pinterest.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-on-tertiary-container/80 font-body-md hover:underline hover:text-on-tertiary-fixed transition-colors"
                        >
                            Pinterest
                        </a>
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-on-tertiary-container/80 font-body-md hover:underline hover:text-on-tertiary-fixed transition-colors"
                        >
                            TikTok
                        </a>
                    </div>

                    {/* Internal App Navigation Column */}
                    <div className="flex flex-col gap-3">
                        <h5 className="text-on-tertiary-container font-bold font-label-md uppercase tracking-widest text-label-md">
                            Explore
                        </h5>
                        <Link
                            href="/experiences"
                            className="text-on-tertiary-container/80 font-body-md hover:underline hover:text-on-tertiary-fixed transition-colors"
                        >
                            Events
                        </Link>
                        <Link
                            href="/about"
                            className="text-on-tertiary-container font-bold hover:underline hover:text-on-tertiary-fixed transition-colors"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/contact"
                            className="text-on-tertiary-container/80 font-body-md hover:underline hover:text-on-tertiary-fixed transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Brand Marks & Dynamic Copyright Block */}
                <div className="flex flex-col justify-between items-start md:items-end gap-6">
                    <div className="flex gap-4">
                        <Link
                            href="/contact"
                            aria-label="Email support channels"
                            className="w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center text-tertiary-container hover:scale-105 active:scale-95 transition-transform duration-200"
                        >
                            <span className="material-symbols-outlined text-[20px] select-none">mail</span>
                        </Link>
                        <Link
                            href="/about"
                            aria-label="Our team and community details"
                            className="w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center text-tertiary-container hover:scale-105 active:scale-95 transition-transform duration-200"
                        >
                            <span className="material-symbols-outlined text-[20px] select-none">group</span>
                        </Link>
                    </div>

                    <div className="text-on-tertiary-container/80 font-body-md text-sm tracking-tight">
                        &copy; {currentYear} Y&apos;IORA. Built for belonging.
                    </div>
                </div>

            </div>
        </footer>
    );
}