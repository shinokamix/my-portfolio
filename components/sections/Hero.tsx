import OpacitySection from "../shared/OpacitySection";

export default function Hero({ className }: { className?: string }) {
    return (
        <section
            className={`min-h-screen flex flex-col items-center ${className}`}
        >
            <div className="grow flex items-center justify-center">
                <h1 className="font-serif font-bold md:text-[7dvw] text-[5dvh] text-center">
                    Nail Abdullin
                </h1>
            </div>

            <OpacitySection
                offset={["start 1", "end 0.8"]}
                inputRange={[0, 0, 0.8, 1]}
                outputRange={[1, 1, 1, 0]}
            >
                <p className="mb-10 font-sans font-light md:text-[1dvw] text-[1dvh]">
                    slide for more
                </p>
            </OpacitySection>
        </section>
    );
}
