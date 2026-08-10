import { createFileRoute, Link } from "@tanstack/react-router";
import aboutCta from "@/assets/about-cta.jpg";
import { Reveal, Tilt, Aurora, Magnetic } from "@/components/fx";
import { LeadershipCarousel, ProfileAvatar, type TeamMember } from "@/components/leadership-carousel";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Hesu Investment Ltd" },
      { name: "description", content: "Meet the executive and leadership teams behind Hesu Investment Ltd's logistics and supply chain services in Tanzania." },
      { property: "og:title", content: "Our Team — Hesu Investment Ltd" },
      { property: "og:description", content: "The executives and department heads behind Hesu Investment Ltd's logistics and supply chain services in Tanzania." },
      { property: "og:image", content: aboutCta },
    ],
  }),
  component: Team,
});

const executives: TeamMember[] = [
  {
    name: "S. Alhilal",
    role: "Managing Director",
    bio: "Strategic leader driving Hesu’s growth across Tanzania and the wider EAC corridor.",
  },
  {
    name: "S. Alhilal",
    role: "Chief Executive Officer",
    bio: "Sets the group’s direction across terminal, yard, fleet and corridor operations.",
  },
  {
    name: "Sunil Balan",
    role: "Business Head",
    bio: "Leads client partnerships, business development and pricing across the ICD, CFS and distribution lines.",
  },
];

const leadership: TeamMember[] = [
  { name: "Gain Tawodzera", role: "IT Head", bio: "Leads the IT function, driving technology infrastructure, systems and digital support across the organization." },
  { name: "Neema Mtui", role: "HSE Head", bio: "Leads health, safety and environment, upholding safe working standards across every site and operation." },
  { name: "Meheroon Kassu", role: "HR Head", bio: "Leads the human resources function, covering people development, welfare and organizational capability." },
  { name: "Faustine Shilinde", role: "Engineering Head", bio: "Leads engineering, overseeing equipment reliability, maintenance planning and technical standards." },
  { name: "Chrispass Mwamachi", role: "Procurement Head", bio: "Leads procurement, managing sourcing, supplier relationships and materials availability." },
  { name: "Ahmed Razeen", role: "Workshop Head", bio: "Leads workshop operations, keeping the fleet and yard equipment serviced and available." },
  { name: "Shonronal Joseph", role: "Finance Head", bio: "Leads the finance function, covering financial control, reporting and commercial governance." },
  { name: "Steven Nguma", role: "Transport Head", bio: "Leads transport operations, coordinating fleet deployment and corridor movements." },
  { name: "Maliki Omary", role: "Security Head", bio: "Leads security, protecting cargo, people and facilities through trained in-house teams." },
  { name: "Aristid Temu", role: "ICD Operations Head", bio: "Leads inland container depot operations, from yard planning to container handling and release." },
  { name: "Fabian Godefrey", role: "Port Operations Head", bio: "Leads port operations, coordinating quayside interfaces, gate flows and documentation." },
  { name: "Issa Kanyunya", role: "CFS Operations Head", bio: "Leads container freight station operations, covering stripping, stuffing and cargo custody." },
];

const values = [
  { k: "Leadership", v: "Experienced operators who have shaped the region’s logistics landscape for more than a decade." },
  { k: "Ownership", v: "Every team member owns the outcome — from the port gate to the final mile." },
  { k: "Growth", v: "We invest in people, training and systems that let our talent scale with our clients." },
  { k: "Trust", v: "Transparent, accountable teams build the long-term partnerships that move East African trade." },
];



function Team() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-cream fx-grain">
        <Aurora className="opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <Reveal>
            <p className="eyebrow text-amber">/ Our people</p>
            <h1 className="display-xl mt-6 max-w-5xl text-cream">
              The team behind<br />
              every <span className="text-amber">container.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow text-ink-soft">/ Leadership</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
              Built by operators,<br />guided by experience.
            </h2>
          </Reveal>
          <Reveal delay={140} from="right">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Hesu’s strength is its people. Our leadership team combines deep logistics experience,
              local market knowledge and a shared commitment to delivering for every client — every day.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {executives.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} from="blur">
              <Tilt intensity={6}>
                <div className="group fx-lift flex h-full flex-col gap-5 rounded-sm border border-border bg-card p-6 hover:border-amber">
                  <Avatar initials={p.initials} />
                  <div>
                    <h3 className="font-display text-xl font-black">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-amber">{p.role}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{p.bio}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <Reveal>
            <p className="eyebrow text-ink-soft">/ Operations team</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black md:text-4xl">
              The specialists who keep cargo flowing.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {managers.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="group fx-lift flex items-center gap-4 rounded-sm border border-border bg-background p-5 hover:border-amber">
                  <Avatar initials={p.initials} />
                  <div>
                    <h3 className="font-display text-lg font-black">{p.name}</h3>
                    <p className="text-sm text-ink-soft">{p.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <Reveal>
          <p className="eyebrow text-ink-soft">/ Why our team matters</p>
          <h2 className="display-xl mt-4 max-w-4xl">People first.<br />Cargo <span className="text-amber">always.</span></h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.k} delay={i * 100} from="scale">
              <div className="group flex h-full flex-col gap-3 bg-background p-8 transition-colors duration-500 hover:bg-secondary">
                <span className="font-mono text-xs text-amber">0{i + 1}</span>
                <h3 className="font-display text-2xl font-black">{v.k}</h3>
                <p className="text-sm text-ink-soft">{v.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <Reveal from="scale">
          <div className="relative overflow-hidden rounded-sm bg-ink p-10 text-cream md:p-16 fx-grain">
            <Aurora className="opacity-30" />
            <div className="relative grid items-end gap-10 md:grid-cols-[2fr_1fr]">
              <h2 className="font-display text-4xl font-black leading-none md:text-6xl">
                Join the team<br /><span className="text-amber">shaping trade.</span>
              </h2>
              <Magnetic strength={0.2}>
                <Link to="/contact" className="fx-shine inline-flex w-fit items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-transform duration-500">
                  Careers & enquiries <span aria-hidden>→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>

    </>
  );
}
