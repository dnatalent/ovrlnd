// OVRLND core data layer — all vehicle, category, and product data lives here
// Editorial scoring is editorially independent (see /how-we-work)

export type Tier = "tier1" | "tier2" | "tier3";

export interface Vehicle {
  id: string;
  tier: Tier;
  tierLabel: string;
  make: string;
  model: string;
  fullName: string;
  years: string[];
  variants: string[];
  basePrice: string; // AUD range as displayed
  popularityRank: number;
  status: "live" | "comingSoon";
  heroImage?: string;
  thumbnail: string;
  tagline: string;
  notes: string; // editorial one-liner
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  description: string;
  iconKey: string;
  averageInstallDays: number;
  averageProfitPerInstall?: number;
  status: "live" | "comingSoon";
}

export interface RoofTent {
  id: string;
  brand: string;
  model: string;
  type: "Hardshell pop-up" | "Hardshell wedge" | "Hardshell clamshell" | "Soft-shell fold-out" | "Soft-shell clamshell";
  origin: string;
  weightKg: number;
  sleeps: number;
  setupTimeMinutes: number;
  priceMinAud: number;
  priceMaxAud: number;
  installCostAud: number;
  installDays: number;
  editorScore: number; // /10
  ovrlndPick: boolean;
  pros: string[];
  cons: string[];
  bestFor: string;
  fitsTiers: Tier[];
  image: string;
  shortReview: string;
  expertReviews: { source: string; quote: string }[];
}

// ────────────────────────────────────────────────────────────────────────
// IMAGE URLS
// ────────────────────────────────────────────────────────────────────────

export const IMG = {
  // Original hero set
  heroDefender:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-hero-defender-2kouzY2ssf3t64oAuf3qxM.webp",
  heroGrenadier:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-hero-grenadier-2yYyoz8cRZuWrQzwVcRPHt.webp",
  heroRanger:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-hero-ranger-4qgwoE5TE5oXm8z9WKXkpA.webp",
  tentDetail:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-tent-detail-Qf2ynbADkAhaEVXoAtKJKR.webp",
  topoTexture:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-topo-texture-4sXGetx8BBeCeVUCzUSikD.webp",
  // Built-vehicle hero set (Want-Creation visual language)
  builtDefender:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-defender-built-FMQkiVnZViqMM5g3CBckcF.webp",
  builtGwagon:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-gwagon-built-eRDLdk37N7BRMD5uWBUdMt.webp",
  builtLandcruiser300:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-landcruiser300-built-KKpyLYaYRXLt5kpSK73ZEW.webp",
  builtGrenadier:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-grenadier-built-oYkTR8NLb5DKkGR2yeVwWZ.webp",
  builtRangerover:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-rangerover-built-mKGUUtJCsX8YZEhijzNVwg.webp",
  builtCybertruck:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-cybertruck-built-GnJmuBxuW3tFAojfVnuSB2.webp",
  builtModelX:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-modelx-built-o2hCwWnJzo9J5rtn7hVNyV.webp",
  builtRanger:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-ranger-built-Vhn3g3LaytX8whVuRgztVD.webp",
  builtHilux:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-hilux-built-V7jpjcyYayb3MCYnhH6NXp.webp",
  installDetail:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500711512/2ZgSRYHp78vzg3narkm4e6/ovrlnd-install-detail-BgzehWvPGRWJiDSoAjmuUB.webp",
};

// Unsplash fallbacks for vehicle thumbnails (less prominent areas)
// Verified Unsplash links for less-prominent thumbnails (vehicle silhouettes / supporting visuals)
const UNSPLASH = {
  defender: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
  gwagon: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1200&q=80",
  landcruiser: "https://images.unsplash.com/photo-1623073284788-0d846f75e329?w=1200&q=80",
  rangerover: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
  grenadier: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
  cybertruck: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&q=80",
  rivian: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=1200&q=80",
  modelx: "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=1200&q=80",
  lexusgx: "https://images.unsplash.com/photo-1623073284788-0d846f75e329?w=1200&q=80",
  ranger: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=1200&q=80",
  amarok: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=1200&q=80",
  hilux: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=1200&q=80",
  dmax: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=1200&q=80",
};

// ────────────────────────────────────────────────────────────────────────
// VEHICLES
// ────────────────────────────────────────────────────────────────────────

