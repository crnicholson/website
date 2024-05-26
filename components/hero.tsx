export default function Hero() {
    return (
        <div className="relative bg-[#e0e1dd] font-[heming]">
            <div id="slash" className="ml-[-600px] absolute z-0 h-[100vh] w-[83vw] bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 rotate-3 filter blur-lg" style={{ background: 'linear-gradient(60deg, #ff9e00, #ff165d, #ff38ef, #3a1c71, #d76d77, #ffaf7b)' }}></div>
            <div className="relative z-10 h-screen flex flex-col px-10">
                <div className="h-[10%]"></div>
                <div className="h-[80%] flex flex-col justify-center items-center text-center">
                    {/* <h1 className="sm:text-8xl text-5xl font-bold  text-[#e0e1dd]">
                        Hi. I{"'"}m Charlie Nicholson.
                    </h1> */}
                    <h1 className="sm:text-8xl text-6xl font-bold text-[#0d1b2a]">
                        Hi. I{"'"}m Charlie Nicholson.
                    </h1>
                    <p className="text-2xl font-light text-[#0d1b2a]">
                        I{"'"}m an engineer of all sorts.
                    </p>
                </div>
                <div className="h-[10%] flex flex-col justify-center items-center">
                    <a href="#about" className="bottom-5 italic font-light underline decoration-dotted hover:decoration-solid text-white">
                        Psst! There{"'"}s more.
                    </a>
                </div>
            </div>
        </div>
    );
}