import { Reveal } from "@/hooks/use-reveal";
import c3 from "@/assets/creative-3.jpg";
import c4 from "@/assets/creative-4.jpg";
import c6 from "@/assets/creative-6.jpg";

const proof = [
  ["12 days", "Average time from brief to first post going live"],
  ["120+", "Pieces of content shipped for clients every month"],
  ["3.4x", "Median lift in organic reach within 90 days"],
];

export function Statement() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-eyebrow">Social media, done properly</p>
          <p className="mt-5 font-display text-3xl leading-[1.06] font-semibold tracking-[-0.015em] sm:text-[3rem]">
            Anyone can post. Very few brands{" "}
            <span className="highlight-accent">show up like a brand</span> — every single week.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Most feeds stall for the same reason: strategy sits in one place, content in another and
            nobody owns the calendar. We take the whole thing — the plan, the shoot, the edit, the
            caption, the replies — so your brand looks premium and sounds the same, post after post.
          </p>

          <dl className="mt-10 grid gap-6 border-t pt-8 sm:grid-cols-3">
            {proof.map(([v, l]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-semibold sm:text-[1.75rem]">{v}</dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[c4, c6, c3].map((src, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl border shadow-soft ${
                  i === 1 ? "aspect-[3/5] translate-y-6" : "aspect-[3/4]"
                }`}
              >
                <img
                  src={src}
                  alt="Social media content created by Bombay Blokes"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
