export default function Badge({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {

    return (
        <a href={href} className={`border border-border bg-card-bg text-sm px-2.5 py-0.5 rounded-full inline-flex items-center ${className}`}>
            {children}
        </a>
    );
}
