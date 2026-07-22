import { ArrowUpRight } from "lucide-react";

export default function Variant3() {
  return (
    <article className="group w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700">
      <div className="flex items-center justify-between">
        <span className="rounded bg-neutral-800 px-2 py-0.5 text-xs font-medium text-neutral-400">
          Infra
        </span>
        <ArrowUpRight className="h-4 w-4 text-neutral-600 group-hover:text-white" />
      </div>
      <h3 className="mt-3 font-medium text-white">Zero-downtime migrations at scale</h3>
      <p className="mt-1.5 text-sm text-neutral-400">
        How we moved 40M rows without a single failed request.
      </p>
      <p className="mt-4 font-mono text-xs text-neutral-600">6 min read &middot; May 28</p>
    </article>
  );
}
