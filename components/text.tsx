import { ReactNode } from "react";

export default function Text(props: { name: string; title: string; content: ReactNode }) {
    return (
        <div className="relative">
            <h1 id={props.name} className="text-[#2ECC71] text-4xl break-words pb-5 pt-10">{props.title}</h1>
            {props.content}
            <br />
        </div>
    );
}