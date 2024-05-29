import Text from '../../components/text';

export default function About() {
    return (
        <>
            <main className="flex justify-center pb-10 pt-20 z-20 relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose h-fit md:h-full">
                <div className="w-5/6 sm:w-3/5">
                    <a className="underline hover:text-gray-600" href="/">← Back to home page.</a>
                    <Text
                        title="More Projects"
                        content={<>
                            <p>Coming soon™️</p>
                        </>}
                        name="story"
                    />
                </div>
            </main>
        </>
    );
};