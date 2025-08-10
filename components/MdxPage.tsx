import { Metadata } from 'next';
import Link from 'next/link';

interface MdxPageProps {
    children: React.ReactNode;
    backHref?: string;
    backText?: string;
    showBackLink?: boolean;
}

export default function MdxPage({
    children,
    backHref = "/",
    backText = "← Back to Home",
    showBackLink = true
}: MdxPageProps) {
    return (
        <div className="min-h-screen px-4 lg:px-20 py-20">
            <div className="max-w-4xl mx-auto">
                {showBackLink && (
                    <Link href={backHref} className="inline-flex items-center hover:underline mb-8">
                        {backText}
                    </Link>
                )}

                {children}
            </div>
        </div>
    );
}

// Export a helper function to generate metadata for MDX pages
export function createMdxMetadata({
    title,
    description
}: {
    title?: string;
    description?: string;
}): Metadata {
    return {
        title: title || 'Blog Post',
        description: description || 'A blog post on my website',
    };
}
