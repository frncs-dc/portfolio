import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Project({ project }) {
    const { title, description, images } = project;
    const mainImage = images?.[0];

    return (
        <Card className="group h-full flex flex-col overflow-hidden py-0 border border-border/60 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            {mainImage && (
                <div className="relative w-full h-56 md:h-64 overflow-hidden">
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />
                </div>
            )}

            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold tracking-tight">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
                {description && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {description}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
