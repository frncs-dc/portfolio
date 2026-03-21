"use client";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function UIUXResearch() {
    const router = useRouter();
    return (
        <div className="relative z-10 min-h-screen">
            {/* header */}
            <div className="flex flex-col gap-4 p-20">
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
                            <BreadcrumbLink href="/uiux-research">
                                UI/UX Research
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-4xl font-bold mb-4">UI/UX Research</h1>
                <p className="text-lg text-neutral-500 mb-4">
                    See how I conduct research to understand user needs and
                    behaviors.
                </p>
                <hr className="w-full border-1/2 border-black" />
            </div>

            <div className="flex flex-col gap-8">
                {/* original: image overflowing left & bottom */}
                <div
                    className="relative flex flex-row items-center gap-4
                    px-20 pb-10
                    bg-pink-500/10"
                    id="project-1-container"
                >
                    <Image
                        src="/Projects/PisoCAKE/PisoCAKE-Phone-Mockup-Preview.webp"
                        alt="PisoCAKE Financial Management PWA"
                        width={260}
                        height={500}
                        className="z-30 -ml-8 -mt-20 mb-[-6rem] h-auto w-[260px] rounded-2xl
                        cursor-pointer
                        hover:scale-110 transition-all duration-300 hover:mr-20"
                        onClick={() => {
                            router.push("/projects/pisocake");
                        }}
                    />
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">
                            PisoCAKE Financial Management PWA
                        </p>
                        <p className="text-sm text-neutral-500">
                            A Progressive Web Application (PWA) for financial
                            goal management. This was made to support a study
                            that explores how to improve financial goal
                            achievement by making transaction logging easier and
                            providing better goal-setting support.
                        </p>
                        <Button className="w-fit">
                            <Link href="/projects/pisocake">View Project</Link>
                        </Button>
                    </div>
                </div>
                {/* reverse: image overflowing right & bottom */}
                <div
                    className="relative flex flex-row-reverse items-center gap-4
                    px-20"
                >
                    <Image
                        src="/Projects/Food Storage/FoodStorage.webp"
                        alt="Food Storage"
                        width={350}
                        height={500}
                        className="z-30 -mr-8 -mt-20 mb-[-6rem] h-auto w-[300px] rounded-2xl
                        cursor-pointer
                        hover:scale-110 transition-all duration-300 hover:ml-20"
                        onClick={() => {
                            router.push("/projects/food-storage");
                        }}
                    />
                    <div className="flex flex-col gap-2 items-end text-right">
                        <p className="text-lg font-semibold">Food Storage</p>
                        <p className="text-sm text-neutral-500">
                            A web application for food storage management. It
                            aims to improve effective communication and
                            collaboration among household members in meal
                            planning, organization, and grocery shopping,
                            leading the researchers to focus the design problem
                            on how to present information to motivate better
                            collaboration in managing groceries.
                        </p>
                        <Button className="w-fit">
                            <Link href="/projects/uiux-research/food-storage">
                                View Project
                            </Link>
                        </Button>
                    </div>
                </div>

                <div
                    className="relative flex flex-row items-center gap-4
                    px-20 pb-10
                    bg-pink-500/10"
                    id="project-1-container"
                >
                    <Image
                        src="/Projects/Website Management/Website.webp"
                        alt="Website Management"
                        width={260}
                        height={500}
                        className="z-30 -ml-8 -mt-20 mb-[-6rem] h-auto w-[350px] rounded-2xl
                        cursor-pointer
                        hover:scale-110 transition-all duration-300 hover:mr-20"
                        onClick={() => {
                            router.push("/projects/pisocake");
                        }}
                    />
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">
                            Website Management
                        </p>
                        <p className="text-sm text-neutral-500">
                            See how I collaborate with SEO and marketing teams
                            to build and manage high-performing WordPress
                            websites.
                        </p>
                        <Button className="w-fit">
                            <Link href="/projects/website-management">
                                View Project
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
