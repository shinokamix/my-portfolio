import Projects from "../shared/Projects";

export default function ProjectsSection({ className }: { className?: string }) {
    return (
        <section className={`w-screen flex sm:flex-row flex-col ${className}`}>
            <div className="sm:w-[50%]">
                <h1 className="ml-[10%] mt-[10%] font-serif font-bold md:text-[5dvw] text-[3dvh]">
                    <span className="font-light">{"(My)"}</span>Projects
                </h1>
                <section className="mx-[10%] mt-[2.5%] font-sans md:text-[1dvw] text-[0.5dvh] flex flex-col gap-[1dvw]">
                    <p>This is my creative lab.</p>
                    <p>
                        A place where I test ideas, break things on purpose, and
                        build what feels right. I like to treat frontend not as
                        production, but as a craft — with space for play,
                        mistakes, and discovery.
                    </p>
                    <p>
                        Every project here — whether big or small — is a way to
                        learn something new, to shape emotion through
                        interaction, to mix logic with aesthetics.
                    </p>
                    <p>
                        Because code, at its best, is just another form of art.
                    </p>
                </section>
            </div>

            <div className="sm:w-[50%] sm:mx-0 mx-[10%] flex mt-[13%]">
                <Projects />
            </div>
        </section>
    );
}
