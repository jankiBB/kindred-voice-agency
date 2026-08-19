import { useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import { Plus } from "lucide-react";

export const webFaqs = [
  {
    q: "What does a web development agency in Mumbai actually charge?",
    a: "A marketing site typically lands between ₹1.2L and ₹2.5L, a custom Shopify ecommerce build between ₹2.5L and ₹6L, and a web application ₹6L upward. Website development cost tracks scope: number of templates, integrations, content volume and how much design is bespoke. We quote a fixed price per phase after a free scoping call.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most projects go live in 4 to 8 weeks. A focused landing page set can ship in two weeks; a large custom website development or portal build runs 8 to 16 weeks. The biggest variable is content and feedback speed on your side, so we lock a review calendar up front.",
  },
  {
    q: "Do you do custom Shopify website development or theme customisation?",
    a: "Both, but we recommend custom. As a Shopify web development company we build on Online Store 2.0 with a reusable section library, so your team composes new pages without a developer. If you already own a premium theme we can extend it, though heavily customised themes usually cost more to maintain than a clean custom build.",
  },
  {
    q: "Can you migrate our existing site without losing SEO?",
    a: "Yes. Migrations from WooCommerce, Magento, Wix or a legacy CMS include a full URL inventory, 301 redirect map, metadata and schema parity, and post-launch crawl monitoring. Across our last set of migrations, rankings recovered or improved within four weeks.",
  },
  {
    q: "Who owns the code and can our team edit the site?",
    a: "You own everything — repo, design files, CMS and hosting accounts are in your name from day one. Content, landing pages and product data are editable by your marketing team through the CMS, with a recorded walkthrough and written documentation at handover.",
  },
  {
    q: "What makes you different from other website development companies?",
    a: "Design and development sit in one in-house Mumbai team, so nothing gets lost between a pretty mockup and a slow build. Every site ships against a performance budget, conversion tracking is wired in before launch, and you talk directly to the people writing the code.",
  },
  {
    q: "Do you also handle hosting, maintenance and ongoing changes?",
    a: "Yes. Monthly care plans cover hosting, uptime monitoring, security updates, backups, Core Web Vitals checks and a bank of development hours for new sections, campaign pages and A/B tests.",
  },
];

export function WebFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="text-eyebrow">Questions</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
            The things clients ask before they sign.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Still unsure? Send the brief and we'll answer with specifics on scope, timeline and
            cost — usually within a day.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="border-t">
            {webFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold sm:text-xl">{f.q}</span>
                    <Plus
                      className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
