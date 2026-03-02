"use client";

import SpotlightCard from "@/components/SpotlightCard";
import {
    ArrowRightIcon,
    Bot,
    Code,
    CodeXml,
    Database,
    PanelTop,
    PenTool,
} from "lucide-react";
import ProjCategoryButton from "@/components/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function ProjectsSection() {
    return (
        <section className="relative z-10 min-h-screen flex flex-col py-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>

            {/* Project Category Spotlight Cards */}
            <div className="flex flex-row gap-4 mb-4">
                <SpotlightCard className="flex-1 text-white">
                    <div className="flex flex-col gap-4 h-full">
                        {/* frosted background for the icon */}
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <PenTool className="w-6 h-6" />
                        </div>
                        <p>UI/UX Research & Design</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I conduct research to understand user needs
                            and behaviors, and how I use the findings to inform
                            the design and development of user interfaces and
                            experiences.
                        </p>
                        <ProjCategoryButton asChild className="mt-auto">
                            <Link
                                href="/projects/uiux-research-design"
                                className="inline-flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="flex-1 text-white">
                    <div className="flex flex-col gap-4 h-full">
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <Bot className="w-6 h-6" />
                        </div>
                        <p>UI/UX Prototyping & AI-Assisted Development</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I translate business requirements into
                            user-centered prototypes and leverage AI tools to
                            design and develop intuitive mobile and desktop
                            applications.
                        </p>
                        <ProjCategoryButton className="mt-auto">
                            View Projects
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="flex-1 text-white">
                    <div className="flex flex-col gap-4 h-full">
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <PanelTop className="w-6 h-6" />
                        </div>
                        <p>Website Management & SEO</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I collaborate with SEO and marketing teams
                            to build and manage high-performing WordPress
                            websites.
                        </p>
                        <ProjCategoryButton className="mt-auto">
                            View Projects
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
            </div>

            <div className="flex flex-row gap-4">
                <SpotlightCard className="flex-1 text-white">
                    <div className="flex flex-col gap-4 h-full">
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <Database className="w-6 h-6" />
                        </div>
                        <p>Full Stack</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I design and develop full-stack applications
                            using data-driven decisions.
                        </p>
                        <ProjCategoryButton className="mt-auto">
                            View Projects
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="flex-1 text-white">
                    <div className="flex flex-col gap-4 h-full">
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <CodeXml className="w-6 h-6" />
                        </div>
                        <p>Web Application</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I design and develop web applications using
                            data-driven decisions.
                        </p>
                        <ProjCategoryButton className="mt-auto">
                            View Projects
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
}
