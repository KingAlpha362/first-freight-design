# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **brand and UI design system** for First Freight Couriers (Pty) Ltd — a national South African courier/freight company.

## How to run

```
cd first-freight-web
npm install      # first time only
npm run dev      # starts Vite dev server, open http://localhost:5173
```

Open any file in `preview/` to view isolated design-system token specimens (colours, type, spacing) — no server needed.

## Architecture

```
colors_and_type.css             ← CSS custom-property token source (imported by preview/ pages)
assets/                         ← master brand photos + logo PNGs
preview/                        ← standalone HTML token specimens (colours, type, components)
uploads/                        ← original source imagery (not used directly)
first-freight-web/              ← Vite + React + Tailwind marketing website (THE canonical website)
  src/sections/                 ← one file per page section (Hero, Services, Faq, Contact …)
  src/components/layout/        ← Header, Footer
  src/components/shared/        ← QuoteModal, TrackingModal
  src/hooks/                    ← shared React hooks (useCountUp, …)
  public/assets/                ← photos and logos served at /assets/ by Vite
```

**Token system.** All colours, fonts, radii, spacing, shadows and motion values live in `colors_and_type.css` as `:root` CSS custom properties (e.g. `--ff-red`, `--font-display`, `--sh-brand`). The Vite site imports this via `src/index.css`.

**Component model.** Standard ES-module React components. Icons use `lucide-react` (npm package). No Babel standalone, no CDN globals.

## Map asset

`first-freight-web/public/assets/sa-map.jpg` — photograph of the South African national network map, used as the background in `NetworkMap.jsx`.

## Brand rules (critical for any output)

- **Primary accent:** `#DE4632` (`--ff-red`) — use as a *punch* (CTAs, wordmark, key numbers), never as a large wash.
- **Secondary accent:** `#F26A21` (`--ff-orange`) — hi-vis orange, captions, status badges.
- **Logo:** always render from `assets/logo-first-freight.png` (light bg) or `assets/logo-first-freight-dark.png` (dark bg). Never re-type the wordmark.
- **Fonts:** Zilla Slab (display/italic brand moments) · Barlow (UI/body) · Barlow Semi Condensed (labels, fleet codes, tracking numbers). All loaded from Google Fonts in `colors_and_type.css`.
- **Icons:** Lucide only — import named components from `lucide-react` (e.g. `import { Truck } from 'lucide-react'`). No emoji, no Unicode dingbats.
- **Photography:** real operations photos from `assets/`. Text over photos uses a dark bottom-up gradient, not a flat tint.
- **Voice:** plain-spoken, "your / our". Tagline: *"Your Parcel, Our Priority."* No emoji in copy.
- **Motion:** 180ms, `cubic-bezier(.2,.7,.2,1)`. No bounce, no spring, no parallax.

## Status colours (logistics)

| Token | Hex | Meaning |
|---|---|---|
| `--ok` | `#2E8B57` | Delivered |
| `--transit` | `#F26A21` | In transit |
| `--pending` | `#C9A227` | Awaiting collection |
| `--alert` | `#C5341F` | Exception / failed |

## Key caveats

- Fonts are Google-Font **substitutes** — the real brand typeface was not provided. Never re-type the wordmark; always use the logo PNG.
- Colours are **sampled approximations** from the logo and livery photography, pending official brand-guide confirmation.
- The website kit is an **on-brand interpretation**, not a recreation of an existing site (no source code or Figma was provided).
