import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { galleryImages, galleryItems } from "@/lib/gallery-images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hesu Investment Ltd" },
      { name: "description", content: "Photos from Hesu Investment Ltd yards, operations, team and community events across Tanzania." },
      { property: "og:title", content: "Gallery — Hesu Investment Ltd" },
      { property: "og:description", content: "A visual look at Hesu Investment Ltd operations, people and community work." },
      { property: "og:image", content: galleryImages[0] },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [light, setLight] = useState<number | null>(null);
  const items = galleryItems;

  useEffect(() => {
    if (light === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLight(null);
      if (e.key === "ArrowRight") setLight((l) => (l === null ? l : (l + 1) % items.length));
      if (e.key === "ArrowLeft") setLight((l) => (l === null ? l : (l - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [light, items.length]);

  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="eyebrow text-amber reveal-up">/ Gallery</p>
          <h1 className="display-xl mt-6 max-w-5xl text-cream reveal-up" style={{ animationDelay: "0.1s" }}>
            Moments from<br />the <span className="text-amber">Hesu</span> ground.
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/75 reveal-up" style={{ animationDelay: "0.2s" }}>
            Real photos from our yards, teams and community events across Tanzania. Click any image to enlarge.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((it, i) => (
            <button
              key={it.src}
              onClick={() => setLight(i)}
              className="group relative block w-full overflow-hidden rounded-sm border border-border bg-card break-inside-avoid text-left reveal-up"
              style={{ animationDelay: `${(i % 6) * 0.06}s` }}
            >
              <img
                src={it.src}
                alt={it.cap}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-sm font-black text-cream">{it.cap}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {light !== null && (
        <div
          onClick={() => setLight(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md reveal-up"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLight(null); }}
            className="absolute right-5 top-5 rounded-full bg-cream/10 px-4 py-2 text-sm text-cream hover:bg-cream/20"
          >Close ✕</button>
          <button
            onClick={(e) => { e.stopPropagation(); setLight((l) => (l === null ? l : (l - 1 + items.length) % items.length)); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 px-4 py-3 text-lg text-cream hover:bg-amber hover:text-ink"
            aria-label="Previous"
          >←</button>
          <button
            onClick={(e) => { e.stopPropagation(); setLight((l) => (l === null ? l : (l + 1) % items.length)); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 px-4 py-3 text-lg text-cream hover:bg-amber hover:text-ink"
            aria-label="Next"
          >→</button>
          <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[light].src} alt={items[light].cap} className="max-h-[82vh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-cream/70">
              {items[light].cap} · {light + 1} / {items.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
