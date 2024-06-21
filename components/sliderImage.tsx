import Image from "next/image";

export default function SliderImage(props: { src: string, alt: string }) {
    return (
        <>
            <div className="z-10 relative flex flex-col justify-center items-center rounded-lg mb-10 mt-5 p-3 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl group" style={{ width: '300px' }}>
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                    <Image
                        src={"/" + props.src}
                        width={300}
                        height={300}
                        className="rounded-lg w-[300px] h-auto"
                        alt={props.alt}
                    />
                </div>
                <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
            </div>
        </>
    );
};