"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function CTASection() {
    const handleContactMe = () => {
        window.open("mailto:delacruzfrancesjulianne@gmail.com", "_blank");
    };
    return (
        <section className="relative z-10 min-h-50 py-10 flex flex-row justify-center items-center">
            <div className="flex-2 flex flex-col gap-4">
                <div className="text-4xl text-left font-bold w-full">
                    Ready to start a project? Let's talk!
                </div>
                <div className="text-xl text-left font-bold w-full">
                    I'm always looking for new opportunities to work on exciting
                    projects. If you have a project in mind, or just want to say
                    hello, feel free to contact me.
                </div>
                <Button
                    variant="default"
                    onClick={handleContactMe}
                    className="w-fit 
                    transition-all duration-300
                    hover:shadow-lg
                    hover:shadow-pink-500/30
                    hover:scale-105"
                >
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4" />
                </Button>
            </div>
            <div className="flex-1 flex-col gap-4">picture here</div>
        </section>
    );
}
