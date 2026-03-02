import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
export default function UIUXResearchDesign() {
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
                        <BreadcrumbLink href="/uiux-research-design">
                            UI/UX Research & Design
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold mb-4">UI/UX Research & Design</h1>
            <p className="text-lg text-neutral-500 mb-4">
                See how I conduct research to understand user needs and
                behaviors, and how I use the findings to inform the design and
                development of user interfaces and experiences.
            </p>
            <hr className="w-full border-1/2 border-black" />
            {/* Tech Stack Marquee */}
            {/* 
            Display all projects in this category:
            Thesis: PisoCAKE Financial Management PWA
            Food Storage: Web Application
            Company Website Design
            */}
            <div className="flex flex-col gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>PisoCAKE Financial Management PWA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            PisoCAKE Financial Management PWA is a web
                            application that allows users to manage their
                            financial goals and track their progress.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link
                                href="/projects/piscake-financial-management-pwa"
                                className="inline-flex items-center gap-2"
                                variant="outline"
                            >
                                View Project
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Food Storage: Web Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Food Storage is a web application that allows users
                            to manage their food storage and track their
                            progress.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link
                                href="/projects/food-storage"
                                className="inline-flex items-center gap-2"
                                variant="outline"
                            >
                                View Project
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Company Website Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Company Website Design is a web application that
                            allows users to manage their company website and
                            track their progress.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link
                                href="/projects/company-website-design"
                                className="inline-flex items-center gap-2"
                                variant="outline"
                            >
                                View Project
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
