import { ReactNode } from "react";

interface TextProps {
    name: string;
    title: string;
    content: ReactNode;
}

export default function Text(props: TextProps) {
    return (
        <div className="">
            <h1 id={props.name} className="text-6xl font-bold pb-5 pt-5">{props.title}</h1>
            {props.content}
            <br />
        </div>
    );
}