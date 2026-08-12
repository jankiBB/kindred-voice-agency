import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Instagram } from "lucide-react";

const services = [
  "Social media management",
  "Content & creative production",
  "Influencer & UGC",
  "Brand strategy",
  "Paid social (supporting)",
];

export function Hero() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setLoading(false);
      form.reset();
      toast.success("Audit request received", {
        description: "A strategist will review your profiles and reply within one business day.",
      });
    }, 700);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Instagram className="h-3.5 w-3.5 text-foreground" />
            Social media marketing agency in Mumbai
          </span>

          <h1 className="mt-6 max-w-3xl font-display text-[2.8rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.6rem]">
            Social media that makes your brand{" "}
            <span className="highlight-accent">impossible to scroll past</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Bombay Blokes builds strategy, content and community for brands that want a social
            presence people actually remember.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Strategy, content & community",
              "In-house creative studio",
              "Reporting you can read",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#audit"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Get your free social audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div id="audit" className="lg:sticky lg:top-24">
          <div className="rounded-3xl border bg-card p-6 shadow-lift sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-semibold">Get a free social audit</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  We'll review your profiles, content and competitors — and send back what we'd
                  change first.
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
              <Field label="Instagram handle or website">
                <input required name="handle" placeholder="@yourbrand" className="input-base" />
              </Field>
              <Field label="What do you need help with?">
                <select name="service" className="input-base" defaultValue={services[0]}>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:scale-[1.015] disabled:opacity-70"
              >
                {loading ? "Sending…" : "Request my free audit"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                No decks, no spam. A real strategist replies within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
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
