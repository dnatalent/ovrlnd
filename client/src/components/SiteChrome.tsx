// OVRLND — global header and footer
// Style note: Cinematic Topographic — editorial, monogrammed wordmark, mono labels

import { Link, useLocation } from "wouter";
import { useBuild } from "@/contexts/BuildContext";
import { getVehicleById, getCategoryById } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/">
      <span
        className={`font-display tracking-[0.04em] text-[1.35rem] leading-none font-medium select-none ${className}`}
      >
        OVRLND
        <span className="ml-1 align-top text-[0.55rem] font-mono tracking-[0.18em] text-muted-foreground">
          AU
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [loc] = useLocation();
  const { build } = useBuild();
  const vehicle = build.vehicleId ? getVehicleById(build.vehicleId) : undefined;
  const category = build.categoryId ? getCategoryById(build.categoryId) : undefined;

  const navItems = [
    { href: "/build", label: "Build your rig" },
    { href: "/journal", label: "Journal" },
    { href: "/how-we-work", label: "How we work" },
    { href: "/membership", label: "Global Memberships" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-[0.84rem] tracking-[0.01em] transition-colors ${
                    loc === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/membership">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[0.78rem] font-mono tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Sign in
              <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
            </span>
          </Link>
          <Link href="/build">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-[0.78rem] font-mono tracking-[0.14em] uppercase hover:bg-primary/90 transition-colors">
              Begin
            </span>
          </Link>
        </div>
      </div>

      {/* Build progress strip — appears once user starts a build */}
      {(vehicle || category) && loc !== "/" && (
        <div className="border-t border-border bg-secondary/40">
          <div className="container py-2 flex items-center gap-4 overflow-x-auto">
            <span className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-muted-foreground whitespace-nowrap">
              Your build →
            </span>
            {vehicle && (
              <span className="font-mono text-[0.72rem] tracking-[0.06em] text-foreground whitespace-nowrap">
                {vehicle.fullName}
                {build.year && <span className="text-muted-foreground"> · {build.year}</span>}
                {build.variant && <span className="text-muted-foreground"> · {build.variant}</span>}
              </span>
            )}
            {category && (
              <>
                <span className="text-muted-foreground">/</span>
                <span className="font-mono text-[0.72rem] tracking-[0.06em] text-accent whitespace-nowrap">
                  {category.name}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Wordmark />
          <p className="mt-4 max-w-md text-[0.92rem] leading-relaxed text-muted-foreground">
            An independent, members-only platform for comparing premium overland fitouts in
            Australia. Editorial reviews. Transparent pricing. The right installer for your rig —
            wherever in the country they are.
          </p>
          <p className="mt-6 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
            —33.9072° S, 151.1561° E · Marrickville, NSW
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Platform</p>
          <ul className="space-y-2.5 text-[0.88rem]">
            <li><Link href="/build"><span className="hover:text-accent transition-colors">Build your rig</span></Link></li>
            <li><Link href="/journal"><span className="hover:text-accent transition-colors">The Journal</span></Link></li>
            <li><Link href="/membership"><span className="hover:text-accent transition-colors">Global Memberships</span></Link></li>
            <li><Link href="/how-we-work"><span className="hover:text-accent transition-colors">How we work</span></Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">For partners</p>
          <ul className="space-y-2.5 text-[0.88rem]">
            <li><Link href="/partners"><span className="hover:text-accent transition-colors">Outfitter network</span></Link></li>
            <li><Link href="/partners"><span className="hover:text-accent transition-colors">Dealer referrals</span></Link></li>
            <li><Link href="/partners"><span className="hover:text-accent transition-colors">Brand partnerships</span></Link></li>
            <li><Link href="/partners"><span className="hover:text-accent transition-colors">Get in touch</span></Link></li>
          </ul>
        </div>
      </div>
      <hr className="hairline" />
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
          OVRLND · Issue No. 001 · Marrickville · MMXXVI
        </p>
        <p className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
          Editorially independent · Founding-partner supported
        </p>
      </div>
    </footer>
  );
}
