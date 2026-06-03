# First Freight Couriers — Design System

A brand & UI design system for **First Freight Couriers (Pty) Ltd**, a national South African
courier and freight company. This repository gives design agents everything needed to produce
on-brand interfaces, marketing pages, slides and prototypes for First Freight.

---

## 1. Company & product context

**First Freight Couriers (Pty) Ltd** (Reg. No. 1996/005172/07) is a South-African owned
courier and freight distribution company operating a national road fleet. Founded in the
mid-1990s, it runs a hub-and-spoke depot network with branches in the country's three major
metros:

| Branch | Phone |
| --- | --- |
| Johannesburg (head office) | 011 387 7000 |
| Durban | 031 569 1451 |
| Cape Town | 021 036 0333 |

- **Website:** www.firstfreight.co.za
- **Tagline:** *"Your Parcel, Our Priority."*
- **Services (inferred from imagery):** overnight & road freight, parcel/courier delivery,
  warehousing & depot handling, national distribution, dedicated/contract fleet.
- **Fleet:** white panel trucks (Isuzu), curtain-side trucks, Tata/Hyundai bakkies & MaxiVan
  light commercials, and Toyota Quantum vans — all branded in the red-orange livery over a
  silver globe graphic. Vehicles carry fleet codes (e.g. `T24`, `B18`).
- **People:** large depot/driver workforce in black overalls with hi-vis orange reflective
  trim. Brand photography is candid, on-the-ground operations and team photos.

### Products represented in this system
There is **one primary digital surface**: the **marketing website** (firstfreight.co.za). This
system therefore ships one UI kit — `ui_kits/website/` — covering the public site (hero, service
cards, fleet/coverage, tracking entry, quote form, footer). A parcel-tracking result view is
included as the most product-like screen.

### Sources provided
- 40 brand photographs (fleet, depots, drivers, teams, operations) — see `uploads/` and the
  curated subset copied into `assets/`.
- Primary logo: `uploads/pplogo.png` → `assets/logo-first-freight.png`.
- No codebase, Figma file, or existing site export was provided. The visual system below is
  reverse-engineered from the logo, vehicle livery, and social/marketing photography. Anything
  not directly observed is flagged as an inference.

---

## 2. Content fundamentals

How First Freight talks (drawn from livery captions and marketing imagery):

- **Voice:** plain-spoken, dependable, proud. Operations-first, no jargon, no hype. It sounds
  like a logistics company run by people who move boxes every day.
- **Person:** speaks to the customer as **"you" / "your"** and represents itself as **"we / our"**.
  The tagline *"Your Parcel, Our Priority."* is the template — *your* need, *our* commitment.
