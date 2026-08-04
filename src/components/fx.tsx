import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

function prefersReduced() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useInView<T extends HTMLElement>(once = true, threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);
  return { ref, inView };
}

/* ------------------------------------------------------------------ */
/* Reveal — scroll-triggered fade + rise (with optional stagger)       */
/* ------------------------------------------------------------------ */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** direction of the entrance offset */
  from?: "up" | "down" | "left" | "right" | "scale" | "blur";
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={cn("fx-reveal", `fx-from-${from}`, inView && "fx-in", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Reveals each direct child with an incremental delay. */
export function RevealGroup({
  children,
  className,
  step = 90,
  from = "up",
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
  from?: RevealProps["from"];
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step} from={from}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tilt — 3D pointer tilt + cursor-tracked specular sheen              */
/* ------------------------------------------------------------------ */

export function Tilt({
  children,
  className,
  intensity = 7,
  sheen = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  sheen?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        el.style.setProperty("--rx", `${(0.5 - py) * intensity}deg`);
        el.style.setProperty("--ry", `${(px - 0.5) * intensity}deg`);
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [intensity, reduced]);

  return (
    <div ref={ref} className={cn("fx-tilt", sheen && "fx-sheen", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — element leans toward the cursor                          */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * strength;
        const dy = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate3d(0,0,0)";
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength, reduced]);

  return (
    <span ref={ref} className={cn("fx-magnetic", className)}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — animated number roll-up when scrolled into view           */
/* ------------------------------------------------------------------ */

export function Counter({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const match = value.match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  const [shown, setShown] = useState(match ? 0 : NaN);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseFloat(match[2].replace(/,/g, ""));
    if (prefersReduced()) {
      setShown(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, duration, value]);

  if (!match) return <span className={className}>{value}</span>;
  const decimals = (match[2].split(".")[1] ?? "").length;
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {match[1]}
      {shown.toFixed(decimals)}
      {match[3]}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgress — thin amber progress rail under the header          */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? h.scrollTop / max : 0);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-amber via-amber-soft to-amber"
        style={{ transform: `scaleX(${p})`, transition: "transform 90ms linear" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CursorGlow — soft ambient light that trails the pointer              */
/* ------------------------------------------------------------------ */

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
    };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 240}px, ${cy - 240}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
    };
  }, [reduced]);

  return <div ref={ref} className="fx-cursor-glow" aria-hidden />;
}

/* ------------------------------------------------------------------ */
/* Aurora / Particles — ambient background layers                      */
/* ------------------------------------------------------------------ */

export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <span className="fx-aurora fx-aurora-a" />
      <span className="fx-aurora fx-aurora-b" />
      <span className="fx-aurora fx-aurora-c" />
    </div>
  );
}

const PARTICLES = [
  { l: 8, t: 22, d: 0, s: 3 },
  { l: 18, t: 68, d: 1.4, s: 2 },
  { l: 32, t: 14, d: 2.6, s: 2 },
  { l: 46, t: 78, d: 0.8, s: 4 },
  { l: 58, t: 34, d: 3.2, s: 2 },
  { l: 69, t: 60, d: 1.9, s: 3 },
  { l: 78, t: 20, d: 4.1, s: 2 },
  { l: 88, t: 52, d: 2.2, s: 3 },
  { l: 94, t: 80, d: 3.6, s: 2 },
  { l: 26, t: 44, d: 5, s: 2 },
];

export function Particles({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="fx-particle"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: p.s,
            height: p.s,
            animationDelay: `${p.d}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax — gentle translate as the section scrolls through view      */
/* ------------------------------------------------------------------ */

export function Parallax({
  children,
  className,
  distance = 40,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-progress * distance).toFixed(2)}px, 0)`;
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [distance, reduced]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
