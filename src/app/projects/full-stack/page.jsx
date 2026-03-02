import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
export default function FullStack() {
    return (
        <div className="relative z-10 min-h-screen p-20">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/projects">
                            Projects
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/full-stack">
                            Full Stack Development
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-4">Full Stack Development</h1>
            <p className="text-lg text-neutral-500 mb-4">
                See how I design and develop full-stack applications using
                data-driven decisions.
            </p>
            <hr className="w-full border-1/2 border-black" />
            {/* Tech Stack Marquee */}
            {/* 
            Display all projects in this category:
            Inventory System Website for a Local Motorcycle Parts Business
            Spotfinder
            */}
        </div>
    );
}
