import { getAge } from "@/lib/utils/getAge";
import ScrollOpacityText from "../shared/ScrollOpacityText";
import OpacitySection from "../shared/OpacitySection";
import ParallaxContainer from "../shared/ParallaxContainer";
import Image from "next/image";

export default function About() {
    const age: number = getAge("2005-04-28");

    return (
        <section className="min-h-screen h-screen w-screen flex leading-[1.05]">
            <div className="m-[5%] w-[40%]">
                <p className="font-serif font-light text-[5dvw]">
                    <ScrollOpacityText>
                        {`I'm a Frontend Developer. Based in Kazan. ${age} years old.`}
                    </ScrollOpacityText>
                </p>

                <OpacitySection
                    offset={["start 0.9", "end 0.2"]}
                    inputRange={[0, 0.2, 0.8, 1]}
                    outputRange={[0, 1, 1, 0]}
                >
                    <p className="mt-[15%] font-serif font-light text-[5dvw]">
                        {`Studying at KFU `}
                    </p>
                    <p className="mt-[1%] font-sans font-light text-[1.5dvw]">
                        {`B.Sc., Applied Mathematics & Informatics, 2023-Present`}
                    </p>
                </OpacitySection>
            </div>
            <div className="w-[50%] relative h-full">
                <ParallaxContainer
                    y={-150}
                    z={10}
                >
                    <Image
                        src={"/image1.png"}
                        alt=""
                        width={300}
                        height={0}
                        className="absolute h-auto -translate-x-1/2 -translate-y-1/2 left-1/4 top-[35dvh]"
                    />
                </ParallaxContainer>
                <ParallaxContainer
                    y={-50}
                    z={0}
                >
                    <Image
                        src={"/image2.png"}
                        alt=""
                        width={400}
                        height={0}
                        className="absolute top-[50dvh] left-1/2 -translate-x-1/2 -translate-y-1/2  transform- h-auto"
                    />
                </ParallaxContainer>
                <ParallaxContainer
                    y={-200}
                    z={10}
                >
                    <Image
                        src={"/image3.png"}
                        alt=""
                        width={300}
                        height={0}
                        className="absolute left-3/4 top-[85dvh] -translate-x-1/2 -translate-y-1/2 h-auto"
                    />
                </ParallaxContainer>
            </div>
        </section>
    );
}
