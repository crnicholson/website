import Link from "next/link";

interface ButtonProps {
    href: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type: string;
}

export default function Button({ href, className, onClick, children, type }: ButtonProps) {
    if (type == "button") {
        return (
            <button
                className={`font-semibold relative p-3 border text-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    } else {
        return (
            <Link
                href={href}
                className={`font-semibold relative p-3 border text-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 block break-words whitespace-normal text-wrap ${className}`}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }
}
