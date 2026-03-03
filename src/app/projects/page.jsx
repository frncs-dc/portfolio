import ProjectsSection from "@/components/projectsSection";

export default function ProjectsPage() {
    return (
        <div className="relative z-10 min-h-screen p-20">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-neutral-500 mb-4">
                See some of the projects I've worked on.
            </p>
            <hr className="w-full border-1/2 border-black" />
            {/* Featured Projects Section */}
            <ProjectsSection />
        </div>
    );
}
