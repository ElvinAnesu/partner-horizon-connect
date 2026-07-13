import { createFileRoute, Link } from "@tanstack/react-router";
import csrFood from "@/assets/csr-food.jpg.asset.json";
import csrWalk from "@/assets/csr-walk.jpg.asset.json";
import csrCert from "@/assets/csr-certificate.jpg.asset.json";
import teamLineup from "@/assets/team-lineup.jpg.asset.json";

const pillars = [
  { k: "Community meals", v: "Regular food distribution at our yards and partner sites — supporting families across Temeke and the port neighbourhoods." },
  { k: "Health & wellness", v: "Company jogging festivals, health checks and staff wellbeing initiatives that build a stronger workforce and community." },
  { k: "Youth & jobs", v: "Apprenticeships, on-the-job training and priority hiring for young people from the communities where we operate." },
  { k: "Environment", v: "Neighbourhood clean-ups, tree planting and cleaner logistics — reducing our footprint one route at a time." },
];

const timeline = [
  { y: "Q1", t: "Temeke Jogging Festival · Season 2", d: "Hesu-sponsored community wellness run bringing hundreds of residents together." },
  { y: "Q2", t: "Ramadan food drives", d: "Meals and essentials distributed at yards and neighbouring communities." },
  { y: "Q3", t: "Youth training intake", d: "New cohort of apprentices onboarded across yard, fleet and customs teams." },
  { y: "Q4", t: "Year-end community give-back", d: "Partner NGO donations and school-supply distributions." },
];

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Impact — Hesu Investment Ltd" },
      { name: "description", content: "How Hesu Investment Ltd invests in the Tanzanian communities where we live and work — meals, health, youth training and environment." },
      { property: "og:title", content: "Community & Impact — Hesu" },
      { property: "og:description", content: "Meals, health, youth training and environment — the Hesu community programme." },
      { property: "og:image", content: csrWalk.url },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 -z-10">
          <img src={csrWalk.url} alt="" className="h-full w-full object-cover opacity-40 ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/70 to-transparent" />
        </div>
        <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
          <p className="eyebrow text-amber reveal-up">/ Community & impact</p>
          <h1 className="display-xl mt-6 max-w-4xl text-cream reveal-up" style={{ animationDelay: "0.1s" }}>
            We move cargo.<br />We also move<br /><span className="text-amber">people forward.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 reveal-up md:text-lg" style={{ animationDelay: "0.2s" }}>
            Hesu grew up in Tanzania. Every day we invest back into the neighbourhoods that host our yards — through meals,
            training, health and the environment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow text-ink-soft">/ Our pillars</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
              Four pillars.<br />One <span className="text-amber">promise.</span>
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.k} className="flex flex-col gap-3 bg-background p-8 tilt-hover">
                <span className="font-mono text-xs text-amber">0{i + 1}</span>
                <h3 className="font-display text-2xl font-black">{p.k}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <p className="eyebrow text-ink-soft">/ In pictures</p>
          <h2 className="mt-4 display-xl max-w-3xl">Impact you can<br /><span className="text-amber">see.</span></h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { src: csrFood.url, cap: "Ramadan food drive at the yard" },
              { src: csrWalk.url, cap: "Community wellness walk" },
              { src: csrCert.url, cap: "Temeke Jogging Festival · Season 2" },
            ].map((it, i) => (
              <figure key={it.src} className="group relative overflow-hidden rounded-sm reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={it.src} alt={it.cap} className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 font-display text-lg font-black text-cream">
                  {it.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <p className="eyebrow text-ink-soft">/ 2026 calendar</p>
        <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">A year of giving back.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {timeline.map((t, i) => (
            <div key={t.y} className="relative flex flex-col gap-3 rounded-sm border border-border bg-card p-6 reveal-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="font-mono text-xs text-amber">{t.y} · 2026</span>
              <h3 className="font-display text-xl font-black leading-tight">{t.t}</h3>
              <p className="text-sm text-ink-soft">{t.d}</p>
              <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-amber float-slow" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="relative overflow-hidden rounded-sm bg-ink p-10 text-cream md:p-16">
          <img src={teamLineup.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="relative grid items-end gap-10 md:grid-cols-[2fr_1fr]">
            <h2 className="font-display text-4xl font-black leading-none md:text-6xl">
              Partner with us on<br /><span className="text-amber">the next initiative.</span>
            </h2>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-transform">
              Talk to our CSR team <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
