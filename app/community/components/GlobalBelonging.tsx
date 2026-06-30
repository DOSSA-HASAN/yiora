export default function GlobalBelonging() {
    return (
        <section className="py-section-gap px-gutter max-w-container-max mx-auto">
            <div className="glass-card p-12 rounded-lg relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="font-display-lg text-headline-lg text-primary mb-6">
                            A Global Belonging
                        </h2>

                        <p className="text-body-lg text-on-surface-variant mb-8">
                            Our members span 84 countries and 2,400 cities. Wherever you are,
                            there's a Y'IORA pulse nearby.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/40 p-4 rounded-xl border border-white/60">
                                <span className="material-symbols-outlined text-tertiary">
                                    location_on
                                </span>

                                <div>
                                    <p className="font-bold">Active in NYC</p>
                                    <p className="text-sm opacity-70">342 active circles</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/40 p-4 rounded-xl border border-white/60">
                                <span className="material-symbols-outlined text-secondary">
                                    location_on
                                </span>

                                <div>
                                    <p className="font-bold">Trending in Berlin</p>
                                    <p className="text-sm opacity-70">
                                        New art hub launching
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-10 bg-primary text-on-primary px-8 py-3 rounded-full hover-lift shadow-lg">
                            Find Nearby Members
                        </button>
                    </div>

                    {/* Right Map */}
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-inner shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253568.15165248766!2d39.0894747303657!3d-6.769563451613225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2ske!4v1782826671115!5m2!1sen!2ske"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>

                        {/* Floating Member Tooltips */}
                        <div className="absolute top-1/4 left-1/3 bg-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 sticker-rotate">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCovUHCGMcd5vG_uO20NiOCCNEOz4QMZGS9XfX0aLMB4dZW9poX5KmvKUUkMjt1vHIfsPR442vcMnHFM5xrbLrHfkvRjbm1cfUItFyMa5VtAd-uLOiksUffV72i_aXFG_wNJneICRf8ak3NWf9JjaZKl5bgJWdkZ82NUYvdwYxhpfqGNHA4Ws-T4BAylsRNMnqBzq9cFjobvwR9c4VCvZ7pVUUcQKQ-F93BRXWReiLW-B62ZPKck_1JetHNIKNBQaHNYhXLcF8lZ38"
                                alt="Portrait of a smiling woman"
                            />
                            <span className="text-xs font-bold">Lukas in London</span>
                        </div>

                        <div className="absolute bottom-1/3 right-1/4 bg-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 sticker-rotate-alt">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW7GAtXbgpEb5D_QHnYe_vaCDl-EstGr4OHh8DSqY98VOBV0Oy41GSJr3HNr-Zr_64X8Lek_aS4AGMAC-Vrkyu7t5Z3MfTu3FgpQnDlNTG3PAoCOcazBTgPBQ4Sv3BUSK99G5RLZztzHApvGSshmQb1n3JoRGYfu2q1DfEe2IjO23fQLrFYiLIz5Nm2AX6pU7XPMtzyLc6OUGsbtPZ2fXq26R9QgaL9nYNdrzboFbhi3G94c0i7CcGcFdpKiuw93XvZDFPahR3wcg"
                                alt="Creative man with a camera"
                            />
                            <span className="text-xs font-bold">Sara in Tokyo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}