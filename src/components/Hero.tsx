import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-grid noise relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,217,255,0.08),transparent)]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-faint"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Available for software engineering opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Muhammad Hussain
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 font-mono text-lg text-accent sm:text-xl"
          >
            {profile.role}
            <span className="caret">_</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-faint"
          >
            {profile.secondaryRoles.join(" · ")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-12 flex items-center gap-2 font-mono text-xs text-faint"
          >
            <MapPin size={14} />
            {profile.location}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="animate-float-slow relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-md border border-line bg-bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-line bg-bg-raised px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-[11px] text-faint">whoami.sh</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="text-ink">Muhammad Hussain Khan Lodhi</p>
              <p className="text-muted">
                <span className="text-accent">$</span> cat role.txt
              </p>
              <p className="text-ink">Software Engineer — Full-Stack / MERN, Karachi 🇵🇰</p>
              <p className="text-muted">
                <span className="text-accent">$</span> cat stack.json
              </p>
              <p className="text-ink">
                {"{"} <span className="text-accent">frontend</span>: "React",{" "}
                <span className="text-accent">backend</span>: "Node/Express",{" "}
                <span className="text-accent">db</span>: "MongoDB" {"}"}
              </p>
              <p className="text-muted">
                <span className="text-accent">$</span> ./ship_project.sh
              </p>
              <p className="text-ink">
                Build <span className="text-accent">→</span> Test{" "}
                <span className="text-accent">→</span> Deploy{" "}
                <span className="text-accent">→</span> Repeat
                <span className="caret">▌</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-faint sm:flex"
        aria-label="Scroll down"
      >
        scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
