import React, { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-card-bg shadow-md border border-border mx-4 rounded-xl"
                : "bg-transparent mx-4"
                }`}
        >
            <div className="max-w-8xl p-6 h-16 flex items-center justify-between">
                {children}
            </div>
        </div>
    );
};

export function HeaderLogo({ href, className, children }: HeaderProps) {
    return (
        <Link href={href} className={`text-xl font-semibold ${className}`}>
            {children}
        </Link>
    );
}

export function HeaderNav({ href, className, children }: HeaderProps) {
    return (
        <div className="flex flex-row gap-3 items-center justify-center w-fit h-full">{children}</div>
    );
}

