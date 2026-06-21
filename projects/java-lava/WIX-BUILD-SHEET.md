# Java Lava — Wix Studio Build Sheet (Concept A)

Reference build: the coded prototype at **https://java-lava.vercel.app** (open side-by-side
while building — it's the source of truth for layout, spacing and motion).
Goal: a faithful, **native Wix Studio** rebuild — improved where Wix animations shine, not
necessarily pixel-identical. Assets are in `site/assets/` (optimized) ready to upload.

> Division of labor: this sheet + assets + copy drive the build. Build in Wix **Studio**
> (not classic Wix). Publish to the free `*.wixstudio.io` URL for the demo; connect
> `javalava.rocks` at the end.

---

## 0. Before you build (setup)
1. **Confirm Wix Studio.** Dashboard should say "Wix Studio" and let you create a *Studio
   site* (editor with breakpoints + an "Animations" panel). If you only have classic Wix,
   create a free Studio workspace at **wix.com/studio** and start the site there.
2. **Create a blank site** (start from a blank template, not a pre-made one).
3. **Plan: Business & eCommerce** plan is required later for Wix Stores (checkout) + custom
   domain. Free plan is fine to build + demo on `wixstudio.io`.
4. **Upload assets** to Site Media (drag the whole `site/assets/` folder):
   - `product-6cafc4.png` — logo (gold, transparent)
   - `img-58314d.webp` — hero/volcano key visual
   - `bottle.webp` / `bottle.png` — product bottle
   - `hero-wide.png` — illustrated volcano-bean logo
   - `social-1/2/3.png` — Instagram / Facebook / TikTok
   - `cocktails/*.webp` (+ `.jpg` fallbacks) — the 6 drink photos
   - *(If Wix rejects `.webp`, upload the `.jpg` versions in `assets/cocktails/` and the
     `.png` originals.)*

---

## 1. Global design system (set in Studio → Site Styles)

### Color palette (add as Site Colors)
| Name | Hex | Use |
|---|---|---|
| Volcanic Black | `#0B0A0C` | primary background |
| Coffee | `#1A120B` | footer / alt sections |
| Gold | `#C9A24B` | primary brand gold (kickers, accents) |
| Gold Light | `#F4D88A` | gold highlight / headings gradient |
| Lava | `#E2571E` | CTAs / energy |
| Ember | `#FF8A3D` | highlight |
| Cream | `#F4EBDD` | body text on dark |
| Jungle | `#2E4A2B` | subtle green accent |

- **Gold gradient** (headings/logo text): `linear-gradient(135deg, #F8E3A8, #C9A24B 48%, #8A6A2B)`
- **Lava gradient** (buttons): `linear-gradient(135deg, #FF8A3D, #E2571E 55%, #B3300A)`
  *(Wix: apply gradient via a text/element fill where supported; otherwise use solid `#E2571E`.)*

### Fonts (both are in Wix's font library — no upload needed)
- **Cormorant Garamond** — all headings/display. Weights 400–700, italic used for accents.
- **Montserrat** — body, nav, buttons, labels. Weights 300–700.

### Type scale (Studio text Themes)
| Element | Font | Size (desktop) | Weight | Notes |
|---|---|---|---|---|
| Hero H1 | Cormorant | clamp ~3.4→9rem (use 96px desktop) | 500 | tight line-height ~0.94 |
| Section Title (H2) | Cormorant | 40–64px | 500 | line-height 1.04 |
| Sub heading (H3) | Cormorant | ~27px | 600 | |
| Kicker / eyebrow | Montserrat | 11–12px | 600 | UPPERCASE, letter-spacing .42em, color Gold |
| Body | Montserrat | 16–17px | 300 | color Cream @ ~74% opacity, line-height 1.75 |
| Nav links | Montserrat | 12–13px | 500 | UPPERCASE, letter-spacing .14em |
| Button label | Montserrat | 12px | 600 | UPPERCASE, letter-spacing .18em |

### Buttons (create 2 reusable button designs)
- **Primary:** Lava gradient fill (or solid `#E2571E`), white text, fully rounded (radius
  ~40px / "pill"), padding ~13×26px, soft orange shadow. Hover: lift 2px + stronger shadow.
