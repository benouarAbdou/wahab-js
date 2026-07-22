"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const tabs = ["Overview", "Features", "Pricing", "FAQ"];

export default function Variant1() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6">
      <div className="flex gap-1 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-400 hover:text-slate-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Showing content for <span className="font-medium text-slate-900">{active}</span>.
      </p>
    </div>
  );
}
