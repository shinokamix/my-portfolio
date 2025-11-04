"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contactInfo } from "@/content/contactInfo";
import ParallaxContainer from "../shared/ParallaxContainer";
import { motion } from "motion/react";

function formatKazanTime() {
    return new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Moscow", // Казань = MSK (UTC+3)
    }).format(new Date());
}

export default function Footer({ className }: { className?: string }) {
    const [time, setTime] = useState<string>("");
    const [hovered, setHovered] = useState("");

    useEffect(() => {
        const tick = () => setTime(formatKazanTime());

        // первый апдейт — асинхронно (не синхронно в эффекте)
        const t0 = setTimeout(tick, 0);

        // периодические обновления (например, раз в 15 секунд)
        const id = setInterval(tick, 15_000);

        return () => {
            clearTimeout(t0);
            clearInterval(id);
        };
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`relative overflow-hidden ${className}`}>
            <div className="flex w-screen items-stretch">
                <section className="flex flex-col ml-[10%] mt-[5%] h-full justify-center gap-[1dvh] font-sans font-normal md:text-[2dvw] text-[1dvh] w-[50%] group">
                    {contactInfo.map((item) => (
                        <motion.div
                            key={item.id}
                            onHoverStart={() => setHovered(item.id)}
                            onHoverEnd={() => setHovered("")}
                            animate={{
                                opacity:
                                    hovered && hovered !== item.id ? 0.2 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-fit"
                        >
                            <Link href={item.link}>{item.title}</Link>
                        </motion.div>
                    ))}
                </section>
                <section className="flex flex-col gap-[1dvh] font-sans md:text-[2dvw] text-[1dvh] w-[50%] text-right mr-[10%]">
                    <h1 className="font-serif font-bold md:text-[5dvw] text-[2dvh]">
                        {`Let's Connect`}
                    </h1>
                    <div className="flex flex-col gap-[1dvh] mr-[10%]">
                        <p>+7 (996) 900 35-77</p>
                        <p>nail.dev@icloud.com</p>
                    </div>
                    <p className="font-sans font-light md:text-[1dvw] text-[0.5dvh] text-left mt-[40%]">
                        Thanks for visiting
                    </p>
                </section>
            </div>
            <div className="my-[2%] md:text-[1dvw] text-[0.5dvh] font-serif flex justify-between mx-[5%] items-center">
                <p>{time ? `${time} KAZAN, RUSSIA` : `--:-- KAZAN, RUSSIA`}</p>
                <p className="">
                    © {currentYear} Nail Abdullin. All Rights Reserved.
                </p>
            </div>
            <div className="absolute md:-bottom-[27%] -bottom-[35%] left-[20%] pointer-events-none">
                <ParallaxContainer
                    y={-450}
                    z={-10}
                >
                    <Image
                        src={"/footerImage.png"}
                        alt=""
                        width={631}
                        height={946}
                        className="max-w-[25dvw]"
                    />
                </ParallaxContainer>
            </div>
        </footer>
    );
}
