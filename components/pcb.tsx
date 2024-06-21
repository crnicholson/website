import Image from "next/image";

export default function PCB(props: { content: string; src: string; link: string; title: string; date: string; name: string; revisions: string; boards: string; alt: string;}) {
    return (
        <>
            <div className="h-fit w-fit mt-4">
                <a href={props.link} target="_blank">
                    <div className="group flex flex-col gap-2 items-center">
                        <div className="relative mx-5 my-2 transform transition-transform duration-300  bg-[rgba(0,0,0,.1)] shadow-xl group-hover:shadow-3xl h-[300px] w-fit rounded-lg">
                            <Image
                                src={"/" + props.src}
                                width={300}
                                height={300}
                                className="h-[300px] w-auto rounded-lg group-hover:opacity-10"
                                alt={props.alt}
                            />
                            <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300">
                                <div className="p-2 invisible group-hover:visible">
                                    <h1 className="text-2xl italic font-bold">
                                        {props.title}
                                    </h1>
                                    <p className="text-[12px] italic">
                                        {props.date}
                                    </p>
                                    <p className="text-[13px] pt-5">
                                        {props.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-fit p-1 rounded-2xl italic inset-x-0 flex flex-row justify-center items-center bg-[rgba(0,0,0,0.1)]">
                            <h1 id={props.name} className="mr-2 text-[13px] font-bold transition-colors duration-300">
                                {props.title}
                            </h1>
                            <p className="text-[8px] bg-[rgba(0,0,0,0.1)] rounded-2xl p-[3px]">
                                {props.date}
                            </p>
                        </div>
                        <div className="w-fit h-fit p-1 rounded-2xl italic inset-x-0 flex flex-row justify-center items-center bg-[rgba(0,0,0,0.1)]">
                            <h1 id={props.name} className="mr-2 text-[13px] font-bold transition-colors duration-300">
                                <p><span className="text-lg">{props.revisions}</span> revision(s), <span className="text-lg">{props.boards}</span> total boards</p>
                            </h1>
                        </div>
                    </div >
                </a>
            </div>
        </>
    );
};