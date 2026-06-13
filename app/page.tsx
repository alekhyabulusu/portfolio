import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AskAlekhya from '@/components/AskAlekhya';
import CommandPalette from '@/components/CommandPalette';
import InteractionEffects from '@/components/InteractionEffects';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Certifications />
      <Contact />
      <Footer />
      <AskAlekhya />
      <CommandPalette />
      <InteractionEffects />
    </>
  );
}
