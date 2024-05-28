// export default function Image(props: { src: string, alt: string }) {
//     return (
//         <>
//             <div className="w-[300px] relative flex flex-col justify-center items-center rounded-lg p-3 m-5 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl group">
//                 <div className="transition-opacity duration-300 group-hover:opacity-80">
//                     <img className="h-full w-fit rounded-lg" src={props.src} alt={props.alt}></img>
//                 </div>
//                 <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
//             </div>
//             {/* <div className="flex flex-col justify-center items-center rounded-lg">
//                 <img className="rounded-lg object-contain w-64 h-auto" src={props.src} alt={props.alt}></img>
//             </div> */}
//         </>
//     );
// };


export default function Image(props: { src: string, alt: string }) {
    return (
        <>
            <div className="relative flex flex-col justify-center items-center rounded-lg p-3 transform transition-transform duration-300 hover:scale-105 bg-[rgba(0,0,0,.1)] hover:shadow-2xl group" style={{ width: '300px' }}>
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                    <img className="rounded-lg" src={props.src} alt={props.alt} style={{ width: '300px', height: 'auto' }} />
                </div>
                <div className="absolute inset-0 shadow-2xl rounded-lg group-hover:border-transparent transition-all duration-300"></div>
            </div>
        </>
    );
};