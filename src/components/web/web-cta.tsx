import { Link } from "@tanstack/react-router";
import { Reveal } from "@/hooks/use-reveal";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function WebCta() {
  return (
    <section className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Start your build
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
                Tell us what you're building. We'll send scope, timeline and cost.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/70">
                No decks, no discovery retainer. A senior developer reviews your brief and replies
                with a page-by-page plan within one working day.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                Get a free scope &amp; quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" /> Andheri West, Mumbai
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:hello@bombayblokes.com" className="hover:text-primary-foreground">
                    hello@bombayblokes.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+919820000000" className="hover:text-primary-foreground">
                    +91 98200 00000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WebFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[13px] font-bold text-primary-foreground">
              BB
            </span>
            <span className="font-display text-[15px] font-semibold">Bombay Blokes</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A web design and development agency in Mumbai building Shopify stores, custom websites
            and web apps that load fast and convert.
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              "Shopify ecommerce development",
              "Custom website development",
              "Website redesign",
              "Web application development",
              "Landing pages for ads",
            ].map((s) => (
              <li key={s}>
                <a href="#services" className="transition-colors hover:text-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow">Elsewhere</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-foreground">
                Social media marketing
              </Link>
            </li>
            <li>
              <a href="#work" className="transition-colors hover:text-foreground">
                Our work
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition-colors hover:text-foreground">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} Bombay Blokes. Web development agency, Mumbai.
        </div>
      </div>
    </footer>
  );
}
