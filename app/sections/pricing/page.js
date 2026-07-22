import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Pricing Sections — UI Library" };

const variants = [
  { title: "Three-Tier Cards", file: "sections/pricing/Variant1.jsx" },
  { title: "Editorial Comparison Table", file: "sections/pricing/Variant2.jsx" },
  { title: "Dark Featured Plan", file: "sections/pricing/Variant3.jsx" },
];

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Pricing</h1>
        <p className="mt-1 text-sm text-neutral-400">Plan comparison and pricing tables.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="pricing"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