- **Ghost:** transparent fill, 1px border `rgba(201,162,75,.45)`, text Gold Light. Hover:
  faint gold fill.

### Header (global, sticky)
- Transparent at top → on scroll, background `rgba(11,10,12,.86)` + blur, thin gold bottom
  border. Wix Studio: Header → "Scroll" settings → change background on scroll.
- Left: logo (`product-6cafc4.png`, ~40px) + "Java Lava" in Cormorant.
- Center/right links: Our Story · Shop · Cocktails · Store Locator · Contact.
- Right: **Get Inspired** primary button → Shop.
- Mobile: hamburger → full-screen overlay menu (Studio native mobile menu), links in
  Cormorant ~2rem centered.

### Footer (global)
- Background Coffee `#1A120B`, thin gold top border.
- Col 1: logo + "Java Lava" + tagline "Premium coffee liqueur, born from volcanic soil.
  Ignite the flow." + 3 social icons (circular gold-outline buttons).
- Col 2 "Explore": Our Story, Shop, Cocktails, Store Locator, Contact.
- Col 3 "Support": Shipping, Returns, Privacy, Terms.
- Legal strip: "© 2026 Java Lava. Please enjoy responsibly. 21+." + Privacy/Accessibility/Terms.

### Animation defaults (Studio → Animations panel) — this is where Wix can *improve* on the prototype
- Apply **"Reveal / Fade up"** (distance ~40px, ease-out, ~0.8s) to section headings, cards,
  images on scroll-in. This maps to the prototype's `.reveal`.
- Apply **Parallax** to all full-bleed background images (hero + page heroes) — Wix does this
  natively and smoothly.
- Cards/images: subtle **hover scale** (1.04) + shadow.
- Optional upgrades Wix makes easy: section **scroll transitions**, image **clip-reveal**,
  sticky-scroll storytelling on Our Story. Use tastefully.

---

## 2. HOME page
Sections top→bottom (rebuild each as a Studio Section):

1. **Hero** (full viewport): background = `img-58314d.webp` (parallax), dark gradient overlays
   top+bottom for text legibility. Center stack: kicker "Premium Coffee Liqueur" → H1
   *"IGNITE / The Flow"* (small italic gold "Ignite" eyebrow above large "The Flow") → lede
   paragraph → two buttons (primary "Shop — $35.99", ghost "Cocktail Recipes"). Scroll cue at
   bottom. *Optional: Wix can add a slow zoom/parallax + a particle/embers video layer.*
2. **Marquee strip** (Coffee bg): looping text "Roast · Spice · Earth · Volcanic Soil ·
   Arabica · Caribbean Rum · Blue Agave · 40 Proof". Wix: a Marquee/looping text element.
3. **Our Story teaser** (2-col): left = kicker + H2 "From the world's most *prestigious coffee
   regions*" + body + ghost button "Read our story"; right = `hero-wide.png` illustration.
4. **Product** (2-col): left = `bottle.webp` (rounded, glow behind); right = kicker "The
   Bottle" + H2 "A liqueur with a molten core" + body + 3 stat chips ($35.99 / 750ml · 20%
   ABV / 100% Arabica) + primary button "Shop Now".
5. **The Blend** (3 cards): heading "Three forces of nature" + 3 cards (Arabica Coffee /
   Caribbean Rum / Blue Agave) each with gold circular icon + title + text. Reveal-stagger.
6. **Flavor band** (centered): kicker "Flavor Profile" + huge "Roast · Spice · Earth"
   (Cormorant, gold, lava dots). Pop-in animation.
7. **Cocktails preview** (3 image cards): photos `cocktails/lava-martini.webp`,
   `the-volcanic.webp`, `ember-cream.webp`; each links to Cocktails page; "All recipes" ghost
   button below.
8. **Store Locator CTA** (centered, ember glow): "Track down a bottle near you" + buttons
   "Store Locator" / "Order Online".

---

