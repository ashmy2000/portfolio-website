import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Reveal from "../components/reveal";
import { projects } from "../data/Projects";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Git/GitHub",
  "Docker",
  "Azure",
  "Figma",
];

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="px-6 pt-24 pb-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-display text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-14"
        >
          ASMI
          <span className="text-[0.72em] font-light text-gray-500">.</span>
          <br />
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extralight tracking-[0.18em] text-gray-500 mt-2 leading-tight">
            DEFINE.CREATE.BECOME.
          </span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <Reveal delay={0.3}>
            <p className="max-w-md text-gray-400 leading-relaxed text-lg">
              Transforming ideas into websites, mobile applications, and digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-blue-400 animate-pulse" />

              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
                Available for collaborations
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 py-6 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...skills, ...skills].map((s, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
                {s}
              </span>

              <span className="size-1 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                Latest Client Projects
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="hidden md:inline-block text-xs font-medium uppercase tracking-[0.22em] text-gray-500 hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight mb-1">
                      {p.title}
                    </h3>

                    <p className="text-gray-400 text-sm max-w-md">{p.description}</p>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 border border-white/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {p.year}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <Link
              to="/portfolio"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Browse full portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-20 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/5 pointer-events-none" />

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mb-8">
              ⏤ Let's collaborate
            </p>

            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-10">
              Have a project
              <br />
              in motion?
            </h2>

            <Link
              to="/contact"
              className="relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-medium text-sm uppercase tracking-[0.2em] hover:bg-blue-400 transition-colors"
            >
              Start a conversation
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
