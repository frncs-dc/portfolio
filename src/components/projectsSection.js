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
import { useState } from "react";

export default function ProjectsSection() {
    const router = useRouter();
    const [loadingPath, setLoadingPath] = useState(null);

    const handleNavigate = (href) => (event) => {
        event.preventDefault();
        if (loadingPath) return;
        setLoadingPath(href);
        router.push(href);
    };

    return (
        <section className="relative z-10 min-h-screen flex flex-col py-12">
            {/* Project Category Spotlight Cards */}
            <div className="flex flex-col gap-4 mb-4 lg:flex-row">
                <SpotlightCard
                    className="flex-1 text-white"
                    onClick={handleNavigate("/projects/uiux-research")}
                >
                    <div className="flex flex-col gap-4 h-full">
                        {/* frosted background for the icon */}
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <PenTool className="w-6 h-6" />
                        </div>
                        <p>UI/UX Research</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I conduct research to understand user needs
                            and behaviors.
                        </p>
                        <ProjCategoryButton asChild className="mt-auto">
                            <Link
                                href="/projects/uiux-research"
                                onClick={handleNavigate(
                                    "/projects/uiux-research",
                                )}
                                className={`inline-flex items-center gap-2 ${
                                    loadingPath === "/projects/uiux-research"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                aria-disabled={
                                    loadingPath === "/projects/uiux-research"
                                }
                            >
                                {loadingPath === "/projects/uiux-research" ? (
                                    "Loading..."
                                ) : (
                                    <>
                                        View Projects
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </>
                                )}
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>

                <SpotlightCard
                    className="flex-1 text-white"
                    onClick={handleNavigate("/projects/uiux-design")}
                >
                    <div className="flex flex-col gap-4 h-full">
                        {/* frosted background for the icon */}
                        <div
                            className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                        >
                            <PenTool className="w-6 h-6" />
                        </div>
                        <p>UI/UX Design</p>
                        <p className="text-sm text-neutral-200 flex-1">
                            See how I conduct research to understand user needs
                            and behaviors.
                        </p>
                        <ProjCategoryButton asChild className="mt-auto">
                            <Link
                                href="/projects/uiux-design"
                                onClick={handleNavigate(
                                    "/projects/uiux-design",
                                )}
                                className={`inline-flex items-center gap-2 ${
                                    loadingPath === "/projects/uiux-design"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                aria-disabled={
                                    loadingPath === "/projects/uiux-design"
                                }
                            >
                                {loadingPath === "/projects/uiux-design" ? (
                                    "Loading..."
                                ) : (
                                    <>
                                        View Projects
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </>
                                )}
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>

                <SpotlightCard
                    className="flex-1 text-white"
                    onClick={handleNavigate("/projects/prototyping-with-ai")}
                >
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
                            <Link
                                href="/projects/prototyping-with-ai"
                                onClick={handleNavigate(
                                    "/projects/prototyping-with-ai",
                                )}
                                className={`inline-flex items-center gap-2 ${
                                    loadingPath ===
                                    "/projects/prototyping-with-ai"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                aria-disabled={
                                    loadingPath ===
                                    "/projects/prototyping-with-ai"
                                }
                            >
                                {loadingPath === "/projects/prototyping-with-ai"
                                    ? "Loading..."
                                    : "View Projects"}
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row">
                <SpotlightCard
                    className="flex-1 text-white"
                    onClick={handleNavigate("/projects/website-management")}
                >
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
                            <Link
                                href="/projects/website-management"
                                onClick={handleNavigate(
                                    "/projects/website-management",
                                )}
                                className={`inline-flex items-center gap-2 ${
                                    loadingPath ===
                                    "/projects/website-management"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                aria-disabled={
                                    loadingPath ===
                                    "/projects/website-management"
                                }
                            >
                                {loadingPath === "/projects/website-management"
                                    ? "Loading..."
                                    : "View Projects"}
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
                <SpotlightCard
                    className="flex-1 text-white"
                    onClick={handleNavigate("/projects/full-stack")}
                >
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
                            <Link
                                href="/projects/full-stack"
                                onClick={handleNavigate("/projects/full-stack")}
                                className={`inline-flex items-center gap-2 ${
                                    loadingPath === "/projects/full-stack"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                aria-disabled={
                                    loadingPath === "/projects/full-stack"
                                }
                            >
                                {loadingPath === "/projects/full-stack"
                                    ? "Loading..."
                                    : "View Projects"}
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
                <SpotlightCard
                    className="flex-1 text-white"
                    onClick={handleNavigate("/projects/web-development")}
                >
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
                            <Link
                                href="/projects/web-development"
                                onClick={handleNavigate(
                                    "/projects/web-development",
                                )}
                                className={`inline-flex items-center gap-2 ${
                                    loadingPath === "/projects/web-development"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                aria-disabled={
                                    loadingPath === "/projects/web-development"
                                }
                            >
                                {loadingPath === "/projects/web-development"
                                    ? "Loading..."
                                    : "View Projects"}
                            </Link>
                        </ProjCategoryButton>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
}
