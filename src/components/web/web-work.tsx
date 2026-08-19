import { useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";
import shot1 from "@/assets/site-after.jpg";
import shot2 from "@/assets/creative-2.jpg";
import shot3 from "@/assets/creative-4.jpg";
import shot4 from "@/assets/creative-6.jpg";

const projects = [
  {
    client: "Saanjh Label",
    type: "Shopify ecommerce development",
    image: shot1,
    summary:
      "A 900-SKU apparel catalogue was crawling on a marketplace theme. We rebuilt the storefront on a custom Shopify 2.0 theme with faceted search, smarter PDPs and a two-tap checkout.",
    metrics: [
      ["+38%", "Conversion rate"],
      ["3.4s → 0.8s", "LCP on 4G"],
      ["+61%", "Organic sessions"],
    ],
  },
  {
    client: "Lumé Skincare",
    type: "Custom website development",
    image: shot2,
    summary:
      "A headless React front-end with a subscription flow, quiz-based product matching and a CMS the marketing team runs without a developer in the loop.",
    metrics: [
      ["+2.1x", "Subscription signups"],
      ["98", "Lighthouse performance"],
      ["4 wks", "Design to launch"],
    ],
  },
  {
    client: "Northbridge Realty",
    type: "Web application / portal",
    image: shot3,
    summary:
      "A multi-location property portal with inventory sync, saved searches and a broker dashboard — built as a product, indexed like a marketing site.",
    metrics: [
      ["+74%", "Qualified enquiries"],
      ["1,200+", "Pages server-rendered"],
      ["-46%", "Bounce rate"],
    ],
  },
  {
    client: "Kettle & Co.",
    type: "Shopify migration + landing pages",
    image: shot4,
    summary:
      "Migrated from WooCommerce with every URL and ranking preserved, then shipped a landing page system their performance team edits per campaign.",
    metrics: [
      ["0", "Rankings lost in migration"],
      ["-31%", "Cost per acquisition"],
      ["+27%", "AOV after bundles"],
    ],
  },
];

export function WebWork() {
  const [active, setActive] = useState(0);
  const p = projects[active]!;

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-eyebrow">Selected work</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
          Websites we built, and the numbers they moved.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          A website development agency should be judged on outcomes, not screenshots. Here's what
          changed after launch.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <ul className="flex flex-col">
            {projects.map((item, i) => (
              <li key={item.client}>
                <button
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center justify-between gap-4 border-b py-5 text-left transition-colors ${
                    i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>
                    <span className="block font-display text-xl font-semibold sm:text-2xl">
                      {item.client}
                    </span>
                    <span className="mt-1 block text-xs">{item.type}</span>
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      i === active ? "translate-x-0 text-accent-foreground" : "-translate-x-1 opacity-40 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <div key={p.client} className="animate-fade-in">
          <div className="overflow-hidden rounded-[2rem] border bg-card shadow-lift">
            <img
              src={p.image}
              alt={`${p.client} — ${p.type} by Bombay Blokes`}
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[420px]"
            />
            <div className="p-6 sm:p-8">
              <p className="leading-relaxed text-muted-foreground">{p.summary}</p>
              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                {p.metrics.map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-lg font-semibold sm:text-2xl">{v}</div>
                    <div className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
