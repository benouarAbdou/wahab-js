const steps = [
  { title: "Order placed", time: "Jun 12, 9:02 AM", done: true },
  { title: "Processing", time: "Jun 12, 11:15 AM", done: true },
  { title: "Shipped", time: "Jun 13, 2:40 PM", done: true },
  { title: "Out for delivery", time: "Expected Jun 14", done: false },
];

export default function Variant1() {
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      {steps.map((s, i) => (
        <div key={s.title} className="flex gap-4">
          <div className="flex shrink-0 flex-col items-center">
            <div className={`h-3 w-3 rounded-full ${s.done ? "bg-emerald-500" : "border-2 border-slate-300 bg-white"}`} />
            {i < steps.length - 1 && (
              <div className={`w-px flex-1 ${s.done ? "bg-emerald-500" : "bg-slate-200"}`} />
            )}
          </div>
          <div className="pb-6">
            <p className={`text-sm font-medium ${s.done ? "text-slate-900" : "text-slate-400"}`}>{s.title}</p>
            <p className="text-xs text-slate-400">{s.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
