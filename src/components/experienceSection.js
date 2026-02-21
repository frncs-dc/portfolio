import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function ExperienceSection() {
    return (
        <section
            className="relative z-10 min-h-screen
            flex flex-col justify-center items-center gap-4"
        >
            <div className="text-4xl text-left font-bold w-full">
                Experience
            </div>
            <hr className="w-full border-1/2 border-black" />
            <div className="flex flex-row gap-4">
                <div
                    className="glass-effect p-6 rounded-2xl border-2 border-white
                h-full"
                >
                    <div className="text-3xl font-bold">
                        CloudConsole IT Consulting
                    </div>

                    <div className="text-lg">
                        Part time Web Designer (Aug 2024- Present)
                    </div>
                    <div className="text-lg">
                        Web Design Intern (Apr 2024- Jul 2024)
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Led the end-to-end development of a new company
                            website using WordPress and Beaver Builder, building
                            mockups and fully functional landing pages with
                            HTML, CSS, and JavaScript while implementing on-page
                            SEO best practices.
                        </li>
                        <li>
                            Improved website performance, SEO, and user
                            experience by optimizing page speed, enhancing
                            technical SEO elements, and conducting rigorous
                            cross-device quality assurance testing (desktop and
                            mobile).
                        </li>
                        <li>
                            Strengthened digital strategy and scalability
                            through competitive analysis, keyword research,
                            industry trend insights, and comprehensive
                            technical/design documentation for future
                            development and SEO efforts.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Student Organizations */}
            <div className="text-3xl font-bold mt-10">
                Student Organizations
            </div>
            {/* 2 COLUMN LAYOUT */}
            <div className="flex flex-row gap-4">
                {/* FIRST COLUMN */}
                <div className="glass-effect p-6 rounded-2xl border-2 border-white h-full flex-1/2">
                    <div className="text-2xl font-bold">DLSU Sprint</div>
                    <div className="text-lg">
                        Associate VP in Publicity (DLSU 2022-2023)
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Designs publicity materials including layouts,
                            logos, and animations for events, announcements, and
                            general information dissemination.
                        </li>
                        <li>
                            Develops and plans design themes tailored to
                            specific events, ensuring cohesive and impactful
                            visual presentations.
                        </li>
                    </ul>
                </div>
                {/* SECOND COLUMN */}
                <div className="glass-effect p-6 rounded-2xl border-2 border-white h-full flex-1/2">
                    <div className="text-2xl font-bold">
                        CATCH2T25 - College Batch Student Government
                    </div>
                    <div className="text-lg">
                        Executive at Integrated Marketing and Communications
                        (DLSU 2021 - 2023)
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Creates publicity materials, including announcements
                            and layouts, and designs physical products such as
                            enamel pins for the organization
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
