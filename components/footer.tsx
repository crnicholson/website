export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <div className="z-0 mt-5 px-5 pb-5 flex flex-col justify-center items-center bg-transparent text-gray-600 text-sm">
                <p>Made with Next.js. Hosted by Vercel <a className="underline hover:text-black" href="https://github.com/crnicholson/website">and on GitHub</a>. Licensed under MIT. © {year} Charles Nicholson.</p>
            </div>
        </>
    );
};