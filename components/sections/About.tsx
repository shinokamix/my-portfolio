import { getAge } from "@/lib/utils/getAge";
import ScrollOpacityText from "../shared/ScrollOpacityText";
import OpacitySection from "../shared/OpacitySection";
import ParallaxContainer from "../shared/ParallaxContainer";
import Image from "next/image";

export default function About({ className }: { className?: string }) {
    const age: number = getAge("2005-04-28");

    return (
        <section
            className={`w-screen flex items-stretch leading-[1.05] ${className}`}
        >
            <div className="m-[5%] md:w-[40%] w-full">
                <p className="font-serif font-light md:text-[5dvw] text-[4dvh]">
                    <ScrollOpacityText>
                        {`I'm a Frontend Developer. Based in Kazan. ${age} years old.`}
                    </ScrollOpacityText>
                </p>

                <OpacitySection
                    offset={["start 0.9", "end 0.2"]}
                    inputRange={[0, 0.2, 0.8, 1]}
                    outputRange={[0, 1, 1, 0]}
                >
                    <p className="mt-[15%] font-serif font-light md:text-[5dvw] text-[4dvh]">
                        {`Studying at KFU `}
                    </p>
                    <p className="mt-[1%] font-sans font-light md:text-[1.5dvw] text-[1dvh]">
                        {`B.Sc., Applied Mathematics & Informatics, 2023-Present`}
                    </p>
                </OpacitySection>
            </div>
            <div className="w-[50%] relative md:block hidden">
                <ParallaxContainer
                    y={-150}
                    z={10}
                    className="absolute -translate-x-1/2 -translate-y-1/2 left-1/4 top-[35%] z-10"
                >
                    <Image
                        src={"/image1.png"}
                        alt=""
                        width={350}
                        height={438}
                        className="max-w-[15dvw]"
                    />
                </ParallaxContainer>
                <ParallaxContainer
                    y={-50}
                    z={0}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[50%]"
                >
                    <Image
                        src={"/image2.png"}
                        alt=""
                        width={500}
                        height={500}
                        className="max-w-[20dvw]"
                    />
                </ParallaxContainer>
                <ParallaxContainer
                    y={-200}
                    z={10}
                    className="absolute left-3/4 -translate-x-1/2 -translate-y-1/2 top-[75%] z-10"
                >
                    <Image
                        src={"/image3.png"}
                        alt=""
                        width={350}
                        height={467}
                        className="max-w-[15dvw]"
                    />
                </ParallaxContainer>
            </div>
        </section>
    );
}
