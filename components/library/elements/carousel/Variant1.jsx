"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const slides = [
  "from-sky-300 to-indigo-400",
  "from-rose-300 to-orange-400",
  "from-emerald-300 to-teal-400",
];

export default function Variant1() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
      <div className="relative aspect-video">
        <div className={`h-full w-full bg-gradient-to-br ${slides[index]} transition-colors`} />
        <button
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-1.5 py-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn("h-1.5 rounded-full transition-all", i === index ? "w-5 bg-slate-900" : "w-1.5 bg-slate-300")}
          />
        ))}
      </div>
    </div>
  );
}
