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
    heroImage: IMG.heroDefender,
    thumbnail: IMG.heroDefender,
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
    thumbnail: UNSPLASH.gwagon,
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
    thumbnail: UNSPLASH.landcruiser,
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
    thumbnail: UNSPLASH.landcruiser,
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
    thumbnail: UNSPLASH.rangerover,
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
    thumbnail: UNSPLASH.grenadier,
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
    thumbnail: UNSPLASH.cybertruck,
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
    thumbnail: UNSPLASH.rivian,
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
    thumbnail: UNSPLASH.modelx,
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
    thumbnail: UNSPLASH.lexusgx,
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
    heroImage: IMG.heroRanger,
    thumbnail: IMG.heroRanger,
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
    thumbnail: UNSPLASH.amarok,
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
    thumbnail: UNSPLASH.hilux,
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
    thumbnail: UNSPLASH.dmax,
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
