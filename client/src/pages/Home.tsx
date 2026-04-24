// OVRLND — Landing page
// Style: Cinematic Topographic. Wide editorial frames, eucalyptus + sand palette,
// confident considered tone. No purple gradients, no centred hero.

import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { IMG, VEHICLES, CATEGORIES, ROOFTOP_TENTS } from "@/lib/data";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function Home() {
  const featuredVehicles = VEHICLES.filter((v) => v.status === "live").slice(0, 3);
  const featuredTents = ROOFTOP_TENTS.filter((t) => t.ovrlndPick);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* ──────────────────────────────────────────────────────────────────
          HERO — Cinematic full-bleed Defender + headline overlay
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative w-full aspect-[21/9] min-h-[520px] max-h-[820px] overflow-hidden grain">
          <img
            src={IMG.heroDefender}
            alt="Land Rover Defender 110 with rooftop tent at golden hour, Blue Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Tonal vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />

          <div className="relative z-10 container h-full flex flex-col justify-end pb-16 sm:pb-24">
            <div className="max-w-3xl">
              <p className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-background/85 mb-6">
                — 33.71° S · 150.32° E · Blue Mountains, NSW
              </p>
              <h1 className="font-display text-background text-[2.5rem] sm:text-[3.6rem] lg:text-[4.8rem] leading-[1.02] font-light">
                The build is the
                <br />
                <span className="italic font-normal">journey before</span>
                <br />
                the journey.
              </h1>
              <p className="mt-7 max-w-xl text-[1.05rem] sm:text-[1.15rem] leading-relaxed text-background/90 font-light">
                A members-only platform for comparing premium overland fitouts in Australia. Independent
                reviews. Transparent pricing. The country's best installers — together, in one place.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/build">
                  <span className="inline-flex items-center gap-2 px-6 py-3.5 bg-background text-foreground text-[0.82rem] font-mono tracking-[0.16em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
                    Build your rig
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
                <Link href="/membership">
                  <span className="inline-flex items-center gap-2 px-6 py-3.5 border border-background/40 text-background text-[0.82rem] font-mono tracking-[0.16em] uppercase hover:bg-background/10 transition-colors">
                    Request invitation
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Issue marker */}
        <div className="absolute top-6 right-6 z-20 hidden md:block">
          <p className="font-mono text-[0.66rem] tracking-[0.22em] uppercase text-background/75">
            OVRLND · No. 001
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          THE PROBLEM / THE PROMISE
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 topo-bg-soft">
        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">01 · The promise</p>
            <h2 className="mt-4 font-display text-[2.2rem] sm:text-[2.8rem] leading-[1.05] font-light">
              You spent six months researching the truck.
              <br />
              <span className="italic">Spend six minutes researching the rest.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-7 text-[1.02rem] leading-relaxed text-foreground/85">
            <p>
              You know the feeling. You've signed the contract on the Defender, the G-Wagon, the
              Land Cruiser, the Range Rover, the Grenadier — or the next-gen Ranger that's quietly
              outselling all of them. You've waited the better part of a year. And now you're ready
              to make it yours.
            </p>
            <p>
              But the moment you start researching the fitout — rooftop tent, drawer system,
              electrical, fridge, awning, protection — you fall down the same rabbit hole every
              other premium 4x4 owner falls down. Forum threads from 2017. Workshop websites that
              haven't been updated since. Brand catalogues that read like spec sheets. Nothing that
              actually compares <em>this option</em> against <em>that option</em> for{" "}
              <em>your specific rig</em>.
            </p>
            <p>
              OVRLND is the platform we built because we got tired of looking for it.
              Independent. Editorial. Members-only. Built for the buyer who's done the research and
              is ready for the answer.
            </p>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          HOW IT WORKS — three editorial cards
          ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="eyebrow">02 · How it works</p>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.6rem] leading-[1.08] font-light max-w-2xl">
                Three steps. One rig you'll be proud of.
              </h2>
            </div>
            <Link href="/how-we-work">
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[0.75rem] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                Read more
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                ord: "01",
                title: "Pick your platform",
                body: "Select from 14 premium overland-capable vehicles across three tiers — heritage, new-era, and the premium common ute. Year, variant, the lot.",
              },
              {
                ord: "02",
                title: "Compare the kit",
                body: "Six fitout categories, ranked by our editors and supported by expert reviews. Side-by-side. Honest pros and cons. Real installed pricing.",
              },
              {
                ord: "03",
                title: "Meet your installer",
                body: "We connect you with the right outfitter for your build — interstate transport included if the best fitter for the job isn't local.",
              },
            ].map((step) => (
              <div key={step.ord} className="border-t border-foreground/15 pt-7">
                <p className="ordinal">{step.ord}</p>
                <h3 className="font-display text-[1.55rem] mt-4 font-medium leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          FEATURED VEHICLES — picker preview
          ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow">03 · The platform begins with the vehicle</p>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.6rem] leading-[1.08] font-light max-w-2xl">
                Tell us what you drive.
                <br />
                <span className="italic text-muted-foreground">We'll do the rest.</span>
              </h2>
            </div>
            <Link href="/build">
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[0.75rem] tracking-[0.16em] uppercase text-muted-foreground hover:text-accent transition-colors">
                Browse all 14 vehicles
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVehicles.map((v) => (
              <Link key={v.id} href={`/build/${v.id}`}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={v.thumbnail}
                      alt={v.fullName}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                    <p className="absolute top-4 left-4 font-mono text-[0.66rem] tracking-[0.18em] uppercase text-background/90 bg-foreground/35 backdrop-blur-sm px-2 py-1">
                      Tier {v.tier === "tier1" ? "01" : v.tier === "tier2" ? "02" : "03"} ·{" "}
                      {v.tierLabel}
                    </p>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[1.4rem] font-medium leading-tight">
                        {v.make} {v.model}
                      </h3>
                      <p className="mt-1 italic text-muted-foreground text-[0.95rem]">
                        {v.tagline}
                      </p>
                      <p className="mt-2 font-mono text-[0.72rem] tracking-[0.08em] text-foreground/75">
                        {v.basePrice}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-accent transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ──────────────────────────────────────────────────────────────────
          CATEGORIES — six fitout pillars
          ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <p className="eyebrow">04 · The six pillars</p>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.6rem] leading-[1.08] font-light">
                Every build, broken down.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-muted-foreground text-[1rem] leading-relaxed">
                We organise the entire premium fitout universe into six categories. Pick where you
                want to start — most members begin with a rooftop tent and let the rest follow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {CATEGORIES.map((c, idx) => (
              <Link key={c.id} href="/build">
                <div className="group bg-background hover:bg-secondary/40 transition-colors p-7 h-full cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <p className="ordinal">{String(idx + 1).padStart(2, "0")}</p>
                    <ArrowUpRight
                      className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-[1.35rem] font-medium leading-snug">{c.name}</h3>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <p className="mt-5 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-foreground/65">
                    Avg install · {c.averageInstallDays} day{c.averageInstallDays === 1 ? "" : "s"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          EDITOR'S PICK — RTT showcase
          ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-foreground text-background overflow-hidden">
        <img
          src={IMG.tentDetail}
          alt="Hardshell rooftop tent detail at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/40" />

        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-accent mb-5">
              Editor's pick · Rooftop tent of the year
            </p>
            <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-light">
              The Alu-Cab Gen 3.1 sets the
              <br />
              <span className="italic">benchmark for hardshell pop-ups.</span>
            </h2>
            <p className="mt-7 text-background/80 leading-relaxed text-[1.04rem] max-w-2xl">
              "Two-minute setup. Sub-90-second pack-down. A vertical-walled hardshell that takes
              another 40kg of solar or recovery gear on top. After a year of testing, we couldn't
              put a credible alternative in front of it."
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {featuredTents.map((t) => (
                <Link key={t.id} href={`/build`}>
                  <span className="inline-flex items-center gap-2 px-5 py-3 border border-background/40 text-background text-[0.78rem] font-mono tracking-[0.14em] uppercase hover:border-accent hover:text-accent transition-colors">
                    Read review · {t.brand} {t.model}
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          MEMBERSHIP CTA
          ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">05 · By invitation</p>
              <h2 className="mt-4 font-display text-[2.2rem] sm:text-[3rem] leading-[1.05] font-light">
                Membership is by invitation.
                <br />
                <span className="italic text-muted-foreground">For now.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-foreground/80">
                Founding members are invited via our dealer and outfitter network. The platform is
                free; the curation is ruthless. Member benefits include the full configurator, our
                editorial archive, founder-direct concierge for interstate installs, and access to
                a private network of owners.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-border p-7 bg-card">
                <p className="ordinal">Founding · 001 of 500</p>
                <h3 className="mt-3 font-display text-[1.7rem] font-medium leading-tight">
                  Request your invitation.
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                  Tell us what you drive (or what's on order). We'll be in touch.
                </p>
                <Link href="/membership">
                  <span className="mt-6 inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-[0.78rem] font-mono tracking-[0.14em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
                    Begin my application
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
