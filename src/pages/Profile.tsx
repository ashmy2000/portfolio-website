import { motion } from "framer-motion";

import Reveal from "../components/reveal";

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

  {
    role: "Tech Lead",
    company: "Publicis Sapient — Second Tree",
    period: "2023",
  },

  {
    role: "Data Engineer",
    company: "Publicis Sapient — Lloyds Banking Group",
    period: "2022 — 2023",
  },
];

const technologies = [
  "Python",
  "React",
  "TypeScript",
  "FastAPI",
  "Azure",
  "Docker",
  "PostgreSQL",
  "MongoDB",
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-5xl">
              Ashmy
              <br />
              <span className="text-gray-500">Sandiralingham</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="relative w-72 h-72 lg:w-80 lg:h-80 shrink-0"
          >
            <div className="absolute inset-0 rounded-[2rem]" />

            <img
              src="/my-profile.jpg"
              alt="Ashmy Adith"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
            Profile
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl space-y-8">
          <Reveal>
            <p className="text-xl md:text-2xl text-white leading-relaxed tracking-tight">
              Software engineer focused on AI systems, cloud-native architecture, full-stack
              engineering, and refined digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base text-gray-400 leading-relaxed">
              I enjoy building scalable systems while maintaining strong attention to visual craft,
              usability, performance, and maintainable engineering standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
            Experience
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl space-y-px">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-4 py-6 border-t border-white/10 group hover:bg-white/[0.03] transition-colors px-3 -mx-3 rounded-xl">
                <div className="col-span-7 sm:col-span-6">
                  <div className="text-base font-medium text-white">{e.role}</div>

                  <div className="text-sm text-gray-500">{e.company}</div>
                </div>

                <div className="col-span-5 sm:col-span-6 text-right text-xs font-mono text-gray-500 self-center">
                  {e.period}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
            Technical Skills
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {technologies.map((skill, i) => (
            <Reveal key={skill} delay={i * 0.05}>
              <div className="bg-black px-6 py-8 h-full hover:bg-white/[0.03] transition-colors">
                <span className="text-xs font-mono text-gray-500 block mb-2">0{i + 1}</span>

                <span className="text-lg font-display font-medium tracking-tight">{skill}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-20 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gray-500">Education</span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">
              <div className="p-10 border-b border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-semibold mb-2">BSc (Hons) Computer Science</h2>

                    <p className="text-lg text-gray-500">Keele University</p>
                  </div>

                  <p className="text-sm font-mono text-gray-500 whitespace-nowrap pt-1">
                    2019 — 2022
                  </p>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-3xl">
                  Graduated with a strong focus on software engineering, scalable web systems,
                  backend architecture, and modern frontend development.
                </p>
              </div>

              <div className="p-10">
                <h3 className="text-xl font-medium mb-5">Areas of Study</h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Software Engineering",
                    "Web Technologies",
                    "Database Systems",
                    "Artificial Intelligence",
                    "Cyber Security",
                    "Algorithms",
                    "Data Science",
                    "Object-Oriented Programming",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400"
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

      {/* STATUS */}
      <section className="px-6 pb-32 max-w-7xl mx-auto border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gray-500">
              Work Status
            </span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-white/10 rounded-3xl p-10 bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">British & German Citizen</h2>

                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    Based in the United Kingdom and eligible to work internationally without
                    sponsorship.
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
