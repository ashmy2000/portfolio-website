import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ASMI About Page" },
      {
        name: "description",
        content:
          "Independent engineer with 8+ years building web systems, native apps, and design-led products.",
      },
      { property: "og:title", content: "ASMI About Page" },
      {
        property: "og:description",
        content:
          "Independent engineer with 8+ years building web systems, native apps, and design-led products.",
      },
    ],
  }),
  component: AboutPage,
});

const experience = [
  {
    role: "Software Engineer",
    company: "Publicis Sapient",
    period: "2025 — 2026",
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

  {
    role: "Tech Lead",
    company: "Publicis Sapient — Second Tree",
    period: "2023 (11 month)",
  },

  {
    role: "Data Engineer",
    company: "Publicis Sapient — Lloyds Banking Group",
    period: "2022 — 2023",
  },

  {
    role: "Digital Advisor",
    company: "Keele University — Oliphant-Wood Consulting",
    period: "2021 (1 month)",
  },
];

const technologies = [
  "Python",
  "React",
  "TypeScript",
  "FastAPI",
  "Figma",
  "Git & CI/CD",
  "Azure",
  "Git & GitHub",
];

function AboutPage() {
  return (
    <>
      {/* Name */}
      <section className="px-6 pt-24 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-5xl"
          >
            Ashmithaa
            <br />
            <span className="text-muted-foreground">Sandiralingham</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-72 h-60 lg:w-80 lg:h-[3index00px] shrink-0"
          >
            <img
              src="/my-profile.jpg"
              alt="Ashmithaa Sandiralingham"
              className="w-full h-full object-contain object-bottom"
            />
          </motion.div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border/60">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Profile
          </h2>
        </Reveal>
        <div className="lg:col-span-9 max-w-5xl space-y-8">
          <Reveal>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed tracking-tight">
              I'm a software engineer with four years of experience bridging the gap between complex
              backend logic and intuitive frontend motion. My favourite work happens where systems
              thinking meets craft.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-muted-foreground leading-relaxed">
              I listen to ideas and work closely with people to bring them to life — translating
              complex requirements into scalable, user-focused solutions that actually make sense to
              the people using them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border/60">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Experience
          </h2>
        </Reveal>
        <div className="lg:col-span-9 max-w-5xl space-y-px">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.06}>
              <div className="grid grid-cols-12 gap-4 py-6 border-t border-border/60 group hover:bg-surface/40 transition-colors px-2 -mx-2 rounded-md">
                <div className="col-span-7 sm:col-span-6">
                  <div className="text-base font-medium text-foreground">{e.role}</div>
                  <div className="text-sm text-muted-foreground">{e.company}</div>
                </div>
                <div className="col-span-5 sm:col-span-6 text-right text-xs font-mono text-muted-foreground self-center">
                  {e.period}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border/60">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Technical Skills
          </h2>
        </Reveal>
        <div className="lg:col-span-9 max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
          {technologies.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <div className="bg-background px-6 py-8 h-full hover:bg-surface transition-colors">
                <span className="text-xs font-mono text-muted-foreground block mb-2">0{i + 1}</span>
                <span className="text-lg font-display font-medium tracking-tight">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border/60"></section>

      {/* EDUCATION */}
      <section className="px-6 pb-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Education
            </span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-border/60 rounded-3xl overflow-hidden">
              <div className="p-10 border-b border-border/60">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-semibold mb-2">BSc (Hons) Computer Science</h2>

                    <p className="text-lg text-muted-foreground">Keele University</p>
                  </div>

                  <p className="text-sm font-mono text-muted-foreground whitespace-nowrap pt-1">
                    2019 — 2022
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  Graduated with a 2:1 classification. Final year project focused on comparing
                  Django, Ruby on Rails, and React frameworks to evaluate performance, scalability,
                  and suitability for modern web development.
                </p>
              </div>

              <div className="p-10">
                <h3 className="text-xl font-medium mb-5">Relevant Areas of Study</h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Software Engineering",
                    "Advanced Web Technologies",
                    "Database Systems",
                    "Artificial Intelligence",
                    "Cyber Security",
                    "Data Science",
                    "Algorithms",
                    "Object-Oriented Programming",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-border/60 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border/60"></section>

      {/* STATUS */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Work Status
            </span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-border/60 rounded-3xl p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">British & German Citizen</h2>

                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    Based in the United Kingdom and eligible to work without sponsorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
