import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Reveal from "../components/reveal";
import { projects } from "../data/Projects";

// TODO: Move skills to a separate data file and add icons for each skill
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

// TODO: Add form validation and error handling
export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-10 sm:mb-14"
        >
          ASMI
          <span className="text-[0.72em] font-light text-gray-500">.</span>
          <br />
          <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight tracking-[0.16em] text-gray-500 mt-3 sm:mt-2 leading-tight">
            DEFINE.CREATE.BECOME.
          </span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <Reveal delay={0.3}>
            <p className="w-full md:max-w-md text-gray-400 leading-relaxed text-base sm:text-lg">
              Transforming ideas into websites, mobile applications, and digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="w-full md:w-auto flex justify-end">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-blue-400 animate-pulse" />

                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
                  <span className="sm:hidden">Available</span>

                  <span className="hidden sm:inline">Available for collaborations</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 py-4 sm:py-6 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...skills, ...skills].map((s, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
              <span className="text-[10px] sm:text-sm font-medium uppercase tracking-[0.18em] sm:tracking-[0.22em] text-gray-500">
                {s}
              </span>

              <span className="size-[3px] sm:size-1 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-5 sm:px-6 py-20 sm:py-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between border-b border-white/10 pb-6 sm:pb-8 mb-10 sm:mb-16">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
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

        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-10 sm:gap-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 mb-4 sm:mb-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                  <div>
                    <h3 className="font-display text-base sm:text-2xl font-bold tracking-tight mb-1 leading-tight">
                      {p.title}
                    </h3>

                    <p className="hidden sm:block text-gray-400 text-sm max-w-md">
                      {p.description}
                    </p>
                  </div>

                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-gray-500 border border-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                    {p.year}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA BUTTON */}
        <Reveal delay={0.2}>
          <div className="mt-14 sm:mt-20 flex justify-center">
            <Link
              to="/portfolio"
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 bg-white/[0.03] text-[10px] sm:text-sm font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Browse full portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA to take to the portfolio */}
      <section className="px-5 sm:px-6 pb-20 sm:pb-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-14 sm:py-20 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/5 pointer-events-none" />

            <p className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500 mb-6 sm:mb-8">
              ⏤ Let's collaborate
            </p>

            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1] mb-8 sm:mb-10">
              Have a project
              <br />
              in motion?
            </h2>

            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 sm:gap-3 bg-white text-black px-6 sm:px-10 py-3 sm:py-5 rounded-full font-medium text-[10px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] hover:bg-blue-400 transition-colors"
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
