import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";

export default function FoodStorage() {
    return (
        <section className="relative z-10 my-24 flex flex-col justify-center px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
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
            </Breadcrumb>
            <h1 className="text-4xl font-bold">Food Storage</h1>

            {/* Row Item */}
            <div className="flex flex-row gap-4 border border-gray-300 rounded-md p-4">
                {/*Item Description*/}
                <div className="flex flex-col gap-2 justify-center">
                    <h2 className="text-3xl font-bold">
                        1. Grocery Purchasing Priorities
                    </h2>
                    <p className="text-sm text-gray-500">
                        This is a description of the item.
                    </p>
                </div>

                {/*Item Image*/}
                <div className="flex flex-row gap-2 ml-auto border border-red-500 rounded-md p-4">
                    <Image
                        src="/Projects/Food Storage/Cart Family Cart/Merged View.png"
                        alt="Item"
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/Projects/Food Storage/Cart Family Cart/User View.png"
                        alt="Item"
                        width={200}
                        height={100}
                    />
                </div>
            </div>

            {/* Row Item */}
            <div className="flex flex-row gap-4 border border-gray-300 rounded-md p-4">
                {/*Item Description*/}
                <div className="flex flex-col gap-2 justify-center">
                    <h2 className="text-3xl font-bold">
                        2. Household Organization and Storage of Food Items
                    </h2>
                    <p className="text-sm text-gray-500">
                        This is a description of the item.
                    </p>
                </div>

                {/*Item Image*/}
                <div className="flex flex-row gap-2 ml-auto border border-red-500 rounded-md p-4">
                    <Image
                        src="/Projects/Food Storage/Storage/Fridge Storage Area.png"
                        alt="Item"
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/Projects/Food Storage/Storage/Fridge Storage Area - Gardenia Expanded.png"
                        alt="Item"
                        width={200}
                        height={100}
                    />
                </div>
            </div>

            {/* Row Item */}
            <div className="flex flex-row gap-4 border border-gray-300 rounded-md p-4">
                {/*Item Description*/}
                <div className="flex flex-col gap-2 justify-center">
                    <h2 className="text-3xl font-bold">
                        3. Household Prioritization of Food Consumption
                    </h2>
                    <p className="text-sm text-gray-500">
                        This is a description of the item.
                    </p>
                </div>

                {/*Item Image*/}
                <div className="flex flex-row gap-2 ml-auto border border-red-500 rounded-md p-4">
                    <Image
                        src="/Projects/Food Storage/Prioritization/Home Page - Minimized.png"
                        alt="Item"
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/Projects/Food Storage/Prioritization/Chat Main.png"
                        alt="Item"
                        width={200}
                        height={100}
                    />
                </div>
            </div>
        </section>
    );
}
