import Image from 'next/image';
import React from 'react';

interface MdxImageProps extends React.ComponentProps<typeof Image> {
    // APA citation parts
    author?: string;
    date?: string;
    workTitle?: string; // Title of the work (e.g., image, article, etc.)
    description?: string;
    source?: string; // Source (e.g., website, journal, publisher)
    link?: string;
    title?: string;
    // fallback for legacy usage
    citation?: string;
}

const MdxImage: React.FC<MdxImageProps> = ({
    author,
    date,
    workTitle,
    description,
    source,
    link,
    title,
    citation,
    alt,
    ...props
}) => {
    // Compose APA citation if parts are provided
    const hasApaCitation = author || date || workTitle || description || source || link;
    const apaCitation = hasApaCitation
        ? (
            <>
                {author && <span>{author}</span>}
                {author && date && <span> </span>}
                {date && <span>({date}).</span>}
                {(author || date) && (workTitle || description || source || link) ? ' ' : ''}
                {workTitle && <span><i>{workTitle}</i>. </span>}
                {description && <span>{description}. </span>}
                {source && <span>{source}. </span>}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
                        {link}
                    </a>
                )}
            </>
        ) : null;

    return (
        <figure className="w-full flex flex-col items-start mb-5">
            {title && (
                <figcaption className="mb-2 font-[tiempos] font-semibold text-light">{title}</figcaption>
            )}
            <Image alt={alt || ''} {...props} />
            {(apaCitation || citation) && (
                <figcaption className="mt-2 text-xs text-light italic break-words break-all whitespace-pre-line">
                    {apaCitation || citation}
                </figcaption>
            )}
        </figure>
    );
};

export default MdxImage;
