import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/portfolioData";

export default function Contact() {
  const links = [
    {
      label: "GitHub",
      description: "Check out my code",
      href: personal.github,
      icon: <Github className="w-6 h-6" />,
    },
    {
      label: "LinkedIn",
      description: "Connect professionally",
      href: personal.linkedin,
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      label: "Email",
      description: personal.email,
      href: `mailto:${personal.email}`,
      icon: <Mail className="w-6 h-6" />,
    },
  ];
  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-sm font-mono font-medium mb-4 tracking-widest uppercase">
          Get In Touch
        </p>
        <h2 className="section-heading">Let&apos;s Work Together</h2>
        <div className="section-subline mx-auto" />
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
          I&apos;m currently open to new opportunities — whether it&apos;s a
          full-time role, freelance project, or just a conversation. My inbox is
          always open.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs text-muted-foreground">
          <span className="px-3 py-1.5 rounded-full border border-border bg-muted/30">
            {personal.location}
          </span>
          <span className="px-3 py-1.5 rounded-full border border-border bg-muted/30">
            {personal.phone}
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noreferrer" : undefined}
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/25 transition-colors">
                {link.icon}
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200"
        >
          <Mail className="w-4 h-4" /> Say Hello →
        </a>
      </div>
    </section>
  );
}
