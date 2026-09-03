import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker: string;
}) {
  return (
    <Reveal className="mb-14 flex items-end gap-4 sm:mb-20">
      <span className="font-mono text-sm text-accent">{index}</span>
      <div className="h-px flex-1 max-w-10 bg-line" />
      <div>
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.25em] text-faint">
          {kicker}
        </p>
        <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
