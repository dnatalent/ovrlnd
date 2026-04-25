// OVRLND — Landing page
// Style: Cinematic Topographic. Want-Creation visual language.
// Half-height cinematic hero, above-the-fold interactive vehicle selector,
// then "What's possible" mod gallery, install craft moment, partners, membership CTA.
// No purple gradients. No centred hero. The build is the visual hero of every frame.

import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { IMG, VEHICLES, CATEGORIES, ROOFTOP_TENTS, type Tier } from "@/lib/data";
import { ArrowUpRight, ChevronRight, Tent, Refrigerator, Sun, Shield, Zap, PackageOpen } from "lucide-react";
import { useBuild } from "@/contexts/BuildContext";

const TIERS: { id: Tier; label: string; sub: string }[] = [
  { id: "tier1", label: "Premium Heritage", sub: "Defender · G-Class · LC300 · Range Rover · Grenadier" },
  { id: "tier2", label: "New Era", sub: "Cybertruck · Model X · Rivian · Lexus GX" },
  { id: "tier3", label: "Premium Common", sub: "Ranger · Amarok · HiLux · D-Max" },
];

const CATEGORY_ICON: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  rtt: Tent,
  drawers: PackageOpen,
  fridge: Refrigerator,
  electrical: Zap,
  awning: Sun,
  protection: Shield,
};

