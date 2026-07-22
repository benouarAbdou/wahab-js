import { Cpu, ArrowRight } from "lucide-react";

export default function Variant3() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
      <div className="flex items-center gap-2">
        <Cpu className="h-4 w-4 text-emerald-400" />
        <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Compute
        </span>
      </div>
      <h3 className="mt-3 font-medium text-white">Dedicated GPU instances</h3>
      <p className="mt-1.5 text-sm text-neutral-400">
        Spin up A100s in seconds, billed by the second.
      </p>
      <button className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-400 hover:gap-2">
        Configure
        <ArrowRight className="h-3.5 w-3.5 transition-all" />
      </button>
    </div>
  );
}
