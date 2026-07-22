import { AlertTriangle } from "lucide-react";

export default function Variant3() {
  return (
    <div className="flex w-full max-w-sm items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
      <div>
        <p className="text-sm font-medium text-amber-200">High memory usage</p>
        <p className="mt-0.5 font-mono text-xs text-amber-300/70">
          prod-worker-3 at 92% — consider scaling.
        </p>
      </div>
    </div>
  );
}
