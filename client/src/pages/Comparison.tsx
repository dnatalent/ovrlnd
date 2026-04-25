// OVRLND — Side-by-side brand comparison (any category)
// Style: Cinematic Topographic. Editorial table + product cards + expert quotes.
// Supports: rooftop tents (RTT) + awning + electrical + fridge + drawer
// — all routed through a shared `ComparableItem` adapter.

import { Link, useParams } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import {
  getVehicleById,
  getCategoryById,
  getRTTsForVehicle,
  getProductsForVehicleAndCategory,
  type RoofTent,
  type Product,
} from "@/lib/data";
import { useBuild } from "@/contexts/BuildContext";
import { Award, Bookmark, BookmarkCheck, Clock, DollarSign, Star } from "lucide-react";
import { toast } from "sonner";

// ────────────────────────────────────────────────────────────────────────
// ComparableItem — the unified shape used to render any category
// ────────────────────────────────────────────────────────────────────────

interface ComparableItem {
  id: string;
  brand: string;
  model: string;
  // Headline label sits under the model name on the cards
  // For RTT it's the "type" (e.g. "Hardshell pop-up"); for others the headlineSpec.
  headline: string;
  origin: string;
  priceMinAud: number;
  priceMaxAud: number;
  installCostAud: number;
  installDays: number;
  editorScore: number;
  ovrlndPick: boolean;
  pros: string[];
  cons: string[];
  bestFor: string;
  image: string;
  shortReview: string;
  expertReviews: { source: string; quote: string }[];
  // Category-specific extra spec rows for the side-by-side table
  extraSpecs: { label: string; value: string }[];
}

function rttToComparable(t: RoofTent): ComparableItem {
  return {
    id: t.id,
    brand: t.brand,
    model: t.model,
    headline: t.type,
    origin: t.origin,
    priceMinAud: t.priceMinAud,
    priceMaxAud: t.priceMaxAud,
    installCostAud: t.installCostAud,
    installDays: t.installDays,
    editorScore: t.editorScore,
    ovrlndPick: t.ovrlndPick,
    pros: t.pros,
    cons: t.cons,
    bestFor: t.bestFor,
    image: t.image,
    shortReview: t.shortReview,
    expertReviews: t.expertReviews,
    extraSpecs: [
      { label: "Type", value: t.type },
      { label: "Weight", value: `${t.weightKg} kg` },
      { label: "Sleeps", value: `${t.sleeps} pax` },
      { label: "Setup", value: `${t.setupTimeMinutes} min` },
    ],
  };
}

function productToComparable(p: Product): ComparableItem {
  return {
    id: p.id,
    brand: p.brand,
    model: p.model,
    headline: p.headlineSpec,
    origin: p.origin,
    priceMinAud: p.priceMinAud,
    priceMaxAud: p.priceMaxAud,
    installCostAud: p.installCostAud,
    installDays: p.installDays,
    editorScore: p.editorScore,
    ovrlndPick: p.ovrlndPick,
    pros: p.pros,
    cons: p.cons,
    bestFor: p.bestFor,
    image: p.image,
    shortReview: p.shortReview,
    expertReviews: p.expertReviews,
    extraSpecs: [{ label: "Spec", value: p.headlineSpec }],
  };
}

// ────────────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────────────

