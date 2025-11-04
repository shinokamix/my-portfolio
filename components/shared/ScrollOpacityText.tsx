"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef, ReactNode } from "react";

export default function ScrollOpacityText({
    children,
    className = "",
}: {
    children: string;
    className?: string;
}) {
    console.log(typeof children);
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,

        offset: ["start 0.9", "start 0.35"],
    });

    const characters = children.split("");

    return (
        <span
            className={className}
            ref={container}
        >
            {characters.map((char: string, i: number) => {
                const start = i / characters.length;
                const end = start + 1 / characters.length;
                return (
                    <Char
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {char}
                    </Char>
                );
            })}
        </span>
    );
}

function Char({
    children,
    progress,
    range,
}: {
    children: ReactNode;
    progress: MotionValue;
    range: number[];
}) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return <motion.span style={{ opacity: opacity }}>{children}</motion.span>;
}
