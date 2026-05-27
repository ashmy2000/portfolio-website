import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASMI. — Websites, Apps & Digital Experiences" },
      {
        name: "description",
        content:
          "Transforming your ideas into websites, mobile applications, and digital experiences.",
      },
      {
        property: "og:title",
        content: "ASMI. — Websites, Apps & Digital Experiences",
      },
      {
        property: "og:description",
        content:
          "Transforming your ideas into websites, mobile applications, and digital experiences.",
      },
    ],
  }),
  component: HomePage,
});

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
function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="px-6 pt-24 pb-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-14"
        >
          ASMI<span className="text-[0.72em] font-light text-muted-foreground">.</span>
          <br />
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extralight tracking-[0.18em] text-muted-foreground mt-2 leading-tight">
            DEFINE.CREATE.BECOME.
          </span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <Reveal delay={0.3}>
            <p className="max-w-md text-muted-foreground leading-relaxed text-lg">
              Transforming ideas into websites, mobile applications, and digital experiences.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Available for collaborations
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <div className="border-y border-border/60 py-6 overflow-hidden bg-surface/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...skills, ...skills].map((s, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {s}
              </span>
              <span className="size-1 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED WORK */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between border-b border-border/60 pb-8 mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                Latest Client Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:inline-block text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Link to="/portfolio" className="group block">
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
                    <h3 className="font-display text-2xl font-bold tracking-tight mb-1">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-md">{p.description}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2.5 py-1 rounded-full whitespace-nowrap">
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
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-surface text-sm font-medium uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
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
          <div className="bg-surface border border-border/60 rounded-3xl px-8 py-20 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/5 pointer-events-none" />
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-8">
              ⏤ Let's collaborate
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-10">
              Have a project
              <br />
              in motion?
            </h2>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-full font-medium text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors"
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
