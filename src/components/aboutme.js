import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutMe() {
    return (
        <section className="relative z-10 my-24 flex justify-center">
            <div className="flex w-full max-w-5xl flex-col gap-10">
                <div className="space-y-4">
                    <h2 className="text-3xl mb-4 font-semibold tracking-tight sm:text-4xl">
                        About Me
                    </h2>
                    <Card className="shadow-sm">
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
                                production, with a strong interest in
                                Human-Computer Interaction and
                                conversion-focused design.
                            </p>
                            <p>
                                With hands-on experience integrating marketing
                                and SEO strategies, she creates websites
                                optimized for visibility, performance, and
                                results. She graduated Cum Laude with a BS in
                                Computer Science (Software Technology) from De
                                La Salle University.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
