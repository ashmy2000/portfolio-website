import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Reveal from "../components/Reveal";

import { projects, CATEGORY_LABELS, type ProjectCategory } from "../data/projects";

type Filter = ProjectCategory | "all";

const filters: Filter[] = ["all", "websites", "ios", "android", "designs", "other"];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    return active === "all" ? projects : projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-16 max-w-5xl"
      >
        Ideas,
        <br />
        <span className="text-muted-foreground">
          shipped
          <span className="font-light">...</span>
        </span>
      </motion.h1>

      {/* FILTERS */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-2 border-y border-border/60 py-6 mb-16">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mr-2">
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
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {CATEGORY_LABELS[filter]}
              </button>
            );
          })}

          <span className="ml-auto text-xs font-mono text-muted-foreground">
            {filtered.length.toString().padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* PROJECT GRID */}
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
              <div className="overflow-hidden rounded-[2rem] bg-surface border border-border/60 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex justify-between items-start gap-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground mb-3">
                    {project.category}
                  </p>

                  <h2 className="font-display text-3xl font-bold tracking-tight mb-3">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-xs font-mono text-muted-foreground">{project.year}</p>

                  <p className="text-xs text-muted-foreground mt-2">{project.client}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
