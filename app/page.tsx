import React from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Text from "../components/text";
import Slider from "../components/slider";
import Button from "../components/button";
import Project from "../components/moreProjects";

export default function Home() {
  return (
    <>
      <div className="relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose">
        <Hero />
        <main className="flex justify-center pb-10 pt-20 z-20 relative mt-[150px]">
          <div className="w-5/6 sm:w-3/5">
            <Text
              title="Charlie Nicholson"
              content={<>
                <a className="underline hover:text-gray-600" target="_blank" href="mailto:charlienicholsonr@gmail.com">charlienicholsonr@gmail.com</a>
                <br></br>
                <br></br>
                <p>Hi. My name is Charlie. I am a freshman in high school in the suburbs of Boston. I go by cnicholson or crnicholson online and I aspire to be an electrical engineer. When I{"'"}m not in my bedroom lab coding and tinkering, you can find me running and enjoying nature. <a className="underline hover:text-gray-600" target="_blank" href="/about">Here{"'"}s more about me.</a></p>
              </>}
              name="about"
            />
            <div className="flex flex-wrap gap-5 mb-5 justify-center">
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
              title="Accomplishments"
              content={<>
                <li>First place winner of the 2023 Beantown Bash Hackathon.</li>
                <li>First place winner of the 2023 Wayland Science Fair.</li>
                <li>Ham Radio Extra Class Licensee.</li>
                <li>Presenter and author of two talks at the North East HamXposition.</li>
                <li>Owner of a successful woodworking business.</li>
              </>}
              name="awards"
            />
            <Text
              title="Experiences"
              content={<>
                <li>Volunteer IT director for New England Sci-Tech.</li>
                <li>Soldering kit and circuit board designer for New England Sci-Tech.</li>
                <li>Member of the youth subcommittee for the North East HamXposition.</li>
              </>}
              name="experiences"
            />
            <Text
              title="Projects"
              content={<>
                <p>Here are some of the projects I{"'"}ve worked on. If you want to see some of my PCB projects, head over to <a target="_blank" href="/pcb" className="underline hover:text-gray-600">this page.</a></p>
              </>}
              name="contact"
            />
            <div className="flex flex-wrap justify-center items-center">
              <Project
                content="StratoSoar is a high-altitude Unmanned Autonomous Vehicle (UAV), capable of flying to selected coordinates. It is designed to be dropped from a weather balloon at 10,000 feet of altitude."
                image="board.png"
                title="StratoSoar MK2"
                date="2023-"
                name="StratoSoar"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://www.github.com/crnicholson/StratoSoar-MK2"
              />
              <Project
                content="This carbon capture project is a DIY carbon capture machine that removes CO2 from the atmosphere. It was a summer project between seventh and eighth grade and I learned tons."
                image="ccProject.jpeg"
                title="Carbon Capture"
                date="2023"
                name="Carbon Capture"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://nicholsonlabs.gitbook.io/labs/carbon-capture"
              />
              <Project
                content="This was a project in conjunction with Hack Club that gave youth ham radios if they got their license. I was the co-founder and I spearheaded web design along with the curriculum, planning and organization."
                image="hamclub.png"
                title="Ham Club"
                date="2024"
                name="Ham Club"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://ham.hackclub.com/"
              />
              <Project
                content="This website was created to showcase my projects and to give a little bit of information about me. It was created using Next.js and Tailwind CSS."
                image="website.png"
                title="Personal Website"
                date="2024"
                name="Personal Website"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="/"
              />
              <Project
                content="This was my first attempt of making a high-altitude UAV. It was a great learning experience and I learned a lot about the process of making a UAV, although it was not successful."
                image="oldStratoSoarEE.jpeg"
                title="StratoSoar MK1"
                date="2022-2023"
                name="StratoSoar MK1"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://github.com/crnicholson/StratoSoar-MK1"
              />
              <Project
                content="This was an OpenCV resistor value finder that utilized complex mathematics to find the value of the resistor being held up to the webcam."
                image="beantown.jpeg"
                title="OpenCV Resistor Value Finder"
                date="2023"
                name="OpenCV Resistor Value Finder"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://github.com/maxsrobotics/resistorfinder"
              />
              <Project
                content="I was working with (and hopefully will be in the future) silicone and custom 3D printed molds to make simple but functional soft robotics interfaces. Additionally, I was working with origami and bioplastic to make a biodegradable and compostable soft robotics interface."
                image="softRobot.jpeg"
                title="Soft Robotics"
                date="2023"
                name="Soft Robotics"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="/"
              />
              <Project
                content="Better BOM takes your current schematic design - without part numbers - and finds the cheapest option available at the same time editing your schematic, all automatically."
                image="softRobot.jpeg"
                title="Better BOM"
                date="2024"
                name="Better BOM"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://github.com/crnicholson/betterBOM"
              />
              <Project
                content="This was my first ever website, created only using vanilla JS, CSS, and HTML (yikes)! It calculate the carbon emissions of road trips and the number of trees needed to offset it."
                image="coodos.png"
                title="Coodos"
                date="2021"
                name="Coodos"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://coodos.w3spaces.com/"
              />
              <Project
                content="This was a website I created with Next.js and Tailwind for Hack Club's Amateur Radio Club."
                image="hcarc.png"
                title="HCARC"
                date="2024"
                name="HCARC"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://hcarc.vercel.app/"
              />
              <Project
                content="LittleLoRa is GPS tracker intended to track gliders or high altitude balloons from long distances using minimal power. LittleLoRa is the companion project of StratoSoar and is very much a WIP."
                image="littleLoRa.png"
                title="LitteLoRa"
                date="2023-"
                name="LittleLoRa"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://github.com/crnicholson/LittleLoRa"
              />
              <Project
                content="This cutdown mechanism was designed to release StratoSoar from the balloon at a certain altitude. I packed it full of features like a GPS, LoRa for remote activation, and a temperature, humidity, and pressure sensor."
                image="cutdownMechanism.jpg"
                title="Cutdown Mechanism"
                date="2024"
                name="Cutdown Mechanism"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://github.com/crnicholson/Cutdown-Mechanism"
              />
              <Project
                content="This project involved creating my own seaweed-based bioplastic from scratch. Whilst it may have not been a huge success, I did make a strong, translucent plastic film that I hope to use in future project. I also learned lots about chemistry, biology, and experiments."
                image="bioplastic.avif"
                title="Bioplastic"
                date="2023"
                name="Bioplastic"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="https://nicholsonlabs.gitbook.io/labs/bioplastic"
              />
              <Project
                content="Come see my gallery of PCBs!."
                image="boardIRL.png"
                title="PCB Gallery"
                date="2021-"
                name="PCB Gallery"
                bg="rgba(0,0,0,0.1)"
                color="black"
                link="/pcb"
              />
              {/* 
              - AI trash can - CanCam
              - Self driving car
              */}
            </div>
          </div>
        </main>
        <Slider />
        <Footer />
      </div>
    </>
  );
}
