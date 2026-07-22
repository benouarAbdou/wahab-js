"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export default function Variant1() {
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1 rounded-lg bg-white p-4">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 disabled:opacity-30"
        disabled={page === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium",
            page === p ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
          )}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => setPage((p) => Math.min(5, p + 1))}
        className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 disabled:opacity-30"
        disabled={page === 5}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
