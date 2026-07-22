import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "$0", features: ["3 projects", "Community support", "1 GB storage"], highlighted: false },
  { name: "Pro", price: "$29", features: ["Unlimited projects", "Priority support", "50 GB storage", "Custom domains"], highlighted: true },
  { name: "Enterprise", price: "$99", features: ["Everything in Pro", "SSO & audit logs", "Dedicated manager", "SLA"], highlighted: false },
];

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Simple, transparent pricing</h2>
          <p className="mt-2 text-slate-600">Choose the plan that fits your team.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.highlighted ? "border-slate-900 bg-slate-900 text-white shadow-lg" : "border-slate-200 bg-white text-slate-900"}`}
            >
              <p className="text-sm font-medium">{p.name}</p>
              <p className="mt-2 text-3xl font-bold">
                {p.price}
                <span className="text-sm font-normal opacity-60">/mo</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${p.highlighted ? "text-emerald-400" : "text-emerald-600"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-md py-2 text-sm font-semibold ${p.highlighted ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-700"}`}
              >
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
