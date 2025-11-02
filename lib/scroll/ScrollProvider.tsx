"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";

import { frame, cancelFrame, type FrameData } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        const update = (data: FrameData) => {
            lenisRef.current?.lenis?.raf(data.timestamp);
            ScrollTrigger.update();
        };

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis
            root
            options={{ autoRaf: false }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
