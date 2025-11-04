import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Manifesto from "@/components/sections/Manifesto";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Outro from "@/components/sections/Outro";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <div>
            <Hero />
            <About className="lg:mt-[10%] md:mt-[10%]" />
            <Manifesto className="lg:mt-[20%] md:mt-[40%] sm:mt-[50%] mt-[100%]" />
            <Experience className="lg:mt-0 md:mt-[30%] sm:mt-[40%]" />
            <Skills className="lg:mt-[55dvh] mt-[50dvh]" />
            <ProjectsSection className="lg:mt-[10%] md:mt-[30%] sm:mt-[40%]" />
            <Outro className="lg:mt-[25%] md:mt-[40%] sm:mt-[50%] mt-[50%]" />
            <Footer className="md:mt-[10%] sm:mt-[30%] mt-[60%]" />
        </div>
    );
}
