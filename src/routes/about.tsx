import { createFileRoute, Link } from "@tanstack/react-router";
import aboutCta from "@/assets/about-cta.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hesu Investment Ltd" },
      { name: "description", content: "Hesu Investment Ltd: a Tanzanian logistics company building integrated supply chain infrastructure for East Africa." },
      { property: "og:title", content: "About Hesu Investment Ltd" },
      { property: "og:description", content: "A Tanzanian logistics company building integrated supply chain infrastructure for East Africa." },
      { property: "og:image", content: aboutCta },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="eyebrow text-amber">/ About Hesu</p>
          <h1 className="display-xl mt-6 max-w-5xl text-cream">
            A logistics company<br />
            built for the way <span className="text-amber">Africa trades.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:px-10">
        <div>
          <p className="eyebrow text-ink-soft">/ Who we are</p>
          <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
            Tanzanian roots.<br />Regional reach.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
          <p>
            Hesu Investment Ltd is a Tanzanian logistics and supply chain company headquartered in Dar es Salaam.
            We operate inland container depot, container freight station, warehousing and distribution
            services serving importers, exporters and manufacturers across the East African Community.
          </p>
          <p>
            For over a decade we've grown alongside our clients — building the yards, fleets, systems and
            partnerships that make moving cargo across the region predictable, fast and cost-efficient.
          </p>
          <p>
            We believe logistics should be a competitive advantage, not a line item. Everything we build
            is in service of that idea.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-2 md:px-10">
          <div className="rounded-sm border border-border bg-background p-10">
            <p className="eyebrow text-amber">Mission</p>
            <h3 className="mt-4 font-display text-3xl font-black leading-tight">
              Turn supply chain friction into growth.
            </h3>
            <p className="mt-5 text-ink-soft">
              We deliver integrated logistics services that lower the cost, time and risk of trade for
              every client we serve — from Dar es Salaam port to the furthest corridor town.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-background p-10">
            <p className="eyebrow text-amber">Vision</p>
            <h3 className="mt-4 font-display text-3xl font-black leading-tight">
              The logistics backbone of East African trade.
            </h3>
            <p className="mt-5 text-ink-soft">
              To be the most trusted supply chain partner across the EAC corridor — recognised for
              operational excellence, integrity and a relentless focus on our clients' growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <div className="rounded-sm bg-ink p-10 text-cream md:p-16">
          <div className="grid items-end gap-10 md:grid-cols-[2fr_1fr]">
            <h2 className="font-display text-4xl font-black leading-none md:text-6xl">
              Ready to move<br /><span className="text-amber">your cargo?</span>
            </h2>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-transform">
              Start a conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
