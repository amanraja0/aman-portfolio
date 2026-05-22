import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove("light");
    } else {
      root.classList.add("light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />
      <main>
        <Hero darkMode={darkMode} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-6 border-t border-border text-center text-muted-foreground text-sm">
        <p>
          &copy; {new Date().getFullYear()} Aman Raja. Built with React + Vite +
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
