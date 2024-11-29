import Button from "./button";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="bg-[#03161F]  text-[#BDBDBD]">
                <div className="flex flex-col-reverse sm:flex-row justify-center gap-5 p-10 pt-[45px] sm:pt-[200px]">
                    <div className="max-w-4xl w-fit">
                        <p className="text-xl font-light">
                            HEY THERE, I{"'"}M
                        </p>
                        <h1 className="text-[#2ECC71] text-5xl sm:text-6xl font-bold w-fit">
                            Charlie Nicholson
                        </h1>
                        <p className="text-lg font-light mt-4 mx-auto max-w-xl">
                            I am a freshman in high school in the suburbs of Boston. I go by cnicholson or crnicholson online and I aspire to be an electrical engineer. When I{"'"}m not in my bedroom lab coding and tinkering, you can find me running and enjoying nature. <a className="underline hover:text-gray-600" target="_blank" href="/about">Here{"'"}s more about me.</a>
                        </p>
                    </div>
                    <Image
                        src="/me.jpg"
                        width={300}
                        height={300}
                        className="w-[200px] h-fit rounded-lg"
                        alt="me"
                    />
                </div>

                <div className="flex flex-wrap gap-5 mb-5 pr-2 justify-center">
                    <Button
                        href="mailto:charlienicholsonr@gmail.com"
                        text="Contact"
                        wiggle="wiggle-one-button"
                    />
                    <Button
                        href="https://github.com/crnicholson"
                        text="GitHub"
                        wiggle="wiggle-three-button"
                    />
                    <Button
                        href="https://www.linkedin.com/in/charles-richard-nicholson/"
                        text="LinkedIn"
                        wiggle="wiggle-one-button"
                    />
                    <Button
                        href="https://www.read.cv/crn"
                        text="My CV"
                        wiggle="wiggle-two-button"
                    />
                    <Button
                        href="https://www.youtube.com/@charlienicholsonr?sub_confirmation=1"
                        text="YouTube"
                        wiggle="wiggle-three-button"
                    />
                    <Button
                        href="https://www.qrz.com/db/KC1SFR"
                        text="QRZ Page"
                        wiggle="wiggle-two-button"
                    />
                    <Button
                        href="https://linktr.ee/charlienicholson"
                        text="LinkTree"
                        wiggle="wiggle-three-button"
                    />
                    <Button
                        href="https://www.venmo.com/u/CharlieNicholsonR"
                        text="Support Me"
                        wiggle="wiggle-one-button"
                    />
                </div>
            </div>
        </>
    );
}

/* <div className="invisible sm:visible h-[5%] sm:h-[10%] flex flex-row items-center justify-end pr-2">
                        <a href="#about" className="pr-3 italic font-light underline hover:text-gray-600 text-[#0d1b2a]">
                            About
                        </a>
                        <a href="#projects" className="pr-3 italic font-light underline hover:text-gray-600 text-[#0d1b2a]">
                            What I{"'"}ve Done
                        </a>
                        <a href="#gallery" className="pr-3 italic font-light underline hover:text-gray-600 text-[#0d1b2a]">
                            Gallery
                        </a>
                    </div> */