import { createFileRoute, Link } from "@tanstack/react-router";
import heroPort from "@/assets/hero-port.jpg";
import serviceIcd from "@/assets/service-icd.jpg";
import serviceCfs from "@/assets/service-cfs.jpg";
import serviceDistribution from "@/assets/service-distribution.jpg";
import aboutCta from "@/assets/about-cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hesu Investment Ltd — Logistics & Supply Chain, Tanzania" },
      { name: "description", content: "Inland container depot, freight station, warehousing and distribution across Tanzania and East Africa." },
      { property: "og:title", content: "Hesu Investment Ltd" },
      { property: "og:description", content: "Integrated logistics powering trade across Tanzania and East Africa." },
      { property: "og:image", content: heroPort },
      { name: "twitter:image", content: heroPort },
    ],
  }),
  component: Home,
});

const services = [
  { num: "01", title: "Inland Container Depot", short: "ICD", desc: "Customs-bonded handling, storage and clearance for full container loads moving inland from the Port of Dar es Salaam.", img: serviceIcd, href: "/services" },
  { num: "02", title: "Container Freight Station", short: "CFS", desc: "LCL consolidation, stripping and stuffing with full visibility, security and dwell-time optimisation.", img: serviceCfs, href: "/services" },
  { num: "03", title: "Distribution & Trucking", short: "FLEET", desc: "Owned and partner fleet covering Tanzania, the DRC, Zambia, Rwanda, Burundi and the wider EAC corridor.", img: serviceDistribution, href: "/services" },
];

const stats = [
  { k: "15+", v: "Years moving cargo" },
  { k: "12 ha", v: "Yard capacity" },
  { k: "6", v: "Corridor markets" },
  { k: "24/7", v: "Operations" },
];

const partners = [
  "MAERSK", "MSC", "CMA CGM", "DP WORLD", "TPA", "TRA", "EAC", "SADC", "ONE", "HAPAG-LLOYD",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <img
          src={heroPort}
          alt="Container freight terminal at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink/70 to-transparent" />
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 pb-24 pt-20 md:grid-cols-[1.6fr_1fr] md:px-10 md:pb-32 md:pt-32">
          <div>
            <p className="eyebrow text-amber">Hesu Investment Ltd · Tanzania</p>
            <h1 className="display-xl mt-6 text-cream">
              Moving <span className="text-amber">Africa</span><br />
              forward,<br />
              one container<br />
              at a time.
            </h1>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
                Our services <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10">
                Request a quote
              </Link>
            </div>
          </div>
          <div className="self-end">
            <p className="max-w-sm text-base leading-relaxed text-cream/85 md:text-lg">
              We don't just store goods or move cargo — we create value at every touchpoint
              through integrated supply chain, strategic partnerships and intelligent
              resource allocation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-cream/15 pt-6">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-black text-amber">{s.k}</div>
                  <div className="mt-1 text-xs text-cream/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-background py-6 overflow-hidden">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="font-display text-2xl font-black tracking-tight text-ink/40">
              {p} <span className="text-amber">●</span>
            </span>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
          <div>
            <p className="eyebrow text-ink-soft">/ What we do</p>
            <h2 className="display-xl mt-4 max-w-3xl text-ink">
              End-to-end<br />supply chain<br /><span className="text-amber">infrastructure.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-soft md:justify-self-end md:text-right">
            From port to door — handling, storage, clearance and distribution under one roof.
            Built for speed, costed for scale.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.num}
              to={s.href}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:border-amber"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-soft">{s.num} / {s.short}</span>
                  <span className="text-amber transition-transform group-hover:translate-x-1">→</span>
                </div>
                <h3 className="font-display text-2xl font-black leading-none">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SPLIT CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1400px] gap-0 md:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img
              src={aboutCta}
              alt="Port crane silhouette at dusk"
              width={1600}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-10 md:p-16">
            <p className="eyebrow text-amber">/ Our promise</p>
            <h2 className="font-display text-4xl font-black leading-tight md:text-5xl">
              Logistics as a competitive advantage — not a cost line.
            </h2>
            <p className="text-base text-cream/80">
              We partner with importers, exporters and manufacturers to turn supply chain
              friction into measurable margin. Every container handled. Every kilometre tracked.
              Every promise kept.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-transform">
                About Hesu <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors">
                Talk to ops
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <p className="eyebrow text-ink-soft">/ Core values</p>
        <h2 className="display-xl mt-4 max-w-4xl">Built on trust.<br />Measured by <span className="text-amber">results.</span></h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
          {[
            { k: "Integrity", v: "Transparent dealings with clients, partners and authorities — every transaction, every time." },
            { k: "Efficiency", v: "Lean operations, optimised dwell times and ruthless waste elimination across the chain." },
            { k: "Accountability", v: "Clear ownership at every node. Track, trace and prove — from port to recipient." },
            { k: "Partnership", v: "We grow when our clients grow. Long-term relationships over transactional wins." },
          ].map((v, i) => (
            <div key={v.k} className="flex flex-col gap-3 bg-background p-8">
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <h3 className="font-display text-2xl font-black">{v.k}</h3>
              <p className="text-sm text-ink-soft">{v.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
