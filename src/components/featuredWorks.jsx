import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function FeaturedWorks() {
    return (
        <section className="relative z-10 my-24 flex flex-col gap-4 justify-center">
            <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Featured Works</h1>
                    <p className="text-lg text-neutral-500">
                        These are some of the projects I'm proud of.
                    </p>
                </div>
                <Button>
                    <Link href="/projects">View All Projects</Link>
                </Button>
            </div>
            {/* PisoCAKE Project */}
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">PisoCAKE</h2>
                    <p className="text-lg text-neutral-500">
                        A Progressive Web Application (PWA) for financial goal
                        management.
                    </p>
                    <Button className="rounded-2xl w-fit">
                        <Link href="/projects/pisocake">View Project</Link>
                    </Button>
                </div>
                <Image
                    src="/Projects/PisoCAKE/PisoCAKE-Phone-Mockup-Preview.webp"
                    alt="PisoCAKE"
                    width={260}
                    height={500}
                    className="rounded-2xl ml-auto"
                />
            </div>

            {/* Food Storage Project */}
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Food Storage</h2>
                    <p className="text-lg text-neutral-500">
                        A web application for food storage management.
                    </p>
                    <Button className="rounded-2xl w-fit">
                        <Link href="/projects/food-storage">View Project</Link>
                    </Button>
                </div>
                <Image
                    src="/Projects/Food Storage/FoodStorage.webp"
                    alt="Food Storage"
                    width={260}
                    height={500}
                    className="rounded-2xl ml-auto"
                />
            </div>
        </section>
    );
}
