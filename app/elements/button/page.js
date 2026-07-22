import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Button — UI Library" };

const variants = [
  { title: "SaaS Buttons", file: "elements/button/Variant1.jsx" },
  { title: "Editorial Buttons", file: "elements/button/Variant2.jsx" },
  { title: "Dark Buttons with Loading State", file: "elements/button/Variant3.jsx" },
];

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Button</h1>
        <p className="mt-1 text-sm text-neutral-400">Primary interactive buttons.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="button"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
