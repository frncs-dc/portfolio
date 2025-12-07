"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(4);

    useEffect(() => {
        const updateProjectsPerPage = () => {
            // Match Tailwind breakpoints: sm:640, md:768, lg:1024, xl:1280
            const width = window.innerWidth;
            if (width >= 768) {
                // md and above: max 4 projects per page
                setProjectsPerPage(4);
            } else {
                // mobile: 1 project per page
                setProjectsPerPage(1);
            }
        };

        updateProjectsPerPage();
        window.addEventListener("resize", updateProjectsPerPage);
        return () =>
            window.removeEventListener("resize", updateProjectsPerPage);
    }, []);

    useEffect(() => {
        // Reset to page 1 when projects per page changes
        setCurrentPage(1);
    }, [projectsPerPage]);

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToPrevious = () => {
        setCurrentPage((prev) => Math.max(1, prev - 1));
    };

    const goToNext = () => {
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    };

    return (
        <section
            className="relative z-10 text-left py-20
            flex flex-col justify-center items-center gap-10"
        >
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4">
                {currentProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
                    <Button
                        variant="outline"
                        onClick={goToPrevious}
                        disabled={currentPage === 1}
                        className="w-full sm:w-auto"
                    >
                        Previous
                    </Button>

                    <div className="flex gap-1 flex-wrap justify-center">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <Button
                                key={page}
                                variant={
                                    currentPage === page ? "default" : "outline"
                                }
                                onClick={() => goToPage(page)}
                                className="min-w-[40px]"
                            >
                                {page}
                            </Button>
                        ))}
                    </div>

                    <Button
                        variant="outline"
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="w-full sm:w-auto"
                    >
                        Next
                    </Button>
                </div>
            )}
        </section>
    );
}
