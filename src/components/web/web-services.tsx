import { Reveal } from "@/hooks/use-reveal";
import {
  ShoppingCart,
  PenTool,
  Code2,
  LayoutTemplate,
  Gauge,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Shopify web development",
    body: "Custom Shopify website development — bespoke themes, app integrations, subscriptions and checkout flows built to convert, not just to launch.",
    tags: ["Custom themes", "Shopify Plus", "Migrations"],
  },
  {
    icon: Code2,
    title: "Custom website development",
    body: "Hand-built, framework-based websites when a template won't do: component systems, CMS-driven content and clean, maintainable code you own.",
    tags: ["React / Next", "Headless CMS", "APIs"],
  },
  {
    icon: PenTool,
    title: "Web design & UI/UX",
    body: "Research-led UX, wireframes and a design system in Figma so every page looks intentional and every click has a job.",
    tags: ["UX audit", "Design system", "Prototypes"],
  },
  {
    icon: LayoutTemplate,
    title: "Website redesign & migration",
    body: "Dated site pulling its weight down? We rebuild it without losing rankings — URL mapping, redirects and content parity handled.",
    tags: ["Replatforming", "SEO-safe", "Redirects"],
  },
  {
    icon: Gauge,
    title: "Speed & conversion optimisation",
    body: "Core Web Vitals, image pipelines, script hygiene and CRO experiments that turn existing traffic into more enquiries and orders.",
    tags: ["CWV", "A/B tests", "Analytics"],
  },
  {
    icon: Wrench,
    title: "Care plans & support",
    body: "Hosting, updates, backups, security and a monthly improvement sprint — so the site keeps getting better after launch day.",
    tags: ["Maintenance", "SLA", "Monitoring"],
  },
];

export function WebServices() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-eyebrow">What we build</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
          A professional web development company for brands that outgrew their template.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Strategy, design, development and post-launch growth sit with one team — which is why our
          builds ship on time and keep performing long after the invoice.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <article className="group relative h-full overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/30"
              />
              <div className="relative flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary transition-colors duration-300 group-hover:bg-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4.5 w-4.5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
