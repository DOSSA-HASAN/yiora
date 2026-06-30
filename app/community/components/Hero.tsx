import React from 'react'
import "../../globals.css"

function Hero() {
    return (
        <section className='relative py-section-gap w-full flex flex-col justify-center items-center'>
            <div className='bg-secondary-container text-on-secondary-container px-4 py-1 text-label-md font-label-md rounded-full inline-block sticker-rotate shadow-sm'>
                WHERE CREATIVES COLLIDE
            </div>
            <h1
                className="text-center font-display-lg text-display-lg md:text-[80px] leading-tight mb-8 max-w-4xl mx-auto"
            >
                Discover your <span className="text-tertiary italic">vibe</span>, find
                your <span className="text-secondary">people</span>.
            </h1>
            <p className="text-center text-body-lg max-w-2xl mx-auto mb-12 text-on-surface-variant">
                Y'IORA isn't just a platform; it's a living, breathing club for those
                who create, dream, and belong together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button
                    className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-headline-md text-headline-md hover-lift"
                >
                    Start Your Story
                </button>
                <button
                    className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-headline-md text-headline-md hover-lift"
                >
                    Explore Clubs
                </button>
            </div>
        </section>
    )
}

export default Hero
