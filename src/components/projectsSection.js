"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
const ALL = "All";
const PROJECTS_DISPLAY_LIMIT = 3;

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTechnology, setSelectedTechnology] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const categories = useMemo(
        () => [...new Set(projects.map((p) => p.category))].sort(),
        [],
    );
    const technologies = useMemo(
        () =>
            [...new Set(projects.flatMap((p) => p.technologies || []))].sort(),
        [],
    );

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchCategory =
                !selectedCategory || project.category === selectedCategory;
            const matchTechnology =
                !selectedTechnology ||
                (project.technologies && project.technologies.includes(selectedTechnology));
            return matchCategory && matchTechnology;
        });
    }, [selectedCategory, selectedTechnology]);

    useEffect(() => {
        setShowAll(false);
    }, [selectedCategory, selectedTechnology]);

    const displayedProjects = showAll
        ? filteredProjects
        : filteredProjects.slice(0, PROJECTS_DISPLAY_LIMIT);
    const hasMore = filteredProjects.length > PROJECTS_DISPLAY_LIMIT;

    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center py-20">
            <h1 className="text-4xl font-bold">Projects</h1>

            <div className="w-full max-w-7xl px-4 flex flex-col gap-6">
                {/* Category filter */}
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                        Category
                    </span>
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant={selectedCategory === null ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(null)}
                        >
                            {ALL}
                        </Button>
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={
                                    selectedCategory === cat ? "default" : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    setSelectedCategory(selectedCategory === cat ? null : cat)
                                }
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Technology filter */}
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                        Technology
                    </span>
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant={
                                selectedTechnology === null ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setSelectedTechnology(null)}
                        >
                            {ALL}
                        </Button>
                        {technologies.map((tech) => (
                            <Button
                                key={tech}
                                variant={
                                    selectedTechnology === tech
                                        ? "default"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    setSelectedTechnology(
                                        selectedTechnology === tech ? null : tech,
                                    )
                                }
                            >
                                {tech}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {displayedProjects.length === 0 ? (
                        <p className="text-muted-foreground">
                            No projects match the selected filters.
                        </p>
                    ) : (
                        displayedProjects.map((project) => (
                            <Card key={project.id}>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{project.description}</p>
                                </CardContent>
                            </Card>
                        ))
                    )}

                    {hasMore && (
                        <Button
                            variant="outline"
                            onClick={() => setShowAll((prev) => !prev)}
                            className="w-full sm:w-auto"
                        >
                            {showAll ? "See less" : "See more"}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}
