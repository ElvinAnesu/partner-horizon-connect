import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Reveal,
  Tilt,
  Magnetic,
  Counter,
  Aurora,
  Particles,
  Parallax,
} from "@/components/fx";
import heroPort from "@/assets/hero-port.jpg";
import serviceIcd from "@/assets/service-icd.jpg";
import serviceCfs from "@/assets/service-cfs.jpg";
import serviceDistribution from "@/assets/service-distribution.jpg";
import aboutCta from "@/assets/about-cta.jpg";
import leaderMd from "@/assets/leader-md.jpg";
import leaderCeo from "@/assets/leader-ceo.jpg";
import leaderBh from "@/assets/leader-bh.jpg";
import teamInspection from "@/assets/hesu-team-inspection.jpg.asset.json";
import teamDrill from "@/assets/hesu-team-drill.jpg.asset.json";
import teamCrane from "@/assets/team-crane.jpg.asset.json";
import teamYard from "@/assets/team-yard.jpg.asset.json";
import teamLineup from "@/assets/team-lineup.jpg.asset.json";
import yardStack from "@/assets/yard-stack.jpg.asset.json";
import csrFood from "@/assets/csr-food.jpg.asset.json";
import csrWalk from "@/assets/csr-walk.jpg.asset.json";
import csrCert from "@/assets/csr-certificate.jpg.asset.json";
import heroTruck from "@/assets/hero-truck.mp4.asset.json";

const heroSlides: { src?: string; video?: string; alt: string }[] = [
  { video: heroTruck.url, alt: "Truck carrying a container through the Hesu container depot" },
  { src: heroPort, alt: "Container freight terminal at golden hour" },
  { src: yardStack.url, alt: "Hesu container yard in Dar es Salaam" },
  { src: teamCrane.url, alt: "Hesu reach-stacker crew" },
  { src: teamInspection.url, alt: "Hesu operations team inspection" },
  { src: serviceIcd, alt: "Inland container depot" },
  { src: teamYard.url, alt: "Yard operations team" },
  { src: teamDrill.url, alt: "Hesu security team on drill" },
  { src: serviceCfs, alt: "Container freight station operations" },
  { src: teamLineup.url, alt: "Hesu ground crew line-up" },
  { src: serviceDistribution, alt: "Distribution and trucking fleet" },
];


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

const processSteps = [
  { n: "01", t: "Book", d: "Send your BL, invoice and packing list. We open the file within an hour." },
  { n: "02", t: "Clear", d: "In-house customs brokers handle TRA lodgement, duty and release." },
  { n: "03", t: "Handle", d: "Container is discharged, stripped or stored at our bonded yard." },
  { n: "04", t: "Deliver", d: "Fleet or partner truck moves your cargo — door, warehouse or corridor." },
];

const testimonials = [
  { q: "Hesu turned our port dwell time from days into hours. They treat every container like it's their own.", n: "Amina K.", r: "Head of Supply Chain, FMCG importer" },
  { q: "Reliable, transparent and always answering the phone. Our go-to partner for the DRC corridor.", n: "Jean-Paul M.", r: "Trader, Lubumbashi" },
  { q: "The security discipline alone is worth it. Zero pilferage across two years of shipments.", n: "Ravi S.", r: "Operations Director, industrial equipment" },
  { q: "Real people, real trucks, real accountability. Not a broker — an operator.", n: "Grace L.", r: "Logistics Manager, retail chain" },
];
const leaders = [
  { name: "S. Alhilal", role: "Managing Director", img: leaderMd, bio: "Strategic lead driving Hesu's growth across Tanzania and the wider EAC corridor." },
  { name: "S. Alhilal", role: "Chief Executive Officer", img: leaderCeo, bio: "Sets the group's direction across terminal, yard, fleet and corridor operations." },
  { name: "Sunil Balan", role: "Business Head", img: sunilBalan.url, bio: "Leads client partnerships, business development and pricing across ICD, CFS and distribution." },
];


