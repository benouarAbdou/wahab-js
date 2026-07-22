import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Timeline — UI Library" };

const variants = [
  { title: "Order Tracking Timeline", file: "elements/timeline/Variant1.jsx" },
  { title: "Editorial History Timeline", file: "elements/timeline/Variant2.jsx" },
  { title: "Dark Pipeline Timeline", file: "elements/timeline/Variant3.jsx" },
];

export default function TimelinePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Timeline</h1>
        <p className="mt-1 text-sm text-neutral-400">Chronological step/event displays.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="timeline"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
