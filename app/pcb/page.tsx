import PCB from "../../components/pcb";

export default function Home() {
    return (
        <>
            <main className="flex justify-center pb-10 pt-20 z-20 relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose h-fit">
                <div className="w-5/6 sm:w-3/5">
                    <a className="underline hover:text-gray-600" href="/">← Back to home page.</a>
                    <h1 className="text-5xl font-bold pb-5 pt-5">PCB Projects</h1>
                    <p>Here I will show you all of my public Printed Circuit Board (PCB) designs. I do work for a local company designing PCBs, so some I have to keep private. My stats are all the public ones.</p>
                    <h1 className="text-5xl font-bold pb-5 pt-5">Stats</h1>
                    <p>Unique designs: <span className="text-2xl font-bold">18</span>. Total revisions: <span className="text-2xl font-bold">48</span>. Commissioned designs: <span className="text-2xl font-bold">10</span> unique designs. SMD boards: <span className="text-2xl font-bold">17</span> unique designs. 4 layer boards: <span className="text-2xl font-bold">3</span> unique designs. Boards sold: <span className="text-2xl font-bold">3,000</span> total.</p>
                    <h1 className="text-5xl font-bold pb-5 pt-5">Favorite and Most Complex Boards</h1>
                    <p>Some of these took way too long to design and assemble.</p>
                    <div className="flex flex-wrap items-center">
                        <PCB
                            content="This was the circuit board I designed for my project, StratoSoar. It is 4 layers and has over 200 components. This was a huge learning experience for me, as it combined, RF, power, digital, SMD, and 4 layers into one."
                            image="stratoSoarMK2.png"
                            title="StratoSoar MK2"
                            date="2023-"
                            name="StratoSoar MK2"
                            revisions="4"
                            boards="20"
                            link="https://github.com/crnicholson/StratoSoar-MK2"
                        />
                        <PCB
                            content="This was the main circuit board for my project, LittleLoRa. This project has taken a bit of a hiatus while I spend most of my time on StratoSoar and the GitHub link doesn't have my PCBs on it."
                            image="littleLoRa.png"
                            title="LittleLoRa"
                            date="2023-"
                            name="LittleLoRa"
                            revisions="1"
                            boards="5"
                            link="https://github.com/crnicholson/LittleLoRa"
                        />
                        <PCB
                            content="This circuit, although it was quite simple, was one of my first attempts to make a complete system with 3D printing. It's also pretty awesome - it can literally drop anything from tens of thousands of feet!"
                            image="cutdownMechanism.jpg"
                            title="Cutdown Mechanism"
                            date="2023-"
                            name="Cutdown Mechanism" 
                            revisions="2"
                            boards="10"
                            link="https://github.com/crnicholson/LittleLoRa"
                        />
                    </div>
                    <h1 className="text-5xl font-bold pb-5 pt-5">General Boards</h1>
                    <p>These are some of the more general boards I designed. Links to the PCB files to come!</p>
                    <div className="flex flex-wrap items-center">
                        <PCB
                            content="This was three circuit boards in one, and I was testing out two different ways of directly inserting the USB-C cable into the PCB. I also made simple breakout with a traditional method of a dedicated socket."
                            image="usb.png"
                            title="USB-C Breakouts"
                            date="2024"
                            name="USB-C Breakouts"
                            revisions="1"
                            boards="15"
                            link=""
                        />
                        <PCB
                            content="This was a tiny breakout board for the MPU-9250 IMU. I never soldered it because I can't solder the tiny MPU-9250 package!"
                            image="mpuBreakout.png"
                            title="MPU-9250 Breakout"
                            date="2024"
                            name="MPU-9250 Breakout"
                            revisions="1"
                            boards="5"
                            link=""
                        />
                        <PCB
                            content="This was a breakout board the radio chip Si4063. My friend and I used this in the development of new radio systems."
                            image="siBreakout.png"
                            title="Si4063 Breakout"
                            date="2024"
                            name="Si4063 Breakout"
                            revisions="1"
                            boards="5"
                            link=""
                        />
                        <PCB
                            content="This board was created to practice soldering small packages like 0201. It is quite simple but very useful for practice."
                            image="practiceBoard.png"
                            title="Practice Board"
                            date="2024"
                            name="Practice Board"
                            revisions="1"
                            boards="5"
                            link=""
                        />
                        <PCB
                            content="This board proved to give me a lot of headaches, mainly because the TPS61200 is impossible to solder! The board worked fine, though, and thanks to lots of research, the output was noise free."
                            image="tpsBreakout.png"
                            title="TPS61200 Breakout"
                            date="2024"
                            name="TPS61200 Breakout"
                            revisions="2"
                            boards="10"
                            link=""
                        />
                    </div>
                    <h1 className="text-5xl font-bold pb-5 pt-5">Soldering Kits</h1>
                    <p>I designed these boards to be used to help youth learn soldering at my local maker space. These ones won't have links as they aren't open source!</p>
                    <div className="flex flex-wrap items-center">
                        <PCB
                            content="This was a simple spinning and blinking top that combined laser cutting and PCBs into one small and fun educational kit."
                            image="spinnyTop.png"
                            title="Blinky Top"
                            date="2023"
                            name="Blinky Top"
                            revisions="1"
                            boards="250"
                            link=""
                        />
                    </div>
                </div>
            </main>
        </>
    )
}