function Home() {
  const [slide, setSlide] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setTIdx((s) => (s + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-cream fx-grain">
        <div className="absolute inset-0 -z-10">
          {heroSlides.map((s, i) => {
            const cls = `absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${i === slide ? "scale-100 opacity-55 blur-0" : "scale-105 opacity-0 blur-sm"}`;
            return s.video ? (
              <video
                key={i}
                src={s.video}
                aria-label={s.alt}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={cls}
              />
            ) : (
              <img
                key={i}
                src={s.src}
                alt={s.alt}
                width={1920}
                height={1280}
                className={`${cls} ${i === slide ? "ken-burns" : ""}`}
              />
            );
          })}
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink/70 to-transparent" />
        <Aurora className="-z-10 opacity-70" />
        <Particles className="-z-10" />
        <div className="pointer-events-none absolute -right-16 top-16 hidden h-72 w-72 rounded-full border border-amber/30 md:block spin-slow" />
        <div className="pointer-events-none absolute -right-4 top-28 hidden h-48 w-48 rounded-full border border-cream/10 md:block spin-slow" style={{ animationDirection: "reverse" }} />
        <div className="pointer-events-none absolute bottom-8 left-8 hidden h-3 w-3 rounded-full bg-amber md:block float-slow" />
        <div className="absolute bottom-5 right-5 z-10 flex gap-2 md:bottom-8 md:right-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-8 bg-amber shadow-[0_0_14px_2px_color-mix(in_oklab,var(--amber)_60%,transparent)]" : "w-4 bg-cream/40 hover:bg-cream/70"}`}
            />
          ))}
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 pb-24 pt-20 md:grid-cols-[1.6fr_1fr] md:px-10 md:pb-32 md:pt-32">
          <div>
            <p className="eyebrow text-amber reveal-up">Hesu Investment Ltd · Tanzania</p>
            <h1 className="display-xl mt-6 text-cream reveal-up" style={{ animationDelay: "0.1s" }}>
              Moving <span className="text-amber">Africa</span><br />
              forward,<br />
              one container<br />
              at a time.
            </h1>
            <div className="mt-10 flex flex-wrap gap-3 reveal-up" style={{ animationDelay: "0.25s" }}>
              <Magnetic strength={0.2}>
                <Link to="/services" className="fx-shine inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--amber)_75%,transparent)]">
                  Our services <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link to="/contact" className="fx-shine inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-500 hover:border-amber/60 hover:bg-cream/10">
                  Request a quote
                </Link>
              </Magnetic>
            </div>
          </div>
          <Parallax distance={34} className="self-end reveal-up" >
            <p className="max-w-sm text-base leading-relaxed text-cream/85 md:text-lg">
              We don't just store goods or move cargo — we create value at every touchpoint
              through integrated supply chain, strategic partnerships and intelligent
              resource allocation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-cream/15 pt-6">
              {stats.map((s, i) => (
                <Reveal key={s.v} delay={i * 110} from="blur">
                  <div className="font-display text-3xl font-black text-amber">
                    <Counter value={s.k} />
                  </div>
                  <div className="mt-1 text-xs text-cream/70">{s.v}</div>
                </Reveal>
              ))}
            </div>
          </Parallax>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/0 to-transparent" />
      </section>


      {/* MARQUEE partners (two-row opposite directions) */}
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
          <Reveal>
            <p className="eyebrow text-ink-soft">/ What we do</p>
            <h2 className="display-xl mt-4 max-w-3xl text-ink">
              End-to-end<br />supply chain<br /><span className="text-amber">infrastructure.</span>
            </h2>
          </Reveal>
          <Reveal delay={140} from="right" className="md:justify-self-end">
            <p className="max-w-md text-base text-ink-soft md:text-right">
              From port to door — handling, storage, clearance and distribution under one roof.
              Built for speed, costed for scale.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 120} from="blur">
              <Tilt>
                <Link
                  to={s.href}
                  className="group fx-lift relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card hover:border-amber"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-ink-soft">{s.num} / {s.short}</span>
                      <span className="text-amber transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                    </div>
                    <h3 className="font-display text-2xl font-black leading-none">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>

      </section>

      {/* HOW WE WORK — process timeline */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
            <div>
              <p className="eyebrow text-ink-soft">/ How we work</p>
              <h2 className="display-xl mt-4">Four steps.<br /><span className="text-amber">Zero surprises.</span></h2>
            </div>
            <p className="max-w-md text-base text-ink-soft md:justify-self-end md:text-right">
              A repeatable process built for importers, exporters and traders who need
              their shipment moving — not their inbox.
            </p>
          </div>
          <div className="relative mt-16 grid gap-6 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
            {processSteps.map((p, i) => (
              <div key={p.n} className="relative flex flex-col gap-4 rounded-sm border border-border bg-background p-6 reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-amber font-display text-sm font-black text-ink">{p.n}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display text-xl font-black">{p.t}</h3>
                <p className="text-sm text-ink-soft">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT CTA */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1400px] gap-0 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src={aboutCta}
              alt="Port crane silhouette at dusk"
              width={1600}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover ken-burns"
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

      {/* SECURITY */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow text-ink-soft">/ Cargo security</p>
              <h2 className="display-xl mt-4">Your cargo,<br /><span className="text-amber">guarded</span> around the clock.</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
                Every yard, warehouse and convoy is protected by our in-house trained
                security force — recruited, drilled and deployed to Hesu standards. From
                gate control to armed escort, we treat every container as if it were our own.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              {[
                { k: "24/7", v: "Manned guarding & CCTV" },
                { k: "100%", v: "Vetted, uniformed personnel" },
                { k: "In-house", v: "Drill & discipline training" },
                { k: "Zero", v: "Tolerance for pilferage" },
              ].map((s, i) => (
                <Reveal key={s.v} delay={i * 100} from="blur">
                  <div className="font-display text-2xl font-black text-ink">
                    <Counter value={s.k} />
                  </div>
                  <div className="mt-1 text-xs text-ink-soft">{s.v}</div>
                </Reveal>
              ))}
            </div>
          </div>
          <Parallax distance={28} className="grid grid-cols-2 gap-3">
            <Reveal from="scale" className="col-span-2">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={teamDrill.url}
                  alt="Hesu security team on drill formation"
                  loading="lazy"
                  className="h-full w-full object-cover ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-40" />
                <span className="absolute bottom-3 left-3 rounded-sm bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream">Daily drills</span>
              </div>
            </Reveal>
            <Reveal from="scale" delay={120}>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <img
                  src={teamInspection.url}
                  alt="Security inspection at Hesu yard"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
                />
                <span className="absolute bottom-3 left-3 rounded-sm bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream">Inspection</span>
              </div>
            </Reveal>
            <Reveal from="scale" delay={220}>
              <Tilt intensity={8}>
                <div className="relative aspect-square overflow-hidden rounded-sm bg-ink p-6 text-cream fx-grain">
                  <p className="eyebrow text-amber">/ Standard</p>
                  <p className="mt-3 font-display text-xl font-black leading-tight">Trained. Uniformed. Accountable.</p>
                  <p className="mt-3 text-xs text-cream/70">Every guard on shift is logged, radio-linked and supervised.</p>
                </div>
              </Tilt>
            </Reveal>
          </Parallax>

        </div>
      </section>

      {/* TEAM STRIP — scrolling gallery */}
      <section className="border-y border-border bg-background py-14 overflow-hidden">
        <div className="mx-auto mb-8 flex max-w-[1400px] items-end justify-between gap-6 px-5 md:px-10">
          <div>
            <p className="eyebrow text-ink-soft">/ The people</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">Faces on the ground.</h2>
          </div>
          <Link to="/gallery" className="hidden text-sm font-semibold text-ink hover:text-amber md:inline-flex items-center gap-2">
            See gallery <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="marquee-track-slow flex w-max gap-4">
          {[teamCrane, teamYard, teamLineup, yardStack, teamInspection, teamDrill, teamCrane, teamYard, teamLineup, yardStack].map((it, i) => (
            <div key={i} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-sm md:h-72 md:w-96">
              <img src={it.url} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="marquee-track-reverse mt-4 flex w-max gap-4">
          {[csrFood, csrWalk, csrCert, yardStack, teamLineup, teamCrane, csrFood, csrWalk, csrCert, yardStack].map((it, i) => (
            <div key={i} className="relative h-44 w-64 shrink-0 overflow-hidden rounded-sm md:h-56 md:w-80">
              <img src={it.url} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative isolate overflow-hidden bg-ink text-cream fx-grain">
        <Aurora className="opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
            <Reveal>
              <p className="eyebrow text-amber">/ Leadership</p>
              <h2 className="display-xl mt-4">Meet the people<br /><span className="text-amber">in charge.</span></h2>
            </Reveal>
            <Reveal delay={140} from="right" className="md:justify-self-end">
              <p className="max-w-md text-base text-cream/75 md:text-right">
                Decades of combined port, corridor and customs experience — accountable,
                reachable and on the ground with every shipment.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 130} from="blur">
                <Tilt intensity={6}>
                  <article className="group fx-lift relative overflow-hidden rounded-sm border border-cream/12 bg-cream/[0.04] backdrop-blur-md">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={l.img}
                        alt={l.name}
                        width={912}
                        height={1200}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-700 group-hover:translate-y-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">{l.role}</p>
                        <h3 className="mt-2 font-display text-2xl font-black leading-none">{l.name}</h3>
                        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/75 opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100">
                          {l.bio}
                        </p>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <Magnetic strength={0.2}>
              <Link to="/team" className="fx-shine inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-500 hover:-translate-y-0.5">
                Meet the full team <span aria-hidden>→</span>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>


      {/* COMMUNITY TEASER */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[420px] md:h-[560px]">
            <div className="col-span-4 row-span-4 overflow-hidden rounded-sm">
              <img src={csrWalk.url} alt="Community walk" className="h-full w-full object-cover ken-burns" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-sm">
              <img src={csrFood.url} alt="Food drive" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-sm">
              <img src={csrCert.url} alt="Certificate" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-4 row-span-2 overflow-hidden rounded-sm bg-ink p-5 text-cream flex items-end">
              <p className="font-display text-xl font-black leading-tight md:text-2xl">
                <span className="text-amber">2,000+</span> community members reached in 2026.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-ink-soft">/ Community & impact</p>
            <h2 className="display-xl mt-4">Rooted in<br /><span className="text-amber">Tanzania.</span></h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
              We give back to the neighbourhoods that host our yards — through meals, wellness runs,
              youth training and cleaner logistics. It's not sponsorship, it's family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/community" className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold text-cream hover:-translate-y-0.5 transition-transform">
                Our community work <span aria-hidden>→</span>
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold text-ink hover:border-ink transition-colors">
                Full gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <p className="eyebrow text-amber">/ Clients</p>
          <h2 className="display-xl mt-4 max-w-4xl">What they<br /><span className="text-amber">say.</span></h2>
          <div className="mt-14 grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
            <div className="relative min-h-[220px]">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${i === tIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
                >
                  <p className="font-display text-2xl font-black leading-tight md:text-4xl">
                    <span className="text-amber">"</span>{t.q}<span className="text-amber">"</span>
                  </p>
                  <footer className="mt-6 text-sm text-cream/70">
                    <span className="font-semibold text-cream">{t.n}</span> · {t.r}
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === tIdx ? "w-10 bg-amber" : "w-3 bg-cream/30 hover:bg-cream/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-ink-soft">/ Core values</p>
          <h2 className="display-xl mt-4 max-w-4xl">Built on trust.<br />Measured by <span className="text-amber">results.</span></h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
          {[
            { k: "Integrity", v: "Transparent dealings with clients, partners and authorities — every transaction, every time." },
            { k: "Efficiency", v: "Lean operations, optimised dwell times and ruthless waste elimination across the chain." },
            { k: "Accountability", v: "Clear ownership at every node. Track, trace and prove — from port to recipient." },
            { k: "Partnership", v: "We grow when our clients grow. Long-term relationships over transactional wins." },
          ].map((v, i) => (
            <Reveal key={v.k} delay={i * 100} from="scale">
              <div className="group flex h-full flex-col gap-3 bg-background p-8 transition-colors duration-500 hover:bg-secondary">
                <span className="font-mono text-xs text-amber">0{i + 1}</span>
                <h3 className="font-display text-2xl font-black transition-transform duration-500 group-hover:-translate-y-0.5">{v.k}</h3>
                <p className="text-sm text-ink-soft">{v.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <Reveal from="scale">
          <div className="relative overflow-hidden rounded-sm bg-amber p-10 text-ink md:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-4 border-ink/10 spin-slow" />
            <div className="pointer-events-none absolute -left-10 -bottom-16 h-48 w-48 rounded-full border-2 border-ink/10 spin-slow" style={{ animationDirection: "reverse" }} />
            <div className="relative grid items-end gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="eyebrow">/ Ready when you are</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-none md:text-6xl">
                  Let's move your<br />next container.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Magnetic strength={0.2}>
                  <Link to="/contact" className="fx-shine inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold text-cream hover:-translate-y-0.5 transition-transform duration-500">
                    Request a quote <span aria-hidden>→</span>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Link to="/services" className="fx-shine inline-flex items-center gap-2 rounded-sm border border-ink/30 px-6 py-3.5 text-sm font-semibold text-ink hover:bg-ink/10 transition-colors duration-500">
                    See services
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </>
  );
}
