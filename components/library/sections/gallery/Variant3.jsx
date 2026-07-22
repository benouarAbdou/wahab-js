import { Expand } from "lucide-react";

const tiles = [
  "from-cyan-500/30 to-blue-600/30",
  "from-fuchsia-500/30 to-purple-600/30",
  "from-emerald-500/30 to-cyan-600/30",
  "from-orange-500/30 to-rose-600/30",
];

export default function Variant3() {
  return (
    <section className="bg-black px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-white">Visual Archive</h2>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`group relative aspect-video overflow-hidden rounded-lg border border-neutral-800 bg-gradient-to-br ${tile}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Expand className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
