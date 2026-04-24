// OVRLND — How We Work (editorial transparency / disclosure)
// Style: Cinematic Topographic. Long-form editorial layout.

import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const PRINCIPLES = [
  {
    n: "01",
    title: "We don't sell anything.",
    body: "OVRLND is not a retailer, an outfitter, or a freight company. We don't take a cut of your build. Our editorial picks are made on merit, full stop.",
  },
  {
    n: "02",
    title: "Founding partners are disclosed.",
    body: "Several outfitters and brands — Adventure Merchants, MOVA, Alu-Cab Australia, James Baroud — supported our launch with deep product access and time. Every product page tells you who's a founding partner and who isn't.",
  },
  {
    n: "03",
    title: "Editor scores are explained.",
    body: "Our 1-to-10 score is the average of four sub-scores: build quality, in-field usability, install experience, and value. We publish the methodology — and we'll change a score in public if a manufacturer fixes a problem.",
  },
  {
    n: "04",
    title: "If we recommend an installer, we say why.",
    body: "Our concierge will recommend specific outfitters for your build. Those recommendations are based on category specialisation, schedule, and your geography — not on who pays the most.",
  },
  {
    n: "05",
    title: "Members talk to humans.",
    body: "Every member gets a real concierge contact — a person, in Sydney, who knows the platforms and the workshops. No chat-bots, no overseas call centres.",
  },
];

export default function HowWeWork() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="relative py-20 sm:py-28 topo-bg-soft border-b border-border">
        <div className="relative z-10 container">
          <p className="eyebrow">Editorial</p>
          <h1 className="mt-4 font-display text-[2.6rem] sm:text-[3.6rem] leading-[1.04] font-light max-w-4xl">
            How we work.
            <br />
            <span className="italic text-muted-foreground">
              And how we make money — in plain English.
            </span>
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3">
            <p className="ordinal sticky top-28">Five principles</p>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5 space-y-12">
            {PRINCIPLES.map((p) => (
              <article key={p.n} className="border-t border-foreground/15 pt-8">
                <p className="font-mono text-[0.74rem] tracking-[0.18em] uppercase text-accent">
                  Principle {p.n}
                </p>
                <h2 className="mt-3 font-display text-[1.6rem] sm:text-[2rem] font-light leading-snug">
                  {p.title}
                </h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-foreground/80 max-w-2xl">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-background border-t border-foreground">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[2rem] sm:text-[2.6rem] leading-tight font-light">
              Want to work with us?
              <br />
              <span className="italic">Outfitters, brands, dealerships welcome.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-background/80 leading-relaxed">
              We're actively building our founding partner roster. If your business meets our
              editorial bar, we'd love to talk.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Link href="/membership">
              <span className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-background text-foreground font-mono text-[0.8rem] tracking-[0.14em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
                Get in touch
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
