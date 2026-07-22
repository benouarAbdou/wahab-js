import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/button/Variant1";
import Variant2 from "@/components/library/elements/button/Variant2";
import Variant3 from "@/components/library/elements/button/Variant3";

export const metadata = { title: "Button — UI Library" };

const variants = [
  { title: "SaaS Buttons", file: "elements/button/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Buttons", file: "elements/button/Variant2.jsx", Component: Variant2 },
  { title: "Dark Buttons with Loading State", file: "elements/button/Variant3.jsx", Component: Variant3 },
];

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Button</h1>
        <p className="mt-1 text-sm text-neutral-400">Primary interactive buttons.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v) => (
          <ComponentPreview key={v.file} title={v.title} code={getComponentSource(v.file)} center>
            <v.Component />
          </ComponentPreview>
        ))}
      </div>
    </div>
  );
}
