const team = [
  { name: "Amara Okafor", role: "CEO & Co-founder", tone: "from-blue-300 to-indigo-400", initials: "AO" },
  { name: "Daniel Reyes", role: "CTO", tone: "from-emerald-300 to-teal-400", initials: "DR" },
  { name: "Priya Nair", role: "Head of Design", tone: "from-violet-300 to-fuchsia-400", initials: "PN" },
  { name: "Kai Sato", role: "Head of Engineering", tone: "from-rose-300 to-orange-400", initials: "KS" },
];

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Meet the team</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${m.tone} text-lg font-semibold text-white`}>
                {m.initials}
              </div>
              <p className="mt-3 font-medium text-slate-900">{m.name}</p>
              <p className="text-sm text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
