import { motion } from "framer-motion";

import Reveal from "../components/reveal";

const experience = [
  {
    role: "Software Engineer - Publicis Sapient",
    company: "Also worked as Scrum Master, Defect Manager, Tech Lead.",
    period: "September 2022 — Present",
    description:
      "Developed React-based UI components enabling non-technical users to design and manage AI agent workflows. Contributed to AI workflow architecture discussions and backend integrations for scalable automation systems.",
  },
  {
    role: "Freelance Interpreter  ",
    company: "ClearVoice",
    period: "January 2025 – Present",
    description:
      "Provide professional Tamil ↔ English interpretation and translation services across legal, medical, financial, and technical sectors. Facilitate accurate communication between clients and service providers, ensuring clarity, cultural understanding, and confidentiality.",
  },
  {
    role: "Computer Science Teacher Intern ",
    company: "St Joseph’s College",
    period: "June 2022 – July 2022",
    description:
      "Supported Year 6 GCSE students in developing core computing knowledge and problem-solving skills. Independently planned and delivered lessons, improving classroom engagement and helping students build confidence in computer science concepts",
  },
];

const technologies = [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  "Azure",
  "Docker",
  "SQL",
  "MongoDB",
];

const certifications = [
  "Certified Associate Python Programmer",
  "Microsoft Certified: Azure Fundamentals",
];

const achievements = [
  {
    title: "Publicis Sapient Accessibility Hackathon",
    detail:
      "2nd Place — Developed a Chrome extension prototype to improve web accessibility for neurodivergent users with customisable reading and interaction features.",
  },
  {
    title: "Bristol Reboot Hackathon — Lloyds Banking Group",
    detail:
      "Participated in a fintech innovation hackathon, collaborating with cross-functional teams to prototype digital solutions for real banking challenges.",
  },
  {
    title: "Publicis Sapient Internal Innovation Challenge",
    detail:
      "Contributed to internal technology innovation initiatives, collaborating with engineers to develop new product ideas and prototypes.",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-5 sm:gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* NAME */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1"
          >
            <h1 className="font-display text-3xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.92] max-w-5xl">
              Ashmy
              <br />
              <span className="text-gray-500">Sandiralingham</span>
            </h1>

            {/* Adding CV download button */}
            <div className="mt-8 sm:mt-12">
              <a
                href="/AshmithaaSandiralinghamCV.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-gray-300 transition-colors hover:bg-white hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>

                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="relative w-28 h-28 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shrink-0"
          >
            <img
              src="/my-profile.jpg"
              alt="Ashmy Adith"
              className="w-full h-full object-cover rounded-2xl sm:rounded-[2rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500">
            Profile
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl space-y-5 sm:space-y-8">
          <Reveal>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed tracking-tight">
              AI-focused Software Engineer with 3+ years of experience building scalable
              cloud-native applications using Python, FastAPI, React, TypeScript, and Azure.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Interested in productising LLM-driven solutions and exploring agentic AI architectures
              in high-growth environments. Alongside software engineering and AI development, I also
              provide Tamil Translation Services (தமிழ் மொழிபெயர்ப்பு சேவைகள்), supporting
              Tamil-speaking individuals across the UK with official and everyday translation needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500">
            Experience
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl space-y-px">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-3 sm:gap-4 py-4 sm:py-6 border-t border-white/10 group hover:bg-white/[0.03] transition-colors px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-xl">
                <div className="col-span-7 sm:col-span-6">
                  <div className="text-sm sm:text-base font-medium text-white leading-tight">
                    {e.role}
                  </div>

                  <div className="text-[11px] sm:text-sm text-gray-500 mt-1">{e.company}</div>
                </div>

                <div className="col-span-5 sm:col-span-6 text-right text-[10px] sm:text-xs font-mono text-gray-500 self-center">
                  {e.period}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500">
            Technical Skills
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
          {technologies.map((skill, i) => (
            <Reveal key={skill} delay={i * 0.05}>
              <div className="bg-black px-4 sm:px-6 py-5 sm:py-8 h-full hover:bg-white/[0.03] transition-colors">
                <span className="text-[10px] sm:text-xs font-mono text-gray-500 block mb-1 sm:mb-2">
                  0{i + 1}
                </span>

                <span className="text-sm sm:text-lg font-display font-medium tracking-tight">
                  {skill}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-3">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gray-500">
              Education
            </span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.02]">
              <div className="p-5 sm:p-10 border-b border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-3xl font-semibold mb-2">
                      BSc (Hons) Computer Science — 2:1
                    </h2>

                    <p className="text-sm sm:text-lg text-gray-500">Keele University</p>
                  </div>

                  <p className="text-[10px] sm:text-sm font-mono text-gray-500 whitespace-nowrap pt-1">
                    2019 — 2022
                  </p>
                </div>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">
                  Final Year Project: performance benchmarking and scalability analysis of Django,
                  Ruby on Rails, and React-based systems — evaluating backend efficiency, database
                  interactions, and cloud deployment suitability for modern web applications.
                </p>
              </div>

              <div className="p-5 sm:p-10">
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">Areas of Study</h3>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "Software Engineering",
                    "Web Technologies",
                    "Database Systems",
                    "Artificial Intelligence",
                    "Cyber Security",
                    "Algorithms",
                    "Data Science",
                    "Object-Oriented Programming",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-[10px] sm:text-sm text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500">
            Certifications
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl space-y-px">
          {certifications.map((cert, i) => (
            <Reveal key={cert} delay={i * 0.05}>
              <div className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 border-t border-white/10 px-2 sm:px-3 -mx-2 sm:-mx-3">
                <span className="text-[10px] sm:text-xs font-mono text-gray-500">0{i + 1}</span>
                <span className="text-sm sm:text-base text-white">{cert}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 border-t border-white/10">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gray-500">
            Achievements
          </h2>
        </Reveal>

        <div className="lg:col-span-9 max-w-5xl space-y-px">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="py-5 sm:py-6 border-t border-white/10 px-2 sm:px-3 -mx-2 sm:-mx-3">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-[10px] sm:text-xs font-mono text-gray-500 pt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-white mb-1 sm:mb-2">
                      {a.title}
                    </h3>
                    <p className="text-[12px] sm:text-sm text-gray-400 leading-relaxed">
                      {a.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TAMIL TRANSLATION SERVICE */}
      <section className="px-5 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-3">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gray-500">
              Also Offering
            </span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="size-2 rounded-full bg-blue-400" />
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gray-500">
                  4+ Years Experience
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-5">
                Tamil Translation Services
                <span className="block text-base sm:text-xl text-gray-500 mt-2 font-normal">
                  தமிழ் மொழிபெயர்ப்பு சேவைகள்
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-5">
                Supporting Tamil-speaking individuals across the UK with translation help for
                official and everyday needs — HMRC forms, NHS and health appointments, council
                letters, immigration paperwork, and general English-to-Tamil communication.
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">
                If you or someone you know needs assistance, feel free to get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="px-5 sm:px-6 pb-20 sm:pb-32 max-w-7xl mx-auto border-t border-white/10 pt-14 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-3">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gray-500">
              Work Status
            </span>
          </div>

          <div className="lg:col-span-9 max-w-5xl">
            <div className="border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                    British & German Citizen
                  </h2>

                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">
                    Based in the United Kingdom and eligible to work internationally without
                    sponsorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
