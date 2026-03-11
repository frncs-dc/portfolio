"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactMe() {
    return (
        <section
            id="contact"
            className="relative z-10 py-16 flex flex-col items-center"
        >
            <div className="text-4xl text-center font-bold w-full">
                Contact Me
            </div>

            <div className="mt-8 w-full max-w-2xl rounded-3xl bg-white/95 border border-neutral-200 shadow-sm p-6 md:p-10">
                <ContactForm />
            </div>
        </section>
    );
}
