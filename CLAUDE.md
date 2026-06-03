# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **brand and UI design system** for First Freight Couriers (Pty) Ltd — a national South African courier/freight company. It is a design-agent resource, not a build-tool project. There are no package managers, no `npm install`, no build steps, no test runners.

## How to view / run

- Open `ui_kits/website/index.html` directly in a browser — it is self-contained (React 18, Babel standalone, Lucide loaded from CDN).
- Open `ui_kits/website/home-logiko.html` for the earlier light-theme homepage.
- Open any file in `preview/` to view isolated design-system specimens (colours, type, components, spacing).
- No server is required; all assets are relative paths.

## Architecture

```
colors_and_type.css          ← single source of truth for all tokens (CSS custom properties)
assets/                      ← curated brand photos + logo PNGs (including South Africa's map.jpg)
preview/                     ← standalone HTML specimen pages per token category
ui_kits/website/             ← marketing website UI kit
  index.html                 ← flagship dark homepage; loads all D*.jsx + shared components via Babel
  home-logiko.html           ← earlier light homepage
  D*.jsx                     ← dark-theme component set (DHeader, DHero, DMap, …)
  (non-D).jsx                ← light-theme / shared components (Header, Hero, QuoteForm, TrackingModal, …)
uploads/                     ← original source imagery (not used by the kit directly)
```

**Token system.** All colours, fonts, radii, spacing, shadows and motion values live in `colors_and_type.css` as `:root` CSS custom properties (e.g. `--ff-red`, `--font-display`, `--sh-brand`). Both the preview pages and `index.html` import this file directly.

**Component model.** Each `.jsx` file exports its component to `window` (e.g. `window.DMap = DMap`) so all files share a single global scope under Babel standalone. There is no module bundler. Components are loaded as `<script type="text/babel" src="…">` tags in order. `lucide.createIcons()` must be called after each React render to hydrate `<i data-lucide="…">` icons.

**Dark vs light homepage.** `index.html` is the flagship (dark/cinematic) and uses the `D*.jsx` component set. `home-logiko.html` is the earlier light build and uses the non-prefixed components. `QuoteForm.jsx` and `TrackingModal.jsx` are shared between both.

**Live tweaks.** `index.html` embeds a `TWEAK_DEFAULTS` object (between `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` markers) for `brandColor`, `heroScrim`, and `reduceMotion`. The `tweaks-panel.jsx` component reads/writes these at runtime.

**Script load order matters.** In `index.html`, component scripts must be declared before the inline `<script type="text/babel">` that mounts the app. Shared components (`QuoteForm`, `TrackingModal`, `tweaks-panel`) come last among the component scripts.

## Map asset

`assets/South Africa's map.jpg` — real photograph of the South African national network map. Use this in `DMap.jsx` as a background image behind the SVG overlay, replacing the generic dotted-grid placeholder.

## Brand rules (critical for any output)

- **Primary accent:** `#DE4632` (`--ff-red`) — use as a *punch* (CTAs, wordmark, key numbers), never as a large wash.
- **Secondary accent:** `#F26A21` (`--ff-orange`) — hi-vis orange, captions, status badges.
- **Logo:** always render from `assets/logo-first-freight.png` (light bg) or `assets/logo-first-freight-dark.png` (dark bg). Never re-type the wordmark.
- **Fonts:** Zilla Slab (display/italic brand moments) · Barlow (UI/body) · Barlow Semi Condensed (labels, fleet codes, tracking numbers). All loaded from Google Fonts in `colors_and_type.css`.
- **Icons:** Lucide only (`<i data-lucide="truck">` etc.), pinned to v0.378.0. No emoji, no Unicode dingbats.
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
