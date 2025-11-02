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

export default function Footer() {
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
        <footer className="min-h-screen relative overflow-hidden">
            <div className="flex w-screen h-[90dvh]">
                <section className="flex flex-col ml-[10%] h-full justify-center gap-[1dvh] font-sans font-normal text-[2dvw] w-[50%] group">
                    {contactInfo.map((item) => (
                        <motion.div
                            key={item.id}
                            onHoverStart={() => setHovered(item.id)}
                            onHoverEnd={() => setHovered("")}
                            animate={{
                                opacity:
                                    hovered && hovered !== item.id ? 0.4 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-fit"
                        >
                            <Link href={item.link}>{item.title}</Link>
                        </motion.div>
                    ))}
                </section>
                <section className="flex flex-col gap-[1dvh] font-sans text-[2dvw] w-[50%] text-right mt-[20dvh] mr-[10%]">
                    <h1 className="font-serif font-bold text-[5dvw]">
                        {`Let's Connect`}
                    </h1>
                    <div className="flex flex-col gap-[1dvh] mr-[10%]">
                        <p>+7 (996) 900 35-77</p>
                        <p>nail.dev@icloud.com</p>
                    </div>
                    <p className="font-sans font-light text-[1dvw] text-left mt-[40%]">
                        Thanks for visiting
                    </p>
                </section>
            </div>
            <div className="h-[10dvh] font-serif flex justify-between mx-[5%] items-center">
                <p>{time ? `${time} KAZAN, RUSSIA` : `--:-- KAZAN, RUSSIA`}</p>
                <p className="">
                    © {currentYear} Nail Abdullin. All Rights Reserved.
                </p>
            </div>
            <div className="absolute -bottom-[20%] left-[25%] pointer-events-none">
                <ParallaxContainer
                    y={-450}
                    z={-10}
                >
                    <Image
                        src={"/footerImage.png"}
                        alt=""
                        width={500}
                        height={1000}
                    />
                </ParallaxContainer>
            </div>
        </footer>
    );
}
