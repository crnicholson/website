import Image from "next/image";

// export default function Project(props: { content: string; src: string; link: string; title: string; date: string; name: string; alt: string; }) {
//     return (
//         <>
//             <div className="h-fit w-fit mt-4">
//                 <a href={props.link} target="_blank">
//                     <div className="group flex flex-col gap-2 items-center">
//                         <div className="relative mx-5 my-2 bg-[rgba(0,0,0,.1)] shadow-xl group-hover:shadow-3xl sm:h-[250px] h-[150px] w-auto rounded-lg overflow-visible">
//                             <Image
//                                 src={"/" + props.src}
//                                 width={200}
//                                 height={200}
//                                 className="rounded-lg object-cover w-full h-full group-hover:opacity-10"
//                                 alt={props.alt}
//                             />
//                             <div className="absolute inset-0 shadow-2xl rounded-lg h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-auto">
//                                 <div className="p-2">
//                                     <h1 className="text-2xl italic font-bold">
//                                         {props.title}
//                                     </h1>
//                                     <p className="text-[12px] italic">
//                                         {props.date}
//                                     </p>
//                                     <p className="text-[13px] pt-5">
//                                         {props.content}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-fit h-fit p-1 rounded-2xl italic inset-x-0 flex flex-row justify-center items-center bg-[rgba(0,0,0,0.1)]">
//                             <h1 id={props.name} className="mr-2 text-[13px] font-bold transition-colors duration-300">
//                                 {props.title}
//                             </h1>
//                             <p className="text-[8px] bg-[rgba(0,0,0,0.1)] rounded-2xl p-[3px]">
//                                 {props.date}
//                             </p>
//                         </div>
//                     </div >
//                 </a>
//             </div>
//         </>
//     );
// };

export default function Project(props: { content: string; src: string; link: string; title: string; date: string; name: string; alt: string; }) {
    return (
        <div className="mt-4 max-w-[400px]">
            <div className="shadow-lg rounded-lg">
                <a target="_blank" href={props.link} className="hover:text-gray-600 text-2xl italic font-bold block text-left pl-2 pt-2">
                    {props.title}
                </a>
                <div className="sm:h-[250px] h-[200px] flex justify-between items-center">
                    <Image
                        src={"/" + props.src}
                        width={200}
                        height={200}
                        className="rounded-2xl w-fit h-full p-2"
                        alt={props.alt}
                    />
                    <div className="h-full pl-2 pr-4">
                        <p className="text-[13px] pt-2">
                            {props.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
