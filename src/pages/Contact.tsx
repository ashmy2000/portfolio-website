import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

import Reveal from "../components/reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

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
        className="font-display text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-14 sm:mb-20 max-w-5xl"
      >
        Let's bring
        <br />
        <span className="text-gray-500">ideas to vision.</span>
      </motion.h1>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 border-t border-white/10 pt-12 sm:pt-20">
        {/* LEFT SIDE */}
        <Reveal className="lg:col-span-5 space-y-8 sm:space-y-12">
          {/* EMAIL */}
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mb-6">
              Direct Contact
            </h2>

            <a
              href="mailto:ashmytechnical@outlook.com"
              className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors block break-all"
            >
              ashmytechnical@outlook.com
            </a>

            <p className="text-sm text-gray-400 mt-2">I will reply within 48 hours.</p>
          </div>

          {/* SOCIALS */}
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mb-6">
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
                  className="group flex flex-col p-3 sm:p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] sm:tracking-[0.22em] text-gray-400 mt-1">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* STATUS */}
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mb-6">
              Status
            </h2>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-blue-400 animate-pulse" />

                <span className="text-xs sm:text-sm uppercase tracking-[0.12em]">
                  Available for selected opportunities
                </span>
              </div>

              <span className="pl-[22px] text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.08em]">
                British & German Citizen
              </span>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE FORM */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <Field label="Name" name="name" placeholder="Ash Adith" />

              <Field label="Email" name="email" type="email" placeholder="ash@example.com" />
            </div>

            <Field
              label="Brand / Company"
              name="company"
              placeholder="Personal brand, startup, business, etc."
            />

            <Field label="Budget" name="budget" placeholder="Rough range, e.g. £2k-£10k" />

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.22em] text-gray-500 font-medium">
                Project Brief
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me what you'd like to build, the purpose of the project, your timeline, and any references."
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full bg-white text-black py-3 sm:py-4 text-[10px] sm:text-sm font-medium uppercase tracking-[0.18em] sm:tracking-[0.25em] rounded-full hover:bg-blue-400 transition-colors disabled:bg-blue-400"
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
      <label className="text-[10px] uppercase tracking-[0.22em] text-gray-500 font-medium">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/10 py-3 text-sm placeholder:text-gray-500/50 focus:outline-none focus:border-blue-400 transition-colors"
      />
    </div>
  );
}
