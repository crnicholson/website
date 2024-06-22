import { ReactNode } from "react";

export default function PCBText(props: { name: string; title: string; content: ReactNode }) {
    return (
        <div className="relative text-[13px]">
            <h1 id={props.name} className="text-2xl break-words font-bold pb-2 pt-5">{props.title}</h1>
            {props.content}
        </div>
    );
};