import { getProjectHtml } from "@/lib/markdown";
import { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";

export default async function CaseStudyLayout({
    title,
    subtitle,
    categoryLabel = "Case Study",
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

    return (
        <div className="relative z-10 min-h-screen px-6 py-20 md:px-16 lg:px-24">
            {/* background accents */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-pink-500/25 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
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

            {/* hero */}
            <section className="mt-8 mb-10 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
                <div className="rounded-3xl bg-white/95 text-black border border-neutral-200 shadow-sm px-6 py-8 md:px-8">
                    <p className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-pink-700">
                        {categoryLabel}
                        {categoryDetail ? (
                            <>
                                <span className="h-1 w-1 rounded-full bg-pink-300" />
                                {categoryDetail}
                            </>
                        ) : null}
                    </p>
                    <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-black">
                        {title}
                    </h1>
                    {subtitle ? (
                        <p className="mt-3 text-base md:text-lg max-w-xl text-neutral-800">
                            {subtitle}
                        </p>
                    ) : null}

                    {tags?.length ? (
                        <div className="mt-6 flex flex-wrap gap-2 text-xs">
                            {tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full bg-pink-500/10 px-3 py-1 border border-pink-500/30 text-pink-800"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    {techStack?.length ? (
                        <div className="mt-4 space-y-1 text-[11px] md:text-xs text-neutral-800">
                            <p className="font-semibold uppercase tracking-[0.22em] text-pink-700">
                                Tech Stack
                            </p>
                            {techStack.map((row) => (
                                <p key={row.label}>
                                    <span className="font-medium text-pink-700">
                                        {row.label}
                                    </span>
                                    {": "}
                                    {row.value}
                                </p>
                            ))}
                        </div>
                    ) : null}
                </div>

                <div>{heroVisual}</div>
            </section>

            {/* markdown content + sticky contact sidebar */}
            <div className="mt-6 mb-16 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]">
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
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-300 mb-3">
                            Contact
                        </p>
                        <p className="text-sm text-neutral-200 mb-4">
                            {contact?.blurb}
                        </p>
                        <div className="space-y-2 text-sm text-neutral-200">
                            <p className="font-medium">Let&apos;s connect</p>
                            <a
                                href={`mailto:${contact?.email}`}
                                className="block text-pink-300 hover:text-pink-200 underline underline-offset-2"
                            >
                                {contact?.email}
                            </a>
                            <a
                                href={contact?.contactHref}
                                className="inline-flex items-center gap-1.5 text-xs text-neutral-200/80 hover:text-white mt-2"
                            >
                                <span>{contact?.contactLabel}</span>
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
