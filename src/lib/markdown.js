import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";

const projectsDir = path.join(process.cwd(), "public/content/");

function applyShortcodes(markdown) {
    // CTA shortcode: [[cta label="Work with me" href="/#contact"]]
    return markdown.replace(
        /\[\[cta\s+([^\]]+)\]\]/g,
        (match, inner) => {
            const labelMatch = inner.match(/label="([^"]*)"/);
            const hrefMatch = inner.match(/href="([^"]*)"/);
            const label = labelMatch?.[1] || "Get in touch";
            const href = hrefMatch?.[1] || "/#contact";

            return `
<a
  href="${href}"
  class="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-pink-500/40 hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
>
  <span>${label}</span>
</a>
`.trim();
        }
    );
}

export async function getProjectHtml(slug) {
    const fullPath = path.join(projectsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const withShortcodes = applyShortcodes(fileContents);
    const processed = await remark()
        .use(remarkSlug)
        .use(remarkAutolinkHeadings, {
            behavior: "wrap",
            properties: { className: ["heading-anchor"] },
        })
        .use(html)
        .process(withShortcodes);
    return processed.toString();
}
