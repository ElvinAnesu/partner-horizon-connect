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
            Hesu Investments is a Tanzania Revenue Authority (TRA) licensed Inland Container Depot (ICD)& Container Freight Station (CFS) operator, providing world-class cargo handling, storage, and logistics solutions since 2012. Strategically positioned Just off Nelson Mandela road, 5 km from the Port of Dar es Salaam, our 9-acre paved facility boasts a facility of 35,000 SQM that allows a storage capacity of 2,000 Twenty-Foot Equivalent Units (TEUs) for our ICD Clients and 1,600 Twenty-Foot Equivalent Units (TEUS) for our CFS Clients, stacked up to Four high.
          </p>
          <p>
            As one of the most efficiently located and technologically advanced inland container terminals, our operations are designed to maximize throughput and optimize cargo flow. Equipped with state-of-the-art handling machinery, including empty handlers, forklifts, reach stackers, Bobcats, prime movers, and trailers Hesu Investment ensures seamless first-in, first-out (FIFO) stacking configurations for enhanced efficiency.
          </p>
          <p>
            Our fully secured, high-capacity terminal is complemented by a modern two-floor office complex (750 sqm), housing customs and port authorities, shipping lines, and logistics service providers to streamline cargo clearance and coordination.
          </p>
          <p>
            In today&apos;s fast-evolving digital landscape, Hesu Investments remains at the forefront of technological innovation. Our advanced Depot Management System (DMS) is fully integrated with Electronic Data Interchange (EDI) and web services, ensuring full compliance with customer requirements, customs protocols, and regulatory standards.
          </p>
          <p>
            As the company has grown through the years, we have expanded to cross border deliveries, having a fleet of up to 44 trucks and trailers delivering commodities from Dar Port South bound to, as far as Kamoa Copper Mine in the DRC.
          </p>
          <p>
            Having to expand our vision to cross border business, HESU has gained the necessary skillset to provide Clearing and Forwarding to our valued clients that require our services. We take pride in having an efficient and smooth process for ourselves and our clients.
          </p>
          <p>
            At Hesu Investments, we don&apos;t just store and move cargo—we engineer efficiency, enhance trade flow, and deliver logistics solutions with precision and reliability.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-2 md:px-10">
          <div className="rounded-sm border border-border bg-background p-10">
            <p className="eyebrow text-amber">Mission</p>
            <p className="mt-5 text-ink-soft">
            To deliver exceptional, reliable, and innovative logistics solutions that exceed client expectations, drive operational excellence, and set new industry standards.
            </p>
         
          </div>
          <div className="rounded-sm border border-border bg-background p-10">
            <p className="eyebrow text-amber">Vision</p>
            <p className="mt-5 text-ink-soft">
            To lead the logistics industry by offering end-to-end container, transport, and supply chain solutions, fostering sustainable growth and setting new standards in operational excellence.
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
