import { Folders } from "lucide-react";
import { LayoutTemplate } from "lucide-react";
export default function Statistics() {
    return (
        <section
            className="relative z-10 min-h-40 
            flex flex-row justify-center items-center
            bg-background/50 rounded-2xl p-6
        text-4xl font-bold"
        >
            <div className="flex-1 flex flex-row gap-2">
                <Folders className="w-10 h-10 text-primary" />
                <span className="text-primary">10+</span> Projects
            </div>
            <div className="flex-1 flex flex-row gap-2">
                <LayoutTemplate className="w-10 h-10 text-primary" />
                <span className="text-primary">20+</span> Landing Pages
            </div>
        </section>
    );
}
