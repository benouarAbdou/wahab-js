"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export default function Variant3() {
  const [page, setPage] = useState(2);

  return (
    <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 p-4">
      {[1, 2, 3].map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={cn(
            "h-2 w-2 rounded-full transition-all",
            page === p ? "w-6 bg-emerald-400" : "bg-neutral-700 hover:bg-neutral-500"
          )}
          aria-label={`Page ${p}`}
        />
      ))}
      <span className="ml-2 font-mono text-xs text-neutral-500">
        page {page} / 3
      </span>
    </div>
  );
}
