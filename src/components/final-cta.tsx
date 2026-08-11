import { Reveal } from "@/hooks/use-reveal";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-8 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-accent-foreground/10 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-[1.06] font-semibold text-accent-foreground sm:text-5xl">
              Let's make your brand worth following.
            </h2>
            <p className="mt-5 text-accent-foreground/80 sm:text-lg">
              Free social audit: your profiles, your content, three competitors — and the first
              three things we'd change.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#audit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
              >
                Get my free audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919820000000"
                className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/25 px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
              >
                <Phone className="h-4 w-4" />
                Talk to a strategist
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
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
            A social media marketing agency in Mumbai building strategy, content and community for
            brands that want to be remembered.
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              "Social media strategy",
              "Social media management",
              "Content production",
              "Influencer & UGC",
              "Paid social amplification",
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
          <h3 className="text-eyebrow">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Andheri West, Mumbai
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:hello@bombayblokes.com" className="hover:text-foreground">
                hello@bombayblokes.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+919820000000" className="hover:text-foreground">
                +91 98200 00000
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} Bombay Blokes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
