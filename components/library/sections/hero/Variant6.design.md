# Design System — Game/Content Marketplace

This hero establishes the visual system for a dark storefront/marketplace
product (games, streaming, digital content). Use this document to extend
the same "browsable console UI" feel into every other section rather than
letting later sections default to plain lists or generic cards.

## Identity Summary
Dark, utilitarian chrome (nav, badges, metadata) surrounding one
tactile, playful centerpiece per section: overlapping, fanned, or
otherwise "physical" arrangements of content instead of flat grids. The
system's philosophy is "chrome stays quiet so content can be loud" — never
let the surrounding UI compete with the colorful content cards.

## Core Palette (system-wide)
- Background: `#0c0c0e` for every section.
- Grid backdrop lines: `#1c1c20` — same faint texture technique on every
  section that needs atmosphere behind a centered headline.
- Nav/chrome text: `neutral-300` active, `neutral-500` inactive — this
  active/inactive contrast pattern should repeat in any tab-like UI
  elsewhere on the site (category filters, footer link groups, etc.).
- Content cards: **each card/tile gets its own distinct saturated gradient
  pair** (violet→purple, rose→pink, sky→cyan, emerald→teal, indigo→blue is
  the starting five-color rotation). Never reuse the same gradient twice
  in one row — variety across items is what makes a row of content read
  as "a real catalog" rather than a template with placeholder repeats.
- Rating/metadata chips: `bg-black/30` translucent pill, `white` text —
  the standard way to overlay a small piece of metadata onto any colored
  card throughout the site.
- Body copy: `neutral-400`.

## Typography System
- Headlines: plain bold sans (no display/serif font needed — this system
  relies on color and composition, not typography, for its personality),
  `font-bold`, centered for hero-level statements, can go left-aligned for
  section intros that sit beside a content row.
- Small pill announcement badges (offer/promo callouts): `text-xs`, pill
  border, muted color, emoji-friendly — reuse this exact pattern for any
  "New", "Limited time", or seasonal callout elsewhere on the site.
- Card title: `font-bold` white; subtitle always one step dimmer
  (`white/70`) directly underneath — never the same opacity as the title.
  Apply this title/subtitle contrast rule to every card system-wide.
- Metadata text inside chips: always `text-[10px]`–`text-xs`, never
  larger — metadata should stay visually secondary to title/subtitle.

## Shape & Layout Language
- Nav: three-zone `justify-between` (tab group / center mark / account
  cluster) — reuse this exact three-zone rhythm for any toolbar-like row
  on the site (a library/browse page's filter bar, a footer's utility
  row).
- **The overlap/fan technique** (this system's signature): rather than a
  plain grid, arrange a row of items with **negative margin overlap**
  (`-ml-6`, cancelled on the first item) and per-item rotation/vertical
  offset expressed as *static utility classes* (not inline transform
  styles) so that `:hover` can cleanly override the resting pose. The
  featured/center item is both larger and un-rotated, sitting at a higher
  z-index. Reuse this fan technique for: a "featured content" row, a
  category-highlight row, even a team/avatar row if a playful "hand of
  cards" feel fits.
- Hover behavior for any card in a fanned/overlapping row: straighten
  (`rotate-0`), lift (`-translate-y-3`), scale up slightly (`scale-105`),
  jump to the top z-index. This hover language should be applied
  consistently to every fanned row on the site, not just the hero's.
- Radius: `rounded-2xl` on large content cards, `rounded-full` only for
  pills/chips/badges/avatars — never mix these up.

## The Atmosphere Layer
Background grid (two 1px gradients, `40px` cells) with a **radial mask**
fading it out toward the edges, concentrated behind the section's
headline/focal point. Reuse this on every section that has a centered
headline (features intro, pricing intro) — sections that are mostly a
content row/grid with no strong central headline can skip the grid to
avoid visual noise competing with the colorful cards.

## Extending to Other Sections
- **Features:** plain 3–4 column grid (not fanned — save the fan
  technique for content/catalog rows specifically) of bordered dark cards,
  each with a single accent-colored icon and white title, matching the
  nav's quiet-chrome philosophy.
- **Testimonials:** could reuse the fan/overlap technique with
  quote-cards instead of game cards — same negative-margin overlap,
  same hover-straighten interaction, colors rotating through the same
  five-gradient palette.
- **Pricing:** flat (non-fanned) cards on `#0c0c0e`, one accent gradient
  per tier from the same five-color rotation, rating-chip-style badge
  repurposed as a "Most Popular" tag.
- **Footer:** solid `#0c0c0e`, no grid texture, `neutral-500` links,
  reuse the nav's three-zone layout rhythm (link group / mark / utility
  cluster) mirrored at the bottom of the page.
- **Stats:** a row of chips styled like the rating badges (`bg-black/30`
  or bordered pill), numbers in bold white, labels in `neutral-400`.

## Do / Don't
- Do: keep chrome (nav, badges) quiet and neutral-toned; make every
  content card in a row a different saturated gradient; use the fan/
  overlap + straighten-on-hover technique for any "catalog" style row;
  keep title/subtitle/metadata in a strict opacity hierarchy.
- Don't: give every card the same color (kills the "real catalog" feel),
  apply the fan technique to more than one row per page (it's a
  centerpiece move, not a default grid replacement), mix `rounded-2xl`
  and `rounded-full` inconsistently, use inline transform styles for
  hoverable positioned elements (breaks the hover override).
