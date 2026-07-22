import Link from "next/link";
import { ArrowRight, Blocks, Check, LayoutTemplate } from "lucide-react";
import { sections, elements } from "@/lib/nav-data";
import CodeBlock from "@/components/preview/CodeBlock";

const CN_HELPER_SOURCE = `import clsx from "clsx";

export function cn(...inputs) {
  return clsx(...inputs);
}
`;

export default function Home() {
  const sectionVariantCount = sections.length * 3;
  const elementVariantCount = elements.length * 3;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #262626 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <p className="mb-4 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-400">
            React &middot; Tailwind CSS &middot; Next.js
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            A library of sections
            <br className="hidden sm:block" /> and elements you can ship.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-neutral-400 sm:text-lg">
            Every entry ships with a live, responsive preview and its real
            React + Tailwind source, ready to copy into your project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sections"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
            >
              Browse sections
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/elements"
              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
            >
              Browse elements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/sections"
            className="group rounded-xl border border-neutral-800 bg-neutral-950 p-8 transition-colors hover:border-neutral-700"
          >
            <LayoutTemplate className="h-6 w-6 text-neutral-400" />
            <h2 className="mt-4 text-xl font-medium text-white">Sections</h2>
            <p className="mt-2 text-sm text-neutral-500">
              {sections.length} full-width page section types &middot;{" "}
              {sectionVariantCount} total variants — hero, about, gallery,
              testimonials, footers, pricing, FAQ and more.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-300 group-hover:text-white">
              Explore sections
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/elements"
            className="group rounded-xl border border-neutral-800 bg-neutral-950 p-8 transition-colors hover:border-neutral-700"
          >
            <Blocks className="h-6 w-6 text-neutral-400" />
            <h2 className="mt-4 text-xl font-medium text-white">Elements</h2>
            <p className="mt-2 text-sm text-neutral-500">
              {elements.length} reusable element types &middot;{" "}
              {elementVariantCount} total variants — navbars, buttons, an
              interactive map, a real PDF viewer and more.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-300 group-hover:text-white">
              Explore elements
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-800 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-white">
            Using components in your own project
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-400">
            Every entry&apos;s <span className="text-neutral-300">Code</span>{" "}
            tab is the real, unmodified source file — copy it straight into
            your project. Most components need nothing beyond what&apos;s
            listed here; two element types need one extra file or asset.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="font-medium text-white">
                Works out of the box for most components
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-400">
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Tailwind CSS configured in your project</span>
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                      npm install lucide-react
                    </code>{" "}
                    — used for icons across ~43 of the 90 variants
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    If a file imports{" "}
                    <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                      {'{ cn } from "@/lib/cn"'}
                    </code>
                    , add the tiny helper below (needs{" "}
                    <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                      clsx
                    </code>
                    )
                  </span>
                </li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-lg border border-neutral-800">
                <CodeBlock code={CN_HELPER_SOURCE} />
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="font-medium text-white">
                Map element — one extra file
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                The 3 map variants import a precomputed world-dot dataset that
                sits alongside the component.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
                <li>
                  <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                    npm install dotted-map
                  </code>
                </li>
                <li>
                  Copy{" "}
                  <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                    mapData.json
                  </code>{" "}
                  into the same folder as the component (imported via{" "}
                  <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                    ./mapData.json
                  </code>
                  )
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="font-medium text-white">
                PDF Viewer element — package + asset
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Real PDF rendering via{" "}
                <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                  react-pdf
                </code>
                .
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
                <li>
                  <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                    npm install react-pdf
                  </code>
                </li>
                <li>
                  Place a PDF at{" "}
                  <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                    public/sample.pdf
                  </code>
                  , or change the{" "}
                  <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">
                    file
                  </code>{" "}
                  prop to your own
                </li>
                <li>The required CSS ships with the package — no extra copying</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Copying into a plain Vite/CRA React app instead of Next.js? Swap
            any <code className="rounded bg-neutral-900 px-1 py-0.5">@/...</code>{" "}
            import paths for relative ones — everything else (including the{" "}
            <code className="rounded bg-neutral-900 px-1 py-0.5">&quot;use client&quot;</code>{" "}
            directives, which are simply ignored outside Next.js) works as-is.
          </p>
        </div>
      </section>
    </div>
  );
}
