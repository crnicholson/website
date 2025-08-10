import StyledLink from "./styledLink";

export default function Footer() {
    return (
        // <footer className="border border-border bg-card-bg rounded-xl p-4 shadow-lg mt-[60px] mx-5 mb-5 w-fit">
        //     <p>
        //         © {new Date().getFullYear()} Charles Nicholson. Open source on{" "}
        //         <StyledLink
        //             href="www.github.com/crnicholson/website"
        //         >
        //             GitHub
        //         </StyledLink>{" "}
        //         and hosted on Vercel. Licensed under MIT.
        //     </p>
        // </footer>
        <footer className="p-4 mt-[60px] mx-5 w-fit text-link-hover text-xs">
            <p>
                © {new Date().getFullYear()} Charles Nicholson. Open source on{" "}
                <StyledLink
                    href="www.github.com/crnicholson/website"
                >
                    GitHub
                </StyledLink>{" "}
                and hosted on Vercel. Licensed under MIT.
            </p>
        </footer>
    );
}