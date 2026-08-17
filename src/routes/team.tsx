import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import aboutCta from "@/assets/about-cta.jpg";
import sunilBalan from "@/assets/img/team/sunil.jpeg";
import salimMkongo from "@/assets/img/team/salim.jpeg";
import gainTawodzera from "@/assets/img/team/gain.jpeg";

import { Reveal, Tilt, Aurora, Magnetic } from "@/components/fx";
import { LeadershipCarousel, ProfileAvatar, openMemberWithFlip, type TeamMember } from "@/components/leadership-carousel";
import { TeamMemberDialog } from "@/components/team-member-dialog";

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
    department: "Executive",
    bio: "Strategic leader driving Hesu\u2019s growth across Tanzania and the wider EAC corridor.",
    focus: ["Strategy", "Growth", "EAC corridor"],
    detail:
      "As Managing Director, S. Alhilal sets the strategic pace for Hesu across Tanzania and the wider EAC corridor — aligning terminal, yard and fleet capacity with the way Africa trades. The focus is long-term partnerships, operational discipline and growth that compounds for clients and communities.",
  },
  {
    name: "S. Alhilal",
    role: "Chief Executive Officer",
    department: "Executive",
    bio: "Sets the group\u2019s direction across terminal, yard, fleet and corridor operations.",
    focus: ["Operations", "Direction", "Accountability"],
    detail:
      "As Chief Executive Officer, S. Alhilal directs Hesu\u2019s day-to-day and long-range operating model across terminal, yard, fleet and corridor lines. The mandate is clear ownership at every node — from port interface to final delivery — with integrity and measurable results.",
  },
  {
    name: "Sunil Balan",
    role: "Business Head",
    department: "Executive",
    image: sunilBalan,
    imagePosition: "object-top",
    bio: "Supply chain and logistics executive with 29+ years of international experience across ICD, CFS, warehousing and fleet operations.",
    focus: ["Supply chain", "ICD / CFS", "Fleet ops", "Procurement"],
    detail:
      "Sunilkumar Gopichand Balani is a Supply Chain and Logistics executive with over 29 years of international experience spanning logistics, oil & gas, EPC, petrochemicals, power generation, shipbuilding, chemicals, beverages, and manufacturing. He has held senior leadership positions across Africa and Asia, leading large-scale supply chain, warehousing, procurement, transportation, and operational excellence initiatives.\n\nCurrently serving in Tanzania, Sunil has played a pivotal role in developing and managing integrated logistics operations, including Inland Container Depots (ICD), Container Freight Stations (CFS), warehousing facilities, fertilizer terminals, and fleet operations exceeding 300 vehicles. He has delivered complex logistics projects across East and Southern Africa while driving automation, cost optimization, process improvement, and customer satisfaction.\n\nAn MBA-qualified Supply Chain professional and Mechanical Engineer, Sunil brings deep expertise in strategic sourcing, procurement, contract management, inventory optimization, ERP systems, and supply chain transformation — consistently delivering operational efficiencies, cost savings, and sustainable business growth.",
  },
];

