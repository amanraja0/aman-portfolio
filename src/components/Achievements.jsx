import { Award, BadgeCheck } from "lucide-react";
import { achievements } from "../data/portfolioData";

const icons = [Award, BadgeCheck];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
            Highlights
          </p>
          <h2 className="section-heading">Achievements</h2>
          <div className="section-subline mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = icons[index] || Award;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
