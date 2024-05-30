export default function Button(props: { href: string; text: string; wiggle: string; }) {
    return (
        <>
            <a className={`${props.wiggle} mx-3 bg-[rgba(0,0,0,.1)] p-2 rounded-lg`} href={props.href} target="_blank">{props.text}</a>
        </>
    );
}