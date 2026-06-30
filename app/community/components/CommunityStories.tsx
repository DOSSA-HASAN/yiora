import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CommunityStories() {
    return (
        <section className="py-section-gap px-gutter w-full bg-secondary-on-container">
            {/* Header section grouped semantically */}
            <header className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="font-display-lg text-headline-lg text-primary">
                        Community Stories
                    </h2>
                    <p className="text-on-surface-variant mt-2">
                        The voices that make Y'IORA home.
                    </p>
                </div>
                {/* Decorative icon hidden from screen readers so it doesn't read aloud garbage text */}
                <span className="material-symbols-outlined text-secondary text-4xl hidden md:block" aria-hidden="true">
                    auto_awesome
                </span>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
                {/* Featured Story Card wrapped in an article tag */}
                <article className="md:col-span-7 group relative overflow-hidden rounded-lg shadow-lg hover-lift h-[400px] md:h-full">
                    <Link href="/community/stories/maya-london" className="absolute inset-0 z-10" aria-label="Read Maya's story about finding her creative collective in London">
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOdlsVwT30AcGLL6vNi5EB5qHcfQjwcIY1RyTRBPI_T5nKykKkGIuL-4LnJLellUqXKetHn41jYf2W0b5zbz2vmFJqLcbgsVB8YUcCq3Wuvb3XN-oYHu5m5QoBDTM00Sb21qM-M_DEpcI_jh2a-3joPcoQXA9UnHwQTtvaOoGGRU7IntYQER73UUQZS7mq2KgCDaFn8ubK-VXcaqVxbt6_avQPvWo2rujeLYLK0D30DCzX-Gm4cTwrIS1wI9QdxAPdIJuvW5hq8oc"
                                alt="A group of diverse young creatives laughing and sharing a meal together in a sun-drenched, bohemian loft space."
                                fill
                                sizes="(max-width: 768px) 100vw, 58vw"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-0 p-8 z-20">
                            <strong className="inline-block bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-md font-label-md w-fit mb-4">
                                MEMBER SPOTLIGHT
                            </strong>
                            <h3 className="font-headline-lg text-white mb-2">
                                How Maya found her creative collective in London
                            </h3>
                            <p className="text-white/80 line-clamp-2">
                                "I joined Y'IORA looking for inspiration and found a family of
                                photographers who now travel the world with me."
                            </p>
                        </div>
                    </Link>
                </article>

                {/* Side Stories Column */}
                <div className="md:col-span-5 flex flex-col gap-6">
                    {/* Side Story 1 */}
                    <article className="flex-1 group relative overflow-hidden rounded-lg shadow-lg hover-lift">
                        <Link href="/community/stories/slow-living" className="absolute inset-0 z-10" aria-label="Read about The Art of Slow Living">
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApl7Dg2QygIt68qNveTwucDHvYvcv952f19EcsPV8T6brYGPtEd-jCUxAHkFCPSY0Q4ZqqATa_kJfwQWQ8zNgOzpSsF82CJXoxbVsOfo3Qblo7B1xrOBsGq6-Yo2J5guIGhGBF4yUNZCAl5e34NXBv3h8j21RE2azthTTpMv3HYvfccHVgihIV7RWUbr52jNNreoSgZu_KNc7uzR4LW1kfjE6k5h7Dh17t_jAIwVMBoKOF2gcohjFQeZWmJ2mhEuRvXDFrmB39DIM"
                                    alt="A portrait of a soulful artisan working in a naturally lit pottery studio with clay structures."
                                    fill
                                    sizes="(max-width: 768px) 100vw, 42vw"
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                <h3 className="font-headline-md text-white">
                                    The Art of Slow Living
                                </h3>
                            </div>
                        </Link>
                    </article>

                    {/* Side Story 2 */}
                    <article className="flex-1 group relative overflow-hidden rounded-lg shadow-lg hover-lift">
                        <Link href="/community/stories/networking-coffee" className="absolute inset-0 z-10" aria-label="Read about Networking Over Coffee">
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSaUcJR39hS5mX0IbX1veUIakvsf_-c-RMKQ4Y8mpoYSqEtxGj7WS6eWTJM8Bb-0NRrVMnRYOBQ-fncq5MWArHw-raJr1YVZ9Bx20AhSqxBcmsRnRl2AQmMgazEZN2RWn0fMAh7LIZbnd66kNkEdZJSwtDBJveCAvKhPRuwmXCsfEUxGXp0E-csfQ2cjMjW5TG2YeZSt2fUMAQeeLIbc_ZqQq0kpKZtqUbcsse6d_eMTpg5TMv4YlGqK8o4u2Y7KAJ5EEZsBxK67M"
                                    alt="Two friends standing on a rooftop at sunset looking over a city skyline."
                                    fill
                                    sizes="(max-width: 768px) 100vw, 42vw"
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                <h3 className="font-headline-md text-white">
                                    Networking Over Coffee
                                </h3>
                            </div>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default CommunityStories;