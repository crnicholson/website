import Text from '../../components/text';
import Footer from '../../components/footer';

export default function About() {
    return (
        <>
            <div className="font-[rubik] bg-[#03161F] text-[#BDBDBD]  sm:h-screen h-fit prose">
                <main className="flex justify-center pb-10 pt-20 z-20 relative sm:h-full h-fit">
                    <div className="w-5/6 sm:w-4/5">
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
                                <li>Electronics: KiCAD, AVR, ARM, RF, Arduino, RPi, test equipment.</li>
                                <li>Programming: C++, Python.</li>
                                <li>Mechanical Engineering: Fusion 360, Simscale.</li>
                                <li>Front End Web Design: Next.js, HTML, CSS, Figma.</li>
                                <li>Fabrication: 3D printing, CNCs, laser cutter, handtools.</li>
                                <li>Frameworks/Tools: GitHub, Git, Vercel.</li>
                                <li>Other: business management, public speaking.</li>
                            </>}
                            name="skills"
                        />
                    </div>
                </main>
                <div className="md:-mt-[60px] -mt-[0px]">
                    <Footer />
                </div>
            </div>
        </>
    );
};