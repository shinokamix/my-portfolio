import Image from "next/image";
import ParallaxContainer from "../shared/ParallaxContainer";
import Marquee from "../shared/Marqee";
import OpacitySection from "../shared/OpacitySection";

export default function Outro({ className }: { className?: string }) {
    const y: number = -200;

    return (
        <OpacitySection
            offset={["start 1", "end 0.6"]}
            inputRange={[0, 0.2, 0.8, 1]}
            outputRange={[1, 1, 1, 0]}
            className={`flex flex-col gap-[10dvh] md:gap-[20dvh] lg:gap-[30dvh] ${className}`}
        >
            <div className="flex relative">
                <ParallaxContainer
                    y={y}
                    z={0}
                    className="flex justify-center absolute left-[5%] top-[70%] pointer-events-none"
                >
                    <Image
                        src={"/outroImage.png"}
                        alt="image"
                        width={436}
                        height={545}
                        className="max-w-[20dvw]"
                    />
                </ParallaxContainer>

                <div className="flex flex-col gap-[5dvh] mx-[35%] font-serif text-[2dvw] text-center mt-[15%]">
                    <p className="font-light">
                        I enjoy learning new things and turning ideas into
                        working products.
                    </p>

                    <p className="font-bold">
                        {`I'm looking for opportunities to grow, create, and be part of
                something meaningful.`}
                    </p>
                </div>

                <ParallaxContainer
                    y={y}
                    z={0}
                    className="flex justify-center absolute right-[5%] top-[70%] pointer-events-none"
                >
                    <Image
                        src={"/outroImage.png"}
                        alt="image"
                        width={436}
                        height={545}
                        className="scale-x-[-1] max-w-[20dvw]"
                    />
                </ParallaxContainer>
            </div>
            <Marquee className="" />
        </OpacitySection>
    );
}
