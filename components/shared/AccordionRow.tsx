"use client";

import { useState, useId } from "react";
import { type ExperienceItem as Item } from "@/content/experience";

import { AnimatePresence, motion } from "motion/react";

export default function AccordionRow({ item }: { item: Item }) {
    const [open, setOpen] = useState(false);
    const contentId = useId();

    return (
        <div className="border my-1">
            <button
                className="w-full flex items-center justify-between p-[2%] hover:cursor-pointer"
                aria-expanded={open}
                aria-controls={contentId}
                onClick={() => setOpen((v) => !v)}
            >
                <div className="flex font-serif text-[3dvw]">
                    <p className="w-[5dvw] pr-2 text-center">
                        {open ? "-" : "++"}
                    </p>
                    <h1>{item.title}</h1>
                </div>
                <span className="font-sans text-[1dvw]">{item.jobTitle}</span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="px-[6dvw] pb-4">
                            <p className="font-sans text-[1dvw]">
                                {item.content}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
