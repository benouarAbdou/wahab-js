import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/pricing/Variant1";
import Variant2 from "@/components/library/sections/pricing/Variant2";
import Variant3 from "@/components/library/sections/pricing/Variant3";

export const metadata = { title: "Pricing Sections — UI Library" };

const variants = [
  { title: "Three-Tier Cards", file: "sections/pricing/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Comparison Table", file: "sections/pricing/Variant2.jsx", Component: Variant2 },
  { title: "Dark Featured Plan", file: "sections/pricing/Variant3.jsx", Component: Variant3 },
];

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Pricing</h1>
        <p className="mt-1 text-sm text-neutral-400">Plan comparison and pricing tables.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v) => (
          <ComponentPreview key={v.file} title={v.title} code={getComponentSource(v.file)}>
            <v.Component />
          </ComponentPreview>
        ))}
      </div>
    </div>
  );
}
