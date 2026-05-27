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
    <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto">
      {/* HERO */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-16 max-w-5xl"
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
        <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-6 mb-16">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mr-2">
            Filter
          </span>

          {filters.map((filter) => {
            const isActive = active === filter;

            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative px-4 py-2 rounded-full border text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "border-white/10 text-gray-500 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {CATEGORY_LABELS[filter]}
              </button>
            );
          })}

          <span className="ml-auto text-xs font-mono text-gray-500">
            {filtered.length.toString().padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* GRID */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
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
              <div className="overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/10 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                />
              </div>

              {/* CONTENT */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400 font-medium">
                      {CATEGORY_LABELS[project.category]}
                    </span>

                    <span className="size-0.5 rounded-full bg-gray-600" />

                    <span className="text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      {project.client}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    {project.title}
                  </h2>

                  <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-[0.22em] text-gray-500 border border-white/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {project.year}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="py-32 text-center text-gray-500 text-sm uppercase tracking-[0.22em]">
          No projects in this category yet.
        </div>
      )}
    </section>
  );
}
