# wahab js

A browsable library of React + Tailwind CSS sections and elements. Every
entry ships with a live, responsive preview (rendered in its own iframe so
responsive breakpoints behave exactly like a real page) and its real,
unmodified source in a "Code" tab you can copy straight into a project.

- **12 section types** (hero, about, gallery, testimonials, footers,
  articles, CTA, pricing, FAQ, stats & logos, team, contact) × 3 design
  variants each = 36 sections.
- **18 element types** (article card, navbar, button, map, PDF viewer, card,
  badge, modal, accordion, tabs, form input, avatar, pagination, breadcrumb,
  stat counter, timeline, carousel, toast) × 3 design variants each = 54
  elements.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start` (serve the production build),
`npm run lint`.

## Project structure

```
app/
  page.js                          Homepage
  sections/, elements/             Catalog pages (one per type)
  preview/[category]/[type]/[variant]/page.js
                                    Bare, chrome-less route that renders a
                                    single variant standalone — this is what
                                    each catalog page's iframe points at, so
                                    Tailwind's sm:/md:/lg: breakpoints react
                                    to a real, independent viewport instead
                                    of a squeezed <div>.
components/
  site/                            Site chrome (nav, sidebar, footer)
  preview/                         ComponentPreview (preview/code tabs,
                                    viewport switcher), CodeBlock, PreviewFrame
  library/sections/<type>/Variant{1,2,3}.jsx
  library/elements/<type>/Variant{1,2,3}.jsx
lib/
  nav-data.js                      Drives the sidebars + overview pages
  getComponentSource.js            Reads a variant's real source for the Code tab
  variantRegistry.js                Maps category/type/variant → component,
                                    used by the /preview route
public/sample.pdf                  Sample document for the PDF Viewer element
```

## Using a component in your own project

Each catalog page's **Code** tab shows the real, unmodified source file for
that variant. For the large majority of components you can copy-paste it
directly; two element types need one extra file or asset.

### Works out of the box for most components

- Tailwind CSS configured in your project
- `npm install lucide-react` — used for icons across ~43 of the 90 variants
- If a file imports `{ cn } from "@/lib/cn"` (13 files — tabs, accordion,
  pagination, the map legend, etc.), add this tiny helper (needs
  `npm install clsx`):

  ```js
  import clsx from "clsx";

  export function cn(...inputs) {
    return clsx(...inputs);
  }
  ```

  or just delete the `cn(...)` calls and inline the conditional class logic
  yourself — it's only ever used for simple `active ? "x" : "y"` toggling.

### Map element — one extra file

The 3 map variants (`components/library/elements/map/Variant{1,2,3}.jsx`)
import a precomputed world-dot dataset that sits alongside the component:

- `npm install dotted-map`
- Copy `mapData.json` from the same folder into your project (imported via
  `./mapData.json`)

### PDF Viewer element — package + asset

- `npm install react-pdf`
- Place a PDF at `public/sample.pdf`, or change the `file` prop to point at
  your own PDF
- The required CSS (`react-pdf/dist/Page/AnnotationLayer.css` and
  `TextLayer.css`) ships with the package — no extra copying

### Not using Next.js?

Swap any `@/...` import paths for relative ones. The `"use client"`
directives at the top of some files are a Next.js App Router convention —
they're simply ignored (and harmless) outside of it.

## Notable implementation details

- **Preview system**: `ComponentPreview` renders each variant inside an
  `<iframe src="/preview/{category}/{type}/{variant}">`. The iframe is a
  genuinely separate browsing context, so switching the Desktop/Tablet/Mobile
  viewport toggle actually changes what width Tailwind's responsive classes
  see — unlike constraining a `<div>`'s CSS width, which does not affect
  media-query evaluation. `PreviewFrame` (inside the iframe) measures its own
  height with `ResizeObserver` and reports it back to the parent via
  `postMessage` so the iframe auto-sizes to content.
- **Map**: pure SVG/CSS, no API key or external tiles — built on the
  `dotted-map` package's deterministic world-dot data.
- **PDF Viewer**: real rendering via `react-pdf` (pdf.js), dynamically
  imported with `ssr: false` since pdf.js touches browser-only APIs at module
  load time.

## Tech stack

Next.js (App Router) · React · Tailwind CSS · JavaScript · lucide-react ·
react-syntax-highlighter · react-pdf · dotted-map · clsx
