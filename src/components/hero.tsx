import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Instagram, Star } from "lucide-react";
import heroShoot from "@/assets/hero-shoot.jpg";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";
import c2 from "@/assets/creative-2.jpg";
import c5 from "@/assets/creative-5.jpg";

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
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Instagram className="h-3.5 w-3.5 text-foreground" />
            Social media marketing agency in Mumbai
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.4rem]">
            We build social media presence brands are actually{" "}
            <span className="highlight-accent">remembered</span> for.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bombay Blokes is a social media marketing agency for brands that want strategy, content
            and creative direction under one roof — a feed that looks premium, posts consistently,
            and turns followers into customers.
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

          <div className="mt-8 grid h-[260px] grid-cols-3 gap-3 sm:h-[320px]">
            <div className="col-span-2 h-full overflow-hidden rounded-3xl border shadow-lift">
              <video
                src={heroLoop.url}
                autoPlay
                muted
                loop
                playsInline
                poster={heroShoot}
                aria-label="Bombay Blokes content shoot in progress"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid h-full grid-rows-2 gap-3">
              {[c2, c5].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Social media creative produced by Bombay Blokes"
                  loading="lazy"
                  className="h-full w-full rounded-2xl border object-cover"
                />
              ))}
            </div>
          </div>


          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 sm:grid-cols-4">
            {[
              ["1000+", "Projects delivered"],
              ["150+", "Brands partnered"],
              ["40M+", "Organic views"],
              ["4.9", "Average rating"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold sm:text-3xl">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
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

          <div className="mt-4 flex items-center gap-4 rounded-3xl border bg-card p-3 shadow-soft">
            <img
              src={heroShoot}
              alt="Bombay Blokes social media content shoot for a beauty brand"
              width={1200}
              height={1504}
              className="h-20 w-20 shrink-0 rounded-2xl object-cover sm:h-24 sm:w-24"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1.5 text-sm leading-snug text-foreground/80">
                “Our feed finally looks like the brand we've been trying to build for years.”
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Kaushik Shah — D2C founder</p>
            </div>
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
