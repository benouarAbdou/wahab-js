"use client";

import { useState } from "react";

export default function Variant2() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex h-80 w-full max-w-md items-center justify-center bg-[#faf9f6]">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="border-b-2 border-neutral-900 pb-1 font-serif text-base text-neutral-900"
      >
        Open the archive
      </button>

      {open && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30 p-6">
          <div className="w-full max-w-xs border border-neutral-900 bg-[#faf9f6] p-6">
            <h3 className="font-serif text-xl text-neutral-900">The Archive</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Every issue since 2019, indexed by year and subject.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 border-b-2 border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
