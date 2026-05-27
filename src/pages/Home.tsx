import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="uppercase tracking-[0.2em] text-accent text-xs mb-6">
              Software Engineer • AI Systems • Cloud Architecture
            </p>

            <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.92] max-w-6xl">
              Building modern digital experiences with engineering precision.
            </h1>

            <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Focused on AI systems, cloud-native development, full-stack engineering, and elegant
              interface design.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
