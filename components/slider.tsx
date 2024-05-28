// import Projects from "../components/projects";
// import Image from "../components/image";

// export default function Slider() {
//     return (
//         <>
//             <div className="overflow-x-hidden w-full max-w-full mx-auto pb-10">
//                 <div className="scrolling-wrapper w-[400%] sm:w-[250%] md:w-[200%] lg:w-[150%] xl:w-[100%]">
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="beantown.jpeg"
//                             alt="Resistor Finder"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="arduino.jpeg"
//                             alt="Arduino"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="newbs.jpeg"
//                             alt="NEWBS"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="carbon1.jpeg"
//                             alt="Carbon"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="carbon2.jpeg"
//                             alt="Carbon"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="meWithGlider.jpeg"
//                             alt="StratoSoar"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="meWithGlider2.jpeg"
//                             alt="StratoSoar"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="moistureSwing.png"
//                             alt="Carbon capture"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="hamXpo.jpeg"
//                             alt="HamXpo"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="oldDesk.jpeg"
//                             alt="Desk"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="oldStratoSoarEE.jpeg"
//                             alt="StratoSoar"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="carbon3.jpeg"
//                             alt="Carbon"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="softRobot.jpeg"
//                             alt="Soft robotics"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="parachuteShell.png"
//                             alt="StratoSoar"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="hamRadio.jpeg"
//                             alt="Ham radio"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="balloon.jpeg"
//                             alt="Balloon"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="drugs.jpeg"
//                             alt="Chemistry"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="Fusion.jpeg"
//                             alt="Fusion 360"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="boardIRL.png"
//                             alt="PCB"
//                         />
//                     </div>
//                      <div className="carousel-item bg-transparent">
//                         <Image
//                             src="resp.jpeg"
//                             alt="Respirator"
//                         />
//                     </div>

//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="3d.png"
//                             alt="3D"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="bigRadio.jpeg"
//                             alt="Big radio"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="board.png"
//                             alt="PCB"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="board2.png"
//                             alt="PCB"
//                         />
//                     </div>
//                     <div className="carousel-item bg-transparent">
//                         <Image
//                             src="glider.png"
//                             alt="Balloon"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

import Projects from "../components/projects";
import Image from "../components/image";

export default function Slider() {
    const images = [
        { src: "beantown.jpeg", alt: "Resistor Finder" },
        { src: "arduino.jpeg", alt: "Arduino" },
        { src: "newbs.jpeg", alt: "NEWBS" },
        { src: "carbon1.jpeg", alt: "Carbon" },
        { src: "carbon2.jpeg", alt: "Carbon" },
        { src: "meWithGlider.jpeg", alt: "StratoSoar" },
        { src: "meWithGlider2.jpeg", alt: "StratoSoar" },
        { src: "moistureSwing.png", alt: "Carbon capture" },
        { src: "hamXpo.jpeg", alt: "HamXpo" },
        { src: "oldDesk.jpeg", alt: "Desk" },
        { src: "oldStratoSoarEE.jpeg", alt: "StratoSoar" },
        { src: "carbon3.jpeg", alt: "Carbon" },
        { src: "softRobot.jpeg", alt: "Soft robotics" },
        { src: "parachuteShell.png", alt: "StratoSoar" },
        { src: "hamRadio.jpeg", alt: "Ham radio" },
        { src: "balloon.jpeg", alt: "Balloon" },
        { src: "drugs.jpeg", alt: "Chemistry" },
        { src: "fusion.png", alt: "Fusion 360" },
        { src: "boardIRL.png", alt: "PCB" },
        { src: "resp.jpeg", alt: "Respirator" },
        { src: "3d.png", alt: "3D" },
        { src: "bigRadio.jpeg", alt: "Big radio" },
        { src: "board.png", alt: "PCB" },
        { src: "board2.png", alt: "PCB" },
        { src: "glider.png", alt: "StratoSoar" }
    ];

    return (
        <>
            <div className="w-full flex justify-center pb-10 relative">
                <div className="w-5/6 sm:w-3/5">
                    <h1 className="text-6xl font-bold pb-5 pt-5">Gallery</h1>
                    <p>It goes fast, try to catch all the images!</p>
                </div>
            </div>
            <div className="overflow-x-hidden w-full max-w-full mx-auto pb-10">
                <div className="scrolling-wrapper">
                    {images.concat(images).map((image, index) => (
                        <div key={index} className="carousel-item bg-transparent">
                            <Image
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
