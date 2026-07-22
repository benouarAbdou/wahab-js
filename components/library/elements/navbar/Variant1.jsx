"use client";

import { useState } from "react";
import { Layers, Menu, X } from "lucide-react";

export default function Variant1() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-slate-100 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-semibold text-slate-900">
          <Layers className="h-5 w-5" />
          Product
        </div>
        <div className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
          <a href="#" className="hover:text-slate-900">Features</a>
          <a href="#" className="hover:text-slate-900">Pricing</a>
          <a href="#" className="hover:text-slate-900">Docs</a>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="#" className="text-sm font-medium text-slate-700">Sign in</a>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            Get started
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-slate-500 hover:text-slate-900 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-slate-100 px-6 py-3 sm:hidden">
          <a href="#" className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50">Features</a>
          <a href="#" className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50">Pricing</a>
          <a href="#" className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50">Docs</a>
          <a href="#" className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50">Sign in</a>
          <button className="mt-2 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}
