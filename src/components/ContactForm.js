"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm({
    title,
    blurb,
    className = "",
    compact = false,
}) {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        company: "", // honeypot
    });

    const canSend = useMemo(() => {
        return (
            form.name.trim().length > 0 &&
            form.email.trim().length > 0 &&
            form.message.trim().length > 0 &&
            status !== "sending"
        );
    }, [form, status]);

    async function onSubmit(e) {
        e.preventDefault();
        setError("");
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok || data?.ok === false) {
                throw new Error(data?.error || "Something went wrong.");
            }

            setStatus("sent");
            setForm({ name: "", email: "", message: "", company: "" });
        } catch (err) {
            setStatus("error");
            setError(err?.message || "Failed to send message.");
        }
    }

    return (
        <div className={className}>
            {title ? (
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-300 mb-3">
                    {title}
                </p>
            ) : null}

            {blurb ? (
                <p className="text-sm text-neutral-200 mb-4">{blurb}</p>
            ) : null}

            <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-5"}>
                <div className={compact ? "space-y-3" : "grid gap-4 md:grid-cols-2"}>
                    <label className="space-y-1 block">
                        <span
                            className={
                                compact
                                    ? "text-xs font-medium text-neutral-200/90"
                                    : "text-sm font-medium text-neutral-800"
                            }
                        >
                            Name
                        </span>
                        <input
                            value={form.name}
                            onChange={(e) =>
                                setForm((f) => ({ ...f, name: e.target.value }))
                            }
                            autoComplete="name"
                            className={
                                compact
                                    ? "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-pink-400"
                                    : "w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-pink-400"
                            }
                            placeholder="Your name"
                            required
                        />
                    </label>

                    <label className="space-y-1 block">
                        <span
                            className={
                                compact
                                    ? "text-xs font-medium text-neutral-200/90"
                                    : "text-sm font-medium text-neutral-800"
                            }
                        >
                            Email
                        </span>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm((f) => ({ ...f, email: e.target.value }))
                            }
                            autoComplete="email"
                            className={
                                compact
                                    ? "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-pink-400"
                                    : "w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-pink-400"
                            }
                            placeholder="you@example.com"
                            required
                        />
                    </label>
                </div>

                {/* Honeypot field (hidden from humans) */}
                <div className="hidden" aria-hidden="true">
                    <label>
                        Company
                        <input
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.company}
                            onChange={(e) =>
                                setForm((f) => ({
                                    ...f,
                                    company: e.target.value,
                                }))
                            }
                        />
                    </label>
                </div>

                <label className="space-y-1 block">
                    <span
                        className={
                            compact
                                ? "text-xs font-medium text-neutral-200/90"
                                : "text-sm font-medium text-neutral-800"
                        }
                    >
                        Message
                    </span>
                    <textarea
                        value={form.message}
                        onChange={(e) =>
                            setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        rows={compact ? 5 : 6}
                        className={
                            compact
                                ? "w-full resize-y rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-pink-400"
                                : "w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-pink-400"
                        }
                        placeholder="Tell me what you're working on…"
                        required
                    />
                </label>

                <div className="flex flex-col gap-2">
                    <Button type="submit" disabled={!canSend} className={compact ? "w-full" : ""}>
                        {status === "sending" ? "Sending…" : "Send message"}
                    </Button>

                    {status === "sent" ? (
                        <p className={compact ? "text-xs text-green-200" : "text-sm text-green-700"}>
                            Sent! I’ll reply soon.
                        </p>
                    ) : null}
                    {status === "error" ? (
                        <p className={compact ? "text-xs text-red-200" : "text-sm text-red-700"}>
                            {error}
                        </p>
                    ) : null}
                </div>
            </form>
        </div>
    );
}

