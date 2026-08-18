import { useCallback, useRef, useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import { MoveHorizontal } from "lucide-react";
import before from "@/assets/site-before.jpg";
import after from "@/assets/site-after.jpg";

export function CompareSlider() {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <section className="border-y bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-eyebrow">Before / after</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] font-semibold sm:text-5xl">
            Drag to see what a website redesign actually changes.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Same brand, same products, same traffic. The rebuild changed hierarchy, speed and
            clarity — and the store's conversion rate moved 38% in ten weeks.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div
            ref={wrap}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            className="relative mt-10 aspect-[4/3] w-full touch-none overflow-hidden rounded-[2rem] border bg-card shadow-lift select-none sm:aspect-[16/10]"
          >
            <img
              src={after}
              alt="Bombay Blokes redesigned Shopify ecommerce website after rebuild"
              width={1280}
              height={960}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
              aria-hidden
            >
              <img
                src={before}
                alt=""
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover object-top"
                style={{ width: wrap.current ? wrap.current.clientWidth : "100%", maxWidth: "none" }}
              />
            </div>

            <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold text-primary-foreground">
              Before
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
              After
            </span>

            <div
              className="absolute inset-y-0 w-px bg-accent"
              style={{ left: `${pos}%` }}
              aria-hidden
            >
              <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift">
                <MoveHorizontal className="h-4.5 w-4.5" />
              </span>
            </div>

            <label className="sr-only" htmlFor="compare-range">
              Compare before and after
            </label>
            <input
              id="compare-range"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute bottom-4 left-1/2 w-40 -translate-x-1/2 opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
