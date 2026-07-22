"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const tabs = ["Logs", "Metrics", "Traces", "Alerts"];

export default function Variant3() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="inline-flex rounded-lg border border-neutral-800 bg-neutral-900 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              active === tab ? "bg-neutral-800 text-white" : "text-neutral-500 hover:text-neutral-300"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs text-neutral-500">
        streaming: {active.toLowerCase()}...
      </p>
    </div>
  );
}
