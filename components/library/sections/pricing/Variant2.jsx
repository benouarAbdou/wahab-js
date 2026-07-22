const rows = [
  { feature: "Projects", basic: "3", pro: "Unlimited" },
  { feature: "Storage", basic: "1 GB", pro: "50 GB" },
  { feature: "Support", basic: "Community", pro: "Priority email" },
  { feature: "Custom domains", basic: "—", pro: "Yes" },
];

export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl text-neutral-900">Plans &amp; pricing</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-400">
                <th className="py-3 font-normal text-neutral-500">Feature</th>
                <th className="py-3 font-serif text-lg text-neutral-900">Basic — $0</th>
                <th className="py-3 font-serif text-lg text-neutral-900">Pro — $24</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-neutral-200">
                  <td className="py-3 text-neutral-600">{r.feature}</td>
                  <td className="py-3 text-neutral-800">{r.basic}</td>
                  <td className="py-3 text-neutral-900">{r.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
