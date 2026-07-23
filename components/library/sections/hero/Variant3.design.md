# Design System — Dark Glow (Technical / Infra Product)

This hero is a starting point for a full dark developer-tool site. Use
this document to keep every other section (features, pricing, docs
teaser, footer) speaking the same "confident infrastructure product"
language instead of drifting toward generic SaaS gradients.

## Identity Summary
Black canvas, one disciplined accent color, a faint technical grid, and a
single soft glow used sparingly as the only "warm" element in an otherwise
cold palette. Everything is rectangular, not pill-shaped — this is a
technical product, not a consumer app.

## Core Palette (system-wide, not just the hero)
- Background: `black` everywhere by default. Do not introduce a second
  dark gray as a "card" background — depth comes from borders, not fill
  changes, unless explicitly noted below.
- **The one accent color is `emerald`** (`emerald-400`/`emerald-500`).
  Pick this once for the whole site and do not add a second accent hue —
  a system like this reads as premium specifically because there is only
  one color doing work. If this system is reused for a different product,
  swap `emerald` for a different single hue everywhere at once (find/replace),
  never mix two accents.
- Text: `white` for headlines, `neutral-400` for body copy, `neutral-500`
  for the most muted metadata/captions.
- Structural lines/borders: `neutral-700`/`neutral-800` — used for button
  outlines, card borders, dividers.
- Grid backdrop lines: `#1a1a1a` — barely-there texture, never a visible
  "graph paper" effect on its own.

## Typography System
- Headline: sans-serif, `font-semibold`, `tracking-tight`. The pattern of
  "neutral clause + emerald clause" in one sentence (e.g. "The
  infrastructure layer for **your next launch**") should repeat across
  major section headlines — always exactly one emphasized clause per
  headline, never more.
- Body: `neutral-400`, `text-lg` for hero/section intros, `text-base` for
  in-card copy, always with a `max-w` cap so paragraphs don't run edge to
  edge.
- Buttons: `text-sm font-semibold`. Two button styles, used consistently
  everywhere:
  - **Primary**: solid `emerald-500` fill, `black` text, hover
    `emerald-400`.
  - **Secondary**: transparent, `border border-neutral-700`, `white`
    text, hover `bg-neutral-900`.
  Never introduce a third button style (e.g. a ghost-text link) unless
  it's clearly tertiary and much smaller.

## Shape Language
- **Rectangular, not pill.** `rounded-md` is the system's only radius
  value — buttons, cards, code blocks, badges. A `rounded-full` anywhere
  in this system (buttons especially) is off-brand; save fully-rounded
  shapes for small dot/status indicators only.
- Cards/panels (for features, pricing): `border border-neutral-800` on
  black, no fill change, `rounded-md`. Hover state (if interactive):
  border brightens to `neutral-700`, nothing else moves.

## The Atmosphere Layer (reuse on every dark section)
This is the system's signature and should appear, in some proportion, on
every major section — not just the hero:
1. **Background grid** — absolutely positioned full-bleed layer, CSS
   double linear-gradient (1px lines, `40px` cells) in `#1a1a1a` on black.
2. **Radial mask** — the grid fades to transparent toward the edges via a
   `mask-image: radial-gradient(ellipse ...)`, concentrating the texture
   behind whatever headline/content sits in that section rather than
   tiling harshly edge to edge. Reposition the ellipse per section (e.g.
   centered for a centered headline, offset left for a two-column
   feature row).
3. **Glow blob** — one blurred, low-opacity `emerald-500/20` ellipse
   (`blur-[100px]`) placed behind the section's focal point. Use exactly
   one glow per section, never stack multiple glows in the same viewport
   — that is what keeps this feeling premium rather than busy.

Both layers are `pointer-events-none` and sit behind real content via
z-index/stacking order, never interactive.

## Spacing & Rhythm
- Centered, single-column sections read as "hero-like" (`max-w-3xl`,
  `text-center`), tall padding (`py-24`–`py-32`).
- Multi-column sections (features, pricing) can widen to `max-w-5xl`/
  `max-w-6xl` and drop padding to `py-20`–`py-24` — still generous, this
  system never feels cramped.
- CTA rows: always `flex flex-wrap items-center justify-center gap-4`
  (centered sections) with primary button first, secondary second.

## Extending to Other Sections
- **Features:** 3-column grid of bordered `rounded-md` cards on black,
  each with a small `emerald-400` icon, white title, `neutral-400`
  description — no fill color per card, just the border.
- **Pricing:** same bordered-card treatment; the recommended/featured
  plan gets an `emerald-500` border instead of `neutral-800` plus a small
  `emerald-500` "Popular" badge (`rounded-md`, not pill) — border color is
  the *only* thing that changes to signal emphasis.
- **Docs/CLI teaser:** reuse the grid+glow atmosphere behind a centered
  code-block mockup; code text in `neutral-300`/`emerald-400` for
  success/output lines, matching the CLI-log convention.
- **Footer:** solid black, no grid/glow (reserve the atmosphere for
  content sections), `neutral-500` link text, `neutral-800` divider line
  above it — quiet close to a loud page.
- **Testimonials:** bordered `rounded-md` cards, quote in `neutral-300`,
  attribution in `white` + `neutral-500` role — no avatar photos needed,
  a small `emerald-400`-bordered initial circle is enough to stay
  on-system.

## Do / Don't
- Do: one accent color, rectangular shapes, grid+glow atmosphere, border-
  only depth cues.
- Don't: add a second accent hue, use `rounded-full` on buttons/cards,
  stack multiple glows, use drop shadows, use gradients on buttons.
