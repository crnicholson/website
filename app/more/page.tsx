import Text from "../../components/text";
import Gallery from "../../components/gallery";

export default function More() {
    return (
        <>
            <main className="flex justify-center pt-20 relative font-[poppins] text-[#0d1b2a] bg-[#e0e1dd] prose min-h-screen">
                <div className="w-5/6 sm:w-3/5">
                    <a className="underline hover:text-gray-600" href="/">← Back to home page.</a>
                    <Text
                        title="More Projects"
                        content={<>
                            <p>Coming soon™️</p>
                        </>}
                        name="story"
                    />
                    <Gallery />
                </div>
            </main>
        </>
    );
};