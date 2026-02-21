"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";
import { ArrowRightIcon } from "lucide-react";

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
            className="relative z-10 text-left mt-10
            min-h-screen
            flex flex-row gap-10"
        >
            <div className="flex-1 flex flex-col gap-4 h-full">
                <div className="text-foreground text-4xl font-bold">
                    I’m Frances, a developer and designer
                </div>
                <div className="text-foreground text-xl font-bold">
                    I don't just build websites; I craft dynamic full-stack
                    solutions that prioritize both form and function.
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
                        <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="default"
                        onClick={() =>
                            window.open(
                                "mailto:delacruzfrancesjulianne@gmail.com",
                                "_blank",
                            )
                        }
                        className="transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
                    >
                        Contact Me
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
            <div className="flex-1 grid grid-cols-2 gap-4 items-start self-start">
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
                    className="custom-spotlight-card aspect-square"
                    spotlightColor="rgba(236, 72, 153, 0.25)"
                    onClick={() => handleProjectClick(3)}
                >
                    Project 3
                </SpotlightCard>
                <SpotlightCard
                    className="custom-spotlight-card aspect-square"
                    spotlightColor="rgba(236, 72, 153, 0.25)"
                    onClick={() => handleProjectClick(3)}
                >
                    Project 4
                </SpotlightCard>
            </div>
        </section>
    );
}
