import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

import Reveal from "../components/reveal";

export default function Contact() {
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
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-20 max-w-5xl"
      >
        Let's bring
        <br />
        <span className="text-gray-500">ideas to vision.</span>
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/10 pt-20">
        {/* LEFT SIDE */}
        <Reveal className="lg:col-span-5 space-y-12">
          {/* EMAIL */}
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mb-6">
              Direct Contact
            </h2>

            <a
              href="mailto:ashmytechnical@outlook.com"
              className="font-display text-xl md:text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors block break-all"
            >
              ashmytechnical@outlook.com
            </a>

            <p className="text-sm text-gray-500 mt-2">I will reply within 48 hours.</p>
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
                  className="group flex flex-col p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500 mb-2">
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

                <span className="text-sm uppercase tracking-[0.12em]">Available</span>
              </div>

              <span className="pl-[22px] text-xs text-gray-500 uppercase tracking-[0.08em]">
                For selected projects
              </span>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE FORM */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 space-y-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" placeholder="Ash Adith" />

              <Field label="Email" name="email" type="email" placeholder="ash@example.com" />
            </div>

            <Field
              label="Brand / Company"
              name="company"
              placeholder="Startup, business, agency..."
            />

            <Field label="Budget" name="budget" placeholder="£2k - £10k" />

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.22em] text-gray-500 font-medium">
                Project Brief
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project, goals, timeline, and references."
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full bg-white text-black py-4 text-xs font-medium uppercase tracking-[0.25em] rounded-full hover:bg-blue-400 transition-colors disabled:bg-blue-400"
            >
              {sent ? "Message Sent" : "Send Inquiry →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

// TODO: Extract to separate file if reused
interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

// TODO: Add validation and error handling
function Field({ label, name, type = "text", placeholder }: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.22em] text-gray-500 font-medium">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/10 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-400 transition-colors"
      />
    </div>
  );
}
