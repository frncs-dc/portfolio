"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
export default function CTASection() {
    const handleContactMe = () => {
        window.open("mailto:delacruzfrancesjulianne@gmail.com", "_blank");
    };
    return (
        <section className="relative z-10 w-3/4 min-h-50 py-10 flex flex-row justify-center items-center">
            <div className="flex-2 flex flex-col gap-4">
                <div className="text-4xl text-left font-bold w-full">
                    Ready to start a project? Let's talk!
                </div>
                <div className="text-xl text-left font-bold w-full text-balance">
                    I'm always looking for new opportunities to work on exciting
                    projects. If you have a project in mind, or just want to say
                    hello, feel free to contact me.
                </div>
                <Button
                    variant="default"
                    onClick={handleContactMe}
                    className="w-fit 
                    transition-all duration-300
                    hover:!bg-[#ffb6c1]
                    hover:shadow-lg
                    hover:shadow-[#ffb6c1]/30
                    hover:scale-105"
                >
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4" />
                </Button>
            </div>
            <div className="flex-1 flex-col gap-4">
                <Image
                    src="/images/website.svg"
                    alt="Illustration of a website"
                    width={500}
                    height={500}
                />
                Illustration by{" "}
                <a href="https://unsplash.com/@publicdomainvectors?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Public domain vectors
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/illustrations/coding-windows-with-lines-of-text-are-shown-U7qNLqf_Xcs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </div>
        </section>
    );
}
