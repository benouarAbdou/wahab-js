# Design System — Bold Studio (Creative Agency)

This hero defines a full visual system for a creative/branding agency
site. Use this document to keep every other section (services, work
showcase, testimonials, footer) speaking the same loud-but-tight language
instead of relaxing into generic spacious SaaS patterns further down the
page.

## Identity Summary
Black canvas, exactly one bright accent color (lime), mixed-case bold
sans type, hand-drawn decoration (sparkles, starbursts, skewed stripe
marks), and — critically — a **tight** vertical rhythm. This system's
personality comes as much from its compactness as from its color.

## Core Palette (system-wide)
- Background: `black` for every section, no exceptions — this system does
  not have a "light section" mode.
- **Primary accent: `lime-300`.** This is the only accent color in the
  entire system. It marks every interactive/primary element: CTA buttons,
  the register/signup button, the avatar-count ring, the diagonal ribbon
  banner background. If the site needs a second color for variety, it
  should appear only in a decorative/illustrative role (see the violet
  starburst) — never on another interactive element, or the "one accent"
  discipline that makes lime feel special is lost.
- Secondary/decorative-only accent: `violet-500`, used exclusively for the
  starburst shape and nothing else. Do not reuse violet on buttons, links,
  or badges anywhere else on the site.
- Text: `white` primary, `neutral-300`/`neutral-400` secondary.
- Ribbon/ any lime-filled surface: text flips to `black` for contrast —
  this inversion rule (dark text on the bright accent, white text
  everywhere else) should apply consistently anywhere lime is used as a
  fill.
- Photo/avatar placeholders: varied warm/cool gradient pairs — decorative
  only, keep them desaturated relative to the lime so lime still reads as
  the loudest color on the page.

## Typography System
- Headlines: `font-bold`, mixed case (never uppercase — that's a
  different system, see the EdTech/brutalist variants in this library),
  `leading-tight`, sized `text-4xl`→`text-6xl` for hero-level statements,
  stepping down for section headlines.
- **Inline UI element inside a headline** is this system's signature
  typographic move: an icon-only pill/circle button sits *between words*
  in a sentence (`align-middle`), rather than below the text as a
  separate CTA. Reuse this at least once per major section if there's a
  natural place for it (e.g. "Our work speaks [→] for itself") — it's a
  distinctive enough trick that using it only in the hero would make the
  rest of the site feel like a different, more conventional template.
- Ribbon/banner text: `text-sm font-bold uppercase tracking-wide` — this
  is the *only* place uppercase tracked text belongs in this system;
  everywhere else stays mixed case.
- Stats: strict three-line block — small `neutral-400` label, large
  `font-bold` number, `neutral-500` caption — repeated identically for
  every stat on the site (services delivered, years active, team size,
  etc.), separated by thin 1px vertical dividers, never boxed individually.

## Spacing & Rhythm — the most important system rule
**Everything sits close together.** This is a compact, high-density system,
not a spacious SaaS one:
- Section padding: `py-8`–`py-10`, never creeping to `py-14`+.
- Gaps between major blocks within a section (headline → CTA, CTA →
  banner, banner → footer content): `mt-6` to `mt-12`, never `mt-16`+.
- Apply this same tight rhythm to every other section on the site — a
  services or work-showcase section with generous `py-24` padding will
  feel like it belongs to a completely different (calmer) design system
  even if the colors match.

## Shape & Decoration Language
- **Full-bleed rotated ribbon**: a bar wider than its container
  (`w-[120%] -translate-x-[10%]`), slightly rotated (`-rotate-2`), lime
  fill, black uppercase text — reuse this exact technique anywhere a
  "cuts across the page" banner effect is wanted (e.g. a scrolling client-
  logo strip, a "now hiring" banner) instead of a plain full-width bar.
- **Corner stripe marks**: 3–4 short skewed bars in a corner, desktop-only
  flourish — sprinkle sparingly (one per section max) as a signature
  texture detail, not on every corner of every section.
- **Clip-path starburst**: a many-point star via a single `clip-path:
  polygon(...)` on a plain violet div — this is the system's one "loud
  illustrative" shape; use at most one per page (behind the hero
  headline) so it stays a landmark rather than wallpaper.
- **Sparkle accents**: small four-point sparkle icons at low opacity,
  scattered near headlines — reusable in small doses (2–3 per section)
  anywhere a bit of "hand-drawn energy" is wanted next to a headline.
- **Circular arced-text badge**: a looping label arced around a small
  circle with a centered icon (built by rotating each character around
  the circle via CSS transforms) — reuse as a small "try it free" /
  "new" / "est. 20XX" badge wherever a section wants a playful stamp
  instead of a flat text label.
- Corners: `rounded-full` for every button/pill/badge/avatar,
  organic-blob `border-radius` values for photo backdrop shapes,
  `rounded-2xl` for photo frames themselves. No sharp corners anywhere in
  this system.

## Extending to Other Sections
- **Services/offerings:** reuse the ribbon technique to list service
  categories (as the hero does with "Web Design / App Design /
  Branding"), or lay them out as bordered `rounded-2xl` cards with one
  lime-accented icon each.
- **Work showcase:** photo tiles using the same organic-blob backdrop +
  rounded photo frame composition as the hero's bottom section, captions
  in the same tight three-line stat-block rhythm (project name, client,
  year).
- **Testimonials:** quote in mixed-case bold, attribution with a small
  circular avatar (gradient placeholder, same palette as the hero's
  avatar stack), lime quotation mark accent instead of a generic icon.
- **Footer:** stays black, reuses the two-dot logo mark and corner stripe
  motif once, lime for link hovers only (not link default state, to keep
  lime feeling special), tight padding matching the rest of the page.

## Do / Don't
- Do: keep everything tight and compact, restrict lime to interactive
  elements only, use the inline-headline-icon trick at least once more
  outside the hero, reuse the ribbon/starburst/circular-badge motifs
  sparingly across sections.
- Don't: introduce a second interactive accent color, let any section's
  padding relax into "spacious SaaS" territory, use uppercase tracked
  text anywhere except a ribbon/banner, stack more than one starburst or
  more than one ribbon per page.
