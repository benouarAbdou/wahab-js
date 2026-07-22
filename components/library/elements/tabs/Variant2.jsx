"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const tabs = ["Essays", "Interviews", "Reviews"];

export default function Variant2() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="w-full max-w-md bg-[#faf9f6] p-6">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "font-serif text-lg transition-colors",
              active === tab ? "text-neutral-900 underline underline-offset-4" : "text-neutral-400 hover:text-neutral-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-neutral-600">
        Reading list for &ldquo;{active}&rdquo; will appear here.
      </p>
    </div>
  );
}
