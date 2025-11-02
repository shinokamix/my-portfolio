import Projects from "../shared/Projects";

export default function ProjectsSection() {
    return (
        <section className="w-screen flex">
            <div className="w-[50%]">
                <h1 className="ml-[10%] mt-[10%] font-serif font-bold text-[5dvw]">
                    <span className="font-light">{"(My)"}</span>Projects
                </h1>
                <section className="mx-[10%] mt-[2.5%] font-sans text-[1dvw] flex flex-col gap-[1dvw]">
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

            <div className="w-[50%] flex mt-[13%]">
                <Projects />
            </div>
        </section>
    );
}
