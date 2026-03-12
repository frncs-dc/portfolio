 "use client";
 
 import { usePathname, useSearchParams } from "next/navigation";
 import { useEffect, useRef, useState } from "react";
 
 function isModifiedEvent(event) {
     return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
 }
 
 function isProbablyExternalHref(href) {
     return (
         !href ||
         href.startsWith("http:") ||
         href.startsWith("https:") ||
         href.startsWith("mailto:") ||
         href.startsWith("tel:") ||
         href.startsWith("#")
     );
 }
 
 export default function TopLoadingBar() {
     const pathname = usePathname();
     const searchParams = useSearchParams();
 
     const [visible, setVisible] = useState(false);
     const [progress, setProgress] = useState(0);
 
     const rafRef = useRef(0);
     const startedRef = useRef(false);
     const lastUrlRef = useRef("");
 
     const prefersReducedMotion =
         typeof window !== "undefined" &&
         window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
 
     const stopRaf = () => {
         if (rafRef.current) cancelAnimationFrame(rafRef.current);
         rafRef.current = 0;
     };
 
     const start = () => {
         if (prefersReducedMotion) return;
         if (startedRef.current) return;
         startedRef.current = true;
         setVisible(true);
         setProgress(8);
 
         const tick = () => {
             setProgress((p) => {
                 if (p >= 90) return p;
                 const next = p + Math.max(0.35, (90 - p) * 0.02);
                 return Math.min(90, next);
             });
             rafRef.current = requestAnimationFrame(tick);
         };
 
         rafRef.current = requestAnimationFrame(tick);
     };
 
     const done = () => {
         if (prefersReducedMotion) return;
         if (!startedRef.current) return;
         startedRef.current = false;
         stopRaf();
         setProgress(100);
         window.setTimeout(() => {
             setVisible(false);
             setProgress(0);
         }, 220);
     };
 
     useEffect(() => {
         const onClickCapture = (event) => {
             if (event.defaultPrevented) return;
             if (event.button !== 0) return;
             if (isModifiedEvent(event)) return;
 
             const anchor = event.target?.closest?.("a[href]");
             if (!anchor) return;
 
             const href = anchor.getAttribute("href") || "";
             if (isProbablyExternalHref(href)) return;
             if (anchor.target && anchor.target !== "_self") return;
             if (anchor.hasAttribute("download")) return;
 
             const url = new URL(href, window.location.href);
             if (url.origin !== window.location.origin) return;
 
             const current = `${window.location.pathname}${window.location.search}`;
             const next = `${url.pathname}${url.search}`;
             if (current === next) return;
 
             lastUrlRef.current = next;
             start();
         };
 
         window.addEventListener("click", onClickCapture, true);
         return () => window.removeEventListener("click", onClickCapture, true);
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
 
     useEffect(() => {
         if (prefersReducedMotion) return;
         const current = `${pathname}${searchParams ? `?${searchParams}` : ""}`;
 
         if (!startedRef.current) {
             lastUrlRef.current = current;
             return;
         }
 
         if (!lastUrlRef.current || lastUrlRef.current === current) {
             lastUrlRef.current = current;
             done();
         } else {
             lastUrlRef.current = current;
             done();
         }
 
         return () => stopRaf();
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [pathname, searchParams]);
 
     if (!visible) return null;
 
     return (
         <div
             aria-hidden="true"
             className="fixed left-0 top-0 z-[60] h-[3px] w-full pointer-events-none"
         >
             <div
                 className="h-full bg-primary"
                 style={{
                     width: `${progress}%`,
                     transition:
                         progress >= 100 ? "width 180ms ease" : "width 90ms linear",
                 }}
             />
         </div>
     );
 }
