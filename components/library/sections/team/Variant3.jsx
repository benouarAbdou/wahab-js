const team = [
  { name: "Marta Ilic", role: "Engineering Manager", tone: "from-cyan-400 to-blue-500" },
  { name: "Yusuf Demir", role: "Platform Engineer", tone: "from-emerald-400 to-teal-500" },
  { name: "Nadia Petrova", role: "Site Reliability", tone: "from-fuchsia-400 to-purple-500" },
];

export default function Variant3() {
  return (
    <section className="bg-neutral-950 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-white">The infra team</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
              <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${m.tone}`} />
              <p className="mt-4 font-medium text-white">{m.name}</p>
              <p className="text-sm text-neutral-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
