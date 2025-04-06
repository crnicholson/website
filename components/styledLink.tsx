import Link from "next/link";

interface StyledLinkProps {
    href?: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function StyledLink({ href, className, onClick, children }: StyledLinkProps) {

    if (href) {
        return (
            <Link
                href={href}
                className={`underline decoration-accent text-light hover:text-link-hover ${className}`}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <a
                className={`underline decoration-accent text-light hover:text-link-hover ${className}`}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }
}