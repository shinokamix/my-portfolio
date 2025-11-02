import Image from "next/image";
import ParallaxContainer from "../shared/ParallaxContainer";
import OpacitySection from "../shared/OpacitySection";

export default function Manifesto() {
    return (
        <section className="flex flex-col mt-[10%] relative min-h-screen leading-[1.05] ">
            <ParallaxContainer
                x={200}
                z={-10}
                className="absolute -left-50 pointer-events-none"
            >
                <Image
                    src={"/manifestoLeft.png"}
                    alt=""
                    width={700}
                    height={700}
                />
            </ParallaxContainer>
            <ParallaxContainer
                x={-200}
                z={-10}
                className="absolute -right-50 pointer-events-none"
            >
                <Image
                    src={"/manifestoRight.png"}
                    alt=""
                    width={700}
                    height={700}
                />
            </ParallaxContainer>
            <OpacitySection
                offset={["start 0.9", "end 0.1"]}
                inputRange={[0, 0.2, 0.8, 1]}
                outputRange={[0, 1, 1, 0]}
            >
                <div className="mx-[5%] mt-[5%] font-serif font-light text-[3dvw] text-center">
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
