import ResearchStudyLayout from "@/components/projects/ResearchCaseStudyLayout";

function HeroVisual() {
    return (
        <div className="relative h-52 md:h-64 lg:h-72 rounded-3xl border border-white/20 bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-slate-900/80 shadow-[0_0_70px_rgba(236,72,153,0.45)] overflow-hidden">
            <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_20%_0%,rgba(244,114,182,0.95),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(129,140,248,0.85),transparent_55%)]" />
            <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="h-40 w-24 md:h-48 md:w-28 rounded-2xl border border-white/30 bg-black/70 shadow-xl flex flex-col justify-between p-3">
                    <div className="h-3 w-14 rounded-full bg-white/20 mx-auto mt-1" />
                    <div className="space-y-2">
                        <div className="h-2.5 w-16 rounded-full bg-pink-300 mx-auto" />
                        <div className="mx-4 space-y-1">
                            <div className="h-1.5 w-full rounded-full bg-white/40" />
                            <div className="h-1.5 w-10/12 rounded-full bg-white/25" />
                            <div className="h-1.5 w-9/12 rounded-full bg-white/25" />
                        </div>
                    </div>
                    <div className="mb-1 flex justify-center gap-1.5">
                        <span className="h-1.5 w-6 rounded-full bg-green-400" />
                        <span className="h-1.5 w-6 rounded-full bg-yellow-300" />
                        <span className="h-1.5 w-6 rounded-full bg-red-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}

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
            heroVisual={<HeroVisual />}
        />
    );
}
