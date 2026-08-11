import { Reveal } from "@/hooks/use-reveal";

const steps = [
  ["Audit", "We review your profiles, content history and three competitors to find what's missing."],
  ["Strategy", "Positioning, content pillars, formats and a posting rhythm per platform."],
  ["Creative direction", "Moodboards, grid design and a visual language your feed sticks to."],
  ["Production", "Shoots, reels, motion and design produced in-house, batched monthly."],
  ["Publish & engage", "Scheduling, captions, hashtags and daily community management."],
  ["Report & scale", "Monthly readout, what we'll double down on, and where paid can amplify."],
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-eyebrow">How we work</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
          Six steps from a scattered feed to a social presence with a point of view.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s[0]} delay={i * 50}>
            <div className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-secondary sm:p-8">
              <span className="font-display text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 block h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
              <h3 className="mt-5 font-display text-xl font-semibold">{s[0]}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s[1]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
