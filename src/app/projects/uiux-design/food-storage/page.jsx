import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";

export default function FoodStorage() {
    const outlineItems = [
        {
            id: "grocery-purchasing-priorities",
            label: "1. Grocery Purchasing Priorities",
        },
        {
            id: "household-organization-storage",
            label: "2. Household Organization and Storage of Food Items",
        },
        {
            id: "household-prioritization-consumption",
            label: "3. Household Prioritization of Food Consumption",
        },
    ];

    return (
        <section className="relative z-10 my-24 flex flex-col justify-center px-20">
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
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/projects/uiux-design/food-storage">
                            Food Storage
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold">Food Storage</h1>
            <p className="text-lg text-gray-500">
                It aims to improve effective communication and collaboration
                among household members in meal planning, organization, and
                grocery shopping, leading the researchers to focus the design
                problem on how to present information to motivate better
                collaboration in managing groceries.
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,3fr)]">
                <aside className="hidden lg:block self-start sticky top-28">
                    <div className="rounded-2xl border border-neutral-800/40 bg-neutral-900/80 backdrop-blur px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-200">
                            Outline
                        </p>
                        <nav className="mt-4">
                            <ul className="space-y-2 text-sm text-neutral-200">
                                {outlineItems.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="block rounded-md px-2 py-1 text-neutral-200/90 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>

                <div className="space-y-6">
                    {/* Row Item */}
                    <div className="flex flex-row items-center gap-4 overflow-hidden border border-gray-300 rounded-md p-4">
                        {/*Item Description*/}
                        <div className="flex min-w-0 flex-1 flex-col gap-2 justify-center">
                            <h2
                                id="grocery-purchasing-priorities"
                                className="text-3xl font-bold scroll-mt-32 lg:scroll-mt-40"
                            >
                                1. Grocery Purchasing Priorities
                            </h2>
                            {/*#TODO: add a link to the factors */}
                            <p className="text-sm text-gray-500">
                                Participants reported considering several
                                factors when deciding what food items to buy,
                                including. These factors shaped purchasing
                                decisions and could indirectly influence the
                                likelihood of food waste.
                                <br /> <br />
                                With this in mind, the design was focused on
                                presenting the needs and wants of each household
                                member to encourage better collaboration in
                                managing groceries.
                            </p>
                        </div>

                        {/*Item Image*/}
                        <div className="ml-auto flex flex-none flex-row flex-nowrap justify-end gap-2">
                            <Image
                                src="/Projects/Food Storage/Cart Family Cart/Merged View.png"
                                alt="Item"
                                width={200}
                                height={200}
                                className="h-auto w-[clamp(120px,18vw,200px)] rounded-lg object-contain"
                            />
                            <Image
                                src="/Projects/Food Storage/Cart Family Cart/User View.png"
                                alt="Item"
                                width={200}
                                height={100}
                                className="h-auto w-[clamp(120px,18vw,200px)] rounded-lg object-contain"
                            />
                        </div>
                    </div>

                    {/* Row Item */}
                    <div className="flex flex-row items-center gap-4 overflow-hidden border border-gray-300 rounded-md p-4">
                        {/*Item Description*/}
                        <div className="flex min-w-0 flex-1 flex-col gap-2 justify-center">
                            <h2
                                id="household-organization-storage"
                                className="text-3xl font-bold scroll-mt-32 lg:scroll-mt-40"
                            >
                                2. Household Organization and Storage of Food
                                Items
                            </h2>
                            <p className="text-sm text-gray-500">
                                Most participants organized groceries by
                                category (e.g., vegetables, frozen goods, canned
                                items), making them easier to find and keeping
                                storage spaces orderly. Some also prioritized
                                using older stock before newer items to reduce
                                waste, though this required consistent effort
                                and coordination within the household.
                                <br /> <br />
                                With this in mind, the design was focused on
                                centralizing current stock to make it easier to
                                find and use.
                            </p>
                        </div>

                        {/*Item Image*/}
                        <div className="ml-auto flex flex-none flex-row flex-nowrap justify-end gap-2">
                            <Image
                                src="/Projects/Food Storage/Storage/Fridge Storage Area.png"
                                alt="Item"
                                width={200}
                                height={200}
                                className="h-auto w-[clamp(120px,18vw,200px)] rounded-lg object-contain"
                            />
                            <Image
                                src="/Projects/Food Storage/Storage/Fridge Storage Area - Gardenia Expanded.png"
                                alt="Item"
                                width={200}
                                height={100}
                                className="h-auto w-[clamp(120px,18vw,200px)] rounded-lg object-contain"
                            />
                        </div>
                    </div>

                    {/* Row Item */}
                    <div className="flex flex-row items-center gap-4 overflow-hidden border border-gray-300 rounded-md p-4">
                        {/*Item Description*/}
                        <div className="flex min-w-0 flex-1 flex-col gap-2 justify-center">
                            <h2
                                id="household-prioritization-consumption"
                                className="text-3xl font-bold scroll-mt-32 lg:scroll-mt-40"
                            >
                                3. Household Prioritization of Food Consumption
                            </h2>
                            <p className="text-sm text-gray-500">
                                Participants also reported forgetting about
                                stored items leading to food waste.
                                <br /> <br />
                                With this in mind, the design was focused on
                                presenting the items in the home page to make it
                                easier to remember and use. Moreover, household
                                members can also communicate with each other and
                                bring up the items that are about to expire and
                                other issues related to the groceries.
                            </p>
                        </div>

                        {/*Item Image*/}
                        <div className="ml-auto flex flex-none flex-row flex-nowrap justify-end gap-2">
                            <Image
                                src="/Projects/Food Storage/Prioritization/Home Page - Minimized.png"
                                alt="Item"
                                width={200}
                                height={200}
                                className="h-auto w-[clamp(120px,18vw,200px)] rounded-lg object-contain"
                            />
                            <Image
                                src="/Projects/Food Storage/Prioritization/Chat Main.png"
                                alt="Item"
                                width={200}
                                height={100}
                                className="h-auto w-[clamp(120px,18vw,200px)] rounded-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
