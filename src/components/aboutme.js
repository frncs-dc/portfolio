import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutMe() {
    return (
        <section className="relative z-10 min-h-40 flex flex-col justify-center items-center">
            <div className="text-4xl text-left font-bold w-full">About Me</div>
            <div className="flex flex-row gap-4">
                <div className="flex-1">{/* picture here */}</div>
                <div className="flex-2 flex flex-col gap-4">
                    <Card>
                        <CardContent>
                            I’m Frances Julianne Dela Cruz, a developer and
                            designer fueled by the fusion of art and technology.
                            I love making websites from planning to production.
                            I have an interest in Human Computer Interaction.
                            And because of my experience, I learned firsthand
                            how to incorporate Marketing and SEO into a website
                            that’s designed for conversions.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li>De La Salle University</li>
                                <li>
                                    BS Computer Science Major in Software
                                    Technology, Manila
                                </li>
                                <li>October 2021 – February 2026</li>
                                <li>Consistent Dean’s Lister (CGPA: 3.514)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
