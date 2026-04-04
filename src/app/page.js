import HeroSection from "@/components/heroSection";
import ExperienceSection from "@/components/experienceSection";
import AboutMe from "@/components/aboutme";
import ProjectsSection from "@/components/projectsSection";
import TechStack from "@/components/techStack";
import ContactMe from "@/components/contactMe";
import FeaturedWorks from "@/components/featuredWorks";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen w-full bg-white relative">
                {/* Pink Glow Background */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
            `,
                        backgroundSize: "100% 100%",
                    }}
                />
                {/* Your Content/Components */}
                <div className="relative z-10 w-3/4 mx-auto">
                    <HeroSection />
                    <FeaturedWorks showHeader />
                    <ScrollReveal>
                        <p className="text-lg text-neutral-500 mb-4">
                            Or check out the
                        </p>
                        <h1 className="text-4xl font-bold mb-4">
                            Types of Projects I Work On
                        </h1>
                        <ProjectsSection />
                    </ScrollReveal>
                    <ScrollReveal>
                        <TechStack />
                    </ScrollReveal>
                    <ScrollReveal>
                        <AboutMe />
                    </ScrollReveal>
                </div>

                <div className="relative z-10 w-3/4 mx-auto">
                    <ScrollReveal>
                        <ExperienceSection />
                    </ScrollReveal>
                    <ScrollReveal>
                        <ContactMe />
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
