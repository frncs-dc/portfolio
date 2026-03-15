import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-10 border-t bg-[#ec4899] py-6 text-sm text-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <p className="font-medium">Frances Dela Cruz</p>
                    <p className="text-white/80">
                        Developer &amp; designer crafting human-centered digital
                        experiences.
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                    <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="/projects" className="hover:underline">
                            Projects
                        </Link>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex flex-col gap-2 text-white/90">
                        <a
                            href="mailto:delacruzfrancesjulianne@gmail.com"
                            className="hover:underline"
                        >
                            delacruzfrancesjulianne@gmail.com
                        </a>
                        <a href="tel:+639761949607" className="hover:underline">
                            +63 976 194 9607
                        </a>
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/frances-delacruz"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/frncs-dc"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
