import ResearchStudyLayout from "@/components/projects/ResearchCaseStudyLayout";
import Image from "next/image";

export default function PisoCakePage() {
    return (
        <ResearchStudyLayout
            title="PisoCAKE"
            subtitle="Designing a financial management tool that balances discipline, convenience, and the unpredictability of everyday life."
            categoryLabel="UX Case Study"
            categoryDetail="Financial Management"
            tags={["UX Research", "Interaction Design", "Financial Tools"]}
            techStack={[
                {
                    label: "Frontend",
                    value: "Next.js 15 · TypeScript · Tailwind CSS",
                },
                { label: "Backend", value: "Supabase · PostgreSQL · Prisma" },
                {
                    label: "Core",
                    value: "PWA · Tesseract.js (OCR for receipt scanning)",
                },
            ]}
            markdownSlug="pisocake"
            breadcrumbItems={[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/projects/pisocake", label: "PisoCAKE" },
            ]}
            contact={{
                blurb: "Like this case study or want to talk about similar work? I'm open to collaborations and new opportunities.",
                email: "hello@example.com",
                contactHref: "/#contact",
                contactLabel: "View contact section",
            }}
            heroVisual={
                <Image
                    src="/Projects/PisoCAKE/PisoCAKE-Phone-Mockup-Preview.webp"
                    alt="PisoCAKE"
                    width={300}
                    height={300}
                    className="rounded-2xl"
                />
            }
        />
    );
}
