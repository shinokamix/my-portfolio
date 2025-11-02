import { experienceList } from "@/content/experience";
import Accordion from "../shared/Accordion";

export default function Experience() {
    return (
        <section className="min-h-screen flex flex-col">
            <h1 className="ml-[10%] mt-[10%] font-serif font-bold text-[5dvw]">
                <span className="font-light">{"(My)"}</span>Experience
            </h1>
            <Accordion
                items={experienceList}
                className="ml-[10%] mt-[2%]"
            />
        </section>
    );
}
