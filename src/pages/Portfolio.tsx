import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Reveal from "../components/reveal";

import { projects, CATEGORY_LABELS, type ProjectCategory } from "../data/Projects";

type Filter = ProjectCategory | "all";

const filters: Filter[] = ["all", "websites", "ios", "android", "designs", "other"];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    return active === "all" ? projects : projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="px-5 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-32 max-w-7xl mx-auto">
      {/* HERO */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-display text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.92] mb-10 sm:mb-16 max-w-5xl"
      >
        Ideas,
        <br />
        <span className="text-gray-500">
          shipped
          <span className="font-light">...</span>
        </span>
      </motion.h1>

      {/* FILTERS */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-4 sm:py-6 mb-10 sm:mb-16">
          <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500 mr-1 sm:mr-2">
            Filter
          </span>

          {filters.map((filter) => {
            const isActive = active === filter;

            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-[9px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-colors ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "border-white/10 text-gray-500 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {CATEGORY_LABELS[filter]}
              </button>
            );
          })}

          <span className="ml-auto text-[10px] sm:text-xs font-mono text-gray-500">
            {filtered.length.toString().padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* GRID */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-10 sm:gap-y-20"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group h-full"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl sm:rounded-[2rem] bg-white/[0.03] border border-white/10 mb-4 sm:mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                    <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-blue-400 font-medium">
                      {CATEGORY_LABELS[project.category]}
                    </span>

                    <span className="size-0.5 rounded-full bg-gray-600" />

                    <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      {project.client}
                    </span>
                  </div>

                  <h2 className="font-display text-base sm:text-2xl md:text-3xl font-bold tracking-tight mb-1 sm:mb-3 leading-tight">
                    {project.title}
                  </h2>

                  <p className="hidden sm:block text-sm text-gray-400 max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-gray-500 border border-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                  {project.year}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="py-20 sm:py-32 text-center text-gray-500 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.22em]">
          No projects in this category yet.
        </div>
      )}
    </section>
  );
}
