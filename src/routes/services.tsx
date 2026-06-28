import { createFileRoute, Link } from "@tanstack/react-router";
import serviceIcd from "@/assets/service-icd.jpg";
import serviceCfs from "@/assets/service-cfs.jpg";
import serviceDistribution from "@/assets/service-distribution.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hesu Investment Ltd" },
      { name: "description", content: "ICD, container freight station, warehousing, distribution and customs clearance across Tanzania and East Africa." },
      { property: "og:title", content: "Services — Hesu Investment Ltd" },
      { property: "og:description", content: "ICD, CFS, warehousing, distribution and clearance — built for East African trade." },
      { property: "og:image", content: serviceIcd },
    ],
  }),
  component: Services,
});

const items = [
  {
    num: "01",
    short: "ICD",
    title: "Inland Container Depot",
    img: serviceIcd,
    desc: "A customs-bonded extension of the port — relieving congestion at Dar es Salaam and giving cargo owners faster turnaround on inland-bound boxes.",
    bullets: ["Customs-bonded yard storage", "Full container load handling", "Reach-stacker operations", "Clearance and documentation", "Empty container management"],
  },
  {
    num: "02",
    short: "CFS",
    title: "Container Freight Station",
    img: serviceCfs,
    desc: "Specialised LCL handling — consolidation, deconsolidation and value-added warehousing for groupage cargo across the region.",
    bullets: ["LCL stripping & stuffing", "Cargo consolidation", "Bonded warehousing", "Inspection facilities", "24/7 secured operations"],
  },
  {
    num: "03",
    short: "FLEET",
    title: "Distribution & Trucking",
    img: serviceDistribution,
    desc: "Owned and partner fleet covering Tanzania and the EAC corridor — DRC, Zambia, Rwanda, Burundi, Uganda, Malawi.",
    bullets: ["Long-haul corridor trucking", "Cross-border clearance", "GPS-tracked transit", "Last-mile distribution", "Project & abnormal cargo"],
  },
];

function Services() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="eyebrow text-amber">/ Services</p>
          <h1 className="display-xl mt-6 max-w-5xl text-cream">
            Four divisions.<br />
            One <span className="text-amber">supply chain.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-cream/80 md:text-lg">
            Hesu operates the full stack of logistics infrastructure required to move cargo
            from the Port of Dar es Salaam to anywhere in East and Central Africa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 space-y-24">
        {items.map((s, i) => (
          <article
            key={s.num}
            id={s.short.toLowerCase()}
            className={`grid gap-12 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-sm">
              <img src={s.img} alt={s.title} width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="font-mono text-xs text-amber">{s.num} / {s.short}</span>
              <h2 className="mt-3 font-display text-4xl font-black leading-none md:text-5xl">{s.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">{s.desc}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="flex flex-col items-start gap-6 rounded-sm border border-border bg-secondary p-10 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="eyebrow text-ink-soft">/ Build a quote</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">Tell us what you're moving.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold text-cream hover:-translate-y-0.5 transition-transform">
            Request a quote <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
