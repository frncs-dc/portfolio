import ResearchCaseStudyLayout from "@/components/projects/ResearchCaseStudyLayout";
import Image from "next/image";

export default function FoodStorageResearch() {
    return (
        <ResearchCaseStudyLayout
            title="Food Storage Research"
            subtitle="Exploring how better information presentation can improve household collaboration in organizing groceries and reducing food waste."
            categoryLabel="UX Case Study"
            categoryDetail="UI/UX Research"
            tags={[
                "Needfinding",
                "Survey and Interviews",
                "Collaboration Design",
            ]}
            techStack={[
                { label: "Domain", value: "Household food management" },
                {
                    label: "Methods",
                    value: "Surveys · Semi-structured interviews",
                },
                {
                    label: "Focus",
                    value: "Information presentation for collaboration",
                },
            ]}
            markdownSlug="foodstorage"
            breadcrumbItems={[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/projects/uiux-research", label: "UI/UX Research" },
                {
                    href: "/projects/uiux-research/food-storage",
                    label: "Food Storage",
                },
            ]}
            contact={{
                blurb: "Like this case study or want to talk about similar work? I'm open to collaborations and new opportunities.",
                email: "hello@example.com",
                contactHref: "/#contact",
                contactLabel: "View contact section",
            }}
            heroVisual={null}
        />
    );
}
