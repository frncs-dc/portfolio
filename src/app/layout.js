import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import TopLoadingBar from "@/components/TopLoadingBar";
import { Suspense } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Frances Dela Cruz | Portfolio",
    description: "Portfolio of Frances Dela Cruz - Developer and Designer",
    keywords: [
        "Frances Dela Cruz",
        "Developer",
        "Designer",
        "Portfolio",
        "Web Development",
        "UI/UX Design",
        "UI/UX Research",
        "UI/UX Prototyping",
        "AI-Assisted Development",
    ],
    authors: [
        {
            name: "Frances Dela Cruz",
            url: "https://portfolio-frances-delacruz.vercel.app/",
        },
    ],
    creator: "Frances Dela Cruz",
    publisher: "Frances Dela Cruz",
    openGraph: {
        title: "Frances Dela Cruz | Portfolio",
        description: "Portfolio of Frances Dela Cruz - Developer and Designer",
        url: "https://portfolio-frances-delacruz.vercel.app/",
        siteName: "Frances Dela Cruz | Portfolio",
        images: [
            {
                url: "/favicon.ico",
            },
        ],
    },
    robots: "index, follow",
    alternates: {
        canonical: "https://portfolio-frances-delacruz.vercel.app/",
    },
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="1M-7uNNBKsFTvMrMcV7vR-lDzg9MxD4fVUXzEhbhrAw"
                />
                <link rel="icon" href="/favicon_io/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    href="/favicon_io/apple-touch-icon.png"
                />
                <link rel="manifest" href="/favicon_io/site.webmanifest" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Suspense fallback={null}>
                    <TopLoadingBar />
                </Suspense>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
