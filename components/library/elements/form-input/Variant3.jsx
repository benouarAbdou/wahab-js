import { Search } from "lucide-react";

export default function Variant3() {
  return (
    <div className="w-full max-w-sm space-y-4 rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus-within:border-emerald-500">
        <Search className="h-4 w-4 text-neutral-500" />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full bg-transparent text-sm text-white placeholder:text-neutral-600 focus:outline-none"
        />
        <kbd className="rounded border border-neutral-700 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500">
          &#8984;K
        </kbd>
      </div>
      <input
        type="text"
        placeholder="Environment name"
        className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none"
      />
    </div>
  );
}
