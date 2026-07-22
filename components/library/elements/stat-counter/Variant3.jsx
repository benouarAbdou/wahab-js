import { Activity } from "lucide-react";

export default function Variant3() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-neutral-500">Requests / sec</p>
        <Activity className="h-4 w-4 text-emerald-400" />
      </div>
      <p className="mt-2 font-mono text-3xl font-semibold text-white">2,847</p>
      <div className="mt-3 flex h-6 items-end gap-0.5">
        {[40, 60, 45, 80, 55, 90, 65, 75, 50, 85].map((h, i) => (
          <div key={i} className="w-full rounded-sm bg-emerald-500/60" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