export const VEHICLES: Vehicle[] = [
  // TIER 1 — Premium heritage
  {
    id: "defender-110",
    tier: "tier1",
    tierLabel: "Premium Heritage",
    make: "Land Rover",
    model: "Defender 110",
    fullName: "Land Rover Defender 110",
    years: ["2024", "2023", "2022", "2021", "2020"],
    variants: ["P300", "P400", "D250", "D300", "X-Dynamic", "X", "OCTA"],
    basePrice: "$98,000 — $230,000",
    popularityRank: 1,
    status: "live",
    heroImage: IMG.builtDefender,
    thumbnail: IMG.builtDefender,
    tagline: "The icon, reborn.",
    notes:
      "The new Defender platform is the most fitout-friendly heritage 4x4 on the market — generous roof load, accessible electrical architecture, and a thriving aftermarket.",
  },
  {
    id: "g-class",
    tier: "tier1",
    tierLabel: "Premium Heritage",
    make: "Mercedes-Benz",
    model: "G-Class",
    fullName: "Mercedes-Benz G-Class",
    years: ["2024", "2023", "2022", "2021"],
    variants: ["G400d", "G500", "G63 AMG", "G580 EQ"],
    basePrice: "$235,000 — $345,000",
    popularityRank: 2,
    status: "live",
    heroImage: IMG.builtGwagon,
    thumbnail: IMG.builtGwagon,
    tagline: "Engineered, then conquered.",
    notes:
      "The G-Class is the trophy purchase of the category. Buyers want fitouts that respect the silhouette — restraint matters more than maximalism.",
  },
  {
    id: "lc300",
    tier: "tier1",
    tierLabel: "Premium Heritage",
    make: "Toyota",
    model: "Land Cruiser 300",
    fullName: "Toyota Land Cruiser 300 Series",
    years: ["2024", "2023", "2022"],
    variants: ["GX", "GXL", "VX", "Sahara", "Sahara ZX", "GR Sport"],
    basePrice: "$95,000 — $148,000",
    popularityRank: 3,
    status: "live",
    heroImage: IMG.builtLandcruiser300,
    thumbnail: IMG.builtLandcruiser300,
    tagline: "The benchmark.",
    notes:
      "The 300 Series is the most heavily-fitted vehicle in Australia. Long aftermarket pedigree, vast parts ecosystem, and the most exhaustive comparison data available.",
  },
  {
    id: "lc250",
    tier: "tier1",
    tierLabel: "Premium Heritage",
    make: "Toyota",
    model: "Land Cruiser Prado 250",
    fullName: "Toyota Land Cruiser Prado 250 Series",
    years: ["2025", "2024"],
    variants: ["GX", "GXL", "VX", "Kakadu", "Altitude"],
    basePrice: "$72,500 — $99,990",
    popularityRank: 4,
    status: "comingSoon",
    thumbnail: IMG.builtLandcruiser300,
    tagline: "The next-gen workhorse.",
    notes: "Brand-new platform — fitout standards still being established by the Tier 1 outfitters.",
  },
  {
    id: "range-rover",
    tier: "tier1",
    tierLabel: "Premium Heritage",
    make: "Land Rover",
    model: "Range Rover",
    fullName: "Range Rover (L460)",
    years: ["2024", "2023", "2022"],
    variants: ["SE", "HSE", "Autobiography", "SV"],
    basePrice: "$245,000 — $420,000",
    popularityRank: 5,
    status: "comingSoon",
    heroImage: IMG.builtRangerover,
    thumbnail: IMG.builtRangerover,
    tagline: "Luxury, off-road.",
    notes:
      "The fitout philosophy here is restraint — discreet platforms, low-profile tents, no compromises on cabin luxury.",
  },
  {
    id: "grenadier",
    tier: "tier1",
    tierLabel: "Premium Heritage",
    make: "INEOS",
    model: "Grenadier",
    fullName: "INEOS Grenadier",
    years: ["2024", "2023"],
    variants: ["Utility Wagon", "Station Wagon", "Trialmaster", "Fieldmaster", "Quartermaster"],
    basePrice: "$110,000 — $180,000",
    popularityRank: 6,
    status: "live",
    heroImage: IMG.builtGrenadier,
    thumbnail: IMG.builtGrenadier,
    tagline: "Built for purpose.",
    notes:
      "Designed from day one for fitout — factory roof rails, accessible electrical, and a chassis that takes load. The thinking-buyer's choice.",
  },

  // TIER 2 — New-era / EV
  {
    id: "cybertruck",
    tier: "tier2",
    tierLabel: "New Era",
    make: "Tesla",
    model: "Cybertruck",
    fullName: "Tesla Cybertruck",
    years: ["2025", "2024"],
    variants: ["AWD", "Cyberbeast"],
    basePrice: "$180,000 — $260,000 (grey import)",
    popularityRank: 7,
    status: "comingSoon",
    heroImage: IMG.builtCybertruck,
    thumbnail: IMG.builtCybertruck,
    tagline: "Electrons over the horizon.",
    notes:
      "Onboard 240V/120V power changes the overland equation entirely — the camp kitchen runs from the truck. Fitout pioneers welcome.",
  },
  {
    id: "rivian-r1s",
    tier: "tier2",
    tierLabel: "New Era",
    make: "Rivian",
    model: "R1S",
    fullName: "Rivian R1S",
    years: ["2024", "2023"],
    variants: ["Dual Motor", "Tri Motor", "Quad Motor"],
    basePrice: "$200,000+ (grey import)",
    popularityRank: 8,
    status: "comingSoon",
    thumbnail: IMG.builtCybertruck,
    tagline: "Built for the unmarked road.",
    notes: "The first true EV designed with overland intent. Limited Australian presence — fitout is bespoke.",
  },
  {
    id: "model-x",
    tier: "tier2",
    tierLabel: "New Era",
    make: "Tesla",
    model: "Model X",
    fullName: "Tesla Model X",
    years: ["2024", "2023", "2022"],
    variants: ["Long Range", "Plaid"],
    basePrice: "$150,000 — $185,000",
    popularityRank: 9,
    status: "comingSoon",
    heroImage: IMG.builtModelX,
    thumbnail: IMG.builtModelX,
    tagline: "Soft-road overlanding.",
    notes:
      "Roof-load limits are tight — but with a sub-70kg low-profile RTT and a thoughtful platform, the X is a genuine glamping rig.",
  },
  {
    id: "lexus-gx",
    tier: "tier2",
    tierLabel: "New Era",
    make: "Lexus",
    model: "GX 550",
    fullName: "Lexus GX 550 Overtrail",
    years: ["2025", "2024"],
    variants: ["Luxury", "Sports Luxury", "Overtrail"],
    basePrice: "$120,000 — $138,000",
    popularityRank: 10,
    status: "comingSoon",
    thumbnail: IMG.builtLandcruiser300,
    tagline: "Toyota DNA, Lexus polish.",
    notes:
      "Body-on-frame, twin-turbo V6, factory Overtrail spec — the GX is the sleeper Tier 2 platform. Watch this space.",
  },

  // TIER 3 — Premium common
  {
    id: "ranger",
    tier: "tier3",
    tierLabel: "Premium Common",
    make: "Ford",
    model: "Ranger (Next-Gen)",
    fullName: "Ford Ranger Next-Gen",
    years: ["2025", "2024", "2023", "2022"],
    variants: ["XLT", "Sport", "Wildtrak", "Wildtrak X", "Platinum", "Raptor"],
    basePrice: "$50,000 — $90,000",
    popularityRank: 11,
    status: "live",
    heroImage: IMG.builtRanger,
    thumbnail: IMG.builtRanger,
    tagline: "The new benchmark ute.",
    notes:
      "The next-gen Ranger has rapidly become the most-modified ute in Australia — and the Alu-Cab Canopy Camper changes the conversation entirely.",
  },
  {
    id: "amarok",
    tier: "tier3",
    tierLabel: "Premium Common",
    make: "Volkswagen",
    model: "Amarok",
    fullName: "Volkswagen Amarok (Gen 2)",
    years: ["2024", "2023"],
    variants: ["Life", "Style", "PanAmericana", "Aventura"],
    basePrice: "$60,000 — $85,000",
    popularityRank: 12,
    status: "comingSoon",
    thumbnail: IMG.builtRanger,
    tagline: "Ranger underneath, Amarok on top.",
    notes: "Shares its bones with the Ranger — most fitout solutions cross-fit with minor adaptation.",
  },
  {
    id: "hilux",
    tier: "tier3",
    tierLabel: "Premium Common",
    make: "Toyota",
    model: "HiLux",
    fullName: "Toyota HiLux",
    years: ["2024", "2023", "2022"],
    variants: ["SR5", "Rogue", "GR Sport"],
    basePrice: "$45,000 — $75,000",
    popularityRank: 13,
    status: "comingSoon",
    heroImage: IMG.builtHilux,
    thumbnail: IMG.builtHilux,
    tagline: "The Australian default.",
    notes: "The widest aftermarket support of any Tier 3 ute. Whatever you want fitted, someone has done it.",
  },
  {
    id: "d-max",
    tier: "tier3",
    tierLabel: "Premium Common",
    make: "Isuzu",
    model: "D-Max",
    fullName: "Isuzu D-Max",
    years: ["2024", "2023"],
    variants: ["LS-U", "X-Terrain", "Blade"],
    basePrice: "$48,000 — $73,000",
    popularityRank: 14,
    status: "comingSoon",
    thumbnail: IMG.builtHilux,
    tagline: "Quiet capability.",
    notes: "Increasingly chosen by buyers who want a HiLux-class ute without the HiLux markup.",
  },
];

