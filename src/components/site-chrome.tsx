import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/HESU-Logo_1.png.asset.json";
import { Magnetic } from "@/components/fx";


const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Hesu Investment Ltd"
            width={200}
            height={60}
            className="h-10 w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative rounded-sm px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
              activeProps={{ className: "relative rounded-sm px-4 py-2 text-sm font-semibold text-ink" }}
            >
              {n.label}
              <span className="pointer-events-none absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-amber transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </Link>
          ))}
          <Magnetic strength={0.18} className="ml-3">
            <Link
              to="/contact"
              className="fx-shine inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-16px_color-mix(in_oklab,var(--ink)_80%,transparent)]"
            >
              Get a quote
              <span aria-hidden>→</span>
            </Link>
          </Magnetic>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-sm border border-border p-2 text-ink"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Hesu Investment Ltd"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="mt-5 max-w-xs text-sm text-cream/70">
            Integrated logistics and supply chain solutions powering trade across Tanzania and East Africa.
          </p>
        </div>
        <div>
          <p className="eyebrow text-amber">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-cream/80 hover:text-amber">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-amber">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Inland Container Depot</li>
            <li>Container Freight Station</li>
            <li>Warehousing</li>
            <li>Distribution</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-amber">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Dar es Salaam, Tanzania</li>
            <li><a href="mailto:info@hesu.co.tz" className="hover:text-amber">info@hesu.co.tz</a></li>
            <li>+255 000 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Hesu Investment Ltd. All rights reserved.</span>
          <span className="font-mono">DAR · MWANZA · ARUSHA</span>
        </div>
      </div>
    </footer>
  );
}
