"use client";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ReactNode, useRef } from "react";

type UseScrollOptions = Parameters<typeof useScroll>[0];
type ScrollOffset = NonNullable<UseScrollOptions>["offset"];

export default function OpacitySection({
    children,
    offset = ["start 1", "end 0"],
    inputRange = [0, 1, 1, 1],
    outputRange = [0, 1, 1, 1],
    className = "",
}: {
    children: ReactNode;
    offset?: ScrollOffset;
    inputRange?: [number, number, number, number];
    outputRange?: [number, number, number, number];
    className?: string;
}) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: offset,
    });

    const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

    const opacity = useTransform(smooth, inputRange, outputRange);

    return (
        <motion.section
            style={{ opacity: opacity }}
            ref={container}
            className={className}
        >
            {children}
        </motion.section>
    );
}
