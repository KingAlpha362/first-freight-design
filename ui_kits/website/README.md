# Website UI Kit — First Freight Couriers

A high-fidelity, on-brand interpretation of the First Freight public marketing website
(firstfreight.co.za). No existing site code or Figma was provided, so this kit is built from the
brand's visual system (logo, livery, photography) rather than recreated from source — treat it as
the canonical reference build for the site.

## Run it
Open `index.html` — the current flagship homepage: a **premium dark, cinematic** marketing site
(inspired by the EPX/Logiko-class logistics sites) rebuilt entirely in the First Freight brand.
Interactive flows: inline **parcel tracking** (waybill → status-timeline modal), a **Get-a-Quote**
modal, an **FAQ accordion**, and the signature **interactive three-metro network map** (click a
node to switch branch; parcels animate along the JHB–DBN–CPT routes).

Two homepages ship in this kit:
- **`index.html`** — dark premium homepage (flagship). Components are the `D*.jsx` set below.
- **`home-logiko.html`** — earlier light, Logiko-theme homepage. Uses `Header/Hero/About/Services/
  Capabilities/CtaBand/FeatureRow/QuoteForm/Footer.jsx`. Kept for reference.

## Dark homepage components (top → bottom)
| File | What it is |
| --- | --- |
| `DHeader.jsx` | Transparent-over-hero nav that goes solid/blurred on scroll. |
| `DHero.jsx` | Cinematic full-bleed hero, glass inline tracking field, stat chips. `darkness` prop. |
| `DEvolution.jsx` | "A grown-up approach to logistics" — copy + 4 feature tiles + image. |
| `DStats.jsx` | Deep-red band with **count-up-on-scroll** stats (`useCountUp` + IntersectionObserver). |
| `DServices.jsx` | Four dark photo service cards (`DServiceCard`). |
| `DGallery.jsx` | "Active. Human. Real." operations photo **bento mosaic** (`GTile`). |
| `DFeatures.jsx` | Light section — alternating image/text capability rows (`FeatureRowItem`). |
| `DMap.jsx` | **KICK** — interactive SVG network map: 3 metro nodes, animated parcels (SMIL), live branch panel + stats. |
| `DFaq.jsx` | Accordion (one open at a time). |
| `DContact.jsx` | "Let's work together" photo CTA. |
| `DFooter.jsx` | Dark footer — logo, links, branch contacts, legal. |
| `QuoteForm.jsx` | Red "Request a Quote" panel (shared; `bare` prop strips section chrome for the modal). |
| `TrackingModal.jsx` | Shipment status-timeline overlay (shared). |

Uses `assets/logo-first-freight-dark.png` (red wordmark + white "Couriers" for dark backgrounds).

## Logiko homepage components (top → bottom)
| File | What it is |
| --- | --- |
| `TopBar.jsx` | Dark utility strip — address · hours · phone, social icons. |
| `Header.jsx` | Sticky nav — logo, condensed-caps links, search, angled red **Get a Quote** block. |
| `Hero.jsx` | Angled red panel with multiply'd fleet photo, slab headline, dotted texture, "30 yrs" trust badge, dual CTAs, slide arrows (cycles 3 photos/headlines). |
| `FeatureRow.jsx` | Three cards overlapping the hero — Optimized Cost / Reduced Transit Time / Delivery on Time. |
| `About.jsx` | "National logistics solution provider since 1996" — image collage, 30+ years badge, `SkillBar` skill bars, MD byline, faded brand watermark. |
| `Services.jsx` | Five image-backed `ServiceTile` cards (hover red wash + zoom). |
| `CtaBand.jsx` | "Simplify your freight" strip + full-bleed photo CTA with the hand-circled word. |
| `Capabilities.jsx` | Outline "Logistics" wordmark, intro, 4 stat counters, red "Trusted transportation company" contact strip. |
| `QuoteForm.jsx` | Red "Request a Quote" panel + courier photo with testimonial. Exposes `QField`. |
| `Footer.jsx` | Graphite footer — logo, link columns, legal/registration line. |
| `TrackingModal.jsx` | Overlay with a vertical shipment-status timeline (delivered / in-transit / pending). |

## Conventions
- Tokens come from `../../colors_and_type.css`; global button/eyebrow/tracking-field classes live
  in `index.html`'s `<style>`.
- Icons are Lucide (`<i data-lucide="…">`), pinned to **v0.378.0** (which still ships brand/social
  icons); `lucide.createIcons()` is re-run after each React render.
- Each component exports itself to `window` so files share scope under Babel.

## Caveats
- Interpretation, not a 1:1 recreation (no source was available).
- Fonts are Google-Font substitutes for the brand's slab-serif wordmark — see root README §6.
