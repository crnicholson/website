import { ReactNode } from "react";

export default function Text(props: { name: string; title: string; content: ReactNode }) {
    return (
        <div className="relative">
            <h1 id={props.name} className="text-5xl break-words font-bold pb-5 pt-5">{props.title}</h1>
            {props.content}
            <br />
        </div>
    );
}