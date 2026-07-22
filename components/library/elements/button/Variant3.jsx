import { Loader2, ArrowRight } from "lucide-react";

export default function Variant3() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg bg-neutral-950 p-8">
      <button className="flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-400">
        Deploy
        <ArrowRight className="h-4 w-4" />
      </button>
      <button className="rounded-md border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-900">
        Cancel
      </button>
      <button
        disabled
        className="flex items-center gap-2 rounded-md bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-neutral-500"
      >
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading
      </button>
    </div>
  );
}
