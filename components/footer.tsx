export default function Footer() {
    return (
        <>
            {/* <div className="relative w-full overflow-hidden blur-xl">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M-2.00,49.98 C150.00,150.00 349.20,-50.00 501.00,51.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'url(#gradient)' }}></path>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#0d1b2a', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#3a1c71', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative flex flex-col justify-center items-center p-10 h-[100px] w-full z-20 mt-[-150px] text-[#e0e1dd]">
                <p>Made with Next.js. Hosted by Vercel. Licensed under MIT.</p>
                <p>© 2024 Charles Nicholson.</p>
            </div> */}
            
            <div className="p-5 flex flex-col justify-center items-center bg-transparent text-gray-600 text-sm">
                <p>Made with Next.js. Hosted by Vercel. Licensed under MIT. © 2024 Charles Nicholson.</p>
                
            </div>
        </>
    );
};