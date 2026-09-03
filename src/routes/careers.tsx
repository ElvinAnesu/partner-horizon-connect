import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Magnetic } from "@/components/fx";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Hesu Investment Ltd" },
      {
        name: "description",
        content:
          "Careers at Hesu Investment Ltd. There are no current vacancies — check back soon or send a general enquiry to HR.",
      },
      { property: "og:title", content: "Careers — Hesu Investment Ltd" },
      {
        property: "og:description",
        content: "No current vacancies at Hesu Investment Ltd. Check back soon or contact HR.",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <Reveal>
            <p className="eyebrow text-amber">/ Careers</p>
            <h1 className="display-xl mt-6 max-w-5xl text-cream">
              Build the backbone<br />
              of East African <span className="text-amber">trade.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
              Hesu hires operators, drivers and specialists who take ownership from port to
              door. If you want real trucks, real accountability and a career that moves cargo
              across Tanzania and the corridor — start here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <Reveal>
          <p className="eyebrow text-ink-soft">/ Open roles</p>
          <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
            No current<br />
            <span className="text-amber">vacancies.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            We don&apos;t have any open positions at the moment. Check back soon, or send a general
            enquiry to HR if you&apos;d like to be considered for future roles.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <Reveal from="scale">
          <div className="rounded-sm bg-ink p-10 text-cream md:p-16">
            <div className="grid items-end gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="eyebrow text-amber">/ Not seeing your role?</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-none md:text-5xl">
                  Send a general<br />
                  <span className="text-amber">enquiry.</span>
                </h2>
              </div>
              <Magnetic strength={0.2}>
                <Link
                  to="/contact"
                  className="fx-shine inline-flex w-fit items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-500 hover:-translate-y-0.5"
                >
                  Contact HR <span aria-hidden>→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
