"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";
import { ArrowRightIcon } from "lucide-react";
import ProjectSwiper from "@/components/projectSwiper";

export default function HeroSection() {
    const handleProjectClick = (projectNumber) => {
        // You can add navigation or modal opening logic here
        console.log(`Project ${projectNumber} clicked`);
    };

    const handleGithubClick = () => {
        window.open("https://github.com/frncs-dc", "_blank");
    };

    return (
        <section
            className="relative z-10 text-left
            flex flex-col gap-10 lg:pt-40 pt-20 items-stretch
            lg:flex-row
            "
        >
            <div
                className="flex-1 flex flex-col justify-between
            order-2 lg:order-1
            "
            >
                <div className="flex flex-col gap-4">
                    <div className="text-foreground text-4xl font-bold">
                        I’m Frances, a developer and designer
                    </div>
                    <div className="text-foreground text-xl font-bold">
                        I don't just build websites; I craft dynamic full-stack
                        solutions that prioritize both form and function.
                    </div>
                </div>

                {/* important buttons here */}
                <div className="flex flex-row gap-4 mt-4 lg:mt-0">
                    <Button
                        variant="default"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/frances-dela-cruz-78a217239/",
                                "_blank",
                            )
                        }
                        className="transition-all duration-300 hover:shadow-lg 
                        hover:shadow-pink-500/30 hover:scale-105
                        w-fit"
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
                        className="transition-all duration-300 hover:shadow-lg 
                        hover:shadow-pink-500/30 hover:scale-105
                        w-fit"
                    >
                        Contact Me
                    </Button>
                    <Button
                        variant="default"
                        onClick={handleGithubClick}
                        className="transition-all duration-300 hover:shadow-lg 
                        hover:shadow-pink-500/30 hover:scale-105
                        w-fit"
                    >
                        Github
                    </Button>
                </div>
            </div>

            {/* Project Previews */}
            <div className="flex-1 gap-4 order-1 lg:order-2">
                <ProjectSwiper />
            </div>
        </section>
    );
}
