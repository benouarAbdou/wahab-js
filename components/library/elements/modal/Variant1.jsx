"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Variant1() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex h-80 w-full max-w-md items-center justify-center rounded-xl bg-slate-50">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Delete account
      </button>

      {open && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-6">
          <div className="w-full max-w-xs rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-slate-900">Delete account?</h3>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-4 w-4 text-slate-400 hover:text-slate-700" />
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              This action cannot be undone. All your data will be permanently
              removed.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
