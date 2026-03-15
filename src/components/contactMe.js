"use client";

import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export default function ContactMe() {
    return (
        <section id="contact" className="relative z-10 py-16 flex flex-row">
            <div className="flex-1 flex flex-col gap-4">
                <div className="text-4xl font-bold w-full">Contact Me</div>
                <p className="text-lg text-neutral-500 mb-4">
                    I'm always looking for new opportunities to work on exciting
                    projects. If you have a project in mind, or just want to say
                    hello, feel free to contact me.
                </p>
                {/* Email and Phone Number */}
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-bold">Email</p>
                        <p className="text-lg text-neutral-500">
                            delacruzfrancesjulianne@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-bold">Phone</p>
                        <p className="text-lg text-neutral-500">
                            +63 917 123 4567
                        </p>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-row gap-4">
                    <Button
                        variant="default"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/frances-dela-cruz-78a217239/",
                                "_blank",
                            )
                        }
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="default"
                        onClick={() =>
                            window.open("https://github.com/frncs-dc", "_blank")
                        }
                    >
                        GitHub
                    </Button>
                </div>
            </div>

            <div
                className="flex-1 max-w-2xl rounded-3xl 
            bg-white/95 border border-neutral-200 shadow-sm p-6 md:p-10"
            >
                <ContactForm />
            </div>
        </section>
    );
}
