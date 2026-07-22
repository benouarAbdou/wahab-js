const team = [
  { name: "Elena Marsh", role: "Editor-in-Chief" },
  { name: "Jonas Lindt", role: "Senior Writer" },
  { name: "Sofia Bianchi", role: "Illustrator" },
];

export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl text-neutral-900">The masthead</h2>
        <div className="mt-8 divide-y divide-neutral-300 border-t border-neutral-300">
          {team.map((m) => (
            <div key={m.name} className="flex items-center gap-4 py-5">
              <div className="h-14 w-14 shrink-0 rounded-full bg-neutral-300" />
              <div>
                <p className="font-serif text-lg text-neutral-900">{m.name}</p>
                <p className="text-sm text-neutral-500">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
