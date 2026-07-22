"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const cards = [
  { title: "Edge Functions", tone: "from-cyan-500/40 to-blue-600/40" },
  { title: "Object Storage", tone: "from-fuchsia-500/40 to-purple-600/40" },
  { title: "Managed Postgres", tone: "from-emerald-500/40 to-teal-600/40" },
];

export default function Variant3() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      <div className={cn("flex h-32 items-center justify-center rounded-lg bg-gradient-to-br text-lg font-medium text-white", cards[index].tone)}>
        {cards[index].title}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)}
          className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
        <div className="flex gap-1.5">
          {cards.map((_, i) => (
            <div key={i} className={cn("h-1.5 w-1.5 rounded-full", i === index ? "bg-emerald-400" : "bg-neutral-700")} />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % cards.length)}
          className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white"
        >
          Next
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
