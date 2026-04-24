// OVRLND — Vehicle picker
// Style: Cinematic Topographic. Three-tier editorial grid, mono labels, hover reveals.

import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { VEHICLES, TIER_META, type Tier } from "@/lib/data";
import { useBuild } from "@/contexts/BuildContext";
import { ArrowUpRight, Lock } from "lucide-react";
import { toast } from "sonner";

const TIER_ORDER: Tier[] = ["tier1", "tier2", "tier3"];

export default function Build() {
  const { setVehicle } = useBuild();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Page heading */}
      <section className="relative py-20 sm:py-28 topo-bg-soft border-b border-border">
        <div className="relative z-10 container">
          <p className="eyebrow">Step 01 · Select your platform</p>
          <h1 className="mt-4 font-display text-[2.6rem] sm:text-[3.6rem] leading-[1.04] font-light max-w-4xl">
            Tell us what you drive — <span className="italic">or what's on order.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-foreground/80">
            Fourteen platforms across three tiers. Tap a vehicle to begin building. The library
            grows weekly — vehicles marked <em>Coming Soon</em> are in editorial review.
          </p>
        </div>
      </section>

      {/* Tiered vehicle grids */}
      {TIER_ORDER.map((tier) => {
        const meta = TIER_META[tier];
        const tierVehicles = VEHICLES.filter((v) => v.tier === tier);
        return (
          <section key={tier} className="py-20 sm:py-24 border-b border-border last:border-b-0">
            <div className="container">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="ordinal">Tier {meta.ordinal}</p>
                  <h2 className="mt-2 font-display text-[2rem] sm:text-[2.4rem] leading-tight font-light">
                    {meta.label}
                  </h2>
                  <p className="mt-2 text-muted-foreground text-[0.96rem] max-w-xl">
                    {meta.description}
                  </p>
                </div>
                <p className="hidden sm:block font-mono text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
                  {tierVehicles.length} platforms
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tierVehicles.map((v) => {
                  const isLive = v.status === "live";
                  const Card = (
                    <article
                      onClick={() => {
                        if (!isLive) {
                          toast("Coming soon — added to your watchlist.", {
                            description: `${v.fullName} editorial review is in progress.`,
                          });
                          return;
                        }
                        setVehicle(v.id);
                      }}
                      className="group cursor-pointer relative"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={v.thumbnail}
                          alt={v.fullName}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                            !isLive ? "grayscale opacity-65" : ""
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                        {!isLive && (
                          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-foreground/85 backdrop-blur-sm text-background px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] uppercase">
                            <Lock className="w-3 h-3" strokeWidth={1.5} />
                            Coming soon
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <div>
                            <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-background/85">
                              {v.make}
                            </p>
                            <h3 className="font-display text-background text-[1.5rem] font-medium leading-tight mt-0.5">
                              {v.model}
                            </h3>
                          </div>
                          <ArrowUpRight
                            className={`w-5 h-5 text-background transition-transform duration-300 ${
                              isLive ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : ""
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="italic text-muted-foreground text-[0.92rem] leading-snug">
                          {v.tagline}
                        </p>
                        <p className="mt-2 font-mono text-[0.7rem] tracking-[0.08em] text-foreground/70">
                          {v.basePrice}
                        </p>
                      </div>
                    </article>
                  );
                  return isLive ? (
                    <Link key={v.id} href={`/build/${v.id}`}>
                      {Card}
                    </Link>
                  ) : (
                    <div key={v.id}>{Card}</div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <SiteFooter />
    </div>
  );
}
