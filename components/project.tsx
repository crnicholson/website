// import { ReactNode } from 'react';
// import GradientBlur from "./gradientBlur";

// export default function Project(props: { title: string; content: ReactNode; name: string; url: string; image: string; alt: string; }) {
//     return (
//         <>
//             <a href={props.url}>
//                 <div className="rounded-lg px-5 p-5 hover:bg-[rgb()] m-5 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl group h-fit w-fit">
//                     {/* <GradientBlur /> */}
//                     <h1 id={props.name} className="text-4xl font-bold py-5 transition-colors duration-300 ">
//                         {props.title}
//                     </h1>
//                     <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row">
//                         <div className="transition-opacity duration-300 group-hover:opacity-80">
//                             {props.content}
//                         </div>
//                         <img className="mt-5 sm:mt-5 md:-mt-[60px] md:ml-5 rounded-lg w-[150px] h-fit" src={props.image} alt={props.title}/>
//                         <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
//                         <br />
//                     </div>
//                 </div>
//             </a>
//         </>
//     );
// };

// import { ReactNode } from 'react';
// import GradientBlur from "./gradientBlur";

// export default function Project(props: { title: string; content: ReactNode; name: string; url: string; image: string; alt: string; }) {
//     return (
//         <>
//             <a href={props.url}>
//                 <div className="flex flex-col md:flex-row rounded-lg p-5 hover:bg-[rgb()] m-5 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl group h-fit w-fit">
//                     {/* <GradientBlur /> */}
//                     <div className="flex flex-col md:flex-row justify-between w-full">
//                         <div>
//                             <h1 id={props.name} className="text-4xl font-bold py-5 transition-colors duration-300 ">
//                                 {props.title}
//                             </h1>
//                             <div className="transition-opacity duration-300 group-hover:opacity-80">
//                                 {props.content}
//                             </div>
//                         </div>
//                         <img className="self-center md:self-center mt-5 md:mt-0 md:ml-5 rounded-lg w-fit md:w-[150px] h-fit" src={props.image} alt={props.title} />
//                     </div>
//                     <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
//                 </div>
//             </a>
//         </>
//     );
// };

export default function Project(props: { title: string; name: string; url: string; image: string; date: string; alt: string; color: string; bg: string; }) {
    return (
        <>
            <a href={props.url} target="_blank">
                <div className="relative group rounded-lg m-5 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl h-[300px] w-fit">
                    <img className="rounded-lg w-fit h-[300px]" src={props.image} alt={props.title} />
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