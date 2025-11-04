import Image from "next/image";
import ParallaxContainer from "../shared/ParallaxContainer";
import OpacitySection from "../shared/OpacitySection";

export default function Manifesto({ className }: { className?: string }) {
    return (
        <section
            className={`flex flex-col relative leading-[1.05] ${className}`}
        >
            <ParallaxContainer
                x={200}
                z={-10}
                className="absolute -left-[25dvh] pointer-events-none"
            >
                <Image
                    src={"/manifestoLeft.png"}
                    alt=""
                    width={950}
                    height={1080}
                    className="max-w-[50dvw]"
                />
            </ParallaxContainer>
            <ParallaxContainer
                x={-200}
                z={-10}
                className="absolute -right-[25dvh] pointer-events-none"
            >
                <Image
                    src={"/manifestoRight.png"}
                    alt=""
                    width={950}
                    height={1080}
                    className="max-w-[50dvw] "
                />
            </ParallaxContainer>
            <OpacitySection
                offset={["start 0.9", "end 0.1"]}
                inputRange={[0, 0.2, 0.8, 1]}
                outputRange={[0, 1, 1, 0]}
            >
                <div className="mx-[5%] mt-[5%] mb-[50%] font-serif font-light text-[3dvw] text-center">
                    <h1>
                        For me, <b>frontend</b> isn’t about screens —{" "}
                        <b>it’s about clarity.</b>
                    </h1>
                    <h1>
                        About <b>turning data</b> into something{" "}
                        <b>you can feel.</b>
                    </h1>
                </div>
            </OpacitySection>
        </section>
    );
}
