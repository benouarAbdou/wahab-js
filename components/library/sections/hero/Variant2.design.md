# Design System — Minimal Editorial

This hero is the seed of a full visual system, not a one-off layout. Use
this document to design the rest of the site (nav, features, testimonials,
pricing, footer, etc.) so it reads as one considered publication rather
than a hero bolted onto a generic template.

## Identity Summary
A quiet, print-magazine aesthetic. Warm paper background, serif display
type, hairline rules instead of shadows, no gradients, no saturated color.
The system communicates confidence through restraint — if a section looks
like it's trying too hard, it's off-brand.

## Core Palette (use everywhere, not just the hero)
- `#faf9f6` — page background ("paper"). Every section should default to
  this unless deliberately alternating (see below).
- `#f0ede6` — secondary surface tone, for offset cards / subtle depth
  (never a drop shadow — depth comes from a second flat shape offset
  behind the first).
- `neutral-900` — primary text / headlines.
- `neutral-600` — body copy.
- `neutral-500` — eyebrow labels, captions, muted metadata.
- `neutral-300` — hairline borders (1px), and decorative type (e.g. large
  faint glyphs).
- **No accent color.** This system deliberately has zero brand color.
  Interactive elements are distinguished by underline + weight, not hue.
  If a section absolutely needs an accent (e.g. an error state), borrow
  the most muted option available rather than introducing something
  saturated.
- Alternate section background (for rhythm between sections): pure
  `white`, never a second beige or a gray — keep contrast between
  sections subtle (paper vs. white), not a big value jump.

## Typography System
- **Display / headline font:** serif (`font-serif`), `leading-tight`,
  sentence case (never uppercase, never letter-spaced). Sizes scale from
  `text-4xl` (mobile) to `text-5xl`–`text-6xl` (desktop) depending on
  section prominence — hero gets the largest, sub-section headings one or
  two steps down.
- **UI / body font:** the default sans. Used for body copy, nav, buttons,
  labels, form fields — anything that isn't a headline.
- **Eyebrow label pattern** (reuse on every section): small sans,
  `uppercase`, `tracking-widest`, `font-medium`, `neutral-500`, placed
  directly above a headline. Content differs per section ("Issue No. 01 —
  2026" in the hero; use section-appropriate equivalents elsewhere, e.g.
  "Chapter 02" for features, "Reader Mail" for testimonials).
- **Links/CTAs are never pill buttons in this system.** Primary action:
  text + `border-b-2 border-neutral-900`. Secondary action: plain
  `neutral-500` text, hover `neutral-900`. Carry this rule into every
  section — a rounded, filled button anywhere on the site will look
  imported from a different template.

## Spacing & Rhythm
- Section padding: `px-6`, vertical `py-20` → `py-28` on desktop for major
  sections (hero, features); tighter sections (a single testimonial quote,
  a stat strip) can drop to `py-16`.
- Two-column layouts: `gap-12`, `items-center`, collapse to one column
  below `lg`. This is the standard content/artifact split — reuse it for
  features, about, and testimonial sections, not just the hero.
- Line-length discipline: body copy always gets a `max-w-md` or `max-w-xl`
  cap. Never let paragraph text stretch full-width — that is the single
  most common way this system gets broken.

## Surface & Shape Language
- Corners: `rounded-lg` only, never `rounded-full`/pill, never sharp
  0-radius. Consistent everywhere: cards, image frames, buttons-that-look-
  like-cards.
- Borders: hairline `border border-neutral-300` is the *only* depth cue
  besides the offset-card trick below. No `shadow-md`/`shadow-lg`, at most
  a `shadow-sm` on a white card sitting on the paper background.
- **Offset-card technique** (the system's signature depth trick, used in
  the hero's artifact panel): stack two rounded rectangles, the back one
  in `#f0ede6` offset by `translate-x-6 translate-y-6`, the front one white
  with a hairline border. Reuse this anywhere you'd normally reach for a
  drop shadow — a testimonial photo, a pricing card, a feature graphic.

## Iconography & Illustration Rule
No icon library, no line-icons, no illustrations. Where the hero needed a
placeholder image, it used a single oversized serif glyph ("Aa") in
`neutral-300` centered in a card — a *typography specimen* standing in for
imagery. Apply the same idea elsewhere: a large muted serif numeral for a
stat, a big serif ampersand for a divider, a serif initial for an avatar
placeholder. If real photography becomes available later, it can replace
these specimens directly inside the same offset-card frame without
changing the surrounding system.

## Extending to Other Sections
- **Nav:** wordmark in serif, plain text links, no button chrome except
  possibly one text-link-with-underline as the primary nav CTA.
- **Features / About:** same two-column, eyebrow-label-then-serif-headline
  pattern as the hero, alternating which side text/artifact sit on as you
  move down the page for rhythm.
- **Testimonials:** a single large serif pull-quote (as in a magazine
  callout), attribution in small sans below, no card border needed — let
  it breathe in full paper background.
- **Stats:** big serif numerals (not a bold sans), muted `neutral-500`
  captions underneath, laid out in a simple row with hairline dividers
  between columns instead of separate boxed cards.
- **Pricing:** cards use the offset-card technique instead of shadows;
  price itself set in serif; feature list in body sans with hairline
  dividers between rows, not bullet icons.
- **Footer:** flip to a slightly deeper paper tone or plain white, keep
  serif for the footer wordmark, sans + `neutral-500` for link columns,
  hairline `border-t` separating it from the page above — never a hard
  color block footer.

## Do / Don't
- Do: hairlines, offset cards, serif headlines, generous line-length caps.
- Don't: gradients, drop shadows beyond `shadow-sm`, pill buttons, icon
  libraries, saturated accent colors, uppercase body text.
