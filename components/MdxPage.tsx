import { Metadata } from 'next';
import StyledLink from '@/components/styledLink';
import Link from 'next/link';
import Footer from '@/components/footer';

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
        <>
            <div className="hidden md:visible z-50 md:flex items-center justify-between border-b border-border h-16 w-full px-4 sm:px-6 lg:px-8">
                <Link href="/" className="font-[tiempos] text-lg">charlie nicholson</Link>
                <div className="flex gap-4">
                    <Link className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg" href="/#projects">Projects</Link>
                    {/* <Link className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg" href="/#achievements">Achievements</Link>
                    <Link className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg" href="/#skills">Skills</Link>
                    <Link className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg" href="/#experiences">Experiences</Link> */}
                </div>
            </div>
            <div className="flex flex-col min-h-screen md:-mt-16 pt-30 w-full z-10 items-center justify-between">
                {/* {showBackLink && (
                        <StyledLink href={backHref} className="inline-flex mb-14">
                            {backText}
                        </StyledLink>
                    )} */}

                <div className="w-2/3 px-20">
                    {children}
                </div>

                <Footer />
            </div>
        </>
    );
}

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
