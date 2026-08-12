import { Reveal } from "@/hooks/use-reveal";
import c3 from "@/assets/creative-3.jpg";
import c4 from "@/assets/creative-4.jpg";
import c6 from "@/assets/creative-6.jpg";

export function Statement() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-eyebrow">Social media, done properly</p>
          <p className="mt-5 font-display text-3xl leading-[1.1] font-semibold sm:text-[2.75rem]">
            Social media isn't posting. It's{" "}
            <span className="highlight-accent">showing up like a brand</span> — every single week.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build the strategy, shoot the content and run the feed, so your brand looks premium,
            posts consistently and gets remembered long before someone is ready to buy.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[c4, c6, c3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Social media content created by Bombay Blokes"
                loading="lazy"
                className={`w-full rounded-2xl border object-cover shadow-soft transition-transform duration-500 hover:-translate-y-1.5 ${
                  i === 1 ? "aspect-[3/5] translate-y-6" : "aspect-[3/4]"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
