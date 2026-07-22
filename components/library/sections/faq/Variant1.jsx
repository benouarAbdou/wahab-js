"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const faqs = [
  { q: "Can I use this for commercial projects?", a: "Yes, all components are free to use in personal and commercial projects without attribution." },
  { q: "Do I need a design background?", a: "Not at all — every component ships with sensible defaults so it looks great out of the box." },
  { q: "Is it compatible with any React framework?", a: "It's built for Next.js and Tailwind, but the JSX works in any React setup with Tailwind installed." },
];

export default function Variant1() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <span className="font-medium text-slate-900">{f.q}</span>
                <ChevronDown
                  className={cn("h-4 w-4 shrink-0 text-slate-400 transition-transform", open === i && "rotate-180")}
                />
              </button>
              {open === i && (
                <p className="pb-4 text-sm leading-relaxed text-slate-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
