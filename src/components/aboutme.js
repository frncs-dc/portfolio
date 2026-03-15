import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutMe() {
    return (
        <section className="relative z-10 my-24 flex justify-center px-4 text-black">
            <div className="flex w-full max-w-5xl flex-col gap-8">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        About Me
                    </h2>
                    <p className="mt-2 max-w-2xl text-base">
                        A bit about my background, how I approach my work, and
                        what I care about when building digital experiences.
                    </p>
                </div>

                <Card className="shadow-sm border border-black/10">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-semibold">
                            Developer &amp; Designer
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 leading-relaxed">
                        <p>
                            Frances Julianne Dela Cruz is a developer and
                            designer passionate about blending art and
                            technology. She builds websites from concept to
                            production, with a strong interest in Human-Computer
                            Interaction and conversion-focused design.
                        </p>
                        <p>
                            With hands-on experience integrating marketing and
                            SEO strategies, she creates websites optimized for
                            visibility, performance, and results. She graduated
                            Cum Laude with a BS in Computer Science (Software
                            Technology) from De La Salle University.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
