export default function MoreProjects(props: { content: string; image: string; link: string; title: string; date: string; name: string; bg: string; color: string; }) {
    return (
        <>
            <div className="h-fit w-fit mt-4">
                <a href={props.link} target="_blank">
                    <div className="group flex flex-col gap-2 items-center">
                        <div className="relative mx-5 my-2 transform transition-transform duration-300  bg-[rgba(0,0,0,.1)] group-hover:shadow-2xl h-[300px] w-fit rounded-lg">
                            <img className="rounded-lg w-fit h-[300px] group-hover:opacity-10" src={props.image} alt={props.title} />
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
                        <div className="w-fit h-fit p-1 rounded-2xl italic inset-x-0 flex flex-row justify-center items-center" style={{ backgroundColor: props.bg }}>
                            <h1 id={props.name} className="mr-2 text-[13px] font-bold transition-colors duration-300" style={{ color: props.color }}>
                                {props.title}
                            </h1>
                            <p className="text-[8px] bg-[rgba(0,0,0,0.1)] rounded-2xl p-[3px]" style={{ color: props.color }}>
                                {props.date}
                            </p>
                        </div>
                    </div >
                </a>
            </div>
        </>
    );
};