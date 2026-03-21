import { getProjectHtml } from "@/lib/markdown";
import { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import ContactForm from "@/components/ContactForm";

function extractOutlineFromHtml(html) {
    if (!html) return [];

    const headings = [];
    const re =
        /<h([23])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;

    for (const match of html.matchAll(re)) {
        const level = Number(match[1]);
        const id = match[2];
        const rawText = match[3] ?? "";
        const text = rawText.replace(/<[^>]+>/g, "").trim();

        if (!id || !text) continue;
        headings.push({ level, id, text });
    }

    return headings;
}

export default async function ResearchCaseStudyLayout({
    title,
    subtitle,
    categoryLabel = "Research Case Study",
    categoryDetail,
    tags = [],
    techStack = [],
    markdownSlug,
    breadcrumbItems = [],
    contact = {
        blurb: "Like this case study or want to talk about similar work? I'm open to collaborations and new opportunities.",
        email: "hello@example.com",
        contactHref: "/#contact",
        contactLabel: "View contact section",
    },
    heroVisual,
}) {
    const html = markdownSlug ? await getProjectHtml(markdownSlug) : "";
    const outlineItems = extractOutlineFromHtml(html);

    return (
        <div className="relative z-10 min-h-screen px-6 py-20 md:px-16 lg:px-24">
            {/* background accents, echoing homepage radial glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)",
                        backgroundSize: "100% 100%",
                    }}
                />
            </div>

            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbItems.map((item, idx) => (
                        <Fragment key={`${item.href}-${idx}`}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.href}>
                                    {item.label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {idx < breadcrumbItems.length - 1 ? (
                                <BreadcrumbSeparator
                                    key={`${item.href}-${idx}-sep`}
                                />
                            ) : null}
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            {/* hero bento */}
            <section className="mt-8 mb-10 grid gap-4 lg:grid-cols-12">
                <div
                    className={`rounded-3xl border border-white/70 bg-white/75 p-7 backdrop-blur-lg shadow-[0_14px_34px_rgba(236,72,153,0.16)] ${
                        heroVisual ? "lg:col-span-6" : "lg:col-span-8"
                    }`}
                >
                    <p className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-pink-800">
                        {categoryLabel}
                        {categoryDetail ? (
                            <>
                                <span className="h-1 w-1 rounded-full bg-pink-300" />
                                {categoryDetail}
                            </>
                        ) : null}
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                        {title}
                    </h1>
                    {subtitle ? (
                        <p className="mt-3 max-w-2xl text-base text-neutral-700 md:text-lg">
                            {subtitle}
                        </p>
                    ) : null}

                    
                </div>

                <div
                    className={`rounded-3xl border border-white/70 bg-white/70 p-5 backdrop-blur-lg shadow-[0_14px_34px_rgba(236,72,153,0.14)] ${
                        heroVisual ? "lg:col-span-3" : "lg:col-span-4"
                    }`}
                >
                    {tags?.length ? (
                        <>
                            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-700">
                                Focus
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2 text-[11px] md:text-xs">
                                {tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-pink-800"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </>
                    ) : null}

                    {techStack?.length ? (
                        <div className="mt-4 space-y-1 text-[11px] text-neutral-700 md:text-xs">
                            {techStack.map((row) => (
                                <p key={row.label}>
                                    <span className="font-semibold text-pink-700">
                                        {row.label}
                                    </span>
                                    {": "}
                                    {row.value}
                                </p>
                            ))}
                        </div>
                    ) : null}
                </div>

                {heroVisual ? (
                    <div className="rounded-3xl border border-white/70 bg-white/70 p-4 backdrop-blur-lg shadow-[0_14px_34px_rgba(236,72,153,0.14)] lg:col-span-3">
                        <div className="flex h-full items-center justify-center">
                            {heroVisual}
                        </div>
                    </div>
                ) : null}
            </section>

            {/* sticky outline + markdown content + sticky contact sidebar */}
            <div className="mt-6 mb-16 grid gap-10 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,3fr)_minmax(260px,1fr)]">
                <aside className="hidden lg:block self-start sticky top-28">
                    <div className="rounded-2xl border border-neutral-800/40 bg-neutral-900/80 backdrop-blur px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-200">
                            Outline
                        </p>
                        {outlineItems?.length ? (
                            <nav className="mt-4">
                                <ul className="space-y-2 text-sm text-neutral-200">
                                    {outlineItems.map((item) => (
                                        <li
                                            key={item.id}
                                            className={
                                                item.level === 3
                                                    ? "pl-3"
                                                    : ""
                                            }
                                        >
                                            <a
                                                href={`#${item.id}`}
                                                className="block rounded-md px-2 py-1 text-neutral-200/90 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ) : (
                            <p className="mt-4 text-sm text-neutral-200/70">
                                Add headings (## / ###) to show outline.
                            </p>
                        )}
                    </div>
                </aside>

                <article
                    className="
                        prose max-w-none
                        rounded-3xl bg-white/95 text-black border border-neutral-200 shadow-sm
                        px-6 py-10 md:px-10 md:py-12
                        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-black
                        prose-h1:text-3xl prose-h1:mb-4
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
                        prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
                        prose-p:text-neutral-800 prose-p:leading-relaxed
                        prose-strong:text-pink-700
                        prose-a:text-pink-700 hover:prose-a:text-pink-500
                        prose-ul:list-disc prose-ul:marker:text-pink-700
                        prose-hr:border-neutral-200
                    "
                    dangerouslySetInnerHTML={{ __html: html }}
                />

                <aside className="hidden lg:block self-start sticky top-28">
                    <div className="rounded-2xl border border-neutral-800/40 bg-neutral-900/80 backdrop-blur px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                        <ContactForm
                            title="Contact"
                            blurb={contact?.blurb}
                            compact
                        />
                    </div>
                </aside>
            </div>
        </div>
    );
}
