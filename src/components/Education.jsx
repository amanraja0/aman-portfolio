import { Calendar, GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
            Academic Background
          </p>
          <h2 className="section-heading">Education</h2>
          <div className="section-subline mx-auto" />
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card rounded-2xl p-6 md:p-8 flex gap-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    {edu.duration}
                  </div>
                </div>
                <p className="text-primary font-medium text-sm mb-2">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground text-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
