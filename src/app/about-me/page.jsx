import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import AboutMe from "@/components/aboutme";
import ExperienceSection from "@/components/experienceSection";

export default function AboutMePage() {
    return (
        <div className="relative z-10 min-h-screen p-20">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about-me">
                            About Me
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-neutral-500 mb-4">
                Learn more about me and my journey in the world of web
                development and design.
            </p>
            <hr className="w-full border-1/2 border-black" />
            <AboutMe />
            <ExperienceSection />
        </div>
    );
}
