import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { projects, CATEGORY_LABELS, type ProjectCategory } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Portfolio — ASMI.",
      },
      {
        name: "description",
        content:
          "Selected digital experiences spanning websites, mobile applications, branding, and modern software systems.",
      },
      {
        property: "og:title",
        content: "Portfolio — ASMI.",
      },
      {
        property: "og:description",
        content:
          "Selected digital experiences spanning websites, mobile applications, branding, and modern software systems.",
      },
    ],
  }),
  component: PortfolioPage,
});

type Filter = ProjectCategory | "all";
const filters: Filter[] = ["all", "websites", "ios", "android", "designs", "other"];

function PortfolioPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-16 max-w-5xl"
      >
        Ideas,
        <br />
        <span className="text-muted-foreground">
          shipped<span className="font-light text-muted-foreground">...</span>
        </span>
      </motion.h1>

      {/* FILTERS */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-2 border-y border-border/60 py-6 mb-16">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mr-2">
            Filter
          </span>
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative px-4 py-2 rounded-full border text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {CATEGORY_LABELS[f]}
              </button>
            );
          })}
          <span className="ml-auto text-xs font-mono text-muted-foreground">
            {filtered.length.toString().padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* GRID */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full"
            >
              <div className="overflow-hidden rounded-2xl bg-surface border border-border/60 mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-accent font-medium">
                      {CATEGORY_LABELS[p.category]}
                    </span>
                    <span className="size-0.5 rounded-full bg-muted-foreground" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {p.client}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">{p.description}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground border border-border px-2.5 py-1 rounded-full whitespace-nowrap">
                  {p.year}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-32 text-center text-muted-foreground text-sm uppercase tracking-[0.22em]">
          No projects in this category yet.
        </div>
      )}
    </section>
  );
}
