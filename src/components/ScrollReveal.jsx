"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades and slides content into view when it enters the viewport.
 */
export default function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 650,
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.06, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-[opacity,transform] ease-out",
                visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                className,
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: visible ? `${delay}ms` : "0ms",
            }}
        >
            {children}
        </div>
    );
}
