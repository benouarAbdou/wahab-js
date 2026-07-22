const testimonials = [
  { name: "Kai Sato", role: "CTO, Loopline", text: "Deploys in seconds, scales without drama. Exactly what we needed.", tone: "from-cyan-400 to-blue-500" },
  { name: "Marta Ilic", role: "Eng Manager, Vantage", text: "Our on-call load dropped by half within the first month.", tone: "from-emerald-400 to-teal-500" },
];

export default function Variant3() {
  return (
    <section className="bg-neutral-950 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-white">What builders say</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
              <p className="text-sm leading-relaxed text-neutral-300">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${t.tone}`} />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
