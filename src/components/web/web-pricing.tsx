import { Reveal } from "@/hooks/use-reveal";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Launch site",
    price: "₹1.2L – ₹2.5L",
    timeline: "3–4 weeks",
    for: "Startups and service businesses that need a credible site fast.",
    points: [
      "6–10 custom-designed pages",
      "CMS for blog and landing pages",
      "On-page SEO and schema setup",
      "Analytics, forms and WhatsApp routing",
    ],
  },
  {
    name: "Shopify store",
    price: "₹2.5L – ₹6L",
    timeline: "4–8 weeks",
    for: "D2C brands wanting custom Shopify website development, not a theme.",
    points: [
      "Custom Shopify 2.0 theme and section library",
      "Product, collection and checkout CRO",
      "Migration with rankings and URLs preserved",
      "Apps, subscriptions and ERP/3PL integrations",
    ],
    featured: true,
  },
  {
    name: "Custom build",
    price: "₹6L+",
    timeline: "8–16 weeks",
    for: "Portals, dashboards and product-grade websites.",
    points: [
      "React + TypeScript on a headless CMS or your API",
      "Design system and documented components",
      "Server-rendered pages for SEO at scale",
      "Code ownership and full handover",
    ],
  },
];

export function WebPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-eyebrow">Website development cost</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
          Real numbers, before you get on a call.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Website development cost in India swings wildly because scope does. These are the ranges
          we actually quote — fixed price per phase, no hourly surprises, no change-order games.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <div
              className={`flex h-full flex-col rounded-[1.75rem] border p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${
                t.featured ? "border-transparent bg-primary text-primary-foreground shadow-lift" : "bg-card"
              }`}
            >
              {t.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                  Most requested
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
              <p
                className={`mt-2 text-sm ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {t.for}
              </p>
              <div className="mt-6 font-display text-3xl font-semibold">{t.price}</div>
              <div
                className={`mt-1 text-xs ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                Typical timeline: {t.timeline}
              </div>
              <ul className="mt-6 space-y-3 border-t pt-6 text-sm">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] ${
                  t.featured
                    ? "bg-accent text-accent-foreground"
                    : "border bg-background text-foreground"
                }`}
              >
                Get an exact quote
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
