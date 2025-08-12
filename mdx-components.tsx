
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';
import MdxImage from './components/MdxImage';
import Badge from './components/badge';
import { Card } from './components/card';

const components: MDXComponents = {
    a: ({ href, children, ...props }) => {
        if (href?.startsWith('/')) {
            return (
                <Link
                    href={href}
                    className="decoration-accent text-light hover:text-link-hover "
                    {...props}
                >
                    {children}
                </Link>
            );
        }
        return (
            <a
                href={href}
                className="decoration-accent text-light hover:text-link-hover"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    },

    h1: ({ children, ...props }) => (
        <h1 className="font-[tiempos] text-4xl mb-10" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }) => (
        <h2 className="font-[tiempos] text-3xl mb-6 mt-10" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, ...props }) => (
        <h3 className="font-[tiempos] text-2xl mb-5 mt-9" {...props}>
            {children}
        </h3>
    ),

    p: ({ children, ...props }) => (
        <p className="mb-5" {...props}>
            {children}
        </p>
    ),

    ul: ({ children, ...props }) => (
        <ul className="mb-4 space-y-2 pl-6 list-disc" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }) => (
        <ol className="mb-4 space-y-2 pl-6 list-decimal" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }) => (
        <li className="leading-relaxed" {...props}>
            {children}
        </li>
    ),

    // pre: ({ children, ...props }) => (
    //     <pre className="bg-card border-2 border-accent/30 rounded-xl p-4 mb-8 overflow-x-auto text-sm md:text-base font-mono shadow-md" {...props}>
    //         {children}
    //     </pre>
    // ),
    // code: ({ children, className, ...props }) => {
    //     if (className) {
    //         return (
    //             <code className={`${className} text-accent bg-card/60 px-2 py-1 rounded-md`} {...props}>
    //                 {children}
    //             </code>
    //         );
    //     }
    //     return (
    //         <code className="bg-accent/10 px-2 py-1 rounded-md text-sm font-mono text-accent" {...props}>
    //             {children}
    //         </code>
    //     );
    // },

    blockquote: ({ children, ...props }) => (
        <blockquote className="border-l-4 border-gray-200 pl-6 py-4 mb-8 italic text-sm block [&>p]:m-0" {...props}>
            {children}
        </blockquote>
    ),

    // table: ({ children, ...props }) => (
    //     <div className="overflow-x-auto mb-8">
    //         <table className="w-full border-2 border-accent/30 rounded-xl overflow-hidden bg-card" {...props}>
    //             {children}
    //         </table>
    //     </div>
    // ),
    // thead: ({ children, ...props }) => (
    //     <thead className="bg-accent/20 text-primary" {...props}>
    //         {children}
    //     </thead>
    // ),
    // tbody: ({ children, ...props }) => (
    //     <tbody className="bg-card" {...props}>
    //         {children}
    //     </tbody>
    // ),
    // tr: ({ children, ...props }) => (
    //     <tr className="border-b border-accent/10" {...props}>
    //         {children}
    //     </tr>
    // ),
    // th: ({ children, ...props }) => (
    //     <th className="px-4 py-3 text-left font-semibold text-accent" {...props}>
    //         {children}
    //     </th>
    // ),
    // td: ({ children, ...props }) => (
    //     <td className="px-4 py-3 text-primary/90" {...props}>
    //         {children}
    //     </td>
    // ),

    // hr: ({ ...props }) => (
    //     <hr className="border-0 h-1 bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 my-10 rounded-full" {...props} />
    // ),

    MdxImage: MdxImage,

    strong: ({ children, ...props }) => (
        <strong className="font-bold" {...props}>
            {children}
        </strong>
    ),
    em: ({ children, ...props }) => (
        <em className="italic" {...props}>
            {children}
        </em>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}