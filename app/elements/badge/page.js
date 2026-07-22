import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Badge / Tag — UI Library" };

const variants = [
  { title: "Status Pills", file: "elements/badge/Variant1.jsx" },
  { title: "Editorial Category Tags", file: "elements/badge/Variant2.jsx" },
  { title: "Dark Status Dots", file: "elements/badge/Variant3.jsx" },
];

export default function BadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Badge / Tag</h1>
        <p className="mt-1 text-sm text-neutral-400">Small status and label indicators.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="badge"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
