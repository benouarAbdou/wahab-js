const items = [
  { tone: "from-stone-300 to-stone-400", span: "row-span-2", label: "Editorial" },
  { tone: "from-neutral-300 to-neutral-400", span: "", label: "Product" },
  { tone: "from-zinc-300 to-zinc-400", span: "", label: "Studio" },
  { tone: "from-stone-200 to-stone-300", span: "col-span-2", label: "Campaign" },
];

export default function Variant2() {
  return (
    <section className="bg-[#f5f4f0] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl text-neutral-900">Selected Works</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-rows-2">
          {items.map((item) => (
            <div
              key={item.label}
              className={`relative overflow-hidden rounded-md bg-gradient-to-br ${item.tone} ${item.span} min-h-40`}
            >
              <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-wider text-white/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
