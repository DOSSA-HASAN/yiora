import React from 'react'
import "../globals.css"
import Hero from './components/Hero'
import CommunityStories from './components/CommunityStories'
import Achievements from './components/Achievements'
import GlobalBelonging from './components/GlobalBelonging'
import PhotoJournals from './components/PhotoJournals'

function page() {
    return (
        <section className='w-full bg-background text-on-background font-body-md overflow-x-hidden'>
            <main className='w-full max-w-[1400px] m-auto flex flex-col justify-center items-center'>
                <Hero />
                <CommunityStories />
                <Achievements />
                <GlobalBelonging />
                <PhotoJournals />
            </main>
        </section>
    )
}

export default page
