"use client";

import { useState } from "react";
import { Terminal, X } from "lucide-react";

export default function Variant3() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex h-80 w-full max-w-md items-center justify-center rounded-xl bg-black">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400"
      >
        Run command
      </button>

      {open && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-6">
          <div className="w-full max-w-xs rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <h3 className="text-sm font-medium">Confirm deploy</h3>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-4 w-4 text-neutral-500 hover:text-white" />
              </button>
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-400">
              $ deploy --env production
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:bg-neutral-900"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-black hover:bg-emerald-400"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
