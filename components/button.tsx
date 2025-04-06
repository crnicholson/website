import Link from "next/link";

interface ButtonProps {
    href: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type: string;
}

export default function Button(ButtonProps) {
    if (ButtonProps.type == "button") {
        return (
            <button
                className={`font-semibold relative p-3 border-1 border text-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 ${ButtonProps.className}`}
                onClick={ButtonProps.onClick}
            >
                {ButtonProps.children}
            </button>
        );
    } else {
        return (
            <Link
                href={ButtonProps.href}
                className={`font-semibold relative p-3 border-1 border text-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 block break-words whitespace-normal text-wrap ${ButtonProps.className}`}
                onClick={ButtonProps.onClick}
            >
                {ButtonProps.children}
            </Link>
        );
    }
}
