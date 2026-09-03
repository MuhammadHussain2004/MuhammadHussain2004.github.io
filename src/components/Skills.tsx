import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line-soft px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" kicker="What I work with" title="Skills" />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06} className="bg-bg-card p-7">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {group.category}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line bg-bg-raised px-3 py-1.5 font-mono text-[13px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
