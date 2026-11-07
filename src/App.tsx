import { About } from './components/About';
import { Contact } from './components/Contact';
import { Endurance } from './components/Endurance';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Markets } from './components/Markets';
import { Nav } from './components/Nav';
import { Skills } from './components/Skills';
import { Ticker } from './components/Ticker';

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-up focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Skills />
        <Endurance />
        <Markets />
        <Contact />
      </main>
    </>
  );
}
