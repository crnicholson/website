// Add content for the versions
// all of these to the other one
// clean up projects.tsx

import Image from "next/image";
import { ReactNode } from "react";

export default function PCB(props: { content: string; src: string; link: string; title: string; date: string; name: string; revisions: string; boards: string; alt: string; moreContent: ReactNode; }) {
    return (
        <>
            <div className="h-fit w-fit mt-4">
                <a href={props.link} target="_blank">
                    <div className="group flex flex-col gap-2 items-center">
                        <div className="relative mx-5 my-2 shadow-xl group-hover:shadow-3xl sm:h-[350px] h-[250px] w-auto rounded-lg overflow-visible">
                            <Image
                                src={"/" + props.src}
                                width={300}
                                height={300}
                                className="rounded-lg object-cover w-full h-full group-hover:opacity-10"
                                alt={props.alt}
                            />
                            <div className="absolute inset-0 shadow-2xl rounded-lg h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-auto">
                                <div className="p-2">
                                    <h1 className="text-2xl italic">
                                        {props.title}
                                    </h1>
                                    <p className="text-[12px] italic">
                                        {props.date}
                                    </p>
                                    <p className="text-[13px] pt-5">
                                        {props.content}
                                    </p>
                                    {props.moreContent}
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-fit p-1 rounded-2xl italic flex flex-row justify-center items-center bg-[rgba(0,0,0,0.1)]">
                            <h1 id={props.name} className="mr-2 text-[13px]  ">
                                {props.title}
                            </h1>
                            <p className="text-[8px] bg-[rgba(0,0,0,0.1)] rounded-2xl p-[3px]">
                                {props.date}
                            </p>
                        </div>
                        <div className="w-fit h-fit p-1 rounded-2xl italic flex flex-row justify-center items-center bg-[rgba(0,0,0,0.1)]">
                            <h1 id={props.name} className="mr-2 text-[13px]">
                                <p className="text-[12px] sm:text-[15px]"><span className="text-base sm:text-lg  font-bold">{props.revisions}</span> revision(s), <span className="text-base sm:text-lg  font-bold">{props.boards}</span> total boards</p>
                            </h1>
                        </div>
                    </div >
                </a>
            </div>
        </>
    );
};
