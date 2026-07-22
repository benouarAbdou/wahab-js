import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Stat Counter — UI Library" };

const variants = [
  { title: "Revenue Stat Card", file: "elements/stat-counter/Variant1.jsx" },
  { title: "Editorial Big Number", file: "elements/stat-counter/Variant2.jsx" },
  { title: "Dark Live Metric", file: "elements/stat-counter/Variant3.jsx" },
];

export default function StatCounterPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Stat Counter</h1>
        <p className="mt-1 text-sm text-neutral-400">Highlighted numeric metrics.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="stat-counter"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
