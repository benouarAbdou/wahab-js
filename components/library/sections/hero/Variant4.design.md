# Design System — Playful EdTech

This hero establishes a full visual system for a consumer education
product. Use this document to carry the same energy through every other
section (features, testimonials, pricing, footer) rather than letting the
rest of the site drift into a generic dark SaaS look once the hero ends.

## Identity Summary
Loud, colorful, illustration-driven, dark canvas. The system's core trick
is contrast: a near-black background makes a small palette of saturated
candy colors (amber, indigo, pink, lime, sky, rose, violet) pop hard, and
a single condensed display font gives every headline poster-like impact.

## Core Palette (system-wide)
- Background: `#111113` everywhere — every section, not just the hero.
  Never switch to pure white/light sections in this system; the contrast
  trick depends on staying dark throughout.
- Secondary dark surface (panels/cards-within-a-section): `neutral-950`.
- Rotating cast of accent fills for cards/chips/icons — pick 3–4 per
  section from: `amber-400`, `indigo-500`, `pink-400`, `lime-400`,
  `sky-400`, `rose-300`, `violet-500`. Never reuse the *same* single
  accent for everything (unlike a restrained system, this one is
  supposed to feel like a box of crayons) — but always keep text on top
  of a colored fill either `white` or `neutral-950`, never a third color.
- Icon chips on colored cards: `bg-white/25`, white icon — this
  translucent-white-chip-on-color pattern should repeat on every card
  anywhere on the site.
- Text: `white` primary, `neutral-500` muted/secondary, `neutral-400` for
  longer body copy inside dark panels.

## Typography System
- **Headline font: Anton** (loaded via `next/font/google`), uppercase,
  tight leading (`leading-[0.95]`), used for every major section headline
  site-wide — not just the hero. This is the non-negotiable ingredient:
  if a section's headline uses the default sans instead of Anton, it will
  immediately look like it belongs to a different product.
- Headline sizing scales down for sub-sections: hero gets the largest
  fluid clamp size; feature/testimonial section headlines can drop to a
  fixed `text-2xl`–`text-3xl` (still Anton, still uppercase).
- Headlines can be **center-aligned** (as in the hero) or left-aligned
  depending on section content shape — center for a single punchy
  statement, left when a headline sits beside a paragraph or card grid.
- Body/UI text (nav, card descriptions, buttons): plain sans, normal
  case, `font-semibold` for card titles, `font-normal`/`leading-relaxed`
  for descriptions — Anton is reserved for headlines only, never body
  copy or UI chrome.
- **Highlight-word pattern**: any time a headline needs to emphasize one
  word, either recolor it (e.g. `amber-400`) or wrap it in a small rotated
  colored "sticker" chip (`-rotate-2 rounded bg-lime-400 px-2
  text-neutral-950`). Reuse this sticker technique across every section
  headline that needs a highlighted word instead of inventing a new
  emphasis style.

## Shape & Surface Language
- Corners: `rounded-xl`/`rounded-2xl` on cards and panels — soft and
  friendly, never sharp corners, never a hairline-only style.
- Dashed borders (`border-2 border-dashed`) are this system's "handwritten
  annotation" motif — used around a highlighted word or a badge circle.
  Reuse dashed borders anywhere you want to suggest "look here" without a
  full color fill.
- Cards sit on colored fills, not on borders — unlike the technical/
  editorial systems in this library, this one's default card is a solid
  saturated color block with a white icon chip, not an outlined shape.

## Iconography & Illustration Rule
Use `lucide-react` icons throughout (pencil, globe, book, rocket, camera,
graduation cap, pie chart, etc.) treated as **floating doodles**: absolute
positioned, slightly rotated, colored individually (not monochrome),
`hidden` on mobile. This "scattered stickers around the headline" motif
should reappear near any other section's headline that wants the same
playful energy (e.g. a small rocket near a "programs"/"features" heading,
a lightbulb near a "how it works" heading) — 2–4 icons per section is
enough; more starts to look cluttered.

### Circular arced-text badge (signature motif)
A small circle with a dashed border, an arrow (or other icon) centered,
and tiny looping label text arced around its circumference (built by
rotating each character by `360/len` degrees and translating outward by a
fixed radius — pure CSS transforms, no image). Use this as a recurring
"stamp" motif: next to the hero headline, next to a section sub-heading,
even as a small trust badge near a pricing CTA ("est. 2024", "5-star
rated", etc.) — it's this system's signature flourish, on the same tier
of importance as the Anton font choice.

## Spacing & Rhythm
- Standard container `max-w-5xl`, section padding `px-6/px-10 py-14/py-16`.
- The hero pattern of **stacking a headline directly above a dark "sub-
  panel"** (`rounded-2xl bg-neutral-950 p-8/p-10`) inside the *same*
  section, rather than starting a new `<section>`, is a reusable
  technique for pairing any headline with its supporting content block
  (e.g. testimonials headline directly above the quote cards, pricing
  intro directly above the plan cards).
- When laying out 3 items side by side (program cards, feature cards,
  pricing tiers), connect them with a **thin vertical connector bar**
  (`w-1.5 rounded-full bg-neutral-800`) between each pair on desktop —
  this "chained together" detail is unique to this system and should be
  reused any time 3 equal-weight items sit in a row.

## Extending to Other Sections
- **Features:** same colored-card + white-icon-chip pattern as the hero's
  programs row, connector bars between cards, Anton section headline with
  one highlighted word in the sticker style.
- **Testimonials:** quote cards on `neutral-950`, a small colored avatar
  chip (not a photo) per person, star ratings in `amber-400`; headline in
  Anton above.
- **Pricing:** each tier is a solid color card (rotate through the accent
  palette per tier) with a white icon chip for the plan's "icon", price in
  Anton, feature list in plain sans with small check icons.
- **Stats:** big Anton numerals in an accent color, plain sans captions
  underneath, floating doodle icons scattered around the row.
- **Footer:** stays `#111113` with the grid backdrop; wordmark repeats the
  nav's two-tone lettering trick (base color + one accent-colored
  syllable); keep link columns in plain sans, `neutral-500`.

## Do / Don't
- Do: Anton for headlines, saturated multi-color card fills, dashed
  "look-here" borders, floating icon doodles, the circular arced-text
  stamp, connector bars between chained cards.
- Don't: use Anton for body/UI text, use a single muted accent (this
  system wants variety), use drop shadows for depth (colored fills +
  white icon chips carry that job instead), leave headlines without at
  least one highlighted/stickered word.
