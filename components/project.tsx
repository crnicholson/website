export default function Project(props: { title: string; name: string; url: string; image: string; date: string; alt: string; color: string; bg: string; }) {
    return (
        <>
            <a href={props.url} target="_blank">
                <div className="relative group rounded-lg m-5 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl aspect-w-1 aspect-h-1 w-full sm:w-fit">
                    <img className="rounded-lg w-full h-full object-cover" src={props.image} alt={props.title} />
                    <div className="w-fit mx-auto p-1 rounded-2xl italic absolute bottom-0 inset-x-0 flex flex-row mb-2 justify-center items-center" style={{ backgroundColor: props.bg }}>
                        <h1 id={props.name} className="mr-2 text-[13px] font-bold transition-colors duration-300" style={{ color: props.color }}>
                            {props.title}
                        </h1>
                        <p className="text-[8px] bg-[rgba(0,0,0,0.1)] rounded-2xl p-[3px]" style={{ color: props.color }}>
                            {props.date}
                        </p>
                    </div>
                    <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
                </div>  
            </a>
        </>
    );
};