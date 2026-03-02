import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Me",
        href: "/about-me",
    },
    {
        label: "Projects",
        href: "/projects",
        children: [
            {
                label: "UI/UX Research and Design",
                href: "/projects/uiux-research-design",
            },
            {
                label: "Web Development",
                href: "/projects/web-development",
            },
            {
                label: "UI/UX Prototyping & AI-Assisted Development",
                href: "/projects/prototyping-with-ai",
            },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navigation() {
    return (
        <NavigationMenu
            viewport={false}
            className="flex fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm px-12 w-screen max-w-none border-2 border-red-500"
        >
            <NavigationMenuList>
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        {item.children ? (
                            <>
                                <NavigationMenuTrigger>
                                    <Link href={item.href} className="">
                                        {item.label}
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {item.children.map((child) => (
                                        <NavigationMenuLink
                                            asChild
                                            key={child.href}
                                        >
                                            <Link
                                                href={child.href}
                                                className="font-medium"
                                            >
                                                {child.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link href={item.href} className="font-medium">
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
