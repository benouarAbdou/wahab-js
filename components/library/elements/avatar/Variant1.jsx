const users = [
  { initials: "AO", tone: "bg-blue-500" },
  { initials: "DR", tone: "bg-emerald-500" },
  { initials: "PN", tone: "bg-violet-500" },
];

export default function Variant1() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg bg-white p-8">
      <div className="flex items-center -space-x-3">
        {users.map((u) => (
          <div
            key={u.initials}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white ${u.tone}`}
          >
            {u.initials}
          </div>
        ))}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-semibold text-slate-600">
          +5
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white">
            JD
          </div>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">Jamie Doe</p>
          <p className="text-xs text-slate-500">Online now</p>
        </div>
      </div>
    </div>
  );
}
