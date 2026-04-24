// OVRLND — Vehicle configurator (Step 02–03)
// Style: Cinematic Topographic. Two-column editorial layout — context + selectors.

import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { getVehicleById, CATEGORIES } from "@/lib/data";
import { useBuild } from "@/contexts/BuildContext";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function VehicleConfigurator() {
  const params = useParams<{ vehicleId: string }>();
  const [, navigate] = useLocation();
  const { build, setVehicle, setYear, setVariant, setCategory } = useBuild();
  const vehicle = getVehicleById(params.vehicleId);

  useEffect(() => {
    if (vehicle && build.vehicleId !== vehicle.id) setVehicle(vehicle.id);
  }, [vehicle, build.vehicleId, setVehicle]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <div className="container py-32 text-center">
          <p className="eyebrow">Vehicle not found</p>
          <h1 className="mt-4 font-display text-[2.4rem] font-light">
            We don't have a record for that platform yet.
          </h1>
          <Link href="/build">
            <span className="mt-8 inline-flex items-center gap-2 text-accent font-mono text-[0.78rem] tracking-[0.14em] uppercase">
              ← Back to platforms
            </span>
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Hero — vehicle image */}
      <section className="relative">
        <div className="relative aspect-[21/9] min-h-[420px] max-h-[640px] overflow-hidden grain">
          <img
            src={vehicle.heroImage ?? vehicle.thumbnail}
            alt={vehicle.fullName}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/65 via-foreground/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
          <div className="relative z-10 container h-full flex flex-col justify-end pb-12 sm:pb-16">
            <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-background/85 mb-4">
              Tier{" "}
              {vehicle.tier === "tier1" ? "01" : vehicle.tier === "tier2" ? "02" : "03"} ·{" "}
              {vehicle.tierLabel}
            </p>
            <h1 className="font-display text-background text-[2.6rem] sm:text-[4rem] leading-[1.02] font-light max-w-4xl">
              {vehicle.make}
              <br />
              <span className="italic font-normal">{vehicle.model}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-background/85 text-[1.05rem] italic">
              {vehicle.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Editorial note */}
      <section className="py-16 sm:py-20 border-b border-border topo-bg-soft relative">
        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Editor's note</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="font-display text-[1.6rem] sm:text-[1.95rem] leading-snug font-light">
              "{vehicle.notes}"
            </p>
            <p className="mt-5 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
              Base · {vehicle.basePrice}
            </p>
          </div>
        </div>
      </section>

      {/* Step 02 — year & variant */}
      <section className="py-16 sm:py-20 border-b border-border">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="ordinal">Step 02</p>
              <h2 className="mt-2 font-display text-[1.9rem] sm:text-[2.4rem] font-light leading-tight">
                Year & variant.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Years */}
            <div>
              <p className="eyebrow mb-5">Year of manufacture</p>
              <div className="flex flex-wrap gap-2">
                {vehicle.years.map((y) => {
                  const active = build.year === y;
                  return (
                    <button
                      key={y}
                      onClick={() => setYear(y)}
                      className={`px-4 py-2.5 font-mono text-[0.78rem] tracking-[0.1em] border transition-all ${
                        active
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground/45"
                      }`}
                    >
                      {y}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Variants */}
            <div>
              <p className="eyebrow mb-5">Variant / trim</p>
              <div className="flex flex-wrap gap-2">
                {vehicle.variants.map((v) => {
                  const active = build.variant === v;
                  return (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-4 py-2.5 font-mono text-[0.78rem] tracking-[0.1em] uppercase border transition-all ${
                        active
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground/45"
                      }`}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 03 — category */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="ordinal">Step 03</p>
              <h2 className="mt-2 font-display text-[1.9rem] sm:text-[2.4rem] font-light leading-tight">
                What do you want to build first?
              </h2>
              <p className="mt-3 text-muted-foreground text-[0.96rem] max-w-xl">
                Most of our members start with a rooftop tent — it's the centrepiece, and it sets
                the rules for everything that follows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {CATEGORIES.map((c, idx) => {
              const isLive = c.id === "rtt"; // For MVP, only RTT category is fully populated
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    if (!isLive) {
                      toast("Coming soon — added to your build watchlist.", {
                        description: `${c.name} editorial review is in progress.`,
                      });
                      return;
                    }
                    if (!build.year || !build.variant) {
                      toast("Pick a year and variant first.", {
                        description: "We'll tailor the comparison to your exact spec.",
                      });
                      return;
                    }
                    setCategory(c.id);
                    navigate(`/build/${vehicle.id}/${c.id}`);
                  }}
                  className={`group bg-background text-left p-7 transition-all ${
                    isLive ? "hover:bg-secondary/40" : "opacity-65"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <p className="ordinal">{String(idx + 1).padStart(2, "0")}</p>
                    {isLive ? (
                      <ArrowUpRight
                        className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                        Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[1.3rem] font-medium leading-snug">{c.name}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <p className="mt-5 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-foreground/60">
                    Avg install · {c.averageInstallDays} day{c.averageInstallDays === 1 ? "" : "s"}
                  </p>
                </button>
              );
            })}
          </div>

          {build.year && build.variant && (
            <div className="mt-10 flex items-center gap-3 text-[0.92rem] text-muted-foreground">
              <Check className="w-4 h-4 text-accent" strokeWidth={2} />
              <span>
                Spec confirmed: {vehicle.fullName} · {build.year} · {build.variant}. Continue to a
                category.
              </span>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
