import { Check, Zap } from "lucide-react";

const plans = [
  { name: "Hobby", price: "Free", features: ["1 environment", "Community support"] },
  { name: "Team", price: "$39", features: ["Unlimited environments", "Priority support", "Usage analytics"], featured: true },
  { name: "Scale", price: "Custom", features: ["Dedicated infra", "24/7 support", "Custom SLA"] },
];

export default function Variant3() {
  return (
    <section className="bg-black px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-white">Pricing built to scale with you</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl border p-6 ${p.featured ? "border-emerald-500/50 bg-emerald-500/5" : "border-neutral-800 bg-neutral-900/40"}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-medium text-black">
                  <Zap className="h-3 w-3" /> Popular
                </span>
              )}
              <p className="text-sm font-medium text-neutral-400">{p.name}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{p.price}</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
