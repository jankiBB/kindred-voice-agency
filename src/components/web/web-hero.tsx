import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Code2, Gauge, ShoppingBag } from "lucide-react";

const projectTypes = [
  "Shopify ecommerce store",
  "Custom website development",
  "Website redesign",
  "Web application / portal",
  "Landing pages for ads",
];

const typedLines = [
  "brand.website({ speed: '0.9s', design: 'premium' })",
  "shopify.theme.build({ custom: true, conversion: 'first' })",
  "deploy → live in 6 weeks ✓",
];

export function WebHero() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setLoading(false);
      form.reset();
      toast.success("Project brief received", {
        description: "A senior developer will send scope, timeline and cost within one working day.",
      });
    }, 700);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.6]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Code2 className="h-3.5 w-3.5 text-foreground" />
            Web development agency in Mumbai — Shopify &amp; custom builds
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.2rem]">
            Websites that load fast, look premium and{" "}
            <span className="highlight-accent">actually sell</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bombay Blokes is a web design and development agency building Shopify stores, custom
            websites and web apps for growing brands. Design, code, speed and conversion handled by
            one in-house team — no handoffs, no agency ping-pong.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Design + development in-house",
              "Built for Core Web Vitals",
              "Launch in 4–8 weeks",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <TerminalCard />

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 sm:grid-cols-4">
            {[
              ["250+", "Websites shipped"],
              ["120+", "Shopify builds"],
              ["0.9s", "Median load time"],
              ["4.9", "Average client rating"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold sm:text-3xl">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="quote" className="lg:sticky lg:top-24">
          <div className="rounded-3xl border bg-card p-6 shadow-lift sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-semibold">Get a free scope &amp; quote</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Tell us what you're building. You'll get a page-by-page scope, timeline and honest
                  website development cost — not a sales call.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                Free
              </span>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-3.5">
              <Field label="Your name">
                <input
                  required
                  name="name"
                  placeholder="Aarav Mehta"
                  className="input-base"
                  autoComplete="name"
                />
              </Field>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field label="Work email">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@brand.com"
                    className="input-base"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    name="phone"
                    placeholder="+91 98200 00000"
                    className="input-base"
                    autoComplete="tel"
                  />
                </Field>
              </div>
              <Field label="Current website (or type 'new')">
                <input required name="website" placeholder="yourbrand.com" className="input-base" />
              </Field>
              <Field label="What do you need built?">
                <select name="project" className="input-base" defaultValue={projectTypes[0]}>
                  {projectTypes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:scale-[1.015] disabled:opacity-70"
              >
                {loading ? "Sending…" : "Send my project brief"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Reply within 24 hours from a developer, not a bot.
              </p>
            </form>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <MiniStat icon={Gauge} value="95+" label="Avg. PageSpeed score" />
            <MiniStat icon={ShoppingBag} value="+38%" label="Avg. lift in store CVR" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const full = typedLines[index % typedLines.length]!;
    if (text.length < full.length) {
      const t = setTimeout(() => setText(full.slice(0, text.length + 1)), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setText("");
      setIndex((i) => i + 1);
    }, 1600);
    return () => clearTimeout(t);
  }, [text, index]);

  return (
    <div className="mt-9 overflow-hidden rounded-2xl border bg-card shadow-soft">
      <div className="flex items-center gap-1.5 border-b px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 text-[11px] text-muted-foreground">bombayblokes — build</span>
      </div>
      <p className="px-4 py-4 font-mono text-[12.5px] break-all text-foreground/80 sm:text-sm">
        <span className="text-muted-foreground">$ </span>
        {text}
        <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-caret bg-accent" />
      </p>
    </div>
  );
}

function MiniStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <Icon className="h-4 w-4 text-accent-foreground" />
      <div className="mt-3 font-display text-xl font-semibold">{value}</div>
      <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
