import ProjectsSection from "@/components/projectsSection";
import FeaturedWorks from "@/components/featuredWorks";

export default function ProjectsPage() {
    return (
        <div className="relative z-10 min-h-screen lg:p-20 p-10">
            <h1 className="text-4xl font-bold my-4">Projects</h1>
            <p className="text-lg text-neutral-500 mb-4">
                See some of the projects I've worked on.
            </p>
            <hr className="w-full border-1/2 border-black" />
            {/* Featured Projects Section */}
            <FeaturedWorks />
            <h2 className="text-3xl font-bold mb-4">All Projects</h2>
            <p className="text-lg text-neutral-500 mb-4">
                See all the projects I've worked on.
            </p>
            <hr className="w-full border-1/2 border-black" />
            <ProjectsSection className="mt-12" />
        </div>
    );
}
