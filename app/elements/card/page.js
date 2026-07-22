import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Card — UI Library" };

const variants = [
  { title: "Feature Card", file: "elements/card/Variant1.jsx" },
  { title: "Editorial Chapter Card", file: "elements/card/Variant2.jsx" },
  { title: "Dark Compute Card", file: "elements/card/Variant3.jsx" },
];

export default function CardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Card</h1>
        <p className="mt-1 text-sm text-neutral-400">General-purpose content cards.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="card"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
