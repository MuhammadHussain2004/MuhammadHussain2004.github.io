import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { timeline } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line-soft px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" kicker="Where I've been" title="Experience & Education" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" />
          <ul className="space-y-12">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <li className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:h-[18px] sm:w-[18px]" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-faint">{item.place}</p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
