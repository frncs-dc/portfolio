import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Contact",
        href: "/contact",
    },
  ]

export default function Navigation() {
    return (
        <NavigationMenu className="flex justify-center items-center fixed top-0 left-0 right-0 z-50
                bg-background/50 backdrop-blur-sm
                w-100
                border-2 border-red-500">
        <NavigationMenuList>
            {navItems.map((item) => (
                <NavigationMenuItem key={item.href} className="">
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>{item.href}</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
        </NavigationMenu>
    )
}