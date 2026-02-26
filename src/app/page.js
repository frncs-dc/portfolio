import Image from "next/image";
import HeroSection from "@/components/heroSection";
import ExperienceSection from "@/components/experienceSection";
import AboutMe from "@/components/aboutme";
import CTASection from "@/components/ctaSection";
import ProjectsSection from "@/components/projectsSection";
import TechStack from "@/components/techStack";
import ContactMe from "@/components/contactMe";

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
                    <ProjectsSection />
                    <TechStack />
                </div>

                <div className="relative z-10 w-3/4 mx-auto">
                    <AboutMe />
                </div>

                {/* <CTASection /> */}
                <div className="relative z-10 w-3/4 mx-auto">
                    <ExperienceSection />

                    <ContactMe />
                </div>
            </div>
        </div>
    );
}
