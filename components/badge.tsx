export default function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`border border-border text-sm px-2.5 py-0.5 rounded-full inline-flex items-center ${className}`}>
            {children}
        </span>
    );
}