- **Casing:** **Title Case** for headlines and short promo lines (*"The First Freight National
  Fleet"*). Branch names and key labels often **ALL CAPS** on livery (`JOHANNESBURG`, `CAPE TOWN`).
  Sentence case for body copy.
- **Punctuation:** confident full stops on slogans (*"Your Parcel, Our Priority."*). Phone numbers
  shown in spaced SA format (`011 387 7000`).
- **Length:** headlines are short and punchy (3–6 words). Promises are concrete — places, phone
  numbers, vehicle counts — not abstract adjectives.
- **Emoji:** **none.** Not part of the brand. Do not introduce them.
- **Vibe words:** national, reliable, on-time, priority, fleet, depot, nationwide, established.
- **Examples observed:**
  - *"Your Parcel, Our Priority."* (primary slogan)
  - *"The First Freight National Fleet"*
  - *"First Freight Couriers (Pty) Ltd"* (always full legal name on livery)
  - Branch + phone blocks: `JOHANNESBURG 011 387 7000 · DURBAN 031 569 1451 · CAPE TOWN 021 036 0333`

---

## 3. Visual foundations

**Colour.** A single hot **red-orange (`#DE4632`)** is the brand's whole identity — it's the
logo, the livery, the only true accent. A brighter **hi-vis orange (`#F26A21`)** appears on promo
captions and mirrors the reflective trim on staff overalls. Everything else is neutral: **black
ink (`#1A1A1A`)** for the "Couriers (Pty) Ltd" wordmark and body text, a **silver/steel grey
(`#8A9197`)** lifted from the globe graphic, and warm off-whites. Use red as a **punch, not a
wash** — small confident hits (CTAs, the wordmark, key numbers), never large gradient fills.

**Type.** The logo is a heavy **italic slab/serif** with a hard black drop-shadow — bold,
old-school, freight-yard confident. We echo it with **Zilla Slab** (display, often *italic* for
brand moments) paired with **Barlow** (industrial grotesque) for UI and body, and **Barlow Semi
Condensed** for livery-style labels, fleet codes and tracking numbers. *(Substitution — see §6.)*

**Backgrounds.** Predominantly **white / warm off-white** with full-bleed **photography** for
hero and section breaks. Photos are real, candid operations shots — warm daylight, blue SA skies,
depot interiors. No illustration, no abstract gradients, no repeating patterns. Dark sections use
**graphite (`#2B2A28`)**, not pure black.

**Imagery treatment.** Natural, warm, slightly saturated documentary photography. Trucks, depots,
teams, parcels. When text sits over a photo, use a **dark bottom-up protection gradient** (not a
flat tint) so captions stay legible — exactly as the brand does on its promo images.

**Borders & cards.** Cards are **white on off-white**, defined by a **hairline border
(`#E0DDD6`)** + a soft shadow, corners **10px** (`--r-md`). Pills/tags use the full radius. The
system favours crisp 1px borders over heavy strokes; keep it clean and utilitarian.

**Elevation.** Restrained. `--sh-sm` for resting cards, `--sh-md` on hover, `--sh-lg` for
overlays/menus. Primary CTAs get a subtle **red glow** (`--sh-brand`). No neumorphism, no inner
shadows except inset form fields.

**Corner radii.** 3 / 6 / 10 / 16px scale; pills 999px. Default to 10px.

**Motion.** Quiet and functional. ~180ms, ease `cubic-bezier(.2,.7,.2,1)`. Fades and short
translate-ups for entrances; **no bounce, no spring, no parallax theatrics.** A logistics brand
should feel punctual, not playful.

**Hover states.** Solid buttons darken (`--ff-red` → `--ff-red-deep`); ghost/outline buttons fill
with a 6–8% red tint; cards lift one elevation step and the border darkens to `--ff-line-2`; links
take the red and an underline.

**Press states.** Slight darken + `transform: translateY(1px) scale(.99)` — a small physical
"press", no big squash.

**Transparency & blur.** Used sparingly: sticky header gets a translucent white with `backdrop-
filter: blur(10px)` once scrolled; photo protection gradients as above. Avoid frosted glass as
decoration.

**Layout rules.** Max content width ~1200px, generous gutters. 12-col mental grid, 8pt spacing
scale. Sticky top nav. Section rhythm alternates white / off-white / photo / graphite.

---

## 4. Iconography

First Freight has **no proprietary icon set**. Its only true graphic device is the **silver globe
with the Africa-centred world map and longitude/latitude grid**, used behind the wordmark on
livery — treat that as a *brand motif* (use the photographed livery / logo art), **not** a UI icon.

- **UI icons:** use **[Lucide](https://lucide.dev)** (CDN) — a clean, even-stroke (≈2px) open-line
  set that matches the brand's utilitarian, no-frills feel. Load from
  `https://unpkg.com/lucide@latest`. Relevant glyphs: `truck`, `package`, `map-pin`, `globe`,
  `phone`, `clock`, `shield-check`, `route`, `warehouse`, `search`.
  **This is a substitution** — the brand ships no icons of its own. Flagged to the user.
- **Stroke weight:** 2px, `round` linecap/linejoin, currentColor. Size 20–24px inline, 32–40px in
  feature cards.
- **Emoji:** never. **Unicode dingbats as icons:** avoid; use Lucide.
- Do **not** hand-draw the globe in SVG — reference `assets/logo-first-freight.png` or livery
  photography for any globe moment.

---

## 5. File index (manifest)

```
README.md                  ← you are here
colors_and_type.css        ← CSS variables: colours, semantic fg/bg, type scale, radii, shadows, motion
SKILL.md                   ← Agent-Skills-compatible entry point
assets/                    ← logo + curated brand photography
  logo-first-freight.png   ← primary wordmark (transparent PNG, 1320×336)
  national-fleet.jpg, fleet-truck.jpg, bakkie.jpg, warehouse.jpg,
  depot-packing.jpg, driver-assistant.jpg, big-team.jpg, happy-team.jpg,
  on-the-go.jpg, operations.jpg, delivering.jpg
preview/                   ← design-system tab cards (colours, type, components, etc.)
ui_kits/
  website/                 ← marketing site UI kit (index.html + JSX components)
uploads/                   ← original source files as provided
```

### UI kits
- **`ui_kits/website/`** — First Freight public marketing website. Header, hero, service cards,
  fleet & national-coverage section, parcel tracking entry + result, get-a-quote form, footer.

---

## 6. Substitutions & caveats

- **Fonts are substituted.** The logo/livery type is a specific heavy italic slab-serif (Cooper/
  Clarendon-ish) that was not provided as a font file. We use **Zilla Slab** (display) + **Barlow**
  (UI/body) as the nearest Google Fonts match. The actual wordmark is always rendered from the
  PNG logo, never re-typed. **Please share the real brand fonts if you have them.**
- **Icons are substituted** with Lucide (the brand has none of its own).
- **Colours** are sampled from the logo PNG (`#DE4632`) and read off livery captions; treat the
  exact hex values as close approximations pending brand-guide confirmation.
- **No website/codebase/Figma** was provided — the website UI kit is an on-brand *interpretation*
  built from the visual system, not a recreation of an existing site.
