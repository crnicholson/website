import { ReactNode } from 'react';
import GradientBlur from "./gradientBlur";

export default function Projects(props: { title: string; content: ReactNode; name: string }) {
    return (
        <>
            <div className="relative flex-1 rounded-lg p-5 hover:bg-[rgb()] m-5 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl group h-fit w-fit">
                {/* <GradientBlur /> */}
                <h1 id={props.name} className="text-4xl font-bold py-5 transition-colors duration-300 ">
                    {props.title}
                </h1>
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                    {props.content}
                </div>
                <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
                <br />
            </div>
        </>
    );
};