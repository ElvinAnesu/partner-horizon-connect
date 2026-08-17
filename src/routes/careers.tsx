import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, Magnetic } from "@/components/fx";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Hesu Investment Ltd" },
      {
        name: "description",
        content:
          "Join Hesu Investment Ltd. Open roles in logistics across Tanzania and East Africa — apply for Transit Driver and more.",
      },
      { property: "og:title", content: "Careers — Hesu Investment Ltd" },
      {
        property: "og:description",
        content: "We're hiring. Explore open roles at Hesu Investment Ltd and apply online.",
      },
    ],
  }),
  component: Careers,
});

const vacancy = {
  title: "Transit Driver",
  location: "Dar es Salaam / EAC corridor routes",
  type: "Full-time",
  description:
    "Operate long-haul and corridor trucking for container and general cargo across Tanzania and neighbouring EAC markets. Join a GPS-tracked fleet with clear routes, accountable ops and a team that treats every kilometre as a promise kept.",
  requirements: [
    "Valid driving licence for the relevant heavy-vehicle class",
    "Proven long-haul or cross-border driving experience preferred",
    "Clean driving record and willingness to undergo vetting",
    "Comfortable with multi-day corridor trips (DRC, Zambia, Rwanda, Burundi and beyond)",
    "Strong communication and basic documentation discipline",
    "Commitment to Hesu safety, security and cargo-care standards",
  ],
};

function Careers() {
  const [sent, setSent] = useState(false);

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
            One seat open.<br />
            Ready when <span className="text-amber">you</span> are.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <article className="rounded-sm border border-border bg-card p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-amber">01 / TRANSPORT</span>
                <h3 className="mt-3 font-display text-3xl font-black md:text-4xl">{vacancy.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sm border border-border px-3 py-1.5 text-xs font-semibold text-ink-soft">
                  {vacancy.type}
                </span>
                <span className="rounded-sm border border-border px-3 py-1.5 text-xs font-semibold text-ink-soft">
                  {vacancy.location}
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-soft">{vacancy.description}</p>
            <p className="eyebrow mt-10 text-ink-soft">Requirements</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {vacancy.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                  {r}
                </li>
              ))}
            </ul>
            <Magnetic strength={0.18} className="mt-10 inline-flex">
              <a
                href="#apply"
                className="fx-shine inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-transform duration-500 hover:-translate-y-0.5"
              >
                Apply now <span aria-hidden>→</span>
              </a>
            </Magnetic>
          </article>
        </Reveal>
      </section>

      <section id="apply" className="border-y border-border bg-secondary scroll-mt-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow text-ink-soft">/ Application</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
              Apply for<br />
              <span className="text-amber">Transit Driver.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Tell us about your licence, experience and why you want to drive with Hesu.
              Our HR team reviews every application.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5 rounded-sm border border-border bg-background p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" required />
                <Field
                  label="Position"
                  name="position"
                  defaultValue="Transit Driver"
                  readOnly
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Years of experience" name="experience" placeholder="e.g. 5" />
                <Field label="Licence class" name="licence" placeholder="e.g. Class E" />
              </div>
              <div>
                <label htmlFor="cover" className="eyebrow text-ink-soft">
                  Why Hesu? <span className="text-amber">*</span>
                </label>
                <textarea
                  id="cover"
                  name="cover"
                  required
                  rows={5}
                  placeholder="A short note on your experience and why you want this role"
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-amber"
                />
              </div>
              <div>
                <label htmlFor="cv" className="eyebrow text-ink-soft">
                  CV / resume <span className="text-ink-soft/60">(optional)</span>
                </label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 block w-full text-sm text-ink-soft file:mr-4 file:rounded-sm file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cream hover:file:bg-ink/90"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                {sent ? (
                  <>✓ Application received — we&apos;ll be in touch</>
                ) : (
                  <>Submit application →</>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
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

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  readOnly,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink-soft">
        {label}
        {required && <span className="text-amber"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={`mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-amber ${
          readOnly ? "cursor-default text-ink-soft" : ""
        }`}
      />
    </div>
  );
}
