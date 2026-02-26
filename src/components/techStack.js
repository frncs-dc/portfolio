"use client";

import { useState, useMemo, useEffect } from "react";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function TechStack() {
    const [selectedTechId, setSelectedTechId] = useState(null);

    const projectsByTechId = useMemo(() => {
        const map = {};
        for (const tech of technologies) {
            map[tech.id] = projects.filter(
                (p) => p.technologies && p.technologies.includes(tech.id),
            );
        }
        return map;
    }, []);

    const selectedTech = selectedTechId
        ? technologies.find((t) => t.id === selectedTechId)
        : null;
    const projectsForSelectedTech = selectedTechId
        ? (projectsByTechId[selectedTechId] ?? [])
        : [];

    useEffect(() => {
        if (!selectedTechId) return;
        const handleEscape = (e) => {
            if (e.key === "Escape") setSelectedTechId(null);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [selectedTechId]);

    return (
        <section className="relative z-10 flex flex-col justify-center items-center gap-6 py-20">
            <div className="text-4xl text-center font-bold w-full">
                Tech Stack
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl px-4">
                {technologies.map((tech) => (
                    <Button
                        key={tech.id}
                        size="sm"
                        className="cursor-pointer
                        text-black border border-black
                        bg-white/10 p-2 rounded-full px-4
                        hover:bg-[#ffb6c1]/20
                        hover:scale-120 transition-all duration-100
                        hover:shadow-lg hover:shadow-[#ffb6c1]/30
                        hover:mx-2
                        flex items-center justify-center"
                        onClick={() => setSelectedTechId(tech.id)}
                    >
                        {tech.name}
                    </Button>
                ))}
            </div>

            {/* Modal: projects using this technology */}
            {selectedTechId && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    onClick={() => setSelectedTechId(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="tech-modal-title"
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            <h2
                                id="tech-modal-title"
                                className="text-xl font-semibold"
                            >
                                Projects using {selectedTech?.name}
                            </h2>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedTechId(null)}
                                aria-label="Close"
                            >
                                ×
                            </Button>
                        </div>
                        <div className="p-4 overflow-y-auto flex-1">
                            {projectsForSelectedTech.length === 0 ? (
                                <p className="text-muted-foreground">
                                    No projects use this technology yet.
                                </p>
                            ) : (
                                <ul className="space-y-3">
                                    {projectsForSelectedTech.map((project) => (
                                        <li
                                            key={project.id}
                                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                                        >
                                            <p className="font-medium">
                                                {project.title}
                                            </p>
                                            {project.description && (
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    {project.description}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
