// src/app/not-found.jsx
export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
            <p className="mb-6 max-w-md text-neutral-500">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800 transition"
            >
                Go back home
            </a>
        </main>
    );
}
