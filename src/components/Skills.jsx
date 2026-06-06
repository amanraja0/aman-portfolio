import { skills } from "../data/portfolioData";

const levelConfig = {
  Expert: { percent: 95, label: "Expert" },
  Advanced: { percent: 75, label: "Advanced" },
  Intermediate: { percent: 55, label: "Intermediate" },
  Familiar: { percent: 35, label: "Familiar" },
};

function SkillBar({ name, level }) {
  const cfg = levelConfig[level] || levelConfig.Familiar;
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold text-primary">{cfg.label}</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-primary/15">
        <div
          className="h-1.5 rounded-full bg-primary transition-all duration-700"
          style={{ width: `${cfg.percent}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
            Technical Stack
          </p>
          <h2 className="section-heading">Skills &amp; Technologies</h2>
          <div className="section-subline mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 glow-cyan"
            >
              <div className="flex items-center gap-6 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {group.category}
                </h3>
              </div>
              {group.items.map((item) => (
                <SkillBar key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
