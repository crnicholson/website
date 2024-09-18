import React from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Text from "../components/text";
import Slider from "../components/slider";
import Button from "../components/button";
import Project from "../components/project";

export default function Home() {
  return (
    <>
      <div className="font-[rubik] bg-[#03161F]  text-[#BDBDBD] prose">
        <Hero />
        <main className="flex justify-center pb-10">
          <div className="w-5/6 sm:w-4/5">
            <div className="pt-[100px]" />
            <h1 className="text-4xl pb-5 text-[#2ECC71]">Projects</h1>
            <div className="flex flex-wrap items-center gap-5 justify-center">
              <Project
                content="StratoSoar is a high-altitude Unmanned Autonomous Vehicle (UAV), capable of flying to selected coordinates. It is designed to be dropped from a weather balloon at 10,000 feet of altitude."
                src="stratoSoarMK2.png"
                title="StratoSoar MK2"
                date="2023-"
                name="StratoSoar"
                link="https://www.github.com/crnicholson/StratoSoar-MK2"
                alt=""
              />
              <Project
                content="This carbon capture project is a DIY carbon capture machine that removes CO2 from the atmosphere. It was a summer project between seventh and eighth grade and I learned tons."
                src="ccProject.jpeg"
                title="Carbon Capture"
                date="2023"
                name="Carbon Capture"
                link="https://nicholsonlabs.gitbook.io/labs/carbon-capture"
                alt=""
              />
              <Project
                content="This was a project in conjunction with Hack Club that gave youth ham radios if they got their license. I was the co-founder and I spearheaded web design along with the curriculum, planning and organization."
                src="hamclub.png"
                title="Ham Club"
                date="2024"
                name="Ham Club"
                link="https://ham.hackclub.com/"
                alt=""
              />
              {/* <Project
                content="This website was created to showcase my projects and to give a little bit of information about me. It was created using Next.js and Tailwind CSS."
                src="website.png"
                title="Personal Website"
                date="2024"
                name="Personal Website"
                link="/"
                alt=""
              /> */}
              <Project
                content="This project involved creating my own seaweed-based bioplastic from scratch. Whilst it may have not been a huge success, I did make a strong, translucent plastic film that I hope to use in future project."
                src="bioplastic.avif"
                title="Bioplastic"
                date="2023"
                name="Bioplastic"
                link="https://nicholsonlabs.gitbook.io/labs/bioplastic"
                alt=""
              />
              <Project
                content="LittleLoRa is GPS tracker intended to track gliders or high altitude balloons from long distances using minimal power. LittleLoRa is the companion project of StratoSoar and is very much a WIP."
                src="littleLoRa.png"
                title="LitteLoRa"
                date="2023-"
                name="LittleLoRa"
                link="https://github.com/crnicholson/LittleLoRa"
                alt=""
              />
              <Project
                content="This was my first attempt of making a high-altitude UAV. It was a great learning experience and I learned a lot about the process of making a UAV, although it was not successful."
                src="oldStratoSoarEE.jpeg"
                title="StratoSoar MK1"
                date="2022-2023"
                name="StratoSoar MK1"
                link="https://github.com/crnicholson/StratoSoar-MK1"
                alt=""
              />
              <Project
                content="This was an OpenCV resistor value finder that utilized complex mathematics to find the value of the resistor being held up to the webcam."
                src="beantown.jpeg"
                title="OpenCV Resistor Finder"
                date="2023"
                name="OpenCV Resistor Finder"
                link="https://github.com/maxsrobotics/resistorfinder"
                alt=""
              />
              {/* <Project
                content="This cutdown mechanism was designed to release StratoSoar from the balloon at a certain altitude. I packed it full of features like a GPS, LoRa for remote activation, and a temperature, humidity, and pressure sensor."
                src="cutdownMechanism.jpg"
                title="Cutdown Mechanism"
                date="2024"
                name="Cutdown Mechanism"
                link="https://github.com/crnicholson/Cutdown-Mechanism"
                alt=""
              /> */}
              {/* <Project
                content="This was my first ever website, created only using vanilla JS, CSS, and HTML (yikes)! It calculate the carbon emissions of road trips and the number of trees needed to offset it."
                src="coodos.png"
                title="Coodos"
                date="2021"
                name="Coodos"
                link="https://coodos.w3spaces.com/"
                alt=""
              /> */}
              {/* <Project
                content="Better BOM takes your current schematic design - without part numbers - and finds the cheapest option available at the same time editing your schematic, all automatically."
                src="softRobot.jpeg"
                title="Better BOM"
                date="2024"
                name="Better BOM"
                link="https://github.com/crnicholson/betterBOM"
                alt=""
              />
              <Project
                content="I was working with (and hopefully will be in the future) silicone and custom 3D printed molds to make simple but functional soft robotics interfaces. Additionally, I was working with origami and bioplastic to make a biodegradable and compostable soft robotics interface."
                src="softRobot.jpeg"
                title="Soft Robotics"
                date="2023"
                name="Soft Robotics"
                link="/"
                alt=""
              /> */}
              {/* <Project
                content="This was a website I created with Next.js and Tailwind for Hack Club's Amateur Radio Club."
                src="hcarc.png"
                title="HCARC"
                date="2024"
                name="HCARC"
                link="https://hcarc.vercel.app/"
                alt=""
              /> */}
              <Project
                content="Come see my gallery of PCBs!"
                src="stratoSoarMK2-IRL.png"
                title="PCB Gallery"
                date="2021-"
                name="PCB Gallery"
                link="/pcb"
                alt=""
              />
              {/* 
              - AI trash can - CanCam
              - Self driving car
              */}
            </div>
            <div className="pt-7" />
            <Text
              title="Things I've Done"
              content={<>
                
                <Button
                  href=""
                  text="2024"
                  wiggle="wiggle-one-button"
                />
                4th out of 2000+ in the Hack Club Arcade Showcase.
                <br />

                <br />
                <Button
                  href=""
                  text="2024"
                  wiggle="wiggle-one-button"
                />
                Recipient of the Bagel Fund grant for my research in StratoSoar.
                <br />

                 <br />
                <Button
                  href=""
                  text="2024"
                  wiggle="wiggle-one-button"
                />
                Presenter and author of a talk in the Northeast HamXposistion.
                <br />

                <br />
                <Button
                  href=""
                  text="2023"
                  wiggle="wiggle-one-button"
                />
                First place winner of the 2023 Beantown Bash Hackathon.
                <br />

                <br />
                <Button
                  href=""
                  text="2023"
                  wiggle="wiggle-one-button"
                />
                First place winner of the 2023 Wayland Science Fair.
                <br />

                <br />
                <Button
                  href=""
                  text="2023"
                  wiggle="wiggle-one-button"
                />
                Presenter and author of two talks at the North East HamXposition.
                <br />

                <br />
                <Button
                  href=""
                  text="2020-2023"
                  wiggle="wiggle-one-button"
                />
                Owner of a successful woodworking business.
                <br />

                <br />
                <Button
                  href=""
                  text="2022"
                  wiggle="wiggle-one-button"
                />
                Ham Radio Extra Class Licensee.
                <br />

              </>}
              name="awards"
            />
            <Text
              title="Experiences"
              content={<>

                <Button
                  href=""
                  text="2024-"
                  wiggle="wiggle-one-button"
                />
                Director for the Hack Club Amateur Radio Club.
                <br />

                <br />
                <Button
                  href=""
                  text="2024-"
                  wiggle="wiggle-one-button"
                />
                Co-founder and co-leader of a local Hack Club.
                <br />

                <br />
                <Button
                  href=""
                  text="2024-"
                  wiggle="wiggle-one-button"
                />
                Youth Ambassador, Collegiate Outreach, and Science Advisor the Sci-Tech Amateur Radio Society.
                <br />

                <br />
                <Button
                  href=""
                  text="2024-"
                  wiggle="wiggle-one-button"
                />
                Volunteer Leadership Staff at New England Sci-Tech.
                <br />

                <br />
                <Button
                  href=""
                  text="2023-"
                  wiggle="wiggle-one-button"
                />
                Member of The Youth Subcommittee of The North East HamXposition.
                <br />

                <br />
                <Button
                  href=""
                  text="2022-"
                  wiggle="wiggle-one-button"
                />
                Volunteer IT Director, circuit board designer, and consultant for New England Sci-Tech.
                <br />

              </>}
              name="experiences"
            />

          </div>
        </main>
        <Slider />
        <Footer />
      </div>
    </>
  );
}
