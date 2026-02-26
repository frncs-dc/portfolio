import { Button as ShadButton } from "@/components/ui/button";

export default function Button({ children, onClick, ...props }) {
    return (
        <ShadButton
            className="bg-[#ffb6c1] text-black
            p-2 rounded-xl shadow-lg
            hover:shadow-lg hover:shadow-[#ffb6c1]/30
            hover:bg-[#ffb6c1]/90
            hover:scale-105 transition-all duration-300
            flex items-center justify-center"
            {...props}
            onClick={onClick}
        >
            {children}
        </ShadButton>
    );
}
