"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExpandedHref, setMobileExpandedHref] = useState(null);

    const desktopHeaderClassName = useMemo(() => {
        return `transition-colors duration-200 ${
            isScrolled
                ? "bg-background/70 backdrop-blur-sm border-b border-border"
                : "bg-transparent"
        }`;
    }, [isScrolled]);

    // Mobile: always keep a solid bar so links/logo stay visible over page content.
    const mobileHeaderClassName =
        "bg-background/95 backdrop-blur-md border-b border-border shadow-sm";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        // Close mobile menu when switching to desktop breakpoint.
        const mq = window.matchMedia("(min-width: 768px)"); // `md`
        const onChange = () => {
            if (mq.matches) setMobileMenuOpen(false);
        };
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return (
        <>
            {/* Desktop navigation */}
            <div className="hidden md:block">
                <NavigationMenu
                    viewport={false}
                    className={`flex fixed top-0 left-0 right-0 z-50 px-12 w-screen max-w-none ${desktopHeaderClassName}`}
                >
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.href}>
                                {item.children ? (
                                    <>
                                        <NavigationMenuTrigger>
                                            <Link href={item.href}>
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
                                        <Link
                                            href={item.href}
                                            className="font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile navigation */}
            <div
                className={`md:hidden fixed top-0 left-0 right-0 z-50 ${mobileHeaderClassName}`}
                style={{ height: 56 }}
            >
                <div className="flex h-full items-center justify-between px-4">
                    <Link
                        href="/"
                        className="flex shrink-0 items-center"
                        aria-label="Home"
                    >
                        <Image
                            src="/favicon_io/android-chrome-512x512.png"
                            alt=""
                            width={36}
                            height={36}
                            className="h-9 w-9 object-contain"
                            priority
                        />
                    </Link>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-2 py-2 text-foreground hover:bg-[#ffb6c1]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb6c1]/50"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        onClick={() => {
                            setMobileMenuOpen((v) => !v);
                            setMobileExpandedHref(null);
                        }}
                    >
                        {mobileMenuOpen ? (
                            <span aria-hidden className="relative block size-6">
                                <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current rounded" />
                                <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current rounded" />
                            </span>
                        ) : (
                            <span aria-hidden className="block w-6">
                                <span className="block h-[2px] w-6 bg-current rounded" />
                                <span className="block h-[2px] w-6 bg-current rounded mt-1" />
                                <span className="block h-[2px] w-6 bg-current rounded mt-1" />
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <>
                    <button
                        type="button"
                        aria-label="Close menu overlay"
                        className="md:hidden fixed inset-0 z-40 bg-black/30"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <div className="md:hidden fixed top-[56px] left-0 right-0 z-50 px-4">
                        <div className="mt-2 overflow-hidden rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-lg">
                            <nav className="flex flex-col p-2">
                                {navItems.map((item) => {
                                    const hasChildren = Boolean(item.children);
                                    const isExpanded =
                                        mobileExpandedHref === item.href;

                                    return (
                                        <div key={item.href} className="w-full">
                                            {hasChildren ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-[#ffb6c1]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb6c1]/50"
                                                        aria-expanded={
                                                            isExpanded
                                                        }
                                                        onClick={() => {
                                                            setMobileExpandedHref(
                                                                (prev) =>
                                                                    prev ===
                                                                    item.href
                                                                        ? null
                                                                        : item.href,
                                                            );
                                                        }}
                                                    >
                                                        <span className="font-medium">
                                                            {item.label}
                                                        </span>
                                                        <ChevronDownIcon
                                                            className={`size-4 transition-transform duration-200 ${
                                                                isExpanded
                                                                    ? "rotate-180"
                                                                    : ""
                                                            }`}
                                                            aria-hidden="true"
                                                        />
                                                    </button>

                                                    {isExpanded && (
                                                        <div className="flex flex-col gap-1 px-2 pb-2">
                                                            {item.children.map(
                                                                (child) => (
                                                                    <Link
                                                                        key={
                                                                            child.href
                                                                        }
                                                                        href={
                                                                            child.href
                                                                        }
                                                                        className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#ffb6c1]/20"
                                                                        onClick={() => {
                                                                            setMobileMenuOpen(
                                                                                false,
                                                                            );
                                                                            setMobileExpandedHref(
                                                                                null,
                                                                            );
                                                                        }}
                                                                    >
                                                                        {
                                                                            child.label
                                                                        }
                                                                    </Link>
                                                                ),
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="block rounded-lg px-3 py-2 font-medium hover:bg-[#ffb6c1]/20"
                                                    onClick={() => {
                                                        setMobileMenuOpen(
                                                            false,
                                                        );
                                                        setMobileExpandedHref(
                                                            null,
                                                        );
                                                    }}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
