import nodemailer from "nodemailer";

export const runtime = "nodejs";

const rateLimit = new Map();

function getClientIp(request) {
    const xf = request.headers.get("x-forwarded-for");
    if (xf) return xf.split(",")[0].trim();
    const xr = request.headers.get("x-real-ip");
    return xr?.trim() || "unknown";
}

function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 60_000;
    const max = 5;
    const entry = rateLimit.get(ip) || { count: 0, resetAt: now + windowMs };

    if (now > entry.resetAt) {
        entry.count = 0;
        entry.resetAt = now + windowMs;
    }

    entry.count += 1;
    rateLimit.set(ip, entry);

    return entry.count <= max;
}

function requiredEnv(name) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env var: ${name}`);
    return v;
}

export async function POST(request) {
    try {
        const ip = getClientIp(request);
        if (!checkRateLimit(ip)) {
            return Response.json(
                { ok: false, error: "Too many requests. Try again shortly." },
                { status: 429 }
            );
        }

        const contentType = request.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
            return Response.json(
                { ok: false, error: "Invalid content type." },
                { status: 415 }
            );
        }

        const body = await request.json();
        const name = (body?.name || "").toString().trim();
        const email = (body?.email || "").toString().trim();
        const message = (body?.message || "").toString().trim();
        const company = (body?.company || "").toString().trim(); // honeypot

        if (company) {
            return Response.json({ ok: true });
        }

        if (!name || !email || !message) {
            return Response.json(
                { ok: false, error: "Please fill out all fields." },
                { status: 400 }
            );
        }

        if (name.length > 120 || email.length > 254 || message.length > 5000) {
            return Response.json(
                { ok: false, error: "Message is too long." },
                { status: 400 }
            );
        }

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            return Response.json(
                { ok: false, error: "Please use a valid email address." },
                { status: 400 }
            );
        }

        const host = requiredEnv("SMTP_HOST");
        const port = Number(requiredEnv("SMTP_PORT"));
        const user = requiredEnv("SMTP_USER");
        const pass = requiredEnv("SMTP_PASS");
        const to = requiredEnv("CONTACT_TO");
        const from = process.env.CONTACT_FROM || to;

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
        });

        const subject = `Portfolio contact: ${name}`;
        const text = `Name: ${name}
Email: ${email}
IP: ${ip}

${message}
`;

        await transporter.sendMail({
            to,
            from,
            replyTo: email,
            subject,
            text,
        });

        return Response.json({ ok: true });
    } catch (err) {
        return Response.json(
            { ok: false, error: "Failed to send message." },
            { status: 500 }
        );
    }
}

