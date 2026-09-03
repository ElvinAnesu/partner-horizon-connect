import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import aboutCta from "@/assets/about-cta.jpg";
import sunilBalan from "@/assets/img/team/sunil.jpeg";
import salimMkongo from "@/assets/img/team/salim.jpeg";
import gainTawodzera from "@/assets/img/team/gain.png";

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
    detail: {
      sections: [
        {
          items: [
            "Sets Hesu\u2019s strategic direction across Tanzania and the wider EAC corridor.",
            "Aligns terminal, yard and fleet capacity with the way Africa trades.",
            "Focuses on long-term partnerships, operational discipline and growth that compounds for clients and communities.",
          ],
        },
      ],
    },
  },
  {
    name: "S. Alhilal",
    role: "Chief Executive Officer",
    department: "Executive",
    bio: "Sets the group\u2019s direction across terminal, yard, fleet and corridor operations.",
    focus: ["Operations", "Direction", "Accountability"],
    detail: {
      sections: [
        {
          items: [
            "Directs Hesu\u2019s day-to-day and long-range operating model across terminal, yard, fleet and corridor lines.",
            "Requires clear ownership at every node — from port interface to final delivery.",
            "Holds the organisation to integrity and measurable results.",
          ],
        },
      ],
    },
  },
  {
    name: "Sunil Balan",
    role: "Business Head",
    department: "Executive",
    image: sunilBalan,
    imagePosition: "object-top",
    bio: "Supply chain and logistics executive with 29+ years of international experience across ICD, CFS, warehousing and fleet operations.",
    focus: ["Supply chain", "ICD / CFS", "Fleet ops", "Procurement"],
    detail: {
      sections: [
        {
          items: [
            "Supply Chain and Logistics executive with over 29 years of international experience spanning logistics, oil & gas, EPC, petrochemicals, power generation, shipbuilding, chemicals, beverages, and manufacturing.",
            "Held senior leadership positions across Africa and Asia, leading large-scale supply chain, warehousing, procurement, transportation, and operational excellence initiatives.",
            "Currently serving in Tanzania, with a pivotal role in developing and managing integrated logistics operations — including Inland Container Depots (ICD), Container Freight Stations (CFS), warehousing facilities, fertilizer terminals, and fleet operations exceeding 300 vehicles.",
            "Delivered complex logistics projects across East and Southern Africa while driving automation, cost optimization, process improvement, and customer satisfaction.",
            "MBA-qualified Supply Chain professional and Mechanical Engineer, with expertise in strategic sourcing, procurement, contract management, inventory optimization, ERP systems, and supply chain transformation.",
          ],
        },
      ],
    },
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
    detail: {
      intro:
        "Leads Hesu\u2019s IT function with a strong academic and professional foundation in technology and business systems.",
      sections: [
        {
          heading: "Degrees",
          items: [
            "Business Management and Information Technology (BBMIT)",
            "Bachelor\u2019s in Information Technology",
          ],
        },
        {
          heading: "Masters",
          items: ["MBA — Data Analytics"],
        },
        {
          heading: "Certificates",
          items: [
            "SAP B1 Associate (C_TB120)",
            "CISA",
            "Essentials of SAP GRC",
            "Oracle Cloud Infrastructure",
            "Oracle Cloud Data Migration",
            "Electronic Data Processing",
            "ISO1",
            "ITIL 3",
          ],
        },
        {
          heading: "Membership",
          items: ["ISACA", "Advisera"],
        },
      ],
    },
  },
  {
    name: "Neema Mtui",
    role: "HSE Head",
    department: "HSE",
    bio: "Leads health, safety and environment, upholding safe working standards across every site and operation.",
    focus: ["Safety", "Environment", "Standards"],
    detail: {
      sections: [
        {
          items: [
            "Leads health, safety and environment across Hesu sites — from yards and workshops to corridor movements.",
            "Prioritises clear standards, trained teams and a culture where every container move is also a safe move.",
          ],
        },
      ],
    },
  },
  {
    name: "Meheroon Kassu",
    role: "HR Head",
    department: "People",
    bio: "Leads the human resources function, covering people development, welfare and organizational capability.",
    focus: ["People", "Welfare", "Capability"],
    detail: {
      sections: [
        {
          items: [
            "Leads human resources at Hesu — people development, welfare and organizational capability.",
            "Focuses on building teams that own outcomes from gate to final mile, from recruitment to on-the-job growth.",
          ],
        },
      ],
    },
  },
  {
    name: "Faustine Shilinde",
    role: "Engineering Head",
    department: "Engineering",
    bio: "Leads engineering, overseeing equipment reliability, maintenance planning and technical standards.",
    focus: ["Reliability", "Maintenance", "Standards"],
    detail: {
      sections: [
        {
          items: [
            "Leads engineering — equipment reliability, maintenance planning and technical standards.",
            "Keeps reach-stackers, yard gear and plant available when cargo needs to move.",
          ],
        },
      ],
    },
  },
  {
    name: "Chrispass Mwamachi",
    role: "Procurement Head",
    department: "Procurement",
    bio: "Leads procurement, managing sourcing, supplier relationships and materials availability.",
    focus: ["Sourcing", "Suppliers", "Materials"],
    detail: {
      sections: [
        {
          items: [
            "Leads procurement — sourcing, supplier relationships and materials availability.",
            "Ensures operations never wait on the wrong part or the wrong partner.",
          ],
        },
      ],
    },
  },
  {
    name: "Ahmed Razeen",
    role: "Workshop Head",
    department: "Workshop",
    bio: "Leads workshop operations, keeping the fleet and yard equipment serviced and available.",
    focus: ["Fleet", "Service", "Uptime"],
    detail: {
      sections: [
        {
          items: [
            "Leads workshop operations — servicing fleet and yard equipment.",
            "Keeps trucks and handling gear available for corridor and terminal demand.",
          ],
        },
      ],
    },
  },
  {
    name: "Shonronal Joseph",
    role: "Finance Head",
    department: "Finance",
    bio: "Leads the finance function, covering financial control, reporting and commercial governance.",
    focus: ["Control", "Reporting", "Governance"],
    detail: {
      sections: [
        {
          items: [
            "Leads finance — financial control, reporting and commercial governance.",
            "Keeps Hesu accountable to clients, partners and the board.",
          ],
        },
      ],
    },
  },
  {
    name: "Steven Nguma",
    role: "Transport Head",
    department: "Transport",
    bio: "Leads transport operations, coordinating fleet deployment and corridor movements.",
    focus: ["Fleet", "Corridors", "Deployment"],
    detail: {
      sections: [
        {
          items: [
            "Leads transport operations — fleet deployment and corridor movements across Tanzania and neighbouring markets.",
            "Emphasises disciplined routing and on-time delivery.",
          ],
        },
      ],
    },
  },
  {
    name: "Maliki Omary",
    role: "Security Head",
    department: "Security",
    bio: "Leads security, protecting cargo, people and facilities through trained in-house teams.",
    focus: ["Cargo care", "Guarding", "Discipline"],
    detail: {
      sections: [
        {
          items: [
            "Leads security — protecting cargo, people and facilities through trained in-house teams.",
            "Centres every shift on drill, discipline and accountability.",
          ],
        },
      ],
    },
  },
  {
    name: "Aristid Temu",
    role: "ICD Operations Head",
    department: "ICD",
    bio: "Leads inland container depot operations, from yard planning to container handling and release.",
    focus: ["Yard", "Handling", "Release"],
    detail: {
      sections: [
        {
          items: [
            "Leads inland container depot operations — yard planning, container handling and release.",
            "Ensures bonded cargo moves with speed and clarity.",
          ],
        },
      ],
    },
  },
  {
    name: "Fabian Godefrey",
    role: "Port Operations Head",
    department: "Port",
    bio: "Leads port operations, coordinating quayside interfaces, gate flows and documentation.",
    focus: ["Port interface", "Gates", "Docs"],
    detail: {
      sections: [
        {
          items: [
            "Leads port operations — quayside interfaces, gate flows and documentation.",
            "Connects Dar es Salaam port activity with Hesu\u2019s inland stack.",
          ],
        },
      ],
    },
  },
  {
    name: "Issa Kanyunya",
    role: "CFS Operations Head",
    department: "CFS",
    bio: "Leads container freight station operations, covering stripping, stuffing and cargo custody.",
    focus: ["LCL", "Stuffing", "Custody"],
    detail: {
      sections: [
        {
          items: [
            "Leads container freight station operations — stripping, stuffing and cargo custody.",
            "Handles groupage and value-added cargo under secure, bonded conditions.",
          ],
        },
      ],
    },
  },
  {
    name: "Salim Mkongo",
    role: "Machinery Manager",
    department: "Machinery",
    image: salimMkongo,
    imagePosition: "object-top",
    bio: "Electrical and Electronics Engineer leading heavy equipment maintenance, machinery operations and technical teams at Hesu.",
    focus: ["Maintenance", "Heavy equipment", "Uptime"],
    detail: {
      sections: [
        {
          items: [
            "Electrical and Electronics Engineer with a strong background in heavy equipment maintenance, machinery operations, and technical leadership.",
            "Holds a Bachelor\u2019s Degree in Electrical and Electronics Engineering, supported by an Ordinary Diploma in Electronics and Telecommunications Engineering.",
            "Professional experience spanning mining and machinery, including Shanta Gold Mine and Mantrac Tanzania, covering equipment maintenance, diagnostics, and operational efficiency.",
            "Hands-on experience with heavy machinery and industrial systems, managing complex maintenance challenges while ensuring maximum equipment reliability and uptime.",
            "Currently serving as Machinery Supervisor at HESU Investments Ltd, overseeing machinery operations, preventive and corrective maintenance programs, and the performance of technical teams.",
            "Committed to machinery reliability, continuous improvement, and building efficient maintenance systems that enhance productivity, reduce downtime, and support sustainable operational excellence.",
          ],
        },
      ],
    },
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
            <Reveal key={`${p.name}-${p.role}`} delay={i * 110} from="blur" className="h-full">
              <Tilt intensity={6} className="h-full">
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
                  <ProfileAvatar member={p} className="aspect-square w-full" />
                  <div>
                    <h3 className="font-display text-xl font-black">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-amber">{p.role}</p>
                  </div>
                  <p className="line-clamp-2 min-h-[2lh] text-sm leading-relaxed text-ink-soft">{p.bio}</p>
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
