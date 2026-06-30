"use client";

import Image from "next/image";
import { Award, Compass, Handshake } from "lucide-react";

export default function Achievements() {
    return (
        <section className="relative bg-surface-container-low w-full py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-headline-lg font-display-lg text-secondary">
                        Achievements
                    </h2>
                    <p className="text-on-surface-variant">
                        Celebrating every milestone, big and small.
                    </p>
                </div>

                {/* Responsive Layout */}
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">

                    {/* Card 1 */}
                    <div className="relative rounded-lg border-t-4 border-secondary bg-white p-8 shadow-sm">
                        <div className="absolute -top-6 -right-2 rotate-[-6deg]">
                            <div className="rounded-full bg-secondary-container p-3 text-on-secondary-container shadow-md">
                                <Award className="h-6 w-6" />
                            </div>
                        </div>

                        <h4 className="mb-2 font-headline-md text-primary">
                            The Catalyst Award
                        </h4>

                        <p className="text-body-md text-on-surface-variant">
                            Awarded to 50 members this month for hosting their first community
                            meetups.
                        </p>

                        <div className="mt-6 flex -space-x-3">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANPHEN7emMJh6s6s3F9cuSqmVPaAnjxO3L23O9EkkD_wflE6GEduN2MMbnGF-rylhsTg69Oj2SHvwT9RL065giUN-SEg1Ah2AVwxvQKmi1Lwla4bsWMYIEq_rTtHXfnDilZFtUyrRTw0flZEuj2vzKMWG0JsPguq4ot9ln0Yma4ur95v0mxgh521QaTSy9PUVaQzCImx9JCBFUEED7kwTuGfcg6pAWzCLutjn-ew_E4ExK8CZnnJmbvfwxRdEAi3CzGoEVIbv-vC4"
                                alt="Member"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIxsMYZkktAgWMFS4jGFzmPKBSj6jji5LnXjBOdM-YV9WGgGHgE6-XTMuB0jAZRLEoq6Nrvb7Ke1bmBFDeml-UhzbMRPX_DpLplvACIovQIcQm9wPhZGU1ZmCz0DzLX4LPyglJCaO3TjaiySziROLN9ADBkWB33fPdNxhfNebe6A0ky5FMWxl_spD72LGLT85715SrOqmDAK5dg0bSPqsb5ouBXtAi4XRpXQZhuWGIGoSgpNE9Go7WzP-4_Up1muBix9iEBOM_W8A"
                                alt="Member"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSHzHIDGlUbQM_rTqHfp6oIv1hWXcrhMox4aywP1RM033iyCI3vLxRCAwdNaAg0uDixXB_vCDbSTHFQGCKrV4D4COlU0Bh1ZLO_P0njfTn0pSRA7R0iOlCJAR9odu4a_vcTdBuxbhVW9rFWloIjvBhena_19udgVnCxiJbr_3MnB3OmGo-5SiFGfpDTHIjVg41jS4K55znpLCRehQYYiFSl_JsJ24qNyZggdWuA0pnFIhLIG1tUU8PEixOBk02yZ99LQov0ynbT0"
                                alt="Member"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-surface-container-highest text-[10px] font-bold">
                                +47
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative rounded-lg border-t-4 border-tertiary bg-white p-8 shadow-sm">
                        <div className="absolute -top-6 -right-2 rotate-6">
                            <div className="rounded-full bg-tertiary-container p-3 text-on-tertiary-container shadow-md">
                                <Compass className="h-6 w-6" />
                            </div>
                        </div>

                        <h4 className="mb-2 font-headline-md text-primary">
                            10k Circles Created
                        </h4>

                        <p className="text-body-md text-on-surface-variant">
                            Our community has officially surpassed 10,000 niche creative circles.
                        </p>

                        <div className="mt-6 text-headline-md font-bold text-tertiary">
                            Impact: Infinite
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-lg border-t-4 border-on-secondary-fixed-variant bg-white p-8 shadow-sm">
                        <div className="absolute -top-6 -right-2 rotate-[-6deg]">
                            <div className="rounded-full bg-secondary-fixed p-3 text-on-secondary-fixed shadow-md">
                                <Handshake className="h-6 w-6" />
                            </div>
                        </div>

                        <h4 className="mb-2 font-headline-md text-primary">
                            500+ Collaborations
                        </h4>

                        <p className="text-body-md text-on-surface-variant">
                            Real-world projects born right here in the Y'IORA feed this year.
                        </p>

                        <div className="mt-6 h-2 overflow-hidden rounded-full bg-surface-container">
                            <div className="h-full w-3/4 bg-secondary" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}