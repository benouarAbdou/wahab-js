import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/badge/Variant1";
import Variant2 from "@/components/library/elements/badge/Variant2";
import Variant3 from "@/components/library/elements/badge/Variant3";

export const metadata = { title: "Badge / Tag — UI Library" };

const variants = [
  { title: "Status Pills", file: "elements/badge/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Category Tags", file: "elements/badge/Variant2.jsx", Component: Variant2 },
  { title: "Dark Status Dots", file: "elements/badge/Variant3.jsx", Component: Variant3 },
];

export default function BadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Badge / Tag</h1>
        <p className="mt-1 text-sm text-neutral-400">Small status and label indicators.</p>
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
