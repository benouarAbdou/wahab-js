const tiles = [
  "from-rose-300 to-orange-300",
  "from-sky-300 to-indigo-300",
  "from-emerald-300 to-teal-300",
  "from-violet-300 to-fuchsia-300",
  "from-amber-300 to-rose-300",
  "from-teal-300 to-sky-300",
];

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Our Work</h2>
            <p className="mt-1 text-sm text-slate-500">A selection of recent projects.</p>
          </div>
          <button className="hidden text-sm font-medium text-slate-900 underline underline-offset-4 sm:block">
            View all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`group aspect-square rounded-xl bg-gradient-to-br ${tile} transition-transform hover:-translate-y-1`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
