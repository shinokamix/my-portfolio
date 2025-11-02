"use client";
import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxContainer({
    children,
    y = 0,
    x = 0,
    z = -1,
    className,
}: {
    children: ReactNode;
    y?: number;
    x?: number;
    z?: number;
    className?: string;
}) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,

        offset: ["start end", "end start"],
    });

    const transition_y = useTransform(scrollYProgress, [0, 1], [0, y]);
    const transition_x = useTransform(scrollYProgress, [0, 1], [0, x]);

    return (
        <div className={className}>
            <motion.div
                style={{ y: transition_y, x: transition_x, zIndex: z }}
                ref={container}
                className={`relative w-full h-full`}
            >
                {children}
            </motion.div>
        </div>
    );
}
