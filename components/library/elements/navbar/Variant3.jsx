"use client";

import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = ["Product", "Docs", "Pricing", "Blog"];

export default function Variant3() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-800 bg-black">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Terminal className="h-4 w-4 text-emerald-400" />
          platform
        </div>
        <div className="hidden items-center gap-6 text-sm text-neutral-400 sm:flex">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-white">
              {l}
            </a>
          ))}
        </div>
        <div className="hidden sm:block">
          <button className="rounded-md bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-black hover:bg-emerald-400">
            Dashboard
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-neutral-400 hover:text-white sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-neutral-800 px-6 py-3 sm:hidden">
          {links.map((l) => (
            <a key={l} href="#" className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:bg-neutral-900">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
