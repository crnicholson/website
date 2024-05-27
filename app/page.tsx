import Hero from "../components/hero";
import Footer from "../components/footer";
import Text from "../components/text";
import Projects from "../components/projects";

export default function Home() {
  return (
    <>
      <div className="font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose">
        <Hero />
        <main className="flex justify-center pb-10 pt-20 z-20 relative mt-[150px]">
          <div className="w-3/5 sm:w-5/6">
            <Text
              title="About"
              content={<>
                <p>Hi. My name is Charlie. I am a freshman in high school in the suburbs of Boston. I go by cnicholson or crnicholson online and I aspire to be an electrical engineer. When I'm not in my bedroom lab, you can find me running and enjoying nature.</p>
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
