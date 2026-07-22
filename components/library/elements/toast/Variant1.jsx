import { CheckCircle2, X } from "lucide-react";

export default function Variant1() {
  return (
    <div className="flex w-full max-w-sm items-start gap-3 rounded-xl bg-white p-4 shadow-lg ring-1 ring-slate-100">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-900">Changes saved</p>
        <p className="text-sm text-slate-500">Your profile has been updated successfully.</p>
      </div>
      <button aria-label="Dismiss">
        <X className="h-4 w-4 text-slate-400 hover:text-slate-700" />
      </button>
    </div>
  );
}
