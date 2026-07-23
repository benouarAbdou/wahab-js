"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const cards = [
  { name: "Northpeak", role: "Design Ops", tone: "from-sky-300 to-indigo-300" },
  { name: "Fieldnotes", role: "Product", tone: "from-rose-300 to-orange-300" },
  { name: "Cursive", role: "Engineering", tone: "from-emerald-300 to-teal-300" },
  { name: "Loopline", role: "Marketing", tone: "from-violet-300 to-fuchsia-300" },
  { name: "Vantage", role: "Customer Success", tone: "from-amber-300 to-rose-300" },
  { name: "Meridian", role: "Finance", tone: "from-teal-300 to-sky-300" },
];

const PER_PAGE = 3;
const pages = Array.from({ length: Math.ceil(cards.length / PER_PAGE) }, (_, i) =>
  cards.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
);

export default function Variant4() {
  const [page, setPage] = useState(0);

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">Customer stories</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
            disabled={page === pages.length - 1}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {pages[page].map((card, i) => (
          <div key={i} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className={`h-20 rounded-lg bg-gradient-to-br ${card.tone}`} />
            <p className="mt-3 text-sm font-semibold text-slate-900">{card.name}</p>
            <p className="text-xs text-slate-500">{card.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-1.5">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === page ? "w-5 bg-slate-900" : "w-1.5 bg-slate-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
