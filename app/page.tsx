import Hero from "../components/hero";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="font-[poppins] text-[#0d1b2a] bg-[#e0e1dd]">
        <Hero />
        <main id="about" className="flex justify-center p-20 z-20 relative mt-[150px]">
          <div className="w-3/5">
            <p>Hi. My name is Charlie. I am a freshman in high school in the suburbs of Boston. I go by cnicholson, or crnicholson online and I aspire to be an electrical engineer.</p>
            <br></br>
            <p>I started in the world of electronics when I was 10, in the pandemic. My cousin gave me an Arduino kit from his school and I was hooked. I started with the basics, blinking an LED, and moved to more complex projects like an obstacle avoiding robot with a mop {"("}a Mopra!{")"}</p>
            <br></br>
            <p>Of course, it went off from there. I now am much smarter and have done many more projects, partnering with organizations and professional engineers. Here's a little portfolio of my projects and a timeline of my maker life.</p>
            <br></br>
            {/* <p>I can bring my skills in ham radio and wireless communication. I can set up a ham radio-based event on the train, as I am an Amateur Extra licensee, the highest class of ham radio. Additionally, I am well rounded in many other areas. For example, handicrafts such as pottery and woodworking (which I started a business around), machine manufacturing with CNCs, laser cutters, and 3D printers, CAD software like Fusion 360, Simscale and KiCAD, electronics such as PCBs, robotics, remote control, and circuitry, programming languages like Python, Next.js, CSS, HTML, and C++, frameworks like Arduino, Git, GitHub, and Vercel and life skills like public speaking. Furthermore, I also like to spend time running and outside. </p> */}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
