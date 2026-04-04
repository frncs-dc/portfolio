import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function FeaturedWorks({ showHeader = false }) {
    const PisoCAKETechnologies = [
        "figma",
        "next.js",
        "typescript",
        "supabase",
        "thematic-analysis",
    ];

    const FoodStorageTechnologies = [
        "figma",
        "ux-research",
        "usability-testing",
        "user-research",
        "thematic-analysis",
    ];

    const ThisPortfolioTechnologies = [
        "next.js",
        "tailwindcss",
        "framer-motion",
        "lucide-react",
        "shadcn/ui",
        "vercel",
    ];

    return (
        <section className="relative z-10 lg:my-24 my-12 flex flex-col gap-4 justify-center">
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Featured Works</h1>
                    <p className="text-lg text-neutral-500">
                        These are some of the projects I'm proud of.
                    </p>
                </div>
                {showHeader && (
                    <Button
                        className="lg:ml-auto lg:mr-12 rounded-xl w-fit 
                bg-white text-black border border-black p-2 px-4"
                    >
                        <Link href="/projects">View All Projects</Link>
                        <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                )}
            </div>

            {/* PisoCAKE Project */}
            <div className="flex flex-col gap-4 lg:flex-row">
                <Image
                    src="/Projects/PisoCAKE/PisoCAKE-Phone-Mockup-Preview.webp"
                    alt="PisoCAKE"
                    width={260}
                    height={500}
                    className="rounded-2xl hover:scale-110 transition-all duration-300"
                />
                <div className="flex flex-col gap-4 h-full">
                    <h2 className="text-2xl font-bold mt-8">PisoCAKE</h2>
                    <p className="text-lg text-neutral-500">
                        A Progressive Web Application (PWA) for financial goal
                        management. This was made to support a study that
                        explores how to improve financial goal achievement by
                        making transaction logging easier and providing better
                        goal-setting support.
                    </p>

                    <div className="flex flex-row flex-wrap gap-2">
                        {PisoCAKETechnologies.map((technology) => (
                            <Button
                                key={technology}
                                className="rounded-2xl w-fit text-black border border-black bg-white/10 p-2 px-4"
                            >
                                {technology}
                            </Button>
                        ))}
                    </div>
                    <div className="flex flex-row gap-2 mt-8">
                        <Button className="rounded-2xl w-fit">
                            <Link href="/projects/pisocake">View Project</Link>
                            <ArrowRightIcon className="w-4 h-4" />
                        </Button>
                        <Button className="rounded-2xl w-fit">
                            <FaGithub />
                            <Link href="https://github.com/CarlMatthewVerano/THS-ST-PisoCAKE">
                                View GitHub Repository
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Food Storage Project */}
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex flex-col gap-4 order-2 lg:order-1">
                    <h2 className="text-2xl font-bold mt-8">Food Storage</h2>
                    <p className="text-lg text-neutral-500">
                        A web application for food storage management. It aims
                        to improve effective communication and collaboration
                        among household members in meal planning, organization,
                        and grocery shopping, leading the researchers to focus
                        the design problem on how to present information to
                        motivate better collaboration in managing groceries.
                    </p>
                    <div className="flex flex-row flex-wrap gap-2">
                        {FoodStorageTechnologies.map((technology) => (
                            <Button
                                key={technology}
                                className="rounded-2xl w-fit text-black border border-black bg-white/10 p-2 px-4"
                            >
                                {technology}
                            </Button>
                        ))}
                    </div>
                    <div className="flex flex-row gap-2 mt-8">
                        <Button className="rounded-2xl w-fit">
                            <Link href="/projects/food-storage-design">
                                View Project
                            </Link>
                            <ArrowRightIcon className="w-4 h-4" />
                        </Button>
                        <Button className="rounded-2xl w-fit">
                            <Link href="/projects/food-storage-research">
                                View Research
                            </Link>
                        </Button>
                    </div>
                </div>
                <Image
                    src="/Projects/Food Storage/FoodStorage.webp"
                    alt="Food Storage"
                    width={260}
                    height={500}
                    className="rounded-2xl ml-auto order-1 lg:order-2
                                hover:scale-110 transition-all duration-300"
                />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row mt-8">
                <Image
                    src="/Projects/Portfolio/Desktop_Portfolio.webp"
                    alt="This Portfolio"
                    width={400}
                    height={500}
                    className="rounded-2xl hover:scale-110 transition-all duration-300"
                />
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">
                        This Portfolio :{")"}
                    </h2>
                    <p className="text-lg text-neutral-500">
                        This portfolio showcases a curated selection of my work,
                        highlighting my skills in development and design. Built
                        with Next.js and Tailwind CSS, it is crafted with
                        performance and SEO best practices in mind.
                    </p>
                    <div className="flex flex-row flex-wrap gap-2">
                        {ThisPortfolioTechnologies.map((technology) => (
                            <Button
                                key={technology}
                                className="rounded-2xl w-fit text-black border border-black bg-white/10 p-2 px-4"
                            >
                                {technology}
                            </Button>
                        ))}
                    </div>
                    <div className="flex flex-row gap-2 mt-8">
                        <Button className="rounded-2xl w-fit">
                            <Link href="https://github.com/frncs-dc/portfolio">
                                View GitHub Repository
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
