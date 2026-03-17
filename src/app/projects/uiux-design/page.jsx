"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UIUXDesign() {
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
                            <BreadcrumbLink href="/projects/uiux-design">
                                UI/UX Design
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-4xl font-bold mb-4">UI/UX Design</h1>
                <p className="text-lg text-neutral-500 mb-4">
                    See how I design user interfaces and experiences.
                </p>
                <hr className="w-full border-1/2 border-black" />
            </div>

            <div className="flex flex-col gap-8">
                {/* project row */}
                <div
                    className="relative flex flex-row-reverse items-center gap-4 px-20"
                    id="food-storage-container"
                >
                    <Image
                        src="/Projects/Food Storage/FoodStorage.webp"
                        alt="Food Storage"
                        width={350}
                        height={500}
                        className="z-30 -mr-8 -mt-20 mb-[-6rem] h-auto w-[300px] rounded-2xl cursor-pointer hover:scale-110 transition-all duration-300 hover:ml-20"
                        onClick={() => {
                            router.push("/projects/uiux-design/food-storage");
                        }}
                    />
                    <div className="flex flex-col gap-2 items-end text-right">
                        <p className="text-lg font-semibold">Food Storage</p>
                        <p className="text-sm text-neutral-500">
                            A user-centered design for a food storage
                            application.
                        </p>
                        <Button className="w-fit">
                            <Link href="/projects/uiux-design/food-storage">
                                View Project
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
