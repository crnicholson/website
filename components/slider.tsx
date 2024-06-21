import SliderImage from "./sliderImage";

export default function Slider() {
    const images = [
        { src: "beantown.jpeg", alt: "Resistor Finder" },
        { src: "arduino.jpeg", alt: "Arduino" },
        { src: "newbs.jpeg", alt: "NEWBS" },
        { src: "scrubber.jpeg", alt: "Carbon" },
        { src: "sodaStream.jpeg", alt: "Carbon" },
        { src: "meWithGlider.jpeg", alt: "StratoSoar" },
        { src: "meWithGlider-2.jpeg", alt: "StratoSoar" },
        { src: "moistureSwing.png", alt: "Carbon capture" },
        { src: "hamXpo.jpeg", alt: "HamXpo" },
        { src: "oldDesk.jpeg", alt: "Desk" },
        { src: "oldStratoSoarEE.jpeg", alt: "StratoSoar" },
        { src: "zeolites.jpeg", alt: "Carbon" },
        { src: "softRobot.jpeg", alt: "Soft robotics" },
        { src: "parachuteShell.png", alt: "StratoSoar" },
        { src: "hamRadio.jpeg", alt: "Ham radio" },
        { src: "balloon.jpeg", alt: "Balloon" },
        { src: "drugs.jpeg", alt: "Chemistry" },
        { src: "fusion.png", alt: "Fusion 360" },
        { src: "stratoSoarMK2-IRL.png", alt: "PCB" },
        { src: "resp.jpeg", alt: "Respirator" },
        { src: "3d.png", alt: "3D" },
        { src: "bigRadio.jpeg", alt: "Big radio" },
        { src: "stratoSoarMK2.png", alt: "PCB" },
        { src: "stratoSoarMK2-2.png", alt: "PCB" },
        { src: "glider.png", alt: "StratoSoar" }
    ];

    return (
        <>
            <div id="gallery" className="w-full flex justify-center mb-10 relative">
                <div className="w-5/6 sm:w-3/5">
                    <h1 className="text-5xl font-bold pb-5 pt-5">Gallery</h1>
                    <a className="underline hover:text-gray-600" href="/pcb">Also see my PCB gallery!</a>
                </div>
            </div>
            <div className="overflow-x-hidden w-full max-w-full mx-auto pb-10">
                <div className="scrolling-wrapper">
                    {images.concat(images).map((image, index) => (
                        <div key={index} className="carousel-item bg-transparent">
                            <SliderImage
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
