"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { title: "Shipping", content: "Orders ship within 2 business days via tracked courier." },
  { title: "Returns", content: "30-day no-questions-asked return window on all items." },
  { title: "Warranty", content: "Every product includes a 1-year limited warranty." },
];

export default function Variant1() {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
      {items.map((item, i) => (
        <div key={item.title} className={i !== 0 ? "border-t border-slate-100" : ""}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-900"
          >
            {item.title}
            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", open === i && "rotate-180")} />
          </button>
          {open === i && (
            <p className="px-4 pb-3 text-sm text-slate-600">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
