import { experienceList } from "@/content/experience";
import Accordion from "../shared/Accordion";

export default function Experience({ className }: { className?: string }) {
    return (
        <section className={`flex flex-col ${className}`}>
            <h1 className="ml-[10%] mt-[10%] font-serif font-bold md:text-[5dvw] text-[3dvh]">
                <span className="font-light">{"(My)"}</span>Experience
            </h1>
            <Accordion
                items={experienceList}
                className="ml-[10%] mt-[2%]"
            />
        </section>
    );
}
