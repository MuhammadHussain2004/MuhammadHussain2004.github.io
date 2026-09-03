import { GraduationCap, Layers, MapPinned, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "../data";

const facts = [
  { icon: MapPinned, label: "Based in", value: "Karachi, Pakistan" },
  { icon: GraduationCap, label: "Education", value: "BSCS, Sindh Madressatul Islam University" },
  { icon: Layers, label: "Focus", value: "MERN Stack · TypeScript" },
  { icon: Sparkles, label: "Currently", value: "SMIT — Modern Web & App Dev" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line-soft px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" kicker="Get to know me" title="About" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line-soft pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-3xl font-semibold text-accent sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-xs text-faint">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-md border border-line bg-bg-card p-6 sm:p-8">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-faint">
                Quick facts
              </p>
              <ul className="space-y-6">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line bg-bg-raised text-accent">
                      <f.icon size={16} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                        {f.label}
                      </p>
                      <p className="mt-0.5 text-ink">{f.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
