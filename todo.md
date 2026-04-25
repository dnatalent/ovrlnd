# OVRLND v3 — Brand comparison matrices

## Phase 1 · Product data
- [ ] Awnings — write 5 brands (Alu-Cab Shadow Awn, ARB Awning 1250/2500, Oztent Foxwing 270, 23Zero Peregrine 270, Bush Company 270XT)
- [ ] 12V/240V Electrical — write 5 brands (REDARC ManagerPro 30, Enerdrive ePOWER, Victron MultiPlus 12/2000, Projecta IDC25, BCDC + DCS lithium combo)
- [ ] Fridges — write 5 brands (Dometic CFX3 75DZ, ARB Zero 73Q dual, National Luna Legacy 50, Engel MR040, Bushman DC85-X)
- [ ] Drawer systems — write 5 brands (MSA 4x4 DS, Drifta DST, ARB Outback Solutions, Front Runner SSD, RV Storage Solutions)

## Phase 2 · Wiring
- [ ] Extend `lib/data.ts` with generic Product type + 4 new brand arrays
- [ ] Generalise the Comparison page so it accepts any category, not just RTT
- [ ] Flip the four category statuses from `comingSoon` to `live` in CATEGORIES
- [ ] Verify configurator routes `/build/:vehicleId` → category click → comparison view

## Phase 3 · Ship
- [ ] webdev_check_status — confirm clean build
- [ ] Save checkpoint v3
- [ ] Deliver Manus-hosted URL

## Phase 4 · GitHub + Vercel
- [ ] Create private GitHub repo `ovrlnd-web`
- [ ] Push the project
- [ ] Write `VERCEL_DEPLOY.md` with the exact commands the user runs
