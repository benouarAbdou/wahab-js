const stats = [
  { value: "12M+", label: "API requests / day" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "180+", label: "Countries served" },
  { value: "4.9/5", label: "Average rating" },
];

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-slate-900 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
