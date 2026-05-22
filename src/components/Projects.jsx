import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
            Portfolio
          </p>
          <h2 className="section-heading">Projects</h2>
          <div className="section-subline mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-6 flex flex-col gap-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-primary/40 text-xs font-bold">
                  0{i + 1}
                </span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted/60 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted/60 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                    aria-label="Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
