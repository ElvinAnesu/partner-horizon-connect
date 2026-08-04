import { createFileRoute, Link } from "@tanstack/react-router";
import aboutCta from "@/assets/about-cta.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Hesu Investment Ltd" },
      { name: "description", content: "Meet the experienced leaders and operators behind Hesu Investment Ltd's logistics and supply chain services in Tanzania." },
      { property: "og:title", content: "Our Team — Hesu Investment Ltd" },
      { property: "og:description", content: "The people behind Hesu Investment Ltd's logistics and supply chain services in Tanzania." },
      { property: "og:image", content: aboutCta },
    ],
  }),
  component: Team,
});

const executives = [
  {
    name: "Abdallah H. Mnyandu",
    role: "Managing Director",
    bio: "Founder and strategic leader driving Hesu’s growth across Tanzania and the wider EAC corridor.",
    initials: "AM",
  },
  {
    name: "Fatma S. Omar",
    role: "Operations Director",
    bio: "Oversees terminal, yard and fleet operations with a focus on safety, throughput and on-time delivery.",
    initials: "FO",
  },
  {
    name: "Michael P. Rugakingira",
    role: "Commercial Manager",
    bio: "Leads client partnerships, business development and pricing across the ICD, CFS and distribution lines.",
    initials: "MR",
  },
  {
    name: "Grace T. Mwombeki",
    role: "Finance & Compliance Manager",
    bio: "Ensures financial discipline, statutory compliance and risk management across all Hesu entities.",
    initials: "GM",
  },
];

const managers = [
  {
    name: "Emmanuel B. Kessy",
    role: "Yard & Container Operations Manager",
    initials: "EK",
  },
  {
    name: "Salome J. Kinyota",
    role: "Customs & Documentation Supervisor",
    initials: "SK",
  },
  {
    name: "David M. Ndaki",
    role: "Fleet & Distribution Manager",
    initials: "DN",
  },
  {
    name: "Joyce P. Lwezaula",
    role: "Warehouse & Inventory Lead",
    initials: "JL",
  },
  {
    name: "Hassan R. Mwinyi",
    role: "Health, Safety & Environment Officer",
    initials: "HM",
  },
  {
    name: "Regina N. Kitundu",
    role: "Customer Relations & Sales Coordinator",
    initials: "RK",
  },
];

const values = [
  { k: "Leadership", v: "Experienced operators who have shaped the region’s logistics landscape for more than a decade." },
  { k: "Ownership", v: "Every team member owns the outcome — from the port gate to the final mile." },
  { k: "Growth", v: "We invest in people, training and systems that let our talent scale with our clients." },
  { k: "Trust", v: "Transparent, accountable teams build the long-term partnerships that move East African trade." },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-ink text-cream font-display text-2xl font-black tracking-tight transition-all duration-700 group-hover:shadow-[0_0_0_6px_color-mix(in_oklab,var(--amber)_22%,transparent)] md:h-24 md:w-24 md:text-3xl">
      <span className="pointer-events-none absolute inset-0 rounded-full border border-amber/40 opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" />
      {initials}
    </div>
  );
}


function Team() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="eyebrow text-amber">/ Our people</p>
          <h1 className="display-xl mt-6 max-w-5xl text-cream">
            The team behind<br />
            every <span className="text-amber">container.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-ink-soft">/ Leadership</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
              Built by operators,<br />guided by experience.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Hesu’s strength is its people. Our leadership team combines deep logistics experience,
            local market knowledge and a shared commitment to delivering for every client — every day.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {executives.map((p) => (
            <div key={p.name} className="flex flex-col gap-5 rounded-sm border border-border bg-card p-6">
              <Avatar initials={p.initials} />
              <div>
                <h3 className="font-display text-xl font-black">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-amber">{p.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <p className="eyebrow text-ink-soft">/ Operations team</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-black md:text-4xl">
            The specialists who keep cargo flowing.
          </h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {managers.map((p) => (
              <div key={p.name} className="flex items-center gap-4 rounded-sm border border-border bg-background p-5">
                <Avatar initials={p.initials} />
                <div>
                  <h3 className="font-display text-lg font-black">{p.name}</h3>
                  <p className="text-sm text-ink-soft">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <p className="eyebrow text-ink-soft">/ Why our team matters</p>
        <h2 className="display-xl mt-4 max-w-4xl">People first.<br />Cargo <span className="text-amber">always.</span></h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.k} className="flex flex-col gap-3 bg-background p-8">
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <h3 className="font-display text-2xl font-black">{v.k}</h3>
              <p className="text-sm text-ink-soft">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="rounded-sm bg-ink p-10 text-cream md:p-16">
          <div className="grid items-end gap-10 md:grid-cols-[2fr_1fr]">
            <h2 className="font-display text-4xl font-black leading-none md:text-6xl">
              Join the team<br /><span className="text-amber">shaping trade.</span>
            </h2>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-transform">
              Careers & enquiries <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
