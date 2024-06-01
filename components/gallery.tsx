import MoreProjects from './moreProjects';

export default function Gallery() {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center pb-10">
                <MoreProjects
                    content="StratoSoar is a high-altitude Unmanned Autonomous Vehicle (UAV), capable of flying to selected coordinates. It is designed to be dropped from a weather balloon at 10,000 feet of altitude."
                    image="board.png"
                    title="StratoSoar MK2"
                    date="2023-"
                    name="StratoSoar"
                    bg="rgba(0,0,0,0.1)"
                    color="black"
                    link="https://www.github.com/crnicholson/StratoSoar-MK2"
                />
                <MoreProjects
                    content="This carbon capture project is a DIY carbon capture machine that removes CO2 from the atmosphere. It was a summer project between seventh and eighth grade and I learned tons."
                    image="ccProject.jpeg"
                    title="Carbon Capture"
                    date="2023"
                    name="Carbon Capture"
                    bg="rgba(0,0,0,0.1)"
                    color="black"
                    link="https://nicholsonlabs.gitbook.io/labs/carbon-capture"
                />
                <MoreProjects
                    content="This was a project in conjunction with Hack Club that gave youth ham radios if they got their license. I was the co-founder and I spearheaded web design along with the curriculum, planning and organization."
                    image="hamclub.png"
                    title="Ham Club"
                    date="2024"
                    name="Ham Club"
                    bg="rgba(0,0,0,0.1)"
                    color="black"
                    link="https://ham.hackclub.com/"
                />
                <MoreProjects
                    content="This website was created to showcase my projects and to give a little bit of information about me. It was created using Next.js and Tailwind CSS."
                    image="website.png"
                    title="Personal Website"
                    date="2024"
                    name="Personal Website"
                    bg="rgba(0,0,0,0.1)"
                    color="black"
                    link="/"
                />
            </div>
        </>
    );
};