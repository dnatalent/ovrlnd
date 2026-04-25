# OVRLND

> Australia's independent platform for comparing every premium overland fitout
> — rooftop tents, awnings, drawer systems, fridges, electrical — across every
> brand worth fitting. Members only.

A members-only, third-party comparison platform for premium 4x4 owners.
Cinematic editorial UI, brand-by-brand comparison matrices, and a configurator
flow that takes a buyer from base vehicle to install-ready spec.

---

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (static build, `client/` as root)
- **Tailwind CSS 4** with a custom Cinematic Topographic theme
- **wouter** for client-side routing
- **shadcn/ui** primitives (Radix under the hood)
- **Framer Motion** for the editorial micro-interactions
- **Fraunces** + **Inter Tight** + **JetBrains Mono** typography

---

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Build the production static bundle:

```bash
pnpm vite build   # outputs to dist/public
```

> **Note:** the `pnpm build` script also bundles a tiny Express server that is
> only used inside the Manus dev sandbox. **For Vercel and any other static
> host, use `pnpm vite build` (or just let Vercel use the included
> `vercel.json`).**

---

## Deploying to Vercel

The repo includes a `vercel.json` that configures everything correctly:

```json
{
  "framework": "vite",
  "buildCommand": "pnpm vite build",
  "outputDirectory": "dist/public",
  "installCommand": "pnpm install --no-frozen-lockfile",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### One-time setup

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import Git Repository** → select `dnatalent/ovrlnd`
3. Framework preset will auto-detect as **Vite**
4. Leave all build settings on default (the `vercel.json` overrides them anyway)
5. Click **Deploy**

That's it. Every push to `main` from now on auto-deploys.

### Custom domain

Once deployed:

1. Vercel project → **Settings → Domains**
2. Add `ovrlnd.au`, `ovrlnd.com.au` or whichever you've registered
3. Follow the DNS instructions (CNAME or A record)

---

## Project structure

```
client/
  index.html
  src/
    pages/        ← Home, Build, VehicleConfigurator, Comparison, Membership, HowWeWork
    components/   ← SiteChrome (header/footer) + shadcn/ui primitives
    contexts/     ← BuildContext (cross-page selected vehicle/category)
    lib/
      data.ts     ← All vehicles, categories, and brand product catalogues
    App.tsx       ← Routes
    index.css     ← Cinematic Topographic global theme
server/           ← Manus dev-sandbox shim only — NOT deployed to Vercel
shared/           ← Compatibility placeholder
vercel.json       ← Vercel build config (static-only)
```

---

## Editorial model

OVRLND positions as **a genuinely independent comparison platform** — side-by-side
brand specs, expert scoring, transparent pros/cons. Editor's Picks and the
"Founding Outfitters" carousel intentionally surface aligned partners
(Adventure Merchants, MOVA Adventures, Alu-Cab Australia, James Baroud
Australia) where the editorial verdict supports it. The `How We Work` page
makes the disclosure framework explicit.

---

## License

MIT — but the Founding Members programme, partner relationships and editorial
content are proprietary.
