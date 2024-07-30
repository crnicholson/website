import Image from "next/image";

export default function Project(props: { content: string; src: string; link: string; title: string; date: string; name: string; alt: string; }) {
    return (
        <div className="w-[350px]">
            <div className="shadow-lg rounded-lg bg-[#041D27] outline-2 outline-[#BDBDBD]">
                <a target="_blank" href={props.link} className="underline decoration-[#BDBDBD] hover:text-gray-600 text-2xl block text-left pl-4 pt-4">
                    {props.title}
                </a>
                <div className="p-2" />
                <div className="sm:h-[200px] h-[150px] flex justify-between items-center overflow-hidden ">
                    <Image
                        src={"/" + props.src}
                        width={200}
                        height={200}
                        className="w-fit h-full rounded-lg m-4"
                        alt={props.alt}
                    />
                    <div className="h-full pl-2 pr-4">
                        <p className="text-[13px]">
                            {props.content}
                        </p>
                    </div>
                </div>
                <div className="p-2" />
            </div>
        </div>
    );
};