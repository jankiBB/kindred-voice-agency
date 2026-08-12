import { Reveal } from "@/hooks/use-reveal";
import c3 from "@/assets/creative-3.jpg";
import c4 from "@/assets/creative-4.jpg";
import c6 from "@/assets/creative-6.jpg";

const pillars = [
  {
    k: "01",
    t: "A point of view",
    d: "Positioning and content pillars so every post says the same thing about your brand.",
  },
  {
    k: "02",
    t: "Content that carries it",
    d: "Reels, photo and design produced in our Mumbai studio — art-directed, never templated.",
  },
  {
    k: "03",
    t: "Shown up week after week",
    d: "Calendars, publishing and community handled daily, so momentum never depends on you.",
  },
];

export function Statement() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-eyebrow">Social media, done properly</p>
          <p className="mt-5 font-display text-3xl leading-[1.1] font-semibold sm:text-[2.75rem]">
            Most brands post. Very few{" "}
            <span className="highlight-accent">build a presence</span> people remember.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The difference isn't budget — it's direction. We handle the strategy, the creative and
            the day-to-day so your social media grows like a brand, not a content calendar.
          </p>

          <ul className="mt-9 space-y-5 border-t pt-8">
            {pillars.map((p) => (
              <li key={p.k} className="group flex gap-4 sm:gap-5">
                <span className="font-display text-sm font-semibold text-accent">{p.k}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[c4, c6, c3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Social media content created by Bombay Blokes"
                loading="lazy"
                className={`w-full rounded-2xl border object-cover shadow-soft transition-transform duration-500 hover:-translate-y-1.5 ${
                  i === 1 ? "aspect-[3/5] translate-y-6" : "aspect-[3/4]"
                }`}
              />
            ))}
          </div>
          <div className="mt-10 rounded-3xl border bg-card p-5 shadow-soft sm:mt-12 sm:p-6">
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              3.4x <span className="text-accent">average</span>
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              lift in organic reach within the first 90 days of us taking over a feed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
