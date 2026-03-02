import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
export default function ProjCategoryButton({
    children,
    asChild,
    onClick,
    ...props
}) {
    return (
        <Button
            className="bg-[#ffb6c1] text-black
            z-50
            p-2 rounded-xl shadow-lg
            hover:shadow-lg hover:shadow-[#ffb6c1]/30
            hover:!bg-white
            hover:scale-105 transition-all duration-300
            hover:border-2 hover:border-[#ffb6c1]
            hover:text-black
            flex items-center justify-center"
            asChild={asChild}
            {...props}
            onClick={onClick}
        >
            {asChild ? (
                children
            ) : (
                <>
                    {children}
                    <ArrowRightIcon className="w-4 h-4" />
                </>
            )}
        </Button>
    );
}
