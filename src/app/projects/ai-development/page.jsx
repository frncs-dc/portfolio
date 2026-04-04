import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";

export default function PrototypingWithAI() {
    return (
        <div className="relative z-10 min-h-screen p-20">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-4">
                UI/UX Prototyping & AI-Assisted Development
            </h1>
            <p className="text-lg text-neutral-500 mb-4">
                See how I translate business requirements into user-centered
                prototypes and leverage AI tools to design and develop intuitive
                mobile and desktop applications.
            </p>
            <hr className="w-full border-1/2 border-black" />
        </div>
    );
}
