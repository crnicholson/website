import React from "react";
import Image from "next/image";

interface CardProps {
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    className?: string;
    size?: number;
    inputName?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    max?: number;
    onKeyDown?: (e) => void;
    onScroll?: (e) => void;
}

export function Card({ children, className, onMouseEnter, onMouseLeave }: CardProps) {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`border border-border bg-card-bg rounded-xl p-5 shadow-lg w-fit ${className}`}>
            {children}
        </div>
    );
}

export function CardImage({ src = "", alt = "", className }: CardProps) {
    return (
        <div className={`w-full flex justify-center mb-5 ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="object-cover rounded-xl"
            />
        </div>
    );
}

export function CardTitle({ size = 1, children, className }: CardProps) {
    const sizeClasses = {
        1: "text-lg",
        2: "text-xl",
        3: "text-2xl",
        4: "text-3xl",
    };
    const textSize = sizeClasses[size] || "text-lg";

    return <h1 className={`mb-2 font-[tiempos] ${textSize} ${className}`}>{children}</h1>;
}

export function CardContent({ children, className }: CardProps) {
    return <div className={`mb-3 ${className}`}>{children}</div>;
}

export function CardContainer({ children, className }: CardProps) {
    return (
        <div className={`flex flex-col sm:flex-row justify-center px-5 gap-5 sm:w-3/4 lg:w-2/3 xl:w-1/2 w-full ${className}`}>
            {children}
        </div>
    );
}

export function CardRow({ children, className }: CardProps) {
    return (
        <div className={`flex flex-row justify-center gap-3 w-full ${className}`}>
            {children}
        </div>
    );
}

export function CardInput({ placeholder, value, onChange, className, type, max = 100000, onKeyDown }: CardProps) {
    return (
        <div className={`${className}`}>
            <input
                type={type === "" ? "text" : type}
                className="w-full p-3 border border-border rounded-xl hover:ring-2 hover:ring-accent hover:outline-none focus:outline-none focus:ring-2 focus:ring-accent bg-bg"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                maxLength={max}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}

export function CardBlock({ children, className, onScroll }: CardProps) {
    return (
        <div onScroll={onScroll} className={`mb-4 ${className}`}>
            {children}
        </div>
    );
}

export function CardSubtitle({ children, className }: CardProps) {
    return <p className={`font-semibold ${className}`}>{children}</p>;
}

export function CardButton({ children, onClick, className }: CardProps) {
    return (
        <div className={`${className}`}>
            <button
                className={`w-full font-semibold whitespace-nowrap border border-border shadow-lg bg-none rounded-xl p-3 hover:scale-105 transition-transform duration-200 ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export function CardInputError({ children, className }: CardProps) {
    return (
        <>
            {children && (
                <div className={`text-red-400 mt-2 flex flex-row items-center gap-1 ${className}`}>
                    <span className="material-symbols-outlined">
                        error
                    </span>
                    {children}
                </div>
            )}
        </>
    );
}