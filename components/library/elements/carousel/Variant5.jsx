"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const products = [
  { name: "Edge Functions", tone: "from-cyan-500/40 to-blue-600/40" },
  { name: "Object Storage", tone: "from-fuchsia-500/40 to-purple-600/40" },
  { name: "Managed Postgres", tone: "from-emerald-500/40 to-teal-600/40" },
  { name: "Queues", tone: "from-amber-500/40 to-orange-600/40" },
  { name: "Realtime", tone: "from-rose-500/40 to-pink-600/40" },
  { name: "Vector Search", tone: "from-indigo-500/40 to-sky-600/40" },
];

const PER_PAGE = 3;
const pages = Array.from({ length: Math.ceil(products.length / PER_PAGE) }, (_, i) =>
  products.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
);

export default function Variant5() {
  const [page, setPage] = useState(0);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-semibold text-white">Platform</h3>
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === page ? "w-5 bg-emerald-400" : "w-1.5 bg-neutral-700"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
              disabled={page === pages.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {pages[page].map((p, i) => (
          <div
            key={i}
            className={cn("flex h-28 items-end rounded-xl bg-gradient-to-br p-4", p.tone)}
          >
            <span className="text-sm font-medium text-white">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
