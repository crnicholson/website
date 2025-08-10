"use client";

import { CardTitle, CardSubtitle, CardBlock } from "@/components/card";
import Image from "next/image";
import BadgeButton from "@/components/badgeButton";
import Badge from "@/components/badge";
import Project from "@/components/project";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="hidden md:visible z-50 md:flex items-center justify-between border-b border-border h-16 w-full px-4 sm:px-6 lg:px-8">
        <h1 className="font-[tiempos] text-lg">charlie nicholson</h1>
        <div className="flex gap-4">
          <div
            className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg cursor-pointer"
            onClick={() => {
              const projectsElement = document.getElementById('projects');
              if (projectsElement) {
                const targetPosition = projectsElement.offsetTop;
                const halfwayPoint = window.scrollY + (targetPosition - window.scrollY) - 24;
                window.scrollTo({
                  top: halfwayPoint,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Projects
          </div>

          <div
            className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg cursor-pointer"
            onClick={() => {
              const projectsElement = document.getElementById('achievements');
              if (projectsElement) {
                const targetPosition = projectsElement.offsetTop;
                const halfwayPoint = window.scrollY + (targetPosition - window.scrollY);
                window.scrollTo({
                  top: halfwayPoint,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Achievements
          </div>

          <div
            className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg cursor-pointer"
            onClick={() => {
              const projectsElement = document.getElementById('experiences');
              if (projectsElement) {
                const targetPosition = projectsElement.offsetTop;
                const halfwayPoint = window.scrollY + (targetPosition - window.scrollY);
                window.scrollTo({
                  top: halfwayPoint,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Experiences
          </div>

          <div
            className="border border-border rounded-full h-fit py-1 px-2 text-xs bg-card-bg cursor-pointer"
            onClick={() => {
              const projectsElement = document.getElementById('skills');
              if (projectsElement) {
                const targetPosition = projectsElement.offsetTop;
                const halfwayPoint = window.scrollY + (targetPosition - window.scrollY);
                window.scrollTo({
                  top: halfwayPoint,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Skills
          </div>
        </div>
      </div>

      <div className="z-10 md:-mt-16 min-h-screen w-full flex flex-col gap-10 justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-1/2 md:w-2/3 flex flex-col-reverse md:flex-row items-left md:justify-center gap-10">
            <div className="w-full">
              <h1 className="text-3xl md:text-5xl underline decoration-accent font-[tiempos] mb-6 md:mb-10">
                hi, i{"'"}m charlie
              </h1>
              <p className="text-base md:text-lg">
                I{"'"}m a freshman in high school in the suburbs of Boston, aspiring to be an electrical engineer. When I{"'"}m not in my bedroom lab coding and tinkering, you can find me running and enjoying nature.
              </p>
            </div>
            <Image
              src="/images/me.png"
              alt="me"
              width={200}
              height={200}
              className="rounded-xl aspect-square object-cover w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
            />
          </div>
        </div>

        <div className="max-w-2/3 flex flex-wrap items-center justify-center gap-3">
          <BadgeButton
            className="text-xs md:text-sm"
            href="mailto:charlienicholsonr@gmail.com"
          >
            Contact
          </BadgeButton>
          <BadgeButton
            className="text-xs md:text-sm"
            href="https://github.com/crnicholson"
          >
            GitHub
          </BadgeButton>
          <BadgeButton
            className="text-xs md:text-sm"
            href="https://www.linkedin.com/in/charles-richard-nicholson/"
          >
            LinkedIn
          </BadgeButton>
          <BadgeButton
            className="text-xs md:text-sm"
            href="https://cv.crnicholson.com"
          >
            CV
          </BadgeButton>
          <BadgeButton
            className="text-xs md:text-sm"
            href="https://linktr.ee/charlienicholson"
          >
            Linktree
          </BadgeButton>
        </div>
      </div>

      <div
        className="invisible md:visible z-50 border border-border rounded-full py-1 px-2 text-sm -mt-10 mb-10 rainbow-bg text-white cursor-pointer"
        onClick={() => {
          const projectsElement = document.getElementById('projects');
          if (projectsElement) {
            const targetPosition = projectsElement.offsetTop;
            const halfwayPoint = window.scrollY + (targetPosition - window.scrollY) - 24;
            window.scrollTo({
              top: halfwayPoint,
              behavior: 'smooth'
            });
          }
        }}
      >
        ↓ See my projects!
      </div>

      <div id="projects" className="flex flex-wrap gap-6 justify-center max-w-3/4">
        <Project
          title="StratoSoar MK3"
          description="StratoSoar is an autonomous glider designed for high-altitude research. Released from a weather balloon, it navigates itself to preset GPS coordinates, offering a cost-effective way for educators, hobbyists, and researchers to conduct aerial experiments."
          link="https://github.com/crnicholson/StratoSoar-MK3"
          src="/images/projects/stratoSoarMK3.png"
        />
        <Project
          description="This is a DIY carbon capture machine that removes CO2 from the atmosphere, along with a complete guide on how to make your own and a paper behind it."
          src="/images/projects/carbon.jpeg"
          title="Carbon Capture"
          link="https://github.com/crnicholson/Carbon-Capture"
        />
        <Project
          description="This was a project with Hack Club that gave youth ham radios if they got licensed. I was the co-founder and I led web design along with the curriculum, planning and organization."
          src="/images/projects/hamClub.png"
          title="Ham Club"
          link="https://ham.hackclub.com/"
        />
        <Project
          description="Apex is a multi-month, near-space hackathon, where teenagers around the world collaborate to design and build projects for a high-altitude balloon. I am the lead organizer and helped with publicity, planning, organization, and finances."
          src="/images/projects/apex.png"
          title="Apex"
          link="https://github.com/hackclub/apex"
        />
        <Project
          description="I made my own seaweed-based bioplastic from scratch. While it may have not been a huge success, I did make a strong, translucent plastic film which will be sused in future projects."
          src="/images/projects/bioplastic.avif"
          title="Bioplastic"
          link="https://nicholsonlabs.gitbook.io/labs/bioplastic"
        />
        <Project
          description="StratoSoar is a high-altitude Unmanned Autonomous Vehicle (UAV), capable of flying to selected coordinates. I successfully launched from 5,000 feet in the summer of 2024, and the latest work has been completed on MK3."
          src="/images/projects/stratoSoarMK2.png"
          title="StratoSoar MK2"
          link="https://www.github.com/crnicholson/StratoSoar-MK2"
        />
        <Project
          description="LittleLoRa is GPS tracker intended to track gliders or high altitude balloons from long distances using minimal power. LittleLoRa is the companion project of StratoSoar and is very much a WIP."
          src="/images/projects/littleLoRa.png"
          title="LitteLoRa"
          link="https://github.com/crnicholson/LittleLoRa"
        />
        <Project
          description="This was my first attempt of making a high-altitude UAV. It was a great learning experience and I learned a lot about the process of making a UAV, although it was not successful."
          src="/images/projects/stratoSoarMK1.jpeg"
          title="StratoSoar MK1"
          link="https://github.com/crnicholson/StratoSoar-MK1"
        />
        <Project
          description="This was an OpenCV resistor value finder that used algorithims to find the value of the resistor being held up to the webcam. Won first place at the Beantown Bash Hackathon!"
          src="/images/projects/beantown.jpeg"
          title="OpenCV Resistor Finder"
          link="https://github.com/maxsrobotics/resistorfinder"
        />
      </div>

      <div id="achievements" className="mt-10 w-full flex justify-center">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 p-5 flex flex-col items-left justify-left gap-3">
          <CardTitle className="!text-3xl">Awards & Achievements</CardTitle>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2025</Badge>
            Popular Design Winner of PCBWay 7th Project Design Contest out of over 350+ submissions.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024</Badge>
            GitHub Universe - personally invited by Kyle Daigle, COO of GitHub, to come.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024</Badge>
            4th out of 2000+ in the Hack Club Arcade Showcase.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024</Badge>
            Recipient of the Bagel Fund grant for my research in StratoSoar.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024</Badge>
            Presenter and author of a talk in the Northeast HamXposistion
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2023</Badge>
            First place winner of the 2023 Beantown Bash Hackathon.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2023</Badge>
            First place winner of the 2023 Wayland Science Fair.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2023</Badge>
            Presenter and author of two talks at the North East HamXposition.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2020-2023</Badge>
            Owner of a successful woodworking business.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2022</Badge>
            Ham Radio Extra Class Licensee.
          </div>
        </div>
      </div>

      <div id="experiences" className="mt-5 w-full flex justify-center">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 p-5 flex flex-col items-left justify-left gap-3">
          <CardTitle className="!text-3xl">Experiences</CardTitle>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024-</Badge>
            Director for the Hack Club Amateur Radio Club.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024-</Badge>
            Co-founder and co-leader of a local Hack Club.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024-</Badge>
            Youth Ambassador, Collegiate Outreach, and Science Advisor the Sci-Tech Amateur Radio Society.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2024-</Badge>
            Volunteer Leadership Staff at New England Sci-Tech.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2023-</Badge>
            Member of The Youth Subcommittee of The North East HamXposition.
          </div>

          <div className="w-fit flex items-center justify-center gap-4">
            <Badge className="h-fit">2022-</Badge>
            Volunteer IT Director, circuit board designer, and consultant for New England Sci-Tech.
          </div>
        </div>
      </div>

      <div id="skills" className="mt-5 w-full flex justify-center">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 p-5 flex flex-col items-left justify-left gap-3">
          <CardTitle className="!text-3xl">Skills</CardTitle>

          <CardSubtitle className="text-xl">Programming/Software</CardSubtitle>
          <CardBlock>
            <ul className="list-disc pl-5 space-y-2">
              <li><Badge className="h-fit">C, C++, Rust, Python</Badge></li>
              <li><Badge className="h-fit">React, Next.js, TypeScript, Tailwind, HTML</Badge></li>
              <li><Badge className="h-fit">Figma</Badge></li>
              <li><Badge className="h-fit">GitHub, Git</Badge></li>
            </ul>
          </CardBlock>

          <CardSubtitle className="text-xl">Electronics</CardSubtitle>
          <CardBlock>
            <ul className="list-disc pl-5 space-y-2">
              <li><Badge className="h-fit">KiCAD, printed circuit board design (PCB)</Badge></li>
              <li><Badge className="h-fit">AVR, ARM</Badge></li>
              <li><Badge className="h-fit">RF design, power design, 4-layer-board design</Badge></li>
              <li><Badge className="h-fit">Arduino, Raspberry Pi, ESP32/ESP8266</Badge></li>
              <li><Badge className="h-fit">Test equipment (oscilloscopes, spectrum analzyers, signal generators)</Badge></li>
            </ul>
          </CardBlock>

          <CardSubtitle className="text-xl">Engineering/Fabriaction</CardSubtitle>
          <CardBlock>
            <ul className="list-disc pl-5 space-y-2">
              <li><Badge className="h-fit">3D printing, CNCs, laser cutter, handtools</Badge></li>
              <li><Badge className="h-fit">Fusion 360, OnShape, Simscale</Badge></li>
            </ul>
          </CardBlock>

          <CardSubtitle className="text-xl">Other</CardSubtitle>
          <CardBlock>
            <ul className="list-disc pl-5 space-y-2">
              <li><Badge className="h-fit">Business management, finances</Badge></li>
              <li><Badge className="h-fit">Public speaking</Badge></li>
            </ul>
          </CardBlock>

        </div>
      </div>

      <Carousel className="py-10" images={[
        { src: "/images/slider/arduino.jpeg", alt: "Arduino" },
        { src: "/images/slider/balloon.jpeg", alt: "Balloon" },
        { src: "/images/slider/cutdownMechanism.png", alt: "Cutdown mechanism" },
        { src: "/images/slider/drugs.jpeg", alt: "Sodium bicarbonate experiment" },
        { src: "/images/slider/fusion.png", alt: "Fusion 360" },
        { src: "/images/slider/glider.png", alt: "Glider" },
        { src: "/images/slider/hamRadioRoof.jpeg", alt: "Roof" },
        { src: "/images/slider/meWithGlider.jpeg", alt: "Glider" },
        { src: "/images/slider/meWithRadioAndTV.jpeg", alt: "Radio" },
        { src: "/images/slider/moistureSwing.png", alt: "Moisture swing" },
        { src: "/images/slider/newbs.jpeg", alt: "NEWBS" },
        { src: "/images/slider/oldDesk.jpeg", alt: "Old desk" },
        { src: "/images/slider/resp.jpeg", alt: "Respirator" },
        { src: "/images/slider/sodaStream.jpeg", alt: "Soda stream" },
        { src: "/images/slider/softRobot.jpeg", alt: "Soft robotics" },
        { src: "/images/slider/stratoSoarMK1.jpeg", alt: "StratoSoar MK1" },
        { src: "/images/slider/stratoSoarMK2.png", alt: "StratoSoar MK2" },
        { src: "/images/slider/wing.png", alt: "Wing" },
      ]} />

      <Footer />
    </>
  )
}