export default function Comparison() {
  const params = useParams<{ vehicleId: string; categoryId: string }>();
  const vehicle = getVehicleById(params.vehicleId);
  const category = getCategoryById(params.categoryId);
  const { build, toggleSavedProduct } = useBuild();

  if (!vehicle || !category) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <div className="container py-32 text-center">
          <p className="font-display text-[2rem] font-light">Comparison not found.</p>
          <Link href="/build">
            <span className="mt-6 inline-block font-mono text-[0.78rem] tracking-[0.14em] uppercase text-accent">
              ← Back to platforms
            </span>
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  // Resolve products for this category
  let items: ComparableItem[] = [];
  if (category.id === "rtt") {
    items = getRTTsForVehicle(vehicle.id).map(rttToComparable);
  } else {
    items = getProductsForVehicleAndCategory(vehicle.id, category.id).map(productToComparable);
  }
  items.sort((a, b) => b.editorScore - a.editorScore);

  // Empty-state for any category we haven't populated yet (e.g. protection)
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <section className="container py-32 max-w-3xl">
          <p className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-accent">
            Coming soon · {category.shortName}
          </p>
          <h1 className="mt-4 font-display text-[2.4rem] sm:text-[3rem] leading-[1.04] font-light">
            We're building this comparison{" "}
            <span className="italic">right now.</span>
          </h1>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            The {category.shortName.toLowerCase()} matrix for the {vehicle.fullName} is queued
            for our next editorial sprint. Founding members get first access — and a say in
            which brands we cover first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/build/${vehicle.id}`}>
              <span className="inline-flex items-center gap-2 px-5 py-3 border border-foreground hover:bg-foreground hover:text-background font-mono text-[0.78rem] tracking-[0.14em] uppercase transition-colors">
                ← Back to {vehicle.make} build
              </span>
            </Link>
            <Link href="/membership">
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-[0.78rem] tracking-[0.14em] uppercase">
                Become a member
              </span>
            </Link>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  // Build the union of "extraSpecs" labels across all items so the table is consistent
  const extraLabels: string[] = [];
  for (const it of items) {
    for (const spec of it.extraSpecs) {
      if (!extraLabels.includes(spec.label)) extraLabels.push(spec.label);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Page header */}
      <section className="relative py-20 sm:py-24 border-b border-border topo-bg-soft">
        <div className="relative z-10 container">
          <p className="eyebrow">
            Step 04 · Compare · {category.name}
          </p>
          <h1 className="mt-4 font-display text-[2.4rem] sm:text-[3.4rem] leading-[1.04] font-light max-w-4xl">
            {items.length} options.
            <br />
            <span className="italic">One ranked the way our editors actually buy.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.74rem] tracking-[0.08em] text-muted-foreground">
            <span>Fitted to · {vehicle.fullName}</span>
            {build.year && <span>· Year {build.year}</span>}
            {build.variant && <span>· {build.variant}</span>}
            <span>· {category.averageInstallDays}-day average install</span>
          </div>
        </div>
      </section>

      {/* Side-by-side table */}
      <section className="py-16">
        <div className="container">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-foreground/25">
                  <th className="text-left font-mono text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground py-4 pr-6">
                    Spec
                  </th>
                  {items.map((p) => (
                    <th key={p.id} className="text-left py-4 px-3 align-top min-w-[180px]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
                            {p.brand}
                          </p>
                          <p className="font-display text-[1.05rem] leading-tight font-medium mt-1">
                            {p.model}
                          </p>
                        </div>
                        {p.ovrlndPick && (
                          <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-2 py-0.5 font-mono text-[0.58rem] tracking-[0.14em] uppercase">
                            <Award className="w-2.5 h-2.5" strokeWidth={2} />
                            Pick
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[0.88rem]">
                <SpecRow
                  label="Price (RRP)"
                  values={items.map(
                    (p) => `$${p.priceMinAud.toLocaleString()} – $${p.priceMaxAud.toLocaleString()}`,
                  )}
                  mono
                />
                <SpecRow
                  label="Install"
                  values={items.map(
                    (p) => `+$${p.installCostAud.toLocaleString()} · ${p.installDays} ${p.installDays === 1 ? "day" : "days"}`,
                  )}
                  mono
                />
                {extraLabels.map((label) => (
                  <SpecRow
                    key={label}
                    label={label}
                    values={items.map((p) => {
                      const found = p.extraSpecs.find((s) => s.label === label);
                      return found ? found.value : "—";
                    })}
                    mono={label === "Weight" || label === "Setup" || label === "Sleeps"}
                  />
                ))}
                <SpecRow
                  label="Origin"
                  values={items.map((p) => p.origin)}
                />
                <tr className="border-b border-border">
                  <td className="py-4 pr-6 font-mono text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
                    Editor score
                  </td>
                  {items.map((p) => (
                    <td key={p.id} className="py-4 px-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-[1.5rem] font-medium leading-none">
                          {p.editorScore.toFixed(1)}
                        </span>
                        <span className="text-muted-foreground text-[0.78rem]">/10</span>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Editorial product cards */}
      <section className="pb-24">
        <div className="container space-y-12">
          {items.map((p, idx) => (
            <ProductDetail
              key={p.id}
              product={p}
              ordinal={String(idx + 1).padStart(2, "0")}
              isSaved={build.savedProducts.includes(p.id)}
              onToggleSave={() => {
                toggleSavedProduct(p.id);
                toast(
                  build.savedProducts.includes(p.id)
                    ? "Removed from your build"
                    : "Saved to your build",
                  { description: `${p.brand} ${p.model}` },
                );
              }}
            />
          ))}
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-accent mb-5">
              Step 05 · The concierge
            </p>
            <h2 className="font-display text-[2.2rem] sm:text-[2.8rem] leading-tight font-light">
              Your build, fitted by the country's best.
              <br />
              <span className="italic">Wherever in Australia they are.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-background/80 leading-relaxed text-[1rem]">
              Selected the kit? We'll connect you with the right outfitter — Sydney, Melbourne,
              Brisbane, Perth — and coordinate vehicle transport if your fitter and your driveway
              aren't in the same postcode.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Link href="/membership">
              <span className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-background text-foreground font-mono text-[0.8rem] tracking-[0.14em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
                Request your installer
              </span>
            </Link>
            <p className="mt-3 text-center font-mono text-[0.66rem] tracking-[0.14em] uppercase text-background/60">
              Members only · invitation required
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────

function SpecRow({
  label,
  values,
  mono = false,
}: {
  label: string;
  values: string[];
  mono?: boolean;
}) {
  return (
    <tr className="border-b border-border">
      <td className="py-4 pr-6 font-mono text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
        {label}
      </td>
      {values.map((v, i) => (
        <td
          key={i}
          className={`py-4 px-3 align-top ${
            mono ? "font-mono text-[0.78rem]" : "text-[0.92rem]"
          }`}
        >
          {v}
        </td>
      ))}
    </tr>
  );
}

function ProductDetail({
  product,
  ordinal,
  isSaved,
  onToggleSave,
}: {
  product: ComparableItem;
  ordinal: string;
  isSaved: boolean;
  onToggleSave: () => void;
}) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-foreground/15 pt-12">
      {/* Image */}
      <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.ovrlndPick && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 font-mono text-[0.66rem] tracking-[0.16em] uppercase">
            <Award className="w-3 h-3" strokeWidth={2} />
            OVRLND Pick
          </div>
        )}
      </div>

      {/* Body */}
      <div className="lg:col-span-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="ordinal">{ordinal} · {product.headline}</p>
            <h3 className="mt-2 font-display text-[1.85rem] sm:text-[2.3rem] font-medium leading-tight">
              {product.brand} <span className="italic font-light">{product.model}</span>
            </h3>
          </div>
          <button
            onClick={onToggleSave}
            className="flex-shrink-0 p-2.5 border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label={isSaved ? "Remove from build" : "Save to build"}
          >
            {isSaved ? (
              <BookmarkCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
            ) : (
              <Bookmark className="w-4 h-4" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Score & price strip */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border py-4">
          <div className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" strokeWidth={1.5} />
            <span className="font-display text-[1.3rem] font-medium leading-none">
              {product.editorScore.toFixed(1)}
            </span>
            <span className="text-muted-foreground text-[0.78rem]">/10 editor</span>
          </div>
          <div className="flex items-center gap-2 text-[0.85rem]">
            <DollarSign className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
            <span className="font-mono">
              ${product.priceMinAud.toLocaleString()} – ${product.priceMaxAud.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[0.85rem]">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
            <span className="font-mono">
              {product.installDays}-{product.installDays === 1 ? "day" : "day"} install · ${product.installCostAud.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Editorial review */}
        <p className="mt-6 text-[1rem] leading-relaxed text-foreground/85 italic">
          "{product.shortReview}"
        </p>
        <p className="mt-2 font-mono text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
          Best for · {product.bestFor}
        </p>

        {/* Pros / Cons */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <div>
            <p className="eyebrow text-foreground mb-3">In favour</p>
            <ul className="space-y-2 text-[0.9rem] leading-snug text-foreground/80">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">+</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-foreground mb-3">Against</p>
            <ul className="space-y-2 text-[0.9rem] leading-snug text-foreground/80">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">–</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expert quotes */}
        {product.expertReviews.length > 0 && (
          <div className="mt-7 space-y-4">
            {product.expertReviews.map((q, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-4 text-[0.92rem] italic text-foreground/85 leading-relaxed"
              >
                "{q.quote}"
                <footer className="mt-2 not-italic font-mono text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground">
                  — {q.source}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
