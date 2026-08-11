import { Reveal } from "@/hooks/use-reveal";
import c2 from "@/assets/creative-2.jpg";
import c1 from "@/assets/creative-1.jpg";
import c3 from "@/assets/creative-3.jpg";

const studies = [
  {
    image: c2,
    brand: "Saanjh Label",
    sector: "Fashion · D2C",
    headline: "A quiet fashion label became a destination feed in 6 months.",
    body: "We rebuilt the content system around founder storytelling and studio-shot reels instead of discount posts. Weekly output tripled without losing the premium look.",
    stats: [
      ["+312%", "Organic reach"],
      ["1.2M", "Reel views"],
      ["42k", "New followers"],
    ],
  },
  {
    image: c1,
    brand: "Lumé Skincare",
    sector: "Beauty · E-commerce",
    headline: "Education-led content turned saves into repeat customers.",
    body: "A pillar mix of ingredient explainers, UGC and routine carousels gave the brand a reason to post daily — and gave customers a reason to come back.",
    stats: [
      ["12.4%", "Engagement rate"],
      ["18k", "Monthly saves"],
      ["2.7x", "Site sessions from social"],
    ],
  },
  {
    image: c3,
    brand: "Bandra Roasters",
    sector: "F&B · Multi-outlet",
    headline: "Local social that filled tables on weekdays, not just weekends.",
    body: "Neighbourhood-first content, creator seeding and a consistent posting rhythm made the café the default recommendation in its area.",
    stats: [
      ["+68%", "Store-visit taps"],
      ["9.1k", "Location tags"],
      ["4.9★", "Review average"],
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-eyebrow">Case studies</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
          Proof of delivery, not a portfolio wall.
        </h2>
      </Reveal>

      <div className="mt-12 space-y-6 lg:space-y-0">
        {studies.map((s, i) => (
          <article
            key={s.brand}
            className="overflow-hidden rounded-3xl border bg-card shadow-soft lg:sticky"
            style={{ top: `${88 + i * 26}px`, marginBottom: i < studies.length - 1 ? "1.5rem" : 0 }}
          >
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <img
                src={s.image}
                alt={`${s.brand} social media case study`}
                loading="lazy"
                width={720}
                height={1080}
                className="h-56 w-full object-cover sm:h-72 lg:h-full"
              />
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-lg font-semibold">{s.brand}</span>
                  <span className="rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground">
                    {s.sector}
                  </span>
                </div>
                <h3 className="mt-4 max-w-lg font-display text-2xl leading-tight font-semibold sm:text-[2rem]">
                  {s.headline}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.body}
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
                  {s.stats.map(([v, l]) => (
                    <div key={l}>
                      <dt className="sr-only">{l}</dt>
                      <dd className="font-display text-xl font-semibold sm:text-3xl">{v}</dd>
                      <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                        {l}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
