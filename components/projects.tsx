import { ReactNode } from 'react';

export default function Projects(props: { title: string; content: ReactNode; name: string }) {
    return (
        <>
            <div className="flex-1 border-2 border-black rounded-lg p-5 bg-[rgba(0,0,0,.2)] m-5">
                <h1 id={props.name} className="text-4xl font-bold py-5">{props.title}</h1>
                {props.content}
                <br />
            </div>
        </>
    );
};
// sm: w - 3 / 4 md: w - 2 / 3 lg: w - [3 / 8] xl: w - 1 / 3