## 3. SHOP page  → use **Wix Stores**
- Add the **Wix Stores** app. Create one product:
  - Name: **Java Lava Coffee Liqueur** · Price **$35.99** · Image: `bottle.webp`
  - Description: "A premium cold-brew liqueur blending ethically sourced Arabica beans with
    Caribbean rum and blue agave. Bold enough for cocktails, smooth enough to sip neat.
    750ml · 20% ABV (40 Proof)."
  - Add product gallery images (bottle, key visual, illustration).
- Customize the **Product Page** to match the prototype: dark theme, tasting-note bars
  (Roast 88 / Spice 64 / Earth 72 / Sweetness 48 — build as simple bar elements), accordion
  for Tasting notes / Ingredients / How to serve / Shipping (Wix accordion element), trust row.
- Below: a **"Make it a moment"** strip with the 3 cocktail image cards (reuse from Home).
- *If checkout isn't needed for launch, you can keep the product as a showcase with a
  "Where to buy" button → Store Locator instead of cart.*

---

## 4. OUR STORY page
- **Page hero** (~52vh): `img-58314d.webp` parallax + dark veil; breadcrumb, kicker, H1
  "Our Story", intro line.
- **The Origin** (2-col): copy from prototype + `hero-wide.png`.
- **Pull-quote band**: *"A spark of creativity, meant to flow into everything you make."*
- **How it's made** — 4-step vertical **timeline** (gold line + dots). Wix: a vertical repeater
  or stacked rows with reveal-stagger. Steps: Ethically sourced → Cold-brewed slow → Blended
  with rum & agave → Bottled with intent.
- **Stats** (100% Arabica / 3 Ingredients / 40 Proof) + "Taste the story" button.

## 5. COCKTAILS page  → use **Wix CMS** (so client edits recipes)
- Create a **CMS Collection "Cocktails"** with fields: Title, Category (Quick/Neat/Creamy),
  Time/Tag, Image, Short description, Ingredients (text/list), Method (rich text).
- Seed 6 items using the photos + copy already on the prototype (Lava Martini, The Volcanic,
  Ember & Cream, Lava & Tonic, Volcano Flat White, Affogato Eruption).
- **Page hero** "Signature Serves". **Filter buttons** (All/Quick/Neat/Creamy) → Wix dataset
  filter. **Repeater** grid bound to the collection (image card + pill + title + desc).
- **Featured recipe** block (Lava Martini): big image + ingredient chips + numbered method.

## 6. STORE LOCATOR page
- **Page hero** "Store Locator".
- Options: (a) Wix App Market **"Store Locator"** app, or (b) a **Wix Forms** search + a
  list/repeater of stockists + an embedded **Google Map**. Seed with the demo store list from
  the prototype. The prototype's stylized map is a placeholder — Wix uses a real map.

## 7. CONTACT page
- **Page hero** "Get in Touch".
- Left: contact details (Email, Phone, Wholesale) + social icons.
- Right: **Wix Forms** form (First/Last name, Email, Subject dropdown, Message) + 21+ note +
  success message. Wix handles submissions natively (no code).

---

## 8. Build order (fastest path to a demo)
1. Global: colors, fonts, header, footer, button styles.
2. **Home** → publish → that's your demo URL (`*.wixstudio.io`). Share with client.
3. Our Story → Cocktails (CMS) → Shop (Stores) → Locator → Contact.
4. Responsive pass per breakpoint (Studio: desktop / tablet / mobile).
5. SEO (titles/descriptions from each prototype page) + favicon (`product-6cafc4.png`).
6. Connect **javalava.rocks** + go live.

## 9. Where Wix will differ (set expectations with the client)
- Smooth-scroll inertia (Lenis) → Wix uses native scroll (still smooth, not identical feel).
- Exact GSAP easings/stagger → Wix presets are close; can be *better* in places (section
  transitions, sticky storytelling).
- Custom JS micro-interactions (tasting-meter fill, toast) → rebuilt with Wix interactions or
  a small Velo snippet if exact behavior is wanted.
- Net: **quality and feel preserved or improved**, ~90–95% to the prototype.
