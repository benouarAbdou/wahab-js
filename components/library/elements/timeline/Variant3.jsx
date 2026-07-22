import { CheckCircle2, Loader2, Circle } from "lucide-react";

const steps = [
  { label: "Build", status: "done" },
  { label: "Test", status: "done" },
  { label: "Deploy", status: "active" },
  { label: "Verify", status: "pending" },
];

const icons = { done: CheckCircle2, active: Loader2, pending: Circle };
const colors = { done: "text-emerald-400", active: "text-blue-400", pending: "text-neutral-700" };

export default function Variant3() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      {steps.map((s, i) => {
        const Icon = icons[s.status];
        return (
          <div key={s.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <Icon className={`h-4 w-4 ${colors[s.status]} ${s.status === "active" ? "animate-spin" : ""}`} />
              {i < steps.length - 1 && <div className="my-1 w-px flex-1 bg-neutral-800" />}
            </div>
            <p className={`pb-5 text-sm ${s.status === "pending" ? "text-neutral-600" : "text-neutral-200"}`}>
              {s.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