const leadership: TeamMember[] = [
  {
    name: "Gain Tawodzera",
    role: "IT Head",
    department: "Technology",
    image: gainTawodzera,
    imagePosition: "object-top",
    bio: "IT Head with credentials in business management, information technology, MBA Data Analytics, and enterprise systems (SAP, Oracle, CISA).",
    focus: ["IT systems", "Data analytics", "ERP"],
    detail:
      "Gain Tawodzera leads Hesu\u2019s IT function with a strong academic and professional foundation in technology and business systems.\n\nDegrees\nBusiness Management and Information Technology (BBMIT)\nBachelor\u2019s in Information Technology\n\nMasters\nMBA — Data Analytics\n\nCertificates\nSAP B1 Associate (C_TB120)\nCISA\nEssentials of SAP GRC\nOracle Cloud Infrastructure\nOracle Cloud Data Migration\nElectronic Data Processing\nISO1\nITIL 3\n\nMembership\nISACA\nAdvisera",
  },
  {
    name: "Neema Mtui",
    role: "HSE Head",
    department: "HSE",
    bio: "Leads health, safety and environment, upholding safe working standards across every site and operation.",
    focus: ["Safety", "Environment", "Standards"],
    detail:
      "Neema leads health, safety and environment across Hesu sites — from yards and workshops to corridor movements. The priority is clear standards, trained teams and a culture where every container move is also a safe move.",
  },
  {
    name: "Meheroon Kassu",
    role: "HR Head",
    department: "People",
    bio: "Leads the human resources function, covering people development, welfare and organizational capability.",
    focus: ["People", "Welfare", "Capability"],
    detail:
      "Meheroon leads human resources at Hesu — people development, welfare and organizational capability. From recruitment to on-the-job growth, the focus is building teams that own outcomes from gate to final mile.",
  },
  {
    name: "Faustine Shilinde",
    role: "Engineering Head",
    department: "Engineering",
    bio: "Leads engineering, overseeing equipment reliability, maintenance planning and technical standards.",
    focus: ["Reliability", "Maintenance", "Standards"],
    detail:
      "Faustine leads engineering — equipment reliability, maintenance planning and technical standards that keep reach-stackers, yard gear and plant available when cargo needs to move.",
  },
  {
    name: "Chrispass Mwamachi",
    role: "Procurement Head",
    department: "Procurement",
    bio: "Leads procurement, managing sourcing, supplier relationships and materials availability.",
    focus: ["Sourcing", "Suppliers", "Materials"],
    detail:
      "Chrispass leads procurement — sourcing, supplier relationships and materials availability so operations never wait on the wrong part or the wrong partner.",
  },
  {
    name: "Ahmed Razeen",
    role: "Workshop Head",
    department: "Workshop",
    bio: "Leads workshop operations, keeping the fleet and yard equipment serviced and available.",
    focus: ["Fleet", "Service", "Uptime"],
    detail:
      "Ahmed leads workshop operations — servicing fleet and yard equipment so trucks and handling gear stay available for corridor and terminal demand.",
  },
  {
    name: "Shonronal Joseph",
    role: "Finance Head",
    department: "Finance",
    bio: "Leads the finance function, covering financial control, reporting and commercial governance.",
    focus: ["Control", "Reporting", "Governance"],
    detail:
      "Shonronal leads finance — financial control, reporting and commercial governance that keep Hesu accountable to clients, partners and the board.",
  },
  {
    name: "Steven Nguma",
    role: "Transport Head",
    department: "Transport",
    bio: "Leads transport operations, coordinating fleet deployment and corridor movements.",
    focus: ["Fleet", "Corridors", "Deployment"],
    detail:
      "Steven leads transport operations — fleet deployment and corridor movements across Tanzania and neighbouring markets, with an emphasis on disciplined routing and on-time delivery.",
  },
  {
    name: "Maliki Omary",
    role: "Security Head",
    department: "Security",
    bio: "Leads security, protecting cargo, people and facilities through trained in-house teams.",
    focus: ["Cargo care", "Guarding", "Discipline"],
    detail:
      "Maliki leads security — protecting cargo, people and facilities through trained in-house teams. Drill, discipline and accountability sit at the centre of every shift.",
  },
  {
    name: "Aristid Temu",
    role: "ICD Operations Head",
    department: "ICD",
    bio: "Leads inland container depot operations, from yard planning to container handling and release.",
    focus: ["Yard", "Handling", "Release"],
    detail:
      "Aristid leads inland container depot operations — yard planning, container handling and release — so bonded cargo moves with speed and clarity.",
  },
  {
    name: "Fabian Godefrey",
    role: "Port Operations Head",
    department: "Port",
    bio: "Leads port operations, coordinating quayside interfaces, gate flows and documentation.",
    focus: ["Port interface", "Gates", "Docs"],
    detail:
      "Fabian leads port operations — quayside interfaces, gate flows and documentation that connect Dar es Salaam port activity with Hesu\u2019s inland stack.",
  },
  {
    name: "Issa Kanyunya",
    role: "CFS Operations Head",
    department: "CFS",
    bio: "Leads container freight station operations, covering stripping, stuffing and cargo custody.",
    focus: ["LCL", "Stuffing", "Custody"],
    detail:
      "Issa leads container freight station operations — stripping, stuffing and cargo custody for groupage and value-added handling under secure, bonded conditions.",
  },
  {
    name: "Salim Mkongo",
    role: "Machinery Manager",
    department: "Machinery",
    image: salimMkongo,
    imagePosition: "object-top",
    bio: "Electrical and Electronics Engineer leading heavy equipment maintenance, machinery operations and technical teams at Hesu.",
    focus: ["Maintenance", "Heavy equipment", "Uptime"],
    detail:
      "Salim Mkongo is an experienced Electrical and Electronics Engineer with a strong background in heavy equipment maintenance, machinery operations, and technical leadership. He holds a Bachelor\u2019s Degree in Electrical and Electronics Engineering, supported by an Ordinary Diploma in Electronics and Telecommunications Engineering.\n\nWith professional experience spanning the mining and machinery sectors, Salim has worked with leading organizations including Shanta Gold Mine and Mantrac Tanzania, where he developed extensive expertise in equipment maintenance, diagnostics, and operational efficiency. His hands-on experience with heavy machinery and industrial systems has enabled him to successfully manage complex maintenance challenges while ensuring maximum equipment reliability and uptime.\n\nCurrently serving as Machinery Supervisor at HESU Investments Ltd, Salim oversees machinery operations, preventive and corrective maintenance programs, and the performance of technical teams. He is responsible for ensuring that equipment operates safely, efficiently, and in alignment with organizational objectives.\n\nPassionate about machinery reliability, continuous improvement, and problem-solving, Salim is committed to building efficient maintenance systems that enhance productivity, reduce downtime, and support sustainable operational excellence.",
  },
];

