import { Reveal } from "@/hooks/use-reveal";

const steps = [
  {
    week: "Week 1",
    title: "Scope, sitemap and success metric",
    body: "We agree on what the site must do — leads, orders, demos — then map every page and template against it. You get a written scope, timeline and fixed cost before a single pixel is drawn.",
  },
  {
    week: "Week 1–2",
    title: "Design system, not just mockups",
    body: "Type scale, colour, spacing and components designed once, then reused. You review a real, clickable prototype instead of a stack of static screens.",
  },
  {
    week: "Week 2–5",
    title: "Build in the open",
    body: "Front-end and CMS built on a staging URL you can open any day. Weekly demos, comments in-line, no month-long silence followed by a big reveal.",
  },
  {
    week: "Week 5–6",
    title: "Performance, SEO and QA",
    body: "Core Web Vitals tuned on real devices, metadata and schema in place, redirects mapped, and every template tested across browsers and screen sizes.",
  },
  {
    week: "Launch",
    title: "Go live and hand over",
    body: "DNS, analytics, tracking and search console configured. Your team gets a walkthrough, documentation and the repo — the code is yours.",
  },
  {
    week: "Ongoing",
    title: "Iterate on evidence",
    body: "Post-launch we watch heatmaps, funnels and vitals, then ship improvements monthly. A website is a product, not a project that ends.",
  },
];

export function WebProcess() {
  return (
    <section id="process" className="border-y bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-eyebrow">How a build runs</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
            Six weeks, no mystery. You always know what's happening.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[11px] w-px bg-border lg:left-1/2"
          />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <li
                  className={`relative pl-10 lg:w-1/2 lg:pl-0 ${
                    i % 2 === 0 ? "lg:pr-14 lg:text-right" : "lg:ml-auto lg:pl-14"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute top-2 left-0 grid h-[23px] w-[23px] place-items-center rounded-full border bg-card lg:left-auto ${
                      i % 2 === 0 ? "lg:-right-[11px]" : "lg:-left-[12px]"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <p className="text-eyebrow">{s.week}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
