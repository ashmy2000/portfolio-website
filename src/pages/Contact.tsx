import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.2em] text-accent text-xs mb-4">Contact</p>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Let’s build
            <br />
            something exceptional.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Open to engineering opportunities, AI platform work, product collaborations, and modern
            web architecture projects.
          </p>
        </motion.div>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-3xl border border-border bg-surface p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</p>

            <a
              href="mailto:ashmytechnical@outlook.com"
              className="mt-4 block text-2xl font-semibold hover:text-accent transition-colors break-all"
            >
              ashmytechnical@outlook.com
            </a>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Best for professional opportunities, collaborations, engineering discussions, and
              project inquiries.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-border bg-surface p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Socials</p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://github.com/ashmy2000"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-medium hover:text-accent transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ashmysan"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-medium hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Follow ongoing engineering work, AI experiments, portfolio updates, and technical
              projects.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-20 rounded-[2rem] border border-border bg-surface-elevated p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-accent mb-3">Availability</p>

              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Currently available
                <br />
                for selected projects.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse-dot" />

              <span className="uppercase tracking-[0.18em] text-xs text-muted-foreground">
                Open for work
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
