"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const faqs = [
  { q: "What regions do you deploy to?", a: "18 regions across 6 continents, with automatic edge routing." },
  { q: "What's your uptime SLA?", a: "99.99% uptime on all paid plans, with status published publicly." },
  { q: "Do you support custom runtimes?", a: "Yes — bring your own Docker image or use one of our managed runtimes." },
];

export default function Variant3() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-neutral-950 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-white">FAQ</h2>
        <div className="mt-6 space-y-2">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-lg border border-neutral-800 bg-neutral-900/50">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-white"
              >
                {f.q}
                <Plus className={cn("h-4 w-4 shrink-0 text-neutral-500 transition-transform", open === i && "rotate-45")} />
              </button>
              {open === i && (
                <p className="px-4 pb-3 text-sm text-neutral-400">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
