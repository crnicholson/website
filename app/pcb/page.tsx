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
                    {/* <PCB /> */}
                    <h1 className="text-5xl font-bold pb-5 pt-5">General Boards</h1>
                    <p>These are some of the more general boards I designed.</p>
                    {/* <PCB /> */}
                    <h1 className="text-5xl font-bold pb-5 pt-5">Soldering Kits</h1>
                    <p>I designed these boards to be used to help youth learn soldering at my local maker space.</p>
                    {/* <PCB /> */}
                </div>
            </main>
        </>
    )
}