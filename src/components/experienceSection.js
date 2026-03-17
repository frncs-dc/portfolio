import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function ExperienceSection() {
    return (
        <section className="relative z-10 my-24 flex justify-center px-4 text-black">
            <div className="flex w-full flex-col gap-8">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Experience
                    </h2>
                    <p className="mt-2 max-w-2xl text-base">
                        A mix of professional work and student leadership
                        shaping how I design and build digital experiences.
                    </p>
                </div>

                {/* Professional Experience */}
                <div className="glass-effect rounded-2xl border border-white/40 bg-white/5 p-6 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                CloudConsole IT Consulting
                            </h3>
                            <p className="text-sm uppercase tracking-wide">
                                Makati, Philippines · Hybrid
                            </p>
                        </div>
                        <div className="text-sm">
                            <p>Part-time Web Designer · Aug 2024 – Present</p>
                            <p>Web Design Intern · Apr 2024 – Jul 2024</p>
                        </div>
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                        <li>
                            Led the end-to-end development of a new company
                            website using WordPress and Beaver Builder, from
                            wireframes and mockups to fully functional landing
                            pages with HTML, CSS, and JavaScript.
                        </li>
                        <li>
                            Improved performance and SEO by optimizing page
                            speed, refining technical SEO elements, and running
                            cross-device QA on desktop and mobile.
                        </li>
                        <li>
                            Supported long-term digital strategy through
                            competitive analysis, keyword research, and
                            maintainable documentation for marketing,
                            development, and future SEO work.
                        </li>
                    </ul>
                </div>

                {/* Student Organizations */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">
                        Student Organizations
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* FIRST COLUMN */}
                        <div className="glass-effect flex flex-col gap-3 rounded-2xl border border-white/40 bg-white/5 p-5">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide">
                                    DLSU Sprint
                                </p>
                                <p className="text-base">
                                    Associate VP in Publicity
                                </p>
                                <p className="text-xs">
                                    De La Salle University · 2022 – 2023
                                </p>
                            </div>
                            <ul className="mt-1 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                                <li>
                                    Designed publicity materials including
                                    layouts, logos, and motion assets for
                                    events, campaigns, and organization
                                    announcements.
                                </li>
                                <li>
                                    Planned and executed cohesive visual themes
                                    per event to maintain a consistent and
                                    recognizable brand identity.
                                </li>
                            </ul>
                        </div>

                        {/* SECOND COLUMN */}
                        <div className="glass-effect flex flex-col gap-3 rounded-2xl border border-white/40 bg-white/5 p-5">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide">
                                    CATCH2T25 · College Batch Student Government
                                </p>
                                <p className="text-base">
                                    Executive, Integrated Marketing and
                                    Communications
                                </p>
                                <p className="text-xs">
                                    De La Salle University · 2021 – 2023
                                </p>
                            </div>
                            <ul className="mt-1 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                                <li>
                                    Produced digital publicity materials and
                                    physical collateral (including enamel pins)
                                    to support campaigns, events, and batch
                                    initiatives.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