// ────────────────────────────────────────────────────────────────────────
// CATEGORIES
// ────────────────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  {
    id: "rtt",
    name: "Rooftop Tents & Canopy Campers",
    shortName: "Rooftop tents",
    description:
      "Hardshell pop-ups, wedge tents, and full canopy campers — the centrepiece of every overland build.",
    iconKey: "tent",
    averageInstallDays: 9,
    averageProfitPerInstall: 9000,
    status: "live",
  },
  {
    id: "drawer",
    name: "Drawer Systems & Cargo",
    shortName: "Drawer systems",
    description:
      "Modular rear storage — drawers, slides, water tanks, and load-floor systems that turn the back of your rig into a base camp.",
    iconKey: "drawer",
    averageInstallDays: 5,
    averageProfitPerInstall: 4500,
    status: "live",
  },
  {
    id: "fridge",
    name: "Fridges & Slide-Out Kitchens",
    shortName: "Fridges & kitchens",
    description: "12V dual-zone fridges, slide-out kitchens, and integrated cooktops.",
    iconKey: "fridge",
    averageInstallDays: 1,
    averageProfitPerInstall: 1800,
    status: "live",
  },
  {
    id: "electrical",
    name: "Electrical & Solar",
    shortName: "Electrical & solar",
    description:
      "Lithium house batteries, DC-DC chargers, inverters, and roof-mounted solar — the hidden backbone of any serious build.",
    iconKey: "battery",
    averageInstallDays: 4,
    averageProfitPerInstall: 5500,
    status: "live",
  },
  {
    id: "awning",
    name: "Awnings & Living Space",
    shortName: "Awnings",
    description: "270° awnings, walls, and shelter systems that extend your camp footprint.",
    iconKey: "awning",
    averageInstallDays: 1,
    averageProfitPerInstall: 1100,
    status: "live",
  },
  {
    id: "protection",
    name: "Bull Bars, Sliders & Protection",
    shortName: "Bull bars & protection",
    description: "Front bars, recovery points, rock sliders, underbody armour, and rear protection.",
    iconKey: "shield",
    averageInstallDays: 3,
    averageProfitPerInstall: 3500,
    status: "live",
  },
];

// ────────────────────────────────────────────────────────────────────────
// ROOFTOP TENTS — MVP catalogue
// ────────────────────────────────────────────────────────────────────────

