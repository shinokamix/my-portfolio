"use client";

import type { ExperienceItem as Item } from "@/content/experience";
import AccordionRow from "./AccordionRow";
import gsap from "gsap";
import useGSAP from "gsap";

gsap.registerPlugin({ useGSAP });

export default function Accordion({
    items,
    className,
}: {
    items: Item[];
    className: string;
}) {
    return (
        <div className={`w-[80%] ${className}`}>
            {items.map((it) => (
                <AccordionRow
                    key={it.id}
                    item={it}
                />
            ))}
        </div>
    );
}
