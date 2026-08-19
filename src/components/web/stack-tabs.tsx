import { useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import { Check } from "lucide-react";

const stacks = [
  {
    key: "shopify",
    label: "Shopify",
    headline: "Shopify ecommerce development, built custom",
    body: "As a Shopify web development company we skip the bloated themes. You get a custom theme on Shopify's Online Store 2.0 sections, clean metafields, fast product pages and a checkout tuned for repeat purchase.",
    points: [
      "Custom Shopify website development (no marketplace themes)",
      "Migrations from WooCommerce, Magento and Wix — SEO intact",
      "Subscriptions, bundles, ERP and 3PL integrations",
      "Shopify web design services with a reusable section library",
    ],
    best: "Best for D2C brands doing ₹10L+ a month",
  },
  {
    key: "custom",
    label: "Custom / Headless",
    headline: "Custom website development for complex products",
    body: "React and TypeScript front-ends on a headless CMS or your own API. Ideal when the site is a product: portals, dashboards, calculators, multi-location or multi-language builds.",
    points: [
      "Component-driven build with a documented design system",
      "Headless CMS so your team edits without a developer",
      "Server-rendered pages for SEO and instant first paint",
      "Code you own, in your repo, with handover documentation",
    ],
    best: "Best for SaaS, fintech, real estate and B2B",
  },
  {
    key: "cms",
    label: "WordPress / CMS",
    headline: "Marketing sites your team can actually run",
    body: "When content velocity matters more than custom logic, we build lean WordPress or headless-CMS sites — block-based editing, strict performance budgets and no plugin graveyard.",
    points: [
      "Block editor set up around your real content patterns",
      "Performance budget enforced on every template",
      "Blog, landing pages and campaign pages ready for ads",
      "Hardened security, backups and staging workflow",
    ],
    best: "Best for content-led and service businesses",
  },
  {
    key: "landing",
    label: "Ad landing pages",
    headline: "Landing pages engineered for paid traffic",
    body: "Fast, single-purpose pages for Google and Meta campaigns, with message-match to the ad, event tracking wired in and variants ready for testing from day one.",
    points: [
      "Sub-1s load so you stop paying for bounced clicks",
      "Conversion tracking, GA4 and CAPI configured correctly",
      "A/B variants built as sections, not separate pages",
      "Form, WhatsApp and call routing into your CRM",
    ],
    best: "Best for performance campaigns and launches",
  },
];

export function StackTabs() {
  const [active, setActive] = useState(0);
  const s = stacks[active]!;

  return (
    <section id="stack" className="border-y bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-eyebrow">How we build</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
            Pick the stack that fits the business — not the one the agency resells.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
            {stacks.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  i === active
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={s.key} className="mt-8 grid animate-fade-in gap-8 rounded-[2rem] border bg-card p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">{s.headline}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
            <span className="mt-6 inline-flex rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground">
              {s.best}
            </span>
          </div>
          <ul className="space-y-3.5">
            {s.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary">
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
