"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { title: "GET /v1/deployments", content: "Returns a paginated list of deployments for the project." },
  { title: "POST /v1/deployments", content: "Triggers a new deployment from the given git ref." },
  { title: "DELETE /v1/deployments/:id", content: "Cancels or rolls back the given deployment." },
];

export default function Variant3() {
  const [open, setOpen] = useState(null);

  return (
    <div className="w-full max-w-md space-y-2">
      {items.map((item, i) => (
        <div key={item.title} className="rounded-lg border border-neutral-800 bg-neutral-900/50">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left font-mono text-xs text-emerald-400"
          >
            {item.title}
            <Plus className={cn("h-3.5 w-3.5 shrink-0 text-neutral-500 transition-transform", open === i && "rotate-45")} />
          </button>
          {open === i && (
            <p className="px-4 pb-3 text-sm text-neutral-400">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
