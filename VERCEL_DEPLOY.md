# OVRLND — Vercel deploy guide

Repo: **github.com/dnatalent/ovrlnd**
Branch: **main**
Latest commit: `3be661b` — *Add vercel.json + project README for one-click Vercel deploy*

The repo is push-ready. A `vercel.json` is included so Vercel auto-configures
itself — you should not need to touch any build settings in the Vercel UI.

---

## Option A — Web UI (recommended, 90 seconds)

1. Open **https://vercel.com/new**
2. If your GitHub account isn't connected:
   - Click **Continue with GitHub** → authorise Vercel
   - When asked which repos to grant access to, select **dnatalent/ovrlnd**
     (or grant "All repositories" if you'd rather)
3. Find **dnatalent/ovrlnd** in the import list → click **Import**
4. On the configuration screen:
   - **Framework Preset:** Vite *(auto-detected)*
   - **Root Directory:** *leave blank* (`vercel.json` handles it)
   - **Build Command:** *leave default* (`vercel.json` overrides to `pnpm vite build`)
   - **Output Directory:** *leave default* (`vercel.json` overrides to `dist/public`)
   - **Install Command:** *leave default* (`vercel.json` overrides to `pnpm install --no-frozen-lockfile`)
   - **Environment Variables:** none required
5. Click **Deploy**

First build takes ~90 seconds. You'll get a URL like
`ovrlnd-xxx.vercel.app` immediately. Every subsequent push to `main`
auto-deploys.

---

## Option B — Vercel CLI (if you prefer terminal)

On your local desktop, in any folder:

```bash
# 1. Install Vercel CLI globally (one time only)
npm i -g vercel

# 2. Log in (opens a browser tab)
vercel login

# 3. Clone your repo
git clone https://github.com/dnatalent/ovrlnd.git
cd ovrlnd

# 4. Link the local folder to a Vercel project (interactive — answer the prompts)
vercel link
#   ? Set up "~/ovrlnd"?                                    Y
#   ? Which scope should contain your project?              <your account>
#   ? Link to existing project?                             N
#   ? What's your project's name?                           ovrlnd
#   ? In which directory is your code located?              ./
#   (Vercel will detect Vite + read vercel.json)

# 5. Deploy a preview
vercel

# 6. Promote to production
vercel --prod
```

The CLI flow gives you preview URLs per deploy plus a stable production URL.

---

## Adding your custom domain

Once the first deploy is live:

1. Vercel project → **Settings → Domains** → **Add**
2. Type your domain (e.g. `ovrlnd.au`, `ovrlnd.com.au`)
3. Vercel shows you the DNS records to add (typically one A record + one
   CNAME for `www`). Copy them.
4. In your domain registrar (VentraIP, Crazy Domains, Cloudflare etc.),
   add those records. DNS usually propagates in 5–30 minutes.
5. Vercel auto-issues a free SSL certificate.

---

## What's in the repo

```
client/                ← React + Vite frontend (the deployed app)
  src/pages/           ← Home, Build, VehicleConfigurator, Comparison, Membership, HowWeWork
  src/components/      ← SiteChrome + shadcn/ui
  src/contexts/        ← BuildContext (cross-page selected vehicle/category)
  src/lib/data.ts      ← All vehicle + brand data — edit this to add/change products
  src/index.css        ← Cinematic Topographic theme tokens
server/                ← Manus-only dev shim, NOT used in production
shared/                ← Compatibility placeholder
vercel.json            ← Vercel build config
README.md              ← Project overview
package.json           ← Dependencies + scripts
```

To add a new vehicle or brand: edit `client/src/lib/data.ts`, push to `main`,
Vercel rebuilds in ~90 seconds.

---

## A small note on images

The 10 hero/build images are currently served from Manus CDN URLs (pasted
inside `client/src/lib/data.ts` as the `IMG` constant). They will continue to
work on Vercel without any change.

If you'd later prefer to host the images from your own asset store (Vercel
Blob, S3, Cloudflare R2 or Cloudinary):

1. Upload the files
2. Replace the URLs in `client/src/lib/data.ts → IMG`
3. Push

That's the full migration.

---

## Troubleshooting

**Build fails with "Cannot find pnpm"** — In Vercel project settings, confirm
*Node.js version* is **22.x** (matches `package.json → packageManager`). pnpm is
included in modern Vercel build images.

**404s on internal routes (e.g. /build, /how-we-work)** — Already handled by
the `rewrites` block in `vercel.json` (SPA fallback to `index.html`).

**Page renders blank** — Check the browser console; usually a missing env var
(none required for OVRLND) or a CDN image URL change.

---

That's everything. Ship it.
