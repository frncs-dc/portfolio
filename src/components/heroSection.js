"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";

export default function HeroSection() {
    const handleProjectClick = (projectNumber) => {
        // You can add navigation or modal opening logic here
        console.log(`Project ${projectNumber} clicked`);
    };

    const handleGithubClick = () => {
        window.open("https://github.com/your-username", "_blank");
    };

    return (
        <section
            className="relative z-10 text-left h-screen
            flex flex-row justify-center items-center gap-10"
        >
            <div className="flex-1 flex flex-col gap-4">
                <div className="text-foreground text-lg font-bold">
                    Hi I'm Frances :D !
                </div>
                <ShinyText
                    text="I am a developer and a designer."
                    disabled={false}
                    speed={5}
                    className="text-foreground text-4xl font-extrabold"
                />
                <div className="text-foreground text-xl font-bold">
                    this is where creativity meets coding to craft dynamic
                    full-stack solutions.
                </div>

                {/* important buttons here */}
                <div className="flex flex-row gap-4">
                    <Button
                        variant="default"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/frances-dela-cruz-78a217239/",
                                "_blank",
                            )
                        }
                        className="transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="default"
                        onClick={handleGithubClick}
                        className="transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
                    >
                        Github
                    </Button>
                </div>
            </div>

            {/* Project Previews */}
            <div className="flex-1 grid grid-flow-col grid-rows-2 gap-4">
                <SpotlightCard
                    className="custom-spotlight-card aspect-square"
                    spotlightColor="rgba(236, 72, 153, 0.25)"
                    onClick={() => handleProjectClick(1)}
                >
                    Project 1
                </SpotlightCard>
                <SpotlightCard
                    className="custom-spotlight-card aspect-square"
                    spotlightColor="rgba(236, 72, 153, 0.25)"
                    onClick={() => handleProjectClick(2)}
                >
                    Project 2
                </SpotlightCard>
                <SpotlightCard
                    className="custom-spotlight-card row-span-2 aspect-1/2"
                    spotlightColor="rgba(236, 72, 153, 0.25)"
                    onClick={() => handleProjectClick(3)}
                >
                    Project 3
                </SpotlightCard>
            </div>
        </section>
    );
}
