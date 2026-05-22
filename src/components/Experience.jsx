import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
            Work History
          </p>
          <h2 className="section-heading">Experience</h2>
          <div className="section-subline mx-auto" />
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.company} className="relative flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary/25 group-hover:border-primary/70 transition-all duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6 flex-1 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs bg-muted/50 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