export const ROOFTOP_TENTS: RoofTent[] = [
  {
    id: "alucab-gen31",
    brand: "Alu-Cab",
    model: "Gen 3.1 Hardshell",
    type: "Hardshell pop-up",
    origin: "South Africa (assembled & supplied AU)",
    weightKg: 80,
    sleeps: 2,
    setupTimeMinutes: 2,
    priceMinAud: 7800,
    priceMaxAud: 9200,
    installCostAud: 1200,
    installDays: 9,
    editorScore: 9.4,
    ovrlndPick: true,
    pros: [
      "Vertical-walled hardshell maximises usable interior space",
      "Sub-2-minute setup; sub-1-minute pack-down with practice",
      "Aluminium shell takes a roof platform on top — fit a solar panel or recovery tracks",
      "Industry-leading sealant tolerance and longevity (90% of Tier 1 outfitters specify it)",
    ],
    cons: [
      "Premium price point — sits at the top of the market",
      "9-day cure time required after install (vehicle off-road)",
      "Heavy at 80kg — confirm dynamic roof load on softer SUVs",
    ],
    bestFor: "Couples doing 30+ nights/year who want a tent that lasts a decade.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.tentDetail,
    shortReview:
      "If money is no object, this is the answer. The Gen 3.1 sets the benchmark for hardshell pop-ups, and the install network in Australia (Adventure Merchants, MOVA) is the most experienced in the country.",
    expertReviews: [
      {
        source: "Pat Callinan's 4x4 Adventures",
        quote: "The Alu-Cab is the Toyota Land Cruiser of rooftop tents — overbuilt, expensive, and outlasts you.",
      },
      {
        source: "Unsealed 4x4",
        quote: "Setup time is a genuine 90 seconds. We've owned ours four years and it still seals like new.",
      },
    ],
  },
  {
    id: "james-baroud-evolution",
    brand: "James Baroud",
    model: "Evasion Evolution",
    type: "Hardshell wedge",
    origin: "Portugal",
    weightKg: 75,
    sleeps: 2,
    setupTimeMinutes: 1,
    priceMinAud: 8200,
    priceMaxAud: 11500,
    installCostAud: 950,
    installDays: 7,
    editorScore: 9.2,
    ovrlndPick: false,
    pros: [
      "Fastest setup on the market — single gas-strut deployment",
      "Built-in solar-powered fan and interior LED",
      "European fit and finish; heavy-duty ripstop canvas",
      "Lifetime warranty on the shell",
    ],
    cons: [
      "Wedge geometry restricts headroom at the foot end",
      "Highest price ceiling in the category",
      "Smaller AU dealer network than Alu-Cab",
    ],
    bestFor: "Solo travellers and couples who prize speed of setup above all else.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.tentDetail,
    shortReview:
      "The European answer to the Alu-Cab. Faster to deploy, lighter, and arguably better-finished — but the wedge profile is a personal preference, and the price ceiling is high.",
    expertReviews: [
      {
        source: "4WD Action",
        quote: "If you camp solo and pack early, this is the fastest tent on the market — full stop.",
      },
    ],
  },
  {
    id: "23zero-kabari",
    brand: "23Zero",
    model: "Kabari 1.6 Hardshell",
    type: "Hardshell pop-up",
    origin: "Australia (designed) / China (manufactured)",
    weightKg: 68,
    sleeps: 2,
    setupTimeMinutes: 3,
    priceMinAud: 4200,
    priceMaxAud: 5400,
    installCostAud: 850,
    installDays: 7,
    editorScore: 8.4,
    ovrlndPick: false,
    pros: [
      "Roughly half the price of the premium European/SA brands",
      "Lighter than the Alu-Cab — better for soft-roof Tier 2 vehicles",
      "Australian-designed with local warranty support",
      "Includes blockout liner and LED kit standard",
    ],
    cons: [
      "Sealant longevity is shorter — expect re-sealing every 3–4 years",
      "Hinges and latches not as overbuilt as premium tier",
      "Some buyers report inconsistent QC depending on production batch",
    ],
    bestFor: "Buyers who want premium hardshell convenience at a mid-tier price point.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.tentDetail,
    shortReview:
      "The smartest mid-tier choice. You give up some longevity and the Tier 1 cachet, but you save $4,000+ — money you can spend on a drawer system or fridge.",
    expertReviews: [
      {
        source: "Loaded 4x4",
        quote: "For the money, nothing else in this format comes close.",
      },
    ],
  },
  {
    id: "ikamper-skycamp",
    brand: "iKamper",
    model: "Skycamp 3.0 Mini",
    type: "Hardshell clamshell",
    origin: "South Korea",
    weightKg: 72,
    sleeps: 2,
    setupTimeMinutes: 1,
    priceMinAud: 5800,
    priceMaxAud: 6900,
    installCostAud: 900,
    installDays: 7,
    editorScore: 8.7,
    ovrlndPick: false,
    pros: [
      "Clamshell profile gives more usable interior than a wedge",
      "Premium honeycomb fibreglass shell",
      "Cult following globally — strong resale value",
      "Quietest in high winds of any tent tested",
    ],
    cons: [
      "Limited AU dealer footprint",
      "Higher price than 23Zero with similar weight",
      "Clamshell silhouette taller than a wedge — affects garage clearance",
    ],
    bestFor: "Aesthetics-focused buyers who do mixed-terrain (not extreme outback).",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.tentDetail,
    shortReview:
      "The aesthetic-first hardshell. Looks beautiful on a Defender or Cybertruck, performs as well as the Alu-Cab in fair weather, and holds resale value better than anything in the category.",
    expertReviews: [
      {
        source: "Expedition Portal",
        quote: "Build quality you can feel the first time you open the latches.",
      },
    ],
  },
  {
    id: "bushco-stargazer",
    brand: "The Bush Company",
    model: "Stargazer Hardshell",
    type: "Hardshell pop-up",
    origin: "Australia (designed) / Vietnam (manufactured)",
    weightKg: 78,
    sleeps: 2,
    setupTimeMinutes: 2,
    priceMinAud: 5400,
    priceMaxAud: 6600,
    installCostAud: 850,
    installDays: 7,
    editorScore: 8.6,
    ovrlndPick: false,
    pros: [
      "Largest mesh skylight in the category — true stargazing",
      "Strongest Australian dealer network outside of the premium tier",
      "Great mid-price compromise on quality vs price",
      "Solid local warranty service",
    ],
    cons: [
      "Heavier than 23Zero or iKamper",
      "Skylight zip is a wear point in extreme dust",
      "Not as well-sealed as Alu-Cab in driving rain",
    ],
    bestFor: "Buyers who camp under clear skies more than under canvas — the open-air sleep experience.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.tentDetail,
    shortReview:
      "The most uniquely Australian RTT on the market. Buy it for the skylight; live with the small compromises.",
    expertReviews: [
      {
        source: "4WD Action",
        quote: "The skylight alone changes how you camp.",
      },
    ],
  },
  {
    id: "alucab-canopy-camper",
    brand: "Alu-Cab",
    model: "Canopy Camper",
    type: "Hardshell wedge",
    origin: "South Africa",
    weightKg: 320,
    sleeps: 2,
    setupTimeMinutes: 3,
    priceMinAud: 28000,
    priceMaxAud: 38000,
    installCostAud: 4500,
    installDays: 14,
    editorScore: 9.6,
    ovrlndPick: true,
    pros: [
      "Effectively a small caravan that bolts to your tray — full-height pop-up living space",
      "Integrated 12V system, LED, optional kitchen and shower",
      "Transforms a Tier 3 ute (Ranger, Amarok, HiLux) into a full overland touring rig",
      "Aluminium shell — corrosion-resistant for coastal and salt-pan use",
    ],
    cons: [
      "$30k+ all-in — this is a major commitment",
      "14-day install due to wiring, sealant, and tray reinforcement",
      "Reduces ute payload meaningfully — check GVM after fitment",
    ],
    bestFor: "Tier 3 ute owners who want caravan-grade comfort without the caravan.",
    fitsTiers: ["tier3"],
    image: IMG.heroRanger,
    shortReview:
      "The product that's redefining what a ute can be. If you're buying a Ranger or Amarok specifically to overland, this is the headline act.",
    expertReviews: [
      {
        source: "Snowys Outdoors",
        quote: "We've never seen a single product transform a vehicle's capability this dramatically.",
      },
      {
        source: "Pat Callinan's 4x4 Adventures",
        quote: "The Canopy Camper is what every other tray-back camper aspires to be.",
      },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────
// HELPERS
// ────────────────────────────────────────────────────────────────────────

export const getVehicleById = (id: string) => VEHICLES.find((v) => v.id === id);
export const getVehiclesByTier = (tier: Tier) => VEHICLES.filter((v) => v.tier === tier);
export const getCategoryById = (id: string) => CATEGORIES.find((c) => c.id === id);
export const getRTTsForVehicle = (vehicleId: string) => {
  const vehicle = getVehicleById(vehicleId);
  if (!vehicle) return [];
  return ROOFTOP_TENTS.filter((t) => t.fitsTiers.includes(vehicle.tier));
};

export const TIER_META: Record<Tier, { label: string; description: string; ordinal: string }> = {
  tier1: {
    label: "Premium Heritage",
    description: "Iconic premium 4x4s — the trophy purchases that define the category.",
    ordinal: "01",
  },
  tier2: {
    label: "New Era",
    description: "Electric and next-gen platforms reshaping what overland means.",
    ordinal: "02",
  },
  tier3: {
    label: "Premium Common",
    description: "The premium utes Australians actually buy in volume — most-modified, most-discussed.",
    ordinal: "03",
  },
};

// ────────────────────────────────────────────────────────────────────────
// GENERIC PRODUCT TYPE — used for awnings / electrical / fridges / drawers
// (RTTs keep their richer schema; new categories use this lighter, uniform shape.)
// ────────────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  categoryId: "awning" | "electrical" | "fridge" | "drawer" | "protection";
  brand: string;
  model: string;
  origin: string;
  // Universal display fields
  headlineSpec: string; // e.g. "270° free-standing · 2.5m × 2.5m"
  priceMinAud: number;
  priceMaxAud: number;
  installCostAud: number;
  installDays: number;
  editorScore: number; // /10
  ovrlndPick: boolean;
  pros: string[];
  cons: string[];
  bestFor: string;
  fitsTiers: Tier[];
  image: string;
  shortReview: string;
  expertReviews: { source: string; quote: string }[];
}

// ────────────────────────────────────────────────────────────────────────
// AWNINGS — five brands (Alu-Cab partner-favoured)
// ────────────────────────────────────────────────────────────────────────

export const AWNINGS: Product[] = [
  {
    id: "alucab-shadow-awn",
    categoryId: "awning",
    brand: "Alu-Cab",
    model: "Shadow Awn 270 Gen-3",
    origin: "South Africa",
    headlineSpec: "270° wraparound · 2.5m radius · no poles",
    priceMinAud: 2400,
    priceMaxAud: 2900,
    installCostAud: 350,
    installDays: 1,
    editorScore: 9.3,
    ovrlndPick: true,
    pros: [
      "True self-supporting 270° wrap — zero ground poles required",
      "Aluminium support arms (not steel) — lighter and corrosion-resistant for coastal use",
      "Direct integration with Alu-Cab roof platforms and Gen 3.1 tent",
      "Best-in-class wind tolerance among free-standing 270s",
    ],
    cons: [
      "Premium price point",
      "Heavy at 28kg — plan dynamic roof load carefully on Tier 2 EVs",
    ],
    bestFor: "Anyone building an Alu-Cab system end-to-end, or needing a no-poles awning that survives 40-knot gusts.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtDefender,
    shortReview:
      "The benchmark 270° awning. If you've already chosen the Alu-Cab Gen 3.1 tent, this is the only awning to consider — they were designed to live together.",
    expertReviews: [
      { source: "Unsealed 4x4", quote: "Free-standing 270s changed how we camp. Alu-Cab perfected the format." },
    ],
  },
  {
    id: "23zero-peregrine-270",
    categoryId: "awning",
    brand: "23Zero",
    model: "Peregrine 270 Free-Standing",
    origin: "Australia (designed) / China (manufactured)",
    headlineSpec: "270° wraparound · 2.5m radius · poled corners",
    priceMinAud: 1450,
    priceMaxAud: 1850,
    installCostAud: 320,
    installDays: 1,
    editorScore: 8.5,
    ovrlndPick: false,
    pros: [
      "Roughly half the price of premium 270s",
      "Lightweight at 21kg — friendly for soft-roof Tier 2 vehicles",
      "Australian warranty support and dealer network",
      "Includes LED rope-light tracking standard",
    ],
    cons: [
      "Not fully free-standing — corner poles required in wind",
      "Steel support arms — watch for coastal corrosion",
      "Stitching on guy points is the first wear point",
    ],
    bestFor: "Smart-money buyers who want the 270° lifestyle without the premium price.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtRanger,
    shortReview:
      "The mid-tier sweet-spot. You give up some wind tolerance and the steel-vs-aluminium argument, but you save $1,000+.",
    expertReviews: [
      { source: "Loaded 4x4", quote: "For under two grand, the Peregrine is hard to argue with." },
    ],
  },
  {
    id: "bushco-270xt",
    categoryId: "awning",
    brand: "The Bush Company",
    model: "270XT MAX Mk2",
    origin: "Australia (designed) / Vietnam (manufactured)",
    headlineSpec: "270° wraparound · 2.5m radius · poles included",
    priceMinAud: 1850,
    priceMaxAud: 2200,
    installCostAud: 320,
    installDays: 1,
    editorScore: 8.7,
    ovrlndPick: false,
    pros: [
      "Heavy-duty ripstop poly-cotton blend canvas",
      "Premium-grade aluminium support arms",
      "Modular wall add-ons available (full-room conversion)",
      "Strong AU warranty and parts support",
    ],
    cons: [
      "Heaviest in the test at 30kg",
      "Premium-tier price without a clear premium-tier feature lead",
    ],
    bestFor: "Buyers who want the wall-and-room expansion ecosystem more than the awning itself.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtGwagon,
    shortReview:
      "A genuinely good awning let down only by being squeezed between Alu-Cab above and 23Zero below. Pick it for the room conversion ecosystem.",
    expertReviews: [
      { source: "4WD Action", quote: "With the wall kit, this stops being an awning and becomes a room." },
    ],
  },
  {
    id: "arb-awning-2500",
    categoryId: "awning",
    brand: "ARB",
    model: "Awning 2500 (Linear)",
    origin: "Australia",
    headlineSpec: "Linear pull-out · 2.5m × 2.5m · poled",
    priceMinAud: 480,
    priceMaxAud: 720,
    installCostAud: 250,
    installDays: 1,
    editorScore: 7.6,
    ovrlndPick: false,
    pros: [
      "Cheapest credible awning on the market",
      "Universal mounting — fits any roof rack",
      "Rebuildable, fully serviceable in any ARB store",
      "Bombproof reputation — these last decades",
    ],
    cons: [
      "Linear (not 270°) — only covers one side of the vehicle",
      "Requires poles for any wind",
      "Slow setup compared to a 270°",
    ],
    bestFor: "Budget-conscious buyers, or anyone who already has an ARB-everything build.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtHilux,
    shortReview:
      "The Toyota HiLux of awnings — undefeatable, unsexy, and a third of the price. If you don't need 270° coverage, this is the value pick.",
    expertReviews: [
      { source: "Pat Callinan's 4x4 Adventures", quote: "Twenty years on the market and still the most-fitted awning in the country." },
    ],
  },
  {
    id: "oztent-foxwing",
    categoryId: "awning",
    brand: "Oztent",
    model: "Foxwing 270°",
    origin: "Australia",
    headlineSpec: "270° wraparound · 2.4m radius · 8 ground poles",
    priceMinAud: 850,
    priceMaxAud: 1100,
    installCostAud: 280,
    installDays: 1,
    editorScore: 7.8,
    ovrlndPick: false,
    pros: [
      "The original 270° awning that started the category in Australia",
      "Excellent canvas weight — handles serious weather",
      "Cheaper than every free-standing competitor",
      "Almost every camping store stocks parts",
    ],
    cons: [
      "Requires all 8 ground poles every setup — slow",
      "Not free-standing — useless without ground anchoring",
      "Older swing-arm design vs modern free-standing 270s",
    ],
    bestFor: "Buyers who camp on soft ground (always pole-able) and don't mind the 5-minute setup.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtRangerover,
    shortReview:
      "The category originator. Still a solid product, but the format is now a generation behind the free-standing competition.",
    expertReviews: [
      { source: "Snowys Outdoors", quote: "For half the price of a free-standing 270, the Foxwing still earns its place." },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────
// 12V/240V ELECTRICAL — five systems
// ────────────────────────────────────────────────────────────────────────

export const ELECTRICAL: Product[] = [
  {
    id: "redarc-managerpro30",
    categoryId: "electrical",
    brand: "REDARC",
    model: "Manager30 + RedVision Display",
    origin: "Australia",
    headlineSpec: "30A DC-DC + MPPT + AC charger · single-display control",
    priceMinAud: 2200,
    priceMaxAud: 2700,
    installCostAud: 1800,
    installDays: 3,
    editorScore: 9.4,
    ovrlndPick: true,
    pros: [
      "All-in-one battery management — DC-DC, solar MPPT and 240V charger in one unit",
      "RedVision colour display gives true real-time amp/watt visibility",
      "Australian-engineered, Lonsdale SA — best AU warranty network in the category",
      "Pairs cleanly with any lithium house bank up to 200Ah",
    ],
    cons: [
      "Inverter is sold separately — add ~$1,200 for a REDARC pure-sine 2000W",
      "Larger physical footprint than a Victron multi",
    ],
    bestFor: "Buyers who want one branded ecosystem with a single screen and Australian-side support.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.installDetail,
    shortReview:
      "The category default for premium Australian fitouts. Pay the premium for the integration and the warranty network — you'll never regret it.",
    expertReviews: [
      { source: "Unsealed 4x4", quote: "REDARC + RedVision is what every other system is benchmarked against in Australia." },
    ],
  },
  {
    id: "victron-multiplus-2000",
    categoryId: "electrical",
    brand: "Victron Energy",
    model: "MultiPlus 12/2000 + Cerbo GX",
    origin: "Netherlands",
    headlineSpec: "2000W inverter/charger combo · cloud monitoring · pro-grade",
    priceMinAud: 2400,
    priceMaxAud: 3100,
    installCostAud: 1900,
    installDays: 3,
    editorScore: 9.2,
    ovrlndPick: false,
    pros: [
      "Inverter and 240V charger in one box — clean install footprint",
      "Cerbo GX cloud monitoring is the gold standard — view your rig from anywhere",
      "Massive global community and DIY tuneability",
      "Best inverter sine-wave quality in the category",
    ],
    cons: [
      "Steeper learning curve — needs a fitter who knows VictronConnect deeply",
      "AU warranty handled via importers, not direct",
      "Solar MPPT and DC-DC are separate Victron units (not one box)",
    ],
    bestFor: "Tech-curious buyers who want the most data, the best inverter, and global parts compatibility.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.installDetail,
    shortReview:
      "The pro-grade choice. If your fitter knows Victron, you'll get a system that out-performs and out-lives anything in the category. If they don't, choose REDARC.",
    expertReviews: [
      { source: "4WD Action", quote: "Once you've used Cerbo monitoring, you can't go back to a basic shunt." },
    ],
  },
  {
    id: "enerdrive-epower-100",
    categoryId: "electrical",
    brand: "Enerdrive",
    model: "ePOWER DC-DC 40A + AC 40A + 200Ah B-TEC",
    origin: "Australia (designed) / China (manufactured)",
    headlineSpec: "40A DC-DC + 40A AC + 200Ah lithium house bank kit",
    priceMinAud: 2800,
    priceMaxAud: 3400,
    installCostAud: 1600,
    installDays: 3,
    editorScore: 8.9,
    ovrlndPick: false,
    pros: [
      "Comes as a complete kit — chargers + lithium battery in one purchase",
      "40A DC-DC charges fast on long drives",
      "B-TEC lithium has a strong AU warranty and replaceable cell architecture",
      "Strong dealer footprint in QLD/NSW",
    ],
    cons: [
      "Display option is plain compared to RedVision/Cerbo",
      "Inverter is a separate purchase",
      "Brand cachet sits below REDARC in premium-fitter eyes",
    ],
    bestFor: "Buyers who want a complete AU-supported lithium kit at a slightly lower price than REDARC.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.installDetail,
    shortReview:
      "Smart packaging at a smart price. You give up the screen polish and the cachet, but you get a complete Australian-supported lithium system for less.",
    expertReviews: [
      { source: "Loaded 4x4", quote: "As a kit purchase, Enerdrive is the easiest system to scope and quote." },
    ],
  },
  {
    id: "projecta-idc25",
    categoryId: "electrical",
    brand: "Projecta",
    model: "IDC25X DC-DC + Solar",
    origin: "Australia (designed) / China (manufactured)",
    headlineSpec: "25A DC-DC + MPPT solar input · entry-grade",
    priceMinAud: 480,
    priceMaxAud: 620,
    installCostAud: 800,
    installDays: 1,
    editorScore: 7.4,
    ovrlndPick: false,
    pros: [
      "Sub-$700 entry into managed dual-battery charging",
      "Includes solar MPPT input — true two-source",
      "Sold in every Supercheap and Repco — no specialist fitter required",
      "Adequate for a single fridge + LED lighting load",
    ],
    cons: [
      "25A is undersized for serious lithium banks (>100Ah)",
      "No 240V charger — needs a separate AC charger",
      "No display — relies on a basic shunt",
    ],
    bestFor: "Tier 3 ute buyers running a single fridge, basic LED setup, and ~100Ah AGM/lithium bank.",
    fitsTiers: ["tier3"],
    image: IMG.installDetail,
    shortReview:
      "The honest entry-level option. If you only need to keep a fridge alive over a weekend, this is enough. Anything more and you'll outgrow it within a year.",
    expertReviews: [
      { source: "Pat Callinan's 4x4 Adventures", quote: "For a basic ute build, the IDC25X still earns its keep." },
    ],
  },
  {
    id: "safiery-prime-200",
    categoryId: "electrical",
    brand: "Safiery",
    model: "Prime 200 Lithium System",
    origin: "Australia",
    headlineSpec: "200Ah lithium + integrated charger + Bluetooth monitoring",
    priceMinAud: 3200,
    priceMaxAud: 3900,
    installCostAud: 1700,
    installDays: 3,
    editorScore: 8.6,
    ovrlndPick: false,
    pros: [
      "Specialist Australian lithium house-bank brand favoured by motorhome converters",
      "Cell-level diagnostics via Bluetooth",
      "Sealed water-resistant case — handles canopy/tray dust and moisture",
      "Best cycle-life claims in the AU lithium category",
    ],
    cons: [
      "Smaller dealer network than REDARC or Enerdrive",
      "Premium pricing",
      "Less integration with third-party DC-DC chargers",
    ],
    bestFor: "Caravan-grade buyers who plan extended (week+) off-grid stays.",
    fitsTiers: ["tier1", "tier3"],
    image: IMG.installDetail,
    shortReview:
      "A specialist's choice. If you're building a true off-grid touring rig with extended remote stays, Safiery's lithium chemistry and monitoring are best-in-class.",
    expertReviews: [
      { source: "Caravan World", quote: "In our long-term lithium tests, Safiery has held capacity better than any other AU brand." },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────
// FRIDGES & SLIDE-OUT KITCHENS — five units
// ────────────────────────────────────────────────────────────────────────

export const FRIDGES: Product[] = [
  {
    id: "dometic-cfx3-75dz",
    categoryId: "fridge",
    brand: "Dometic",
    model: "CFX3 75DZ Dual-Zone",
    origin: "Sweden (designed) / China (manufactured)",
    headlineSpec: "75L dual-zone · -22°C · WiFi/Bluetooth",
    priceMinAud: 1850,
    priceMaxAud: 2150,
    installCostAud: 380,
    installDays: 1,
    editorScore: 9.2,
    ovrlndPick: true,
    pros: [
      "Dual-zone — fridge one side, freezer the other, independent temps",
      "App-controlled with full remote temp/voltage monitoring",
      "Industry-leading low-voltage protection profile (saves your starter)",
      "Strong AU warranty and service network via Dometic dealers",
    ],
    cons: [
      "Heavy at 30kg empty — confirm slide load rating",
      "Premium price",
      "Lid hinge is a known wear point on heavy use",
    ],
    bestFor: "Couples and families who want one fridge to do everything for trips of 3+ days.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtLandcruiser300,
    shortReview:
      "The category default. Dual-zone is the feature that changes how you camp, and the CFX3's app integration is genuinely useful — not gimmick.",
    expertReviews: [
      { source: "Pat Callinan's 4x4 Adventures", quote: "The CFX3 75DZ is the fridge we recommend more than any other." },
    ],
  },
  {
    id: "arb-zero-73q",
    categoryId: "fridge",
    brand: "ARB",
    model: "Zero 73Q Dual-Zone",
    origin: "Australia (designed) / China (manufactured)",
    headlineSpec: "73L dual-zone · -22°C · steel cabinet",
    priceMinAud: 1950,
    priceMaxAud: 2250,
    installCostAud: 380,
    installDays: 1,
    editorScore: 9.0,
    ovrlndPick: false,
    pros: [
      "Stainless steel exterior — toughest cabinet in the category",
      "Genuinely Australian-engineered cooling profile (cycles less in extreme heat)",
      "Best-in-class door seal architecture — lowest reported failure rate",
      "Universal ARB dealer and warranty network",
    ],
    cons: [
      "Heavier than the CFX3",
      "App is functional but uglier than Dometic's",
      "Stainless cabinet shows scratches more visibly",
    ],
    bestFor: "Outback and tropical-heat travellers who prioritise reliability and cooling consistency over app polish.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtRanger,
    shortReview:
      "The Australian counterweight to Dometic. We've put both through 45°C summer testing — ARB cycles less and pulls down faster. App is the only real loss.",
    expertReviews: [
      { source: "4WD Action", quote: "In genuine outback heat, the Zero 73Q is the best-performing fridge we've tested." },
    ],
  },
  {
    id: "national-luna-legacy-50",
    categoryId: "fridge",
    brand: "National Luna",
    model: "Legacy 50L Smart QC",
    origin: "South Africa",
    headlineSpec: "50L single-zone · stainless · twin-control panel",
    priceMinAud: 2100,
    priceMaxAud: 2400,
    installCostAud: 380,
    installDays: 1,
    editorScore: 8.8,
    ovrlndPick: false,
    pros: [
      "South African overland heritage — built for serious expedition use",
      "Best-built compressor mount in the category — survives corrugations",
      "Twin-control panel rare on a 50L unit",
      "Cult resale value",
    ],
    cons: [
      "Single-zone only at this size — buy the 80L for dual",
      "Premium price for a 50L",
      "Smaller AU dealer network than ARB or Dometic",
    ],
    bestFor: "Solo overlanders or couples doing genuine expedition travel where reliability outweighs feature polish.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtGrenadier,
    shortReview:
      "The expedition-grade choice. You're paying for the build, not the screen — and on the worst tracks in Australia, this is the fridge that doesn't quit.",
    expertReviews: [
      { source: "Expedition Portal", quote: "National Luna fridges have the best survival rate on multi-month African expeditions of any unit we've tested." },
    ],
  },
  {
    id: "engel-mr040",
    categoryId: "fridge",
    brand: "Engel",
    model: "MR040F-CS 38L",
    origin: "Japan (Sawafuji compressor) / China (assembly)",
    headlineSpec: "38L single-zone · iconic swing-motor compressor",
    priceMinAud: 950,
    priceMaxAud: 1150,
    installCostAud: 280,
    installDays: 1,
    editorScore: 8.5,
    ovrlndPick: false,
    pros: [
      "Sawafuji swing-motor compressor — 30+ year service life common",
      "Lowest power draw in the category for its size",
      "Indestructible reputation in the Australian touring market",
      "Great resale value",
    ],
    cons: [
      "Single-zone, no app, no display fanfare",
      "Smaller capacity than CFX3/ARB Zero at the same price",
      "Older industrial aesthetic",
    ],
    bestFor: "Buyers who care about the compressor more than the screen.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtHilux,
    shortReview:
      "The swing-motor is genuinely a generational product. If you want one fridge to outlast the car, this is it.",
    expertReviews: [
      { source: "Caravan World", quote: "Three decades on, Engel still sets the durability benchmark." },
    ],
  },
  {
    id: "bushman-dc85x",
    categoryId: "fridge",
    brand: "Bushman",
    model: "DC85-X Upright",
    origin: "Australia (designed) / China (manufactured)",
    headlineSpec: "85L upright · vertical door · Danfoss compressor",
    priceMinAud: 1850,
    priceMaxAud: 2200,
    installCostAud: 420,
    installDays: 1,
    editorScore: 8.6,
    ovrlndPick: false,
    pros: [
      "Upright (vertical) door geometry — fits behind drawer towers like a household fridge",
      "Largest capacity in this comparison",
      "Perfect for Tier 3 ute canopies where chest fridges don't fit ergonomically",
      "Genuinely Australian-designed for AU canopy interior dimensions",
    ],
    cons: [
      "Upright design less efficient than chest in extreme heat",
      "Door swing requires planning in canopy installs",
      "Smaller dealer network",
    ],
    bestFor: "Ranger / Amarok / HiLux owners building a canopy camper where headroom and door access matter.",
    fitsTiers: ["tier3"],
    image: IMG.builtRanger,
    shortReview:
      "The upright format is genuinely different. If you're fitting out an Alu-Cab Canopy Camper or similar tray-back rig, this is the fridge to spec.",
    expertReviews: [
      { source: "Snowys Outdoors", quote: "For canopy installs, an upright fridge is a massive ergonomic upgrade." },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────
// DRAWER SYSTEMS — five brands
// ────────────────────────────────────────────────────────────────────────

export const DRAWERS: Product[] = [
  {
    id: "msa-4x4-ds",
    categoryId: "drawer",
    brand: "MSA 4x4",
    model: "Double Drawer System (custom-fit)",
    origin: "Australia",
    headlineSpec: "Twin drawer + wing kit · vehicle-specific tooling",
    priceMinAud: 2400,
    priceMaxAud: 3400,
    installCostAud: 950,
    installDays: 2,
    editorScore: 9.2,
    ovrlndPick: true,
    pros: [
      "True vehicle-specific tooling — drawers fit the rear wells like factory parts",
      "Hardwood & carpet-finished tops feel furniture-grade",
      "75kg-rated full-extension slides — hold any fridge load",
      "Strong national dealer network and AU warranty",
    ],
    cons: [
      "Premium pricing",
      "Vehicle-specific means resale only to same-platform owner",
      "Hardwood tops add weight",
    ],
    bestFor: "Buyers who want the most-finished, factory-look drawer system money can buy.",
    fitsTiers: ["tier1", "tier3"],
    image: IMG.builtLandcruiser300,
    shortReview:
      "The premium default for Land Cruiser, Defender and Ranger fitouts. You pay for the tooling and the finish — and they're worth it.",
    expertReviews: [
      { source: "Unsealed 4x4", quote: "MSA drawers feel like part of the car, not an aftermarket box." },
    ],
  },
  {
    id: "drifta-dst",
    categoryId: "drawer",
    brand: "Drifta",
    model: "DST Drawer System",
    origin: "Australia (Gloucester, NSW)",
    headlineSpec: "Plywood/marine-ply twin drawer · custom-fit",
    priceMinAud: 2200,
    priceMaxAud: 3000,
    installCostAud: 850,
    installDays: 2,
    editorScore: 9.0,
    ovrlndPick: false,
    pros: [
      "Made in NSW — hand-built marine-ply construction",
      "Cult Australian following — every Drifta is signed by the builder",
      "Lifetime warranty on construction",
      "Lighter than equivalent steel-frame systems",
    ],
    cons: [
      "Lead times can stretch 6–12 weeks",
      "Marine ply requires sealing maintenance over a 10+ year life",
      "Less factory-finished aesthetic than MSA",
    ],
    bestFor: "Heritage-minded buyers who want a hand-built piece of Australian craft in their car.",
    fitsTiers: ["tier1", "tier3"],
    image: IMG.builtDefender,
    shortReview:
      "The artisan choice. If you wait the lead time, you get a system that feels like furniture and lasts decades.",
    expertReviews: [
      { source: "4WD Action", quote: "Drifta builds the most beautiful drawer systems in Australia." },
    ],
  },
  {
    id: "arb-outback-solutions",
    categoryId: "drawer",
    brand: "ARB",
    model: "Outback Solutions Modular Drawer",
    origin: "Australia",
    headlineSpec: "Modular twin drawer + roller floor · widely stocked",
    priceMinAud: 1900,
    priceMaxAud: 2700,
    installCostAud: 800,
    installDays: 2,
    editorScore: 8.5,
    ovrlndPick: false,
    pros: [
      "Available in every ARB store — fast turnaround, no wait",
      "Modular system — start with one drawer, add later",
      "Strong steel framework — heaviest payload rating in this comparison",
      "Universal ARB warranty network",
    ],
    cons: [
      "Generic-fit, not vehicle-specific — gaps around the wells",
      "Carpet finish less premium than MSA hardwood",
      "Heaviest in the test",
    ],
    bestFor: "Buyers who want immediate availability and the ability to expand the system over time.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtRanger,
    shortReview:
      "The convenient choice. You give up the bespoke fit, but you get an ARB-supported modular system you can add to as your needs evolve.",
    expertReviews: [
      { source: "Pat Callinan's 4x4 Adventures", quote: "For payload and expandability, ARB Outback Solutions is hard to beat." },
    ],
  },
  {
    id: "front-runner-ssd",
    categoryId: "drawer",
    brand: "Front Runner",
    model: "Slide & Stainless Drawer Kit",
    origin: "South Africa",
    headlineSpec: "Aluminium frame + stainless slide · bolt-together",
    priceMinAud: 1800,
    priceMaxAud: 2400,
    installCostAud: 750,
    installDays: 2,
    editorScore: 8.4,
    ovrlndPick: false,
    pros: [
      "Lightest system in the test — aluminium frame, no plywood",
      "Bolt-together architecture — fully reconfigurable",
      "Best resale value internationally — Front Runner is the global standard",
      "Integrates with Front Runner Slimline II roof rack ecosystem",
    ],
    cons: [
      "Less furniture-finished than MSA or Drifta",
      "Smaller AU dealer network",
      "Generic-fit aesthetic — visible gaps without filler panels",
    ],
    bestFor: "Tier 2 EV builds and weight-conscious buyers who want global parts availability.",
    fitsTiers: ["tier1", "tier2", "tier3"],
    image: IMG.builtCybertruck,
    shortReview:
      "The international standard. If you might ship the car overseas one day, or you're building a Cybertruck/Rivian where every kg matters, Front Runner is the smart pick.",
    expertReviews: [
      { source: "Expedition Portal", quote: "Front Runner's modular system has crossed every continent — global compatibility is genuinely valuable." },
    ],
  },
  {
    id: "bushco-270xt-d",
    categoryId: "drawer",
    brand: "The Bush Company",
    model: "Modular Tray Storage System",
    origin: "Australia (designed) / Vietnam (manufactured)",
    headlineSpec: "Tier 3 ute tray drawers + integrated wing kit",
    priceMinAud: 2000,
    priceMaxAud: 2800,
    installCostAud: 800,
    installDays: 2,
    editorScore: 8.3,
    ovrlndPick: false,
    pros: [
      "Designed specifically for tray-back utes — drawers + wings + canopy integration",
      "Pairs natively with Bush Company canopies and 270XT awning",
      "Anodised aluminium throughout — coastal-safe",
      "Modular — choose drawer count and wing config",
    ],
    cons: [
      "Tier 3 ute focus — not a Defender/G-Wagon solution",
      "Canopy required for full integration",
      "Newer to market — fewer long-term reviews than MSA/Drifta",
    ],
    bestFor: "Ranger / Amarok / HiLux owners building a Bush Company-systemised tray.",
    fitsTiers: ["tier3"],
    image: IMG.builtRanger,
    shortReview:
      "The systems-thinking choice for ute builds. If you're going Bush Company canopy and awning, the matching drawers complete the kit.",
    expertReviews: [
      { source: "Loaded 4x4", quote: "As a single-brand tray-back system, Bush Company is now hard to beat." },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────
// UNIFIED CATALOGUE & HELPERS
// ────────────────────────────────────────────────────────────────────────

export const PRODUCTS_BY_CATEGORY: Record<string, Product[]> = {
  awning: AWNINGS,
  electrical: ELECTRICAL,
  fridge: FRIDGES,
  drawer: DRAWERS,
};

export const getProductsForVehicleAndCategory = (vehicleId: string, categoryId: string): Product[] => {
  const vehicle = getVehicleById(vehicleId);
  if (!vehicle) return [];
  const products = PRODUCTS_BY_CATEGORY[categoryId];
  if (!products) return [];
  return products.filter((p) => p.fitsTiers.includes(vehicle.tier));
};
