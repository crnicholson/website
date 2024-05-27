import Hero from "../components/hero";
import Footer from "../components/footer";
import Text from "../components/text";
import Projects from "../components/projects";
import GradientBlur from "../components/gradientBlur";

export default function Home() {
  return (
    <>
      <div className="relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose">
        {/* <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-lg animate-pulse-custom opacity-50 md:w-64 md:h-64"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-lg animate-pulse-custom opacity-50 md:w-48 md:h-48"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full blur-lg animate-pulse-custom opacity-50 md:w-40 md:h-40"></div>
        </div>
         */}
        <Hero />
        <main className="flex justify-center pb-10 pt-20 z-20 relative mt-[150px]">
          <div className="w-5/6 sm:w-3/5">
            <Text
              title="About"
              content={<>
                <p>Hi. My name is Charlie. I am a freshman in high school in the suburbs of Boston. I go by cnicholson or crnicholson online and I aspire to be an electrical engineer. When I{"'"}m not in my bedroom lab, you can find me running and enjoying nature.</p>
              </>}
              name="about"
            />
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
            <h1 className="text-6xl font-bold pb-5 pt-5">Projects</h1>
            <div className="flex flex-wrap justify-center items-center">

              <Projects
                title="StratoSoar"
                name="projects"
                content={<>
                  <p>StratoSoar is a high altitude balloon project that I am working on with a group of students from around the world. We are planning to launch a balloon to the edge of space, with a payload of scientific experiments and sensors. We are currently in the planning and design phase, and are looking for sponsors and partners.</p>
                </>}
              />

              <Projects
                title="StratoSoar"
                name=""
                content={<>
                  <p>StratoSoar is a high altitude balloon project that I am working on with a group of students from around the world. We are planning to launch a balloon to the edge of space, with a payload of scientific experiments and sensors. We are currently in the planning and design phase, and are looking for sponsors and partners.</p>
                </>}
              />

              <Projects
                title="StratoSoar"
                name=""
                content={<>
                  <p>StratoSoar is a high altitude balloon project that I am working on with a group of students from around the world. We are planning to launch a balloon to the edge of space, with a payload of scientific experiments and sensors. We are currently in the planning and design phase, and are looking for sponsors and partners.</p>
                </>}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
