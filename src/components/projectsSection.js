"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Bot, CodeXml, Database, PanelTop, PenTool, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Each category can open a modal with any combination of:
 * - `modalContent` — optional custom JSX (copy, layout, embedded media, etc.)
 * - `projects` — optional list of links (omit or use [] when there are no links)
 */
function CategoryModal({ category, onClose }) {
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    if (!category) return null;

    const Icon = category.icon;
    const projects = category.projects ?? [];
    const hasLinks = projects.length > 0;
    const hasCustom = Boolean(category.modalContent);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="category-modal-title"
        >
            <button
                type="button"
                className="absolute inset-0 bg-black/60"
                aria-label="Close dialog"
                onClick={onClose}
            />
            <div
                className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-900 p-6 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                            <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <h2
                            id="category-modal-title"
                            className="text-lg font-semibold leading-tight"
                        >
                            {category.title}
                        </h2>
                    </div>
                    <button
                        type="button"
                        className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb6c1]/50"
                        aria-label="Close"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {hasCustom && (
                    <div className="mt-4 text-sm text-neutral-300 [&_a]:text-[#ffb6c1] [&_a]:underline [&_a]:underline-offset-2">
                        {category.modalContent}
                    </div>
                )}

                {hasLinks && (
                    <>
                        <p
                            className={`text-sm text-neutral-400 ${
                                hasCustom ? "mt-6" : "mt-4"
                            }`}
                        >
                            Related projects
                        </p>
                        <ul className="mt-3 flex flex-col gap-1">
                            {projects.map((project) => (
                                <li key={project.href}>
                                    <Link
                                        href={project.href}
                                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-[#ffb6c1]/20 hover:text-white"
                                        onClick={onClose}
                                    >
                                        {project.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {!hasCustom && !hasLinks && (
                    <p className="mt-4 text-sm text-neutral-500">
                        No details added for this category yet.
                    </p>
                )}
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const [openId, setOpenId] = useState(null);

    const categories = useMemo(
        () => [
            {
                id: "uiux-research",
                title: "UI/UX Research",
                description:
                    "See how I conduct research to understand user needs and behaviors.",
                icon: PenTool,
                projects: [
                    { label: "PisoCAKE", href: "/projects/pisocake" },
                    {
                        label: "Food 360: A Food Storage Management System",
                        href: "/projects/uiux-research/food-storage",
                    },
                ],
            },
            {
                id: "uiux-design",
                title: "UI/UX Design",
                description:
                    "See how I conduct research to understand user needs and behaviors.",
                icon: PenTool,
                projects: [
                    {
                        label: "Food 360: A Food Storage Management System",
                        href: "/projects/uiux-design/food-storage",
                    },
                ],
            },
            {
                id: "prototyping-ai",
                title: "AI-Assisted Development",
                description:
                    " Prototyping through delivery: I use AI-assisted workflows to speed up exploration and implementation—always anchored in usability and clear requirements.",
                icon: Bot,
                modalContent: (
                    <div>
                        <p>
                            Leveraging AI to speed up exploration and
                            implementation while still manually checking the
                            code for accuracy and usability.
                        </p>
                        <div className="text-sm text-neutral-400 mt-2">
                            Some of the tools I use:
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                Cursor
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                ChatGPT
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                Claude
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                GitHub Copilot
                            </span>
                        </div>
                    </div>
                ),
                projects: [],
            },
            {
                id: "website-management",
                title: "Website Management & SEO",
                description:
                    "See how I collaborate with SEO and marketing teams to build and manage high-performing WordPress websites.",
                icon: PanelTop,
                modalContent: (
                    <div>
                        <p>
                            WordPress-focused delivery with marketing and SEO:
                            site structure, performance, content workflows, and
                            ongoing collaboration so pages stay fast,
                            accessible, and discoverable.
                        </p>
                        <div className="text-sm text-neutral-400 mt-2">
                            Some of the tools I use:
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                WordPress
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                TruConversion
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                PostHog
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                BeaverBuilder
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                Elementor
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-md">
                                Semrush
                            </span>
                        </div>
                    </div>
                ),
            },
            {
                id: "full-stack",
                title: "Full Stack",
                description:
                    "See how I design and develop full-stack applications using data-driven decisions.",
                icon: Database,
                projects: [
                    {
                        label: "PisoCAKE",
                        href: "/projects/pisocake",
                    },
                    {
                        label: "Motorcycle Parts Inventory System",
                        href: "/projects/inventory-system",
                    },
                    { label: "Spotfinder", href: "/projects/spotfinder" },
                    {
                        label: "TellTail Tasks",
                        href: "/projects/telltail-tasks",
                    },
                ],
            },
            {
                id: "web-application",
                title: "Web Application",
                description:
                    "See how I design and develop web applications using data-driven decisions.",
                icon: CodeXml,
                projects: [
                    {
                        label: "Web Development",
                        href: "/projects/web-development",
                    },
                ],
            },
        ],
        [],
    );

    const openCategory = categories.find((c) => c.id === openId) ?? null;

    const handleClose = useCallback(() => setOpenId(null), []);

    return (
        <section className="relative z-10 min-h-screen flex flex-col py-12">
            <div className="flex flex-col gap-4 mb-4 lg:flex-row">
                {categories.slice(0, 3).map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <SpotlightCard
                            key={cat.id}
                            className="flex-1 text-white"
                            onClick={() => setOpenId(cat.id)}
                        >
                            <div className="flex flex-col gap-4 h-full">
                                <div
                                    className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <p>{cat.title}</p>
                                <p className="text-sm text-neutral-200 flex-1">
                                    {cat.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    );
                })}
            </div>

            <div className="flex flex-col gap-4 lg:flex-row">
                {categories.slice(3, 6).map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <SpotlightCard
                            key={cat.id}
                            className="flex-1 text-white"
                            onClick={() => setOpenId(cat.id)}
                        >
                            <div className="flex flex-col gap-4 h-full">
                                <div
                                    className="bg-white/10 p-2 rounded-xl
                    w-12 h-12
                    flex items-center justify-center"
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <p>{cat.title}</p>
                                <p className="text-sm text-neutral-200 flex-1">
                                    {cat.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    );
                })}
            </div>

            {openCategory && (
                <CategoryModal category={openCategory} onClose={handleClose} />
            )}
        </section>
    );
}
