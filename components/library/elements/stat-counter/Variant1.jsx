import { ArrowUpRight } from "lucide-react";

export default function Variant1() {
  return (
    <div className="w-full max-w-xs rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <p className="text-sm text-slate-500">Monthly revenue</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-3xl font-bold text-slate-900">$48,200</p>
        <span className="mb-1 flex items-center gap-0.5 text-xs font-medium text-emerald-600">
          <ArrowUpRight className="h-3 w-3" />
          12.4%
        </span>
      </div>
    </div>
  );
}
