import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "ASMI Contact Page" },
      {
        name: "description",
        content: "Get in touch about a project, collaboration, or consulting engagement.",
      },
      { property: "og:title", content: "ASMI Contact Page" },
      {
        property: "og:description",
        content: "Get in touch about a project, collaboration, or consulting engagement.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-20 max-w-5xl"
      >
        Let's bring
        <br />
        <span className="text-muted-foreground">ideas to vision.</span>
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-border/60 pt-20">
        <Reveal className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Direct Contact
            </h2>
            <a
              href="mailto:ashmithaa@sandiralingham@technical.com"
              className="font-display text-xl md:text-2xl font-bold tracking-tight hover:text-accent transition-colors block break-all"
            >
              ashmy.technical@outlook.com
            </a>
            <p className="text-sm text-muted-foreground mt-2">I will reply within 48 hours.</p>
          </div>

          <div>
            <h2
              className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-fo
            reground mb-6"
            >
              Other Links
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["GitHub", "https://github.com/ashmy2000"],
                ["LinkedIn", "https://www.linkedin.com/in/ashmysan"],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col p-4 rounded-xl border border-border/60 bg-surface/40 hover:bg-surface transition-colors"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-1">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Status
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-accent animate-pulse-dot" />

                <span className="text-sm uppercase tracking-[0.12em]">
                  Available for initial consultations
                </span>
              </div>

              <span className="pl-[22px] text-xs text-muted-foreground uppercase tracking-[0.08em]">
                Fully booked for{" "}
                {new Date().toLocaleString("default", { month: "long", year: "numeric" })}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="bg-surface/60 border border-border/60 rounded-2xl p-8 md:p-10 space-y-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" placeholder="Ash Adith" />
              <Field label="Email" name="email" type="email" placeholder="ashadi@example.com" />
            </div>
            <Field
              label="Brand / Company"
              name="company"
              placeholder="Personal brand, startup, business, etc."
            />
            <Field label="Budget" name="budget" placeholder="Rough range, e.g. £2k-£10k" />
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
                Project Brief
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me what you'd like to build, the purpose of the project, your timeline, and any relevant links, infos or references."
                className="w-full bg-transparent border-b border-border/80 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full bg-foreground text-background py-4 text-xs font-medium uppercase tracking-[0.25em] rounded-full hover:bg-accent hover:text-neutral-200 transition-colors disabled:bg-accent disabled:text-accent-foreground"
            >
              {sent ? "Message sent — thank you" : "Send inquiry →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border/80 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
