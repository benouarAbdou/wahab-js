import Link from "next/link";
import { ArrowRight, Blocks, LayoutTemplate } from "lucide-react";
import { sections, elements } from "@/lib/nav-data";

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
    </div>
  );
}
