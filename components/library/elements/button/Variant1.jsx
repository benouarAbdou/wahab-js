import { ArrowRight } from "lucide-react";

export default function Variant1() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg bg-white p-8">
      <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700">
        Primary
      </button>
      <button className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50">
        Secondary
      </button>
      <button className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
        Ghost
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
