import Image from "next/image";
import ParallaxContainer from "../shared/ParallaxContainer";
import Marquee from "../shared/Marqee";
import OpacitySection from "../shared/OpacitySection";

export default function Outro() {
    const y: number = -200;

    return (
        <section className="min-h-screen flex flex-col justify-between">
            <div className="flex h-[97dvh] mt-[5dvh] relative">
                <ParallaxContainer
                    y={y}
                    z={0}
                    className="flex justify-center absolute left-[5%] top-[40%] pointer-events-none"
                >
                    <Image
                        src={"/outroImage.png"}
                        alt="image"
                        width={400}
                        height={600}
                    />
                </ParallaxContainer>

                <div className="flex flex-col gap-[5dvh] mx-[35%] font-serif text-[2dvw] text-center mt-[15%]">
                    <p className="font-light">
                        I enjoy learning new things and turning ideas into
                        working products.
                    </p>
                    <OpacitySection
                        offset={["start 0.9", "end 0.1"]}
                        inputRange={[0, 0.2, 0.8, 1]}
                        outputRange={[0, 1, 1, 0]}
                    >
                        <p className="font-bold">
                            {`I'm looking for opportunities to grow, create, and be part of
                something meaningful.`}
                        </p>
                    </OpacitySection>
                </div>

                <ParallaxContainer
                    y={y}
                    z={0}
                    className="flex justify-center absolute right-[5%] top-[40%] pointer-events-none"
                >
                    <Image
                        src={"/outroImage.png"}
                        alt="image"
                        width={400}
                        height={0}
                        className="scale-x-[-1]"
                    />
                </ParallaxContainer>
            </div>
            <Marquee className="" />
        </section>
    );
}
