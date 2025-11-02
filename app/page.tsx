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
            <About />
            <Manifesto />
            <Experience />
            <Skills />
            <ProjectsSection />
            <Outro />
            <Footer />
        </div>
    );
}
