import { Globe, User, Zap } from "lucide-react";
import { personal } from "../data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Practical Engineering",
      desc: "I focus on building software that solves real problems cleanly, with an eye for maintainability, clear structure, and useful outcomes.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Full-Stack Delivery",
      desc: "I have worked across frontend, backend, support operations, and database workflows to move features from idea to implementation.",
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Learning Mindset",
      desc: "I keep expanding my toolkit across systems, APIs, microservices, and cloud basics so I can adapt quickly to new environments.",
    },
  ];
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
              About Me
            </p>
            <h2 className="section-heading">
              Crafting digital experiences with purpose
            </h2>
            <div className="section-subline" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm <span className="text-foreground font-semibold">Aman</span>, a
              Software Engineer based in {personal.location} with experience in
              full-stack development, support workflows, and database-driven
              applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I enjoy turning complex requirements into simple, reliable
              solutions. My background includes JavaScript, React, Node.js,
              MySQL, MongoDB, and hands-on problem solving across support and
              web development tasks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently completing my MCA, I'm open to roles where I can keep
              learning, build useful products, and contribute to a team with a
              strong engineering culture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="px-3 py-1.5 rounded-full border border-border bg-muted/30">
                {personal.email}
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-muted/30">
                {personal.phone}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass-card rounded-xl p-6 flex gap-6 hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    {h.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {h.desc}
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
