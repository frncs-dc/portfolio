export default function ExperienceSection() {
    return (
        <section
            className="relative z-10 h-screen
            flex flex-col justify-center items-center gap-4"
        >
            <div className="text-4xl text-left font-bold w-full">
                Experience
            </div>
            <div className="flex flex-row gap-4">
                <div
                    className="glass-effect p-6 rounded-2xl border-2 border-white
                h-full"
                >
                    <div className="text-2xl font-bold">
                        CloudConsole IT Consulting
                    </div>

                    <div className="text-lg">
                        Part time Web Designer (Aug 2024- Present)
                    </div>
                    <div className="text-lg">
                        Web Design Intern (Apr 2024- Jul 2024)
                    </div>
                    <p>
                        Spearheaded the end-to-end setup of a new company
                        website using WordPress and Beaver Builder.
                        <br />
                        Develops and implements a range of web assets, from
                        mockups to complete landing pages, using vanilla HTML,
                        CSS, and JavaScript to create an optimal user
                        experience.
                        <br />
                        Enhances website performance by optimizing page speeds
                        and conducting rigorous quality assurance testing across
                        both desktop and mobile views.
                        <br />
                        Performs competitive analysis to identify industry
                        trends and inform design strategies.
                        <br />
                        Produces technical and design documentation for future
                        reference, facilitating use by developers.
                    </p>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="glass-effect p-6 rounded-2xl border-2 border-white h-full flex-1/2">
                    <div className="text-2xl font-bold">DLSU Sprint</div>
                    <div className="text-lg">
                        Associate VP in Publicity (DLSU 2022-2023)
                    </div>
                    <p>
                        Designs publicity materials including layouts, logos,
                        and animations for events, announcements, and general
                        information dissemination. Develops and plans design
                        themes tailored to specific events, ensuring cohesive
                        and impactful visual presentations.
                    </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl border-2 border-white h-full flex-1/2">
                    <div className="text-2xl font-bold">
                        CATCH2T25 - College Batch Student Government
                    </div>
                    <div className="text-lg">
                        Executive at Integrated Marketing and Communications
                        (DLSU 2021 - 2023)
                    </div>
                    <p>
                        Creates publicity materials, including announcements and
                        layouts, and designs physical products such as enamel
                        pins for the organization
                    </p>
                </div>
            </div>
        </section>
    );
}
