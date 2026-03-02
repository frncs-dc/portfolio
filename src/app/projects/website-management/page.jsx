import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
export default function WebsiteManagement() {
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
                        <BreadcrumbLink href="/website-management">
                            Website Management
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-4">Website Management</h1>
            <p className="text-lg text-neutral-500 mb-4">
                See how I collaborate with SEO and marketing teams to build and
                manage high-performing WordPress websites.
            </p>
            <hr className="w-full border-1/2 border-black" />
        </div>
    );
}
