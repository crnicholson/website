export default function Button(props: { href: string; text: string; wiggle: string; }) {
    return (
        <>
            <a className={`${props.wiggle} mx-3 bg-[#041D27] p-2 rounded-lg text-[#2ECC71]`} href={props.href} target="_blank">{props.text}</a>
        </>
    );
}