import Hero from "../components/hero";
import Footer from "../components/footer";
import Text from "../components/text";
import Project from "../components/projects";
import GradientBlur from "../components/gradientBlur";
import Slider from "../components/slider";
import Box from "../components/box";
import Button from "../components/button";

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
                <p>Hi. My name is Charlie. I am a freshman in high school in the suburbs of Boston. I go by cnicholson or crnicholson online and I aspire to be an electrical engineer. When I{"'"}m not in my bedroom lab coding and tinkering, you can find me running and enjoying nature. <a className="underline hover:text-gray-600" href="/about">Here{"'"}s more about me.</a></p>
              </>}
              name="about"
            />
            <div className="flex flex-row justify-center">
              <Button
                href="https://github.com/crnicholson"
                text="GitHub"
                wiggle="wiggle-one-button"
              />
              <Button
                href="https://www.youtube.com/@charlienicholsonr?sub_confirmation=1"
                text="YouTube"
                wiggle="wiggle-three-button"
              />
              <Button
                href="https://www.qrz.com/db/KC1SFR"
                text="QRZ Page"
                wiggle="wiggle-two-button"
              />
              <Button
                href="https://linktr.ee/charlienicholson"
                text="LinkTree"
                wiggle="wiggle-three-button"
              />
              <Button
                href="https://www.venmo.com/u/CharlieNicholsonR"
                text="Support Me"
                wiggle="wiggle-one-button"
              />
            </div>
            <Text
              title="Contact"
              content={<>
                <p>If you want to ask a question, discuss a partnership, or just say hi, drop me an email at <a className="underline hover:text-gray-600" href="mailto:charlienicholsonr@gmail.com">charlienicholsonr@gmail.com</a></p>
              </>}
              name="contact"
            />
            <Text
              title="Projects"
              content={<>
                <p>Here are some of the projects I{"'"}ve worked on. If you want to see more, head over to <a href="/more" className="underline hover:text-color-gray-600">this page.</a></p>
              </>}
              name="contact"
            />
            <div className="flex flex-wrap justify-center items-center">
              <Project
                title="StratoSoar"
                name=""
                image="boardIRL.png"
                alt="PCB"
                url="https://github.com/crnicholson/StratoSoar-MK2"
                content={<>
                  <p>StratoSoar is a low-power, adaptive Unmanned Aerial Vehicle (UAV), designed to be dropped from a weather balloon at approximately 10,000 feet of altitude. The main goal of StratoSoar is to fly from Point A to Point B without human interaction. GPS coordinates are selected in programming, and the glider navigates there in an efficient manner. Click to learn more.</p>
                </>}
              />
              <Project
                title="StratoSoar"
                name=""
                url=""
                image=""
                alt=""
                content={<>
                  <p>StratoSoar is a high altitude balloon project that I am working on with a group of students from around the world. We are planning to launch a balloon to the edge of space, with a payload of scientific experiments and sensors. We are currently in the planning and design phase, and are looking for sponsors and partners.</p>
                </>}
              />
              <Project
                title="StratoSoar"
                name=""
                url=""
                image=""
                alt=""
                content={<>
                  <p>StratoSoar is a high altitude balloon project that I am working on with a group of students from around the world. We are planning to launch a balloon to the edge of space, with a payload of scientific experiments and sensors. We are currently in the planning and design phase, and are looking for sponsors and partners.</p>
                </>}
              />
            </div>
          </div>
        </main>
        <Slider />
        <Footer />
      </div>
    </>
  );
}
