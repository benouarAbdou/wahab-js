import { TrendingUp } from "lucide-react";

const stats = [
  { value: "3.2s", label: "Median build time" },
  { value: "0", label: "Config files needed" },
  { value: "42", label: "Edge regions" },
];

export default function Variant3() {
  return (
    <section className="bg-black px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 divide-y divide-neutral-800 rounded-xl border border-neutral-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 p-6">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="text-2xl font-semibold text-white">{s.value}</p>
                <p className="text-sm text-neutral-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
