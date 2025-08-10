import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

const components: MDXComponents = {
    a: ({ href, children, ...props }) => {
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className="hover:text-primary/80 underline font-medium transition-colors" {...props}>
                    {children}
                </Link>
            )
        }
        return (
            <a
                href={href}
                className="hover:text-primary/80 underline font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    },

    h1: ({ children, ...props }) => (
        <h1 className=" text-4xl lg:text-6xl mb-6" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }) => (
        <h2 className="text-3xl mb-4 mt-8 font-semibold" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, ...props }) => (
        <h3 className="font-semibold text-xl lg:text-2xl mb-3 mt-6" {...props}>
            {children}
        </h3>
    ),
    // h4: ({ children, ...props }) => (
    //     <h4 className="font-semibold text-lg lg:text-xl mb-2 mt-4" {...props}>
    //         {children}
    //     </h4>
    // ),
    // h5: ({ children, ...props }) => (
    //     <h5 className="font-semibold text-base lg:text-lg mb-2 mt-3" {...props}>
    //         {children}
    //     </h5>
    // ),
    // h6: ({ children, ...props }) => (
    //     <h6 className="font-medium text-sm lg:text-base mb-2 mt-3 text-primary/80" {...props}>
    //         {children}
    //     </h6>
    // ),

    // Paragraphs and text
    p: ({ children, ...props }) => (
        <p className="text-base lg:text-lg mb-4 leading-relaxed text-primary/90" {...props}>
            {children}
        </p>
    ),

    // Lists
    ul: ({ children, ...props }) => (
        <ul className="text-base lg:text-lg mb-4 space-y-2 pl-6" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }) => (
        <ol className="text-base lg:text-lg mb-4 space-y-2 pl-6 list-decimal" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }) => (
        <li className="text-primary/90 leading-relaxed marker:text-primary" {...props}>
            {children}
        </li>
    ),

    // Code blocks and inline code
    pre: ({ children, ...props }) => (
        <pre className="bg-card border-2 border-primary/20 rounded-xl p-4 mb-6 overflow-x-auto text-sm lg:text-base font-mono" {...props}>
            {children}
        </pre>
    ),
    code: ({ children, className, ...props }) => {
        // If it's a code block (has className), render as block
        if (className) {
            return (
                <code className={`${className} text-primary/90`} {...props}>
                    {children}
                </code>
            )
        }
        // Otherwise render as inline code
        return (
            <code className="bg-primary/10 px-2 py-1 rounded-md text-sm font-mono" {...props}>
                {children}
            </code>
        )
    },

    // Blockquotes
    blockquote: ({ children, ...props }) => (
        <blockquote className="border-l-4 border-primary bg-card/50 pl-6 py-4 mb-6 italic text-lg" {...props}>
            {children}
        </blockquote>
    ),

    // Tables
    table: ({ children, ...props }) => (
        <div className="overflow-x-auto mb-6">
            <table className="w-full border-2 border-primary/20 rounded-xl overflow-hidden" {...props}>
                {children}
            </table>
        </div>
    ),
    thead: ({ children, ...props }) => (
        <thead className="bg-primary text-primary" {...props}>
            {children}
        </thead>
    ),
    tbody: ({ children, ...props }) => (
        <tbody className="bg-card" {...props}>
            {children}
        </tbody>
    ),
    tr: ({ children, ...props }) => (
        <tr className="border-b border-primary/10" {...props}>
            {children}
        </tr>
    ),
    th: ({ children, ...props }) => (
        <th className="px-4 py-3 text-left font-semibold" {...props}>
            {children}
        </th>
    ),
    td: ({ children, ...props }) => (
        <td className="px-4 py-3 text-primary/90" {...props}>
            {children}
        </td>
    ),

    // Horizontal rule
    hr: ({ ...props }) => (
        <hr className="border-0 h-0.5 bg-primary/20 my-8 rounded-full" {...props} />
    ),

    // Images
    img: ({ src, alt, ...props }) => (
        <Image
            src={src || ''}
            alt={alt || ''}
            width={800}
            height={600}
            className="rounded-xl border-2 border-primary/20 mb-6 mx-auto shadow-md hover:shadow-lg transition-shadow max-w-full h-auto"
            {...props}
        />
    ),

    // Strong and emphasis
    strong: ({ children, ...props }) => (
        <strong className="font-bold" {...props}>
            {children}
        </strong>
    ),
    em: ({ children, ...props }) => (
        <em className="italic text-primary/90" {...props}>
            {children}
        </em>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}