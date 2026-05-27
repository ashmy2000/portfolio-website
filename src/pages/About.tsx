import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Engineer",
    company: "Publicis Sapient",
    period: "2025 — Present",
  },
  {
    role: "AI Developer",
    company: "Publicis Sapient — CoreAI Platform",
    period: "2024 — 2025",
  },
  {
    role: "Scrum Master & Developer",
    company: "Publicis Sapient — ASDA Release Programme",
    period: "2023 — 2024",
  },
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.2em] text-accent text-xs mb-4">Profile</p>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            Building elegant digital systems with engineering precision.
          </h1>

          <p className="mt-8 max-w-3xl text-muted-foreground text-lg leading-relaxed">
            Software engineer focused on AI systems, cloud-native architecture, full-stack
            development, and polished digital experiences. Passionate about combining engineering
            discipline with refined visual design.
          </p>
        </motion.div>
      </Reveal>

      <div className="mt-24 grid gap-6">
        {experience.map((item) => (
          <Reveal key={item.role}>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>

                  <p className="mt-2 text-muted-foreground">{item.company}</p>
                </div>

                <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {item.period}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
