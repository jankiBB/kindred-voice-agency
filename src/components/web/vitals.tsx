import { useEffect, useState } from "react";
import { Reveal, useReveal } from "@/hooks/use-reveal";

const metrics = [
  { label: "Performance", value: 98, suffix: "" },
  { label: "Accessibility", value: 96, suffix: "" },
  { label: "Best practices", value: 100, suffix: "" },
  { label: "SEO", value: 100, suffix: "" },
];

export function Vitals() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-eyebrow">Performance</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
            A beautiful website that loads slowly is just an expensive brochure.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Every build ships against a performance budget. We measure Core Web Vitals on real
            devices and real Indian networks — because a second of delay on mobile is money leaving
            your cart. These are the median Lighthouse scores across the last twelve sites we
            launched.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["0.9s", "Median LCP"],
              ["<0.05", "Median CLS"],
              ["-42%", "Bounce after rebuild"],
            ].map(([v, l]) => (
              <li key={l} className="rounded-2xl border bg-card p-4">
                <div className="font-display text-2xl font-semibold">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <Dial key={m.label} {...m} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Dial({ label, value, delay }: { label: string; value: number; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start) / 1100));
      setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, delay]);

  const circumference = 2 * Math.PI * 42;

  return (
    <div
      ref={ref}
      className="rounded-3xl border bg-card p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-6"
    >
      <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--muted)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - shown / 100)}
            style={{ transition: "stroke-dashoffset 120ms linear" }}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-display text-2xl font-semibold sm:text-3xl">
          {shown}
        </span>
      </div>
      <p className="mt-3 text-xs font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
