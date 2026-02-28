/**
 * Single source of truth for technologies.
 * Use these ids in projects.js (project.technologies) to keep names in sync.
 */
export const technologies = [
    { id: "css", name: "CSS" },
    { id: "express", name: "Express" },
    { id: "figma", name: "Figma" },
    { id: "javascript", name: "JavaScript" },
    { id: "mongodb", name: "MongoDB" },
    { id: "nextjs", name: "Next.js" },
    { id: "nodejs", name: "Node.js" },
    { id: "react", name: "React" },
    { id: "sqlite", name: "SQLite" },
    { id: "supabase", name: "Supabase" },
    { id: "tailwind-css", name: "Tailwind CSS" },
    { id: "thematic-analysis", name: "Thematic Analysis" },
    { id: "typescript", name: "TypeScript" },
    { id: "wordpress", name: "WordPress" },
];

const nameById = Object.fromEntries(technologies.map((t) => [t.id, t.name]));

/** Get display name for a technology id (e.g. from project.technologies). */
export function getTechnologyName(id) {
    return nameById[id] ?? id;
}
