import Image from "next/image";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import ProjImgCarousel from "./ProjImgCarousel";

export default function ProjectCard({ project }) {
    const {
        title,
        description,
        longDescription,
        images,
        technologies,
        githubUrl,
        liveUrl,
        category,
    } = project;

    return (
        <Card className="w-full hover:shadow-lg transition-shadow pt-0 flex flex-col max-h-[600px]
        ">
            {images && images.length > 0 && (
                <div className="relative w-full h-48 overflow-hidden rounded-t-xl flex-shrink-0">
                    <ProjImgCarousel imagesProp={images} />
                </div>
            )}
            <CardHeader className="flex-shrink-0">
                <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
                {description && (
                    <CardDescription className="line-clamp-1">
                        {description}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden flex flex-col">
                {longDescription && (
                    <p className="text-sm mb-4 line-clamp-3">
                        {longDescription}
                    </p>
                )}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex gap-2">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        GitHub
                    </a>
                )}
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Live Demo
                    </a>
                )}
            </CardFooter>
        </Card>
    );
}
