"use client";

import { projectsList } from "@/content/projects";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "motion/react";

type HoverState =
    | { src: string; x: number; y: number; visible: true }
    | { visible: false };

export default function Projects() {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const [hover, setHover] = useState<HoverState>({ visible: false });
    const rafRef = useRef<number | null>(null);

    const updatePointer = (src: string, e: React.MouseEvent) => {
        if (!wrapRef.current) return;
        const rect = wrapRef.current.getBoundingClientRect();

        // координаты внутри контейнера + небольшой сдвиг, чтобы курсор не перекрывал картинку
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            setHover({ visible: true, src, x, y });
        });
    };

    const handleLeave = () => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        setHover({ visible: false });
    };

    return (
        <div
            ref={wrapRef}
            className="relative w-full"
            onMouseLeave={handleLeave}
        >
            <ul className="flex flex-col gap-[1dvh]">
                {projectsList.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="border mr-[10%] group"
                            onMouseEnter={(e) =>
                                updatePointer(item.imageSrc, e)
                            }
                            onMouseMove={(e) => updatePointer(item.imageSrc, e)}
                            onMouseLeave={() => setHover({ visible: false })}
                        >
                            <ProjectItem
                                title={item.title}
                                link={item.link}
                            />
                        </li>
                    );
                })}
            </ul>

            <motion.div
                className="absolute left-0 top-0 z-50 pointer-events-none will-change-transform"
                initial={{ opacity: 0, scale: 0.95, x: 0, y: 0 }}
                animate={{
                    opacity: hover.visible ? 1 : 0,
                    scale: hover.visible ? 1 : 0.98,
                    x: hover.visible ? hover.x + 18 : 0,
                    y: hover.visible ? hover.y + 18 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 36,
                    mass: 0.5,
                    opacity: { duration: 0.15 },
                }}
            >
                {hover.visible && (
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src={hover.visible ? hover.src : ""}
                            alt="Project preview"
                            width={320}
                            height={0}
                            className="block aspect-16/10 object-cover"
                            priority
                        />
                    </div>
                )}
            </motion.div>
        </div>
    );
}

function ProjectItem({ title, link }: { title: string; link: string }) {
    return (
        <Link
            href={link}
            className="block"
        >
            <h1 className="font-serif text-[3dvw] px-[3%]">{title}</h1>
        </Link>
    );
}
