import PCB from "../../components/pcb";

export default function Home() {
    return (
        <>
            <main className="flex justify-center pb-10 pt-20 z-20 relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose h-fit">
                <div className="w-5/6 sm:w-3/5">
                    <a className="underline hover:text-gray-600" href="/">← Back to home page.</a>
                    <h1 className="text-5xl font-bold pb-5 pt-5">PCB Projects</h1>
                    <p>Here I will show you all of my public Printed Circuit Board (PCB) designs. I do work for a local company with my PCBs, so some I have to keep private. My stats are all the public ones.</p>
                    <h1 className="text-5xl font-bold pb-5 pt-5">Stats</h1>
                    <p>Unique designs: <span className="text-2xl font-bold">18</span>. Total revisions: <span className="text-2xl font-bold">48</span>. Commissioned designs: <span className="text-2xl font-bold">10</span> unique designs. SMD boards: <span className="text-2xl font-bold">17</span> unique designs. 4 layer boards: <span className="text-2xl font-bold">3</span> unique designs. Boards sold: <span className="text-2xl font-bold">3,000</span> total.</p>
                    <h1 className="text-5xl font-bold pb-5 pt-5">Favorite and Most Complex Boards</h1>
                    <p>Some of these took way too long to design and assemble.</p>
                    <div className="flex flex-wrap items-center">
                        <PCB
                            content="This was the circuit board I designed for my project, StratoSoar. It is 4 layers and has over 200 components. This was a huge learning experience for me, as it combined, RF, power, digital, SMD, and 4 layers into one."
                            image="board.png"
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
                    </div>
                    <h1 className="text-5xl font-bold pb-5 pt-5">General Boards</h1>
                    <p>These are some of the more general boards I designed.</p>
                    <div className="flex flex-wrap items-center">
                        <PCB
                            content="This was the main circuit board for my project, LittleLoRa. This project has taken a bit of a hiatus while I spend most of my time on StratoSoar and the GitHub link doesn't have my PCBs on it. Ther"
                            image="usb.png"
                            title="USB-C Breakouts"
                            date="2024"
                            name="USB-C Breakouts"
                            revisions="1"
                            boards="15"
                            link="https://github.com/crnicholson/LittleLoRa"
                        />
                    </div>
                    <h1 className="text-5xl font-bold pb-5 pt-5">Soldering Kits</h1>
                    <p>I designed these boards to be used to help youth learn soldering at my local maker space. These ones won't have links as they aren't open source!</p>
                    <div className="flex flex-wrap items-center">
                        <PCB
                            content="This was a simple spinning and blinking top that combined laser cutting and PCBs into one small and fun educational kit."
                            image="littleLoRa.png"
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