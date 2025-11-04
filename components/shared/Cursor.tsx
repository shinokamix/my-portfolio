"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const SPRING = { stiffness: 550, damping: 40, mass: 0.7 };

export default function Cursor() {
    // хуки — всегда сверху, без условий
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, SPRING);
    const y = useSpring(rawY, SPRING);

    const [hovering, setHovering] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [inWindow, setInWindow] = useState(true); // <- будем размонтировать при выходе

    // определяем тач-устройства асинхронно (чтобы не триггерить правило set-state-in-effect)
    useEffect(() => {
        const media = window.matchMedia("(pointer: coarse)");
        setTimeout(() => setIsTouch(media.matches), 0);

        // если пользователь переключит устройство ввода (редко, но бывает)
        const onChange = () => setIsTouch(media.matches);
        media.addEventListener?.("change", onChange);
        return () => media.removeEventListener?.("change", onChange);
    }, []);

    useEffect(() => {
        if (isTouch) return;

        const move = (e: MouseEvent) => {
            rawX.set(e.clientX - 9);
            rawY.set(e.clientY - 9);
            if (!inWindow) setInWindow(true); // перестраховка, если вернулись без pointerenter
        };

        // hover на кликабельных
        const hoverable =
            'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

        const onOver = (e: MouseEvent) => {
            const t = e.target as Element | null;
            if (t?.closest(hoverable)) setHovering(true);
        };
        const onOut = (e: MouseEvent) => {
            const t = e.target as Element | null;
            if (t?.closest(hoverable)) setHovering(false);
        };

        // фиксация выхода из окна
        const leaveLike = () => setInWindow(false);
        const enterLike = () => setInWindow(true);

        // Работают в разных браузерах:
        window.addEventListener("mousemove", move, { passive: true });
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);

        // когда указатель покидает viewport
        window.addEventListener("mouseleave", leaveLike);
        // когда снова заходит
        window.addEventListener("mouseenter", enterLike);

        // Дополнительно: если вкладка стала невидимой — прячем курсор
        const onVisibility = () => setInWindow(!document.hidden);
        document.addEventListener("visibilitychange", onVisibility);

        // На всякий: pointer-события (лучше работают с трекпадами)
        document.documentElement.addEventListener("pointerleave", leaveLike);
        document.documentElement.addEventListener("pointerenter", enterLike);

        return () => {
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
            window.removeEventListener("mouseleave", leaveLike);
            window.removeEventListener("mouseenter", enterLike);
            document.removeEventListener("visibilitychange", onVisibility);
            document.documentElement.removeEventListener(
                "pointerleave",
                leaveLike
            );
            document.documentElement.removeEventListener(
                "pointerenter",
                enterLike
            );
        };
    }, [isTouch, rawX, rawY, inWindow]);

    // не рендерим на тач-устройствах и когда курсор вне окна
    if (isTouch || !inWindow) return null;

    const base = 18;
    const scale = hovering ? 5 : 1;

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none fixed z-50"
            style={{ left: x, top: y, width: base, height: base }}
            animate={{ scale }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
            <div className="h-full w-full rounded-full bg-black opacity-30" />
        </motion.div>
    );
}
