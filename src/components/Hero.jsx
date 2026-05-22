import { ArrowDown, ExternalLink, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { personal } from "../data/portfolioData";

const ROLES = ["Full Stack Developer", "Software Engineer"];

function TypingAnimation() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero({ darkMode }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: darkMode
            ? "oklch(0.62 0.22 20 / 0.12)"
            : "oklch(0.62 0.22 20 / 0.08)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[180px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: darkMode
            ? "oklch(0.50 0.19 15 / 0.10)"
            : "oklch(0.50 0.19 15 / 0.06)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.62 0.22 20) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
        </h1>
        <h2
          className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up min-h-[2rem]"
          style={{ animationDelay: "0.2s" }}
        >
          <TypingAnimation />
        </h2>
        {/* Available badge */}
        <div
          className="flex justify-center mb-4 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
        </div>
        <p
          className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {personal.tagline}
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:bg-primary/90 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
            View Projects
          </button>
          {/* GitHub link removed — only email/resume shown per preference */}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/30 text-foreground font-semibold text-sm transition-all duration-200 hover:border-primary/60 hover:text-primary hover:bg-primary/10 hover:scale-105"
          >
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            View Resume
          </a>
        </div>
        <div className="mt-14 flex justify-center animate-bounce">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
