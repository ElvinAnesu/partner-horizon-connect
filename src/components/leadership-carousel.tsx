import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal, Tilt } from "@/components/fx";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Drop in a real photo URL later — the avatar placeholder is used when absent. */
  image?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export function ProfileAvatar({
  member,
  className = "",
}: {
  member: TeamMember;
  className?: string;
}) {
  if (member.image) {
    return (
      <div className={`relative overflow-hidden rounded-sm bg-secondary ${className}`}>
        <img
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-sm bg-ink text-cream ${className}`}
      aria-label={`${member.name} — photo coming soon`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,color-mix(in_oklab,var(--amber)_22%,transparent),transparent_65%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
      {/* neutral silhouette — no fabricated photography */}
      <svg
        viewBox="0 0 64 64"
        aria-hidden
        className="relative h-1/2 w-1/2 text-cream/25 transition-transform duration-700 group-hover:scale-105"
      >
        <circle cx="32" cy="23" r="12" fill="currentColor" />
        <path d="M8 60c0-13.3 10.7-22 24-22s24 8.7 24 22z" fill="currentColor" />
      </svg>
      <span className="absolute bottom-3 left-3 font-display text-lg font-black tracking-tight text-cream/90">
        {initials(member.name)}
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest text-cream/40">
        photo soon
      </span>
    </div>
  );
}

export function LeadershipCard({ member }: { member: TeamMember }) {
  return (
    <Tilt intensity={5}>
      <article className="group fx-lift flex h-full w-[76vw] max-w-[320px] shrink-0 flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 hover:border-amber sm:w-[300px] lg:w-[320px]">
        <ProfileAvatar member={member} className="aspect-[4/3] w-full" />
        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3 className="font-display text-lg font-black leading-tight">{member.name}</h3>
          <p className="relative w-fit text-sm font-semibold text-amber">
            {member.role}
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-amber transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft opacity-80 transition-opacity duration-500 group-hover:opacity-100">
            {member.bio}
          </p>
        </div>
      </article>
    </Tilt>
  );
}

function Row({ members, step = 90 }: { members: TeamMember[]; step?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setState({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i * step} from="blur" className="snap-start">
            <LeadershipCard member={m} />
          </Reveal>
        ))}
      </div>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent transition-opacity duration-500 ${state.end ? "opacity-0" : "opacity-100"}`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent transition-opacity duration-500 ${state.start ? "opacity-0" : "opacity-100"}`}
      />
      <div className="mt-1 flex justify-end gap-2">
        <NavButton
          label="Scroll left"
          disabled={state.start}
          onClick={() => ref.current?.scrollBy({ left: -340, behavior: "smooth" })}
        >
          ←
        </NavButton>
        <NavButton
          label="Scroll right"
          disabled={state.end}
          onClick={() => ref.current?.scrollBy({ left: 340, behavior: "smooth" })}
        >
          →
        </NavButton>
      </div>
    </div>
  );
}

function NavButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-ink transition-all duration-500 hover:border-amber hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-30"
    >
      <span aria-hidden>{children}</span>
    </button>
  );
}

export function LeadershipCarousel({ members }: { members: TeamMember[] }) {
  const half = Math.ceil(members.length / 2);
  return (
    <div className="space-y-8">
      <Row members={members.slice(0, half)} />
      <Row members={members.slice(half)} step={70} />
    </div>
  );
}
