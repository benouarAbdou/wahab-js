"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Variant2() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-300 bg-[#faf9f6]">
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-serif text-xl text-neutral-900">Fieldnotes</span>
        <div className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">
          <a href="#" className="hover:text-neutral-900">Essays</a>
          <a href="#" className="hover:text-neutral-900">Interviews</a>
          <a href="#" className="hover:text-neutral-900">Archive</a>
          <a href="#" className="hover:text-neutral-900">About</a>
        </div>
        <button className="hidden border-b-2 border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900 sm:block">
          Subscribe
        </button>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-neutral-600 hover:text-neutral-900 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-neutral-300 px-6 py-4 sm:hidden">
          <a href="#" className="py-1.5 text-sm text-neutral-700 hover:text-neutral-900">Essays</a>
          <a href="#" className="py-1.5 text-sm text-neutral-700 hover:text-neutral-900">Interviews</a>
          <a href="#" className="py-1.5 text-sm text-neutral-700 hover:text-neutral-900">Archive</a>
          <a href="#" className="py-1.5 text-sm text-neutral-700 hover:text-neutral-900">About</a>
          <button className="mt-2 self-start border-b-2 border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900">
            Subscribe
          </button>
        </div>
      )}
    </nav>
  );
}
