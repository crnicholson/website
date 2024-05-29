import Text from '../../components/text';

export default function About() {
    return (
        <>
            <main className="flex justify-center pb-10 pt-20 z-20 relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose h-fit md:h-full">
                <div className="w-5/6 sm:w-3/5">
                    <a className="underline hover:text-gray-600" href="/">← Back to home page.</a>
                    <Text
                        title="My Story"
                        content={<>
                            <p>I started in the world of electronics when I was 10, in the pandemic. My cousin gave me an Arduino kit from his school and I was hooked. I started with the basics, blinking an LED, and moved to more complex projects like an obstacle avoiding robot with a mop {"("}a Mopra!{")"}</p>
                            <br></br>
                            <p>Of course, it went off from there. I now am smarter and have done many projects, partnering with organizations and professional engineers. I have since branched out to other areas, including mechanical engineering and computer science.</p>
                        </>}
                        name="story"
                    />
                    <Text
                        title="Skills"
                        content={<>
                            <p>I am well versed for my age, with interest and knowledge in many subjects.</p>
                            <br></br>
                            <li>Electronics: KiCAD, AVR, ARM, RF, Arduino, RPi, test equipment</li>
                            <li>Programming: C++, Python</li>
                            <li>Mechanical Engineering: Fusion 360, Simscale</li>
                            <li>Front End Web Design: Next.js, HTML, CSS, Figma</li>
                            <li>Fabrication: 3D printing, CNCs, laser cutter, handtools</li>
                            <li>Frameworks/Tools: GitHub, Git, Vercel</li>
                            <li>Other: business management, public speaking</li>
                        </>}
                        name="skills"
                    />
                </div>
            </main>
        </>
    );
};