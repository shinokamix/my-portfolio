"use client";

import Image from "next/image";
import { skills } from "@/content/skills";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import ScrollOpacityText from "../shared/ScrollOpacityText";

export default function Skills() {
    const [hovered, setHovered] = useState("");

    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["end end", "end start"],
    });

    // слегка сгладим
    const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

    // диагональ: из левого-нижнего в правый-верхний, только в диапазоне [0,1]
    const x = useTransform(smooth, [0, 1], ["0vw", "40vw"], { clamp: true });
    const y = useTransform(smooth, [0, 1], ["0vh", "-40vh"], { clamp: true });

    const mainSkills = skills.filter((s) => s.main);
    const otherSkills = skills.filter((s) => !s.main);

    return (
        <section
            className="relative flex md:flex-row flex-col w-dvw min-h-screen"
            ref={sectionRef}
        >
            <div className="flex flex-col justify-between w-[50%]">
                <ScrollOpacityText className="m-[10%] font-serif text-[3dvw] whitespace-normal">
                    I like code that behaves. Fast, predictable, and invisible.
                </ScrollOpacityText>
            </div>

            <div className="w-[50%] flex grow items-center">
                <div className="flex font-sans font-light text-[1dvw]">
                    <section className="mr-[40%]">
                        <h1 className="font-serif font-bold text-[2dvw] whitespace-pre">
                            Technical Skills
                        </h1>
                        <div className="flex gap-[40%]">
                            {[mainSkills, otherSkills].map((group, index) => (
                                <ul key={index}>
                                    {group.map((item) => (
                                        <li key={item.id}>
                                            <motion.div
                                                onHoverStart={() =>
                                                    setHovered(item.id)
                                                }
                                                onHoverEnd={() =>
                                                    setHovered("")
                                                }
                                                animate={{
                                                    opacity:
                                                        hovered &&
                                                        hovered !== item.id
                                                            ? 0.4
                                                            : 1,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="w-fit"
                                            >
                                                <Link href={item.link}>
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h1 className="font-serif font-bold text-[2dvw]">
                            Languages
                        </h1>
                        <p>{"Russian (native)"}</p>
                        <p>{"English (intermediate)"}</p>
                    </section>
                </div>
            </div>
            <motion.div
                className="absolute left-0 bottom-0 pointer-events-none will-change-transform z-10"
                style={{ x, y }}
            >
                <Image
                    src="/plane.png"
                    alt="plane"
                    width={800}
                    height={800}
                    priority
                />
            </motion.div>
        </section>
    );
}
