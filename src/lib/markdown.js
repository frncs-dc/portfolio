import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const projectsDir = path.join(process.cwd(), "public/content/");

export async function getProjectHtml(slug) {
    const fullPath = path.join(projectsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const processed = await remark().use(html).process(fileContents);
    return processed.toString();
}
