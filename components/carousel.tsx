import Image from "next/image";
import { Card } from "./card";

export default function Carousel({ images, className }: {
    images: {
        src: string;
        alt: string;
    }[];
    className?: string;
}) {
    return (
        <>
            <div className={`overflow-x-hidden w-full ${className}`}>
                <div className="scrolling-wrapper">
                    {images.concat(images).map((image, index) => (
                        <div key={index} className="carousel-item bg-transparent">
                            <CarouselImage
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

function CarouselImage(props: { src: string, alt: string }) {
    return (
        <>
            <Card className="w-full max-w-[300px] p-3 hover:scale-105">
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                    <Image
                        src={props.src}
                        width={300}
                        height={300}
                        className="rounded-lg w-[300px] h-auto"
                        alt={props.alt}
                    />
                </div>
            </Card>
        </>
    );
};