const values = [
  { k: "Leadership", v: "Experienced operators who have shaped the region\u2019s logistics landscape for more than a decade." },
  { k: "Ownership", v: "Every team member owns the outcome — from the port gate to the final mile." },
  { k: "Growth", v: "We invest in people, training and systems that let our talent scale with our clients." },
  { k: "Trust", v: "Transparent, accountable teams build the long-term partnerships that move East African trade." },
];

function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [open, setOpen] = useState(false);
  const flipping = useRef(false);

  const selectMember = (member: TeamMember) => {
    setSelected(member);
    setOpen(true);
    flipping.current = false;
  };

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
            <p className="eyebrow text-ink-soft">/ Executive team</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
              Built by operators,<br />guided by experience.
            </h2>
          </Reveal>
          <Reveal delay={140} from="right">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Hesu&apos;s strength is its people. Our leadership team combines deep logistics experience,
              local market knowledge and a shared commitment to delivering for every client — every day.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {executives.map((p, i) => (
            <Reveal key={`${p.name}-${p.role}`} delay={i * 110} from="blur">
              <Tilt intensity={6}>
                <button
                  type="button"
                  aria-label={`View profile for ${p.name}, ${p.role}`}
                  onClick={(e) => {
                    if (flipping.current) return;
                    flipping.current = true;
                    openMemberWithFlip(e.currentTarget, () => selectMember(p));
                  }}
                  className="group fx-lift flex h-full w-full cursor-pointer flex-col gap-5 overflow-hidden rounded-sm border border-border bg-card p-6 text-left hover:border-amber"
                >
                  <ProfileAvatar member={p} className="aspect-[4/3] w-full" />
                  <div>
                    <h3 className="font-display text-xl font-black">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-amber">{p.role}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{p.bio}</p>
                </button>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <Reveal>
            <p className="eyebrow text-ink-soft">/ Leadership team</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black md:text-4xl">
              The department heads who keep cargo flowing.
            </h2>
          </Reveal>
          <div className="mt-16">
            <LeadershipCarousel members={leadership} onSelect={selectMember} />
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
                <Link to="/careers" className="fx-shine inline-flex w-fit items-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-0.5 transition-transform duration-500">
                  Careers &amp; enquiries <span aria-hidden>→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>

      <TeamMemberDialog
        member={selected}
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) flipping.current = false;
        }}
      />
    </>
  );
}
