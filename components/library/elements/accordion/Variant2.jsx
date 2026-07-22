"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const items = [
  { title: "I. On beginnings", content: "Every long piece starts as a single, unremarkable sentence." },
  { title: "II. On revision", content: "The second draft is where the real writing happens." },
  { title: "III. On endings", content: "A good ending feels inevitable only in hindsight." },
];

export default function Variant2() {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md bg-[#faf9f6] p-6">
      {items.map((item, i) => (
        <div key={item.title} className={i !== 0 ? "mt-4 border-t border-neutral-300 pt-4" : ""}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full text-left font-serif text-lg text-neutral-900"
          >
            {item.title}
          </button>
          <p className={cn("mt-1 text-sm leading-relaxed text-neutral-600", open !== i && "hidden")}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}