export default function Home() {
  const [activeTier, setActiveTier] = useState<Tier>("tier1");
  const [, navigate] = useLocation();
  const { setVehicle } = useBuild();

  const tierVehicles = useMemo(
    () => VEHICLES.filter((v) => v.tier === activeTier).sort((a, b) => a.popularityRank - b.popularityRank),
    [activeTier],
  );

  const featuredTents = ROOFTOP_TENTS.filter((t) => t.ovrlndPick).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* ──────────────────────────────────────────────────────────────────
          HERO — Compressed cinematic frame, headline left, issue tag top-right
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative w-full aspect-[21/8] min-h-[420px] max-h-[640px] overflow-hidden grain">
          <img
            src={IMG.builtDefender}
            alt="Land Rover Defender 110 with rooftop tent and awning at golden hour, Blue Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/65 via-foreground/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />

          <div className="relative z-10 container h-full flex flex-col justify-end pb-12 sm:pb-16">
            <div className="max-w-3xl">
              <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-background/80 mb-5">
                — 33.71° S · 150.32° E · Blue Mountains, NSW
              </p>
              <h1 className="font-display text-background text-[2.2rem] sm:text-[3.2rem] lg:text-[4.2rem] leading-[1.02] font-light">
                You bought the car.
                <br />
                <span className="italic font-normal">Now unlock the adventure.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1rem] sm:text-[1.08rem] leading-relaxed text-background/90 font-light">
                Australia's independent platform for comparing every premium overland fitout —
                rooftop tents, drawer systems, electrical, fridges, awnings — across every brand
                worth fitting. Members only.
              </p>
            </div>
          </div>
          <div className="absolute top-6 right-6 z-20 hidden md:block">
            <p className="font-mono text-[0.66rem] tracking-[0.22em] uppercase text-background/75">
              OVRLND · No. 001
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          STEP 1 — Above-the-fold INTERACTIVE VEHICLE SELECTOR
          The configurator IS the homepage. No CTA wall to click through.
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-14 sm:py-20 border-t border-foreground/10">
        <div className="container">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 sm:mb-14 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Step 01 · Begin with your platform</p>
              <h2 className="mt-3 font-display text-[1.9rem] sm:text-[2.6rem] leading-[1.06] font-light max-w-2xl">
                Pick your vehicle.
                <br />
                <span className="italic text-muted-foreground">See what it could become.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-[0.95rem] text-muted-foreground max-w-md lg:ml-auto">
                14 vehicles across three tiers. Click any platform to see every fitout option,
                ranked by our editors and reviewed by independent experts.
              </p>
            </div>
          </div>

          {/* Tier toggle */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-foreground/10 pb-8">
            {TIERS.map((t) => {
              const isActive = activeTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTier(t.id)}
                  className={`group flex flex-col items-start text-left px-5 py-4 border transition-all ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/15 hover:border-foreground/40 bg-transparent"
                  }`}
                >
                  <span className="font-mono text-[0.66rem] tracking-[0.2em] uppercase opacity-70">
                    Tier {t.id === "tier1" ? "01" : t.id === "tier2" ? "02" : "03"}
                  </span>
                  <span className="font-display text-[1.1rem] mt-1 leading-tight">{t.label}</span>
                  <span className={`text-[0.78rem] mt-1 ${isActive ? "opacity-80" : "text-muted-foreground"} hidden sm:block`}>
                    {t.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vehicle grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {tierVehicles.map((v) => {
              const isLive = v.status === "live";
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setVehicle(v.id);
                    if (isLive) navigate(`/build/${v.id}`);
                    else navigate(`/membership?waitlist=${v.id}`);
                  }}
                  className="group relative text-left bg-muted overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={v.thumbnail}
                      alt={v.fullName}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    {!isLive && (
                      <span className="absolute top-3 right-3 font-mono text-[0.6rem] tracking-[0.2em] uppercase bg-background/90 text-foreground px-2 py-1">
                        Coming
                      </span>
                    )}
                    {isLive && (
                      <span className="absolute top-3 right-3 font-mono text-[0.6rem] tracking-[0.2em] uppercase bg-accent text-accent-foreground px-2 py-1">
                        Live
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                      <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase opacity-80">
                        {v.make}
                      </p>
                      <h3 className="font-display text-[1.15rem] sm:text-[1.3rem] leading-tight mt-0.5">
                        {v.model}
                      </h3>
                      <p className="font-mono text-[0.7rem] tracking-[0.06em] mt-1 opacity-85">
                        {v.basePrice}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/35">
                      <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-background bg-foreground/40 backdrop-blur-sm px-4 py-2 border border-background/30">
                        {isLive ? "See builds" : "Join waitlist"}
                        <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          STEP 2 — WHAT'S POSSIBLE — modification gallery
          Visual showcase of the categories, each as a hero modification image
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Step 02 · What's possible</p>
              <h2 className="mt-3 font-display text-[1.9rem] sm:text-[2.6rem] leading-[1.06] font-light max-w-2xl">
                Six categories.
                <br />
                <span className="italic text-muted-foreground">Hundreds of ways to build it.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-[0.95rem] text-muted-foreground max-w-md lg:ml-auto">
                Every category, every credible brand, side-by-side. Editorial scores from people
                who've actually slept in the tent and broken the drawers.
              </p>
            </div>
          </div>

          {/* Featured category — Rooftop tents (the headline mod) */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 mb-6 overflow-hidden">
            <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:min-h-[480px] overflow-hidden">
              <img
                src={IMG.builtGwagon}
                alt="Mercedes-Benz G-Class with James Baroud rooftop tent at coastal dusk"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 bg-foreground text-background p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-background/70">
                  Featured category — 01
                </p>
                <h3 className="mt-4 font-display text-[2rem] sm:text-[2.4rem] leading-[1.05] font-light">
                  Rooftop tents <span className="italic">&amp; canopy campers</span>
                </h3>
                <p className="mt-5 text-[1rem] leading-relaxed text-background/85">
                  The headline modification. We compare every credible hardshell, wedge, soft-shell
                  and full canopy camper sold in Australia — Alu-Cab, James Baroud, Bush Company,
                  23Zero, iKamper, Roofnest. With editor scores, real install timelines, and the
                  trade-offs nobody else publishes.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-background/15 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-background/60">
                    Brands compared
                  </p>
                  <p className="font-display text-[1.6rem] mt-1">{featuredTents.length > 0 ? ROOFTOP_TENTS.length : 6}+</p>
                </div>
                <Link href="/build">
                  <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.18em] uppercase text-background border-b border-background/40 pb-1 hover:border-background transition">
                    Compare tents
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Remaining 5 categories as a horizontal row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.filter((c) => c.id !== "rtt").map((cat) => {
              const Icon = CATEGORY_ICON[cat.id] ?? Tent;
              return (
                <div
                  key={cat.id}
                  className="border border-foreground/10 bg-background p-5 hover:border-foreground/40 transition-colors"
                >
                  <Icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
                  <h4 className="mt-4 font-display text-[1.15rem] leading-tight">{cat.shortName}</h4>
                  <p className="mt-2 text-[0.85rem] text-muted-foreground leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                  <p className="mt-4 font-mono text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground/70">
                    {cat.status === "live" ? "Live" : "Coming Soon"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          THE CRAFT — install detail moment
          The 9-day cure. The reason this isn't a DIY job.
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:min-h-[560px] overflow-hidden order-2 lg:order-1">
            <img
              src={IMG.installDetail}
              alt="Skilled craftsman installing an Alu-Cab Gen 3.1 hardshell rooftop tent"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 bg-background p-10 sm:p-16 flex flex-col justify-center order-1 lg:order-2 topo-bg-soft">
            <p className="eyebrow">Step 03 · The craft</p>
            <h2 className="mt-4 font-display text-[1.9rem] sm:text-[2.4rem] leading-[1.06] font-light">
              One day to install.
              <br />
              <span className="italic">Nine days to dry.</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-foreground/85 max-w-md">
              A rooftop tent install looks simple. Most workshops still get it wrong. The right
              sealant cure window is non-negotiable, the platform load math has to be exact, and the
              difference between a six-figure rig that leaks and one that doesn't is the experience
              of the hands fitting it.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-foreground/85 max-w-md">
              We work with a small group of Australia's best outfitters — and if the right one for
              your build isn't in your state, we coordinate the transport. So you stop driving
              compromised, and start driving the rig you actually wanted.
            </p>
            <div className="mt-8">
              <Link href="/how-we-work">
                <span className="inline-flex items-center gap-2 font-mono text-[0.74rem] tracking-[0.18em] uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition">
                  How we work
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          FOUNDING PARTNERS
          ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <p className="eyebrow text-center">Founding outfitter network</p>
          <h2 className="mt-3 font-display text-[1.6rem] sm:text-[2rem] leading-[1.1] font-light text-center max-w-2xl mx-auto">
            Built with the workshops most overlanders <span className="italic">drive interstate</span> to use.
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Adventure Merchants", city: "Sydney", role: "Premium fitter" },
              { name: "MOVA Adventures", city: "Sydney", role: "Premium fitter" },
              { name: "Alu-Cab Australia", city: "National", role: "Distribution" },
              { name: "James Baroud AU", city: "National", role: "Distribution" },
            ].map((p) => (
              <div key={p.name} className="border border-foreground/10 p-5 text-center">
                <p className="font-display text-[1.05rem] leading-tight">{p.name}</p>
                <p className="mt-2 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {p.city} · {p.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          MEMBERSHIP CTA — closing
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-foreground text-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${IMG.topoTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-background/70">
              Founding 500
            </p>
            <h2 className="mt-3 font-display text-[2.2rem] sm:text-[3rem] leading-[1.04] font-light">
              Invitations are limited.
              <br />
              <span className="italic">Join the first 500.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-background/85">
              Membership unlocks the full configurator, member-only outfitter pricing, the
              interstate transport concierge, and access to the editorial archive. Your first
              invitation is on us.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/membership">
              <span className="inline-flex items-center gap-2 px-7 py-4 bg-background text-foreground font-mono text-[0.78rem] tracking-[0.18em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
                Request invitation
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
