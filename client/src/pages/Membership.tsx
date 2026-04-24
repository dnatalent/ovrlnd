// OVRLND — Membership application page
// Style: Cinematic Topographic. Editorial form with founding-member messaging.

import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { useBuild } from "@/contexts/BuildContext";
import { getVehicleById, VEHICLES } from "@/lib/data";
import { Check } from "lucide-react";
import { toast } from "sonner";

export default function Membership() {
  const { build } = useBuild();
  const currentVehicle = build.vehicleId ? getVehicleById(build.vehicleId) : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    vehicleId: currentVehicle?.id ?? "",
    status: "ordered" as "owned" | "ordered" | "researching",
    referralCode: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.vehicleId) {
      toast("Please complete the required fields.", {
        description: "Name, email and vehicle are required.",
      });
      return;
    }
    setSubmitted(true);
    toast("Application received.", {
      description: "We'll be in touch within 48 hours.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="relative py-20 sm:py-28 topo-bg-soft border-b border-border">
        <div className="relative z-10 container">
          <p className="eyebrow">Founding · 001 of 500</p>
          <h1 className="mt-4 font-display text-[2.6rem] sm:text-[3.6rem] leading-[1.04] font-light max-w-4xl">
            Request your invitation.
            <br />
            <span className="italic text-muted-foreground">
              The first 500 are founding members.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-foreground/80">
            OVRLND is, for now, members-only. Founding members are sourced through our outfitter
            and dealer network and receive lifetime access at the founding rate. If you're already
            a customer of one of our partners, paste your referral code below.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-border bg-card p-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-6">
                  <Check className="w-6 h-6" strokeWidth={2} />
                </div>
                <h2 className="font-display text-[2rem] font-light leading-tight">
                  Application received.
                </h2>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Thank you, {form.firstName}. We'll review your application and be in touch within
                  48 hours. If accepted, you'll receive a founding-member access link to the
                  platform.
                </p>
                <p className="mt-6 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                  Reference · OVRLND-{Date.now().toString(36).toUpperCase().slice(-6)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First name *">
                    <input
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem]"
                    />
                  </Field>
                  <Field label="Last name">
                    <input
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem]"
                    />
                  </Field>
                </div>

                <Field label="Email *">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem]"
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="State">
                    <select
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem]"
                    >
                      <option value="">Select…</option>
                      {["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Status">
                    <select
                      value={form.status}
                      onChange={(e) =>
                        setForm({ ...form, status: e.target.value as typeof form.status })
                      }
                      className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem]"
                    >
                      <option value="owned">I already own the vehicle</option>
                      <option value="ordered">I've ordered / am awaiting delivery</option>
                      <option value="researching">I'm still researching</option>
                    </select>
                  </Field>
                </div>

                <Field label="Vehicle (or vehicle on order) *">
                  <select
                    required
                    value={form.vehicleId}
                    onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem]"
                  >
                    <option value="">Select your platform…</option>
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.fullName}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Referral / dealer code"
                  hint="Optional — provided by your dealer or outfitter at point of sale."
                >
                  <input
                    value={form.referralCode}
                    onChange={(e) => setForm({ ...form, referralCode: e.target.value })}
                    placeholder="e.g. ADV-MERCH-SYD-0427"
                    className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none font-mono text-[0.85rem]"
                  />
                </Field>

                <Field
                  label="Tell us about your build"
                  hint="What are you hoping to do with the vehicle? Any specific kit on your mind?"
                >
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-input focus:border-foreground focus:outline-none text-[0.95rem] resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-[0.78rem] tracking-[0.14em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Submit application
                </button>
                <p className="text-[0.78rem] text-muted-foreground">
                  By submitting, you agree to our editorial newsletter and to be contacted by our
                  curation team. No spam — ever.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar — what membership includes */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-border bg-card p-7 sticky top-24">
              <p className="ordinal">Membership includes</p>
              <ul className="mt-5 space-y-4 text-[0.92rem] leading-relaxed">
                {[
                  "The full vehicle configurator across 14 platforms",
                  "Editor-ranked comparisons with full pros and cons",
                  "Founder-direct concierge for interstate installs",
                  "Member-only outfitter pricing on selected categories",
                  "Vehicle transport coordination, door to workshop",
                  "Two invitation codes to share annually",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <hr className="hairline my-6" />
              <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
                Founding membership · Free for life
              </p>
              <p className="mt-1 font-mono text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
                After 500 · By application
              </p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block eyebrow text-foreground mb-2">{label}</span>
      {children}
      {hint && <span className="block mt-1.5 text-[0.78rem] text-muted-foreground">{hint}</span>}
    </label>
  );
}
