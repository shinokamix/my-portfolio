"use client";

import { motion } from "motion/react";

export default function Marquee({ className }: { className?: string }) {
    return (
        <div
            className={`overflow-hidden whitespace-nowrap w-full py-4 ${className}`}
        >
            <motion.div
                className="inline-block"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <p className="font-serif font-bold opacity-50 text-[3dvw] blur-[2px]">
                    / the journey continues / the journey continues / the
                    journey continues / the journey continues / the journey
                    continues / the journey continues / the journey continues /
                    the journey continues / the journey continues / the journey
                    continues / the journey continues / the journey continues
                </p>
            </motion.div>
        </div>
    );
}
