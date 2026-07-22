import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/cta/Variant1";
import Variant2 from "@/components/library/sections/cta/Variant2";
import Variant3 from "@/components/library/sections/cta/Variant3";

export const metadata = { title: "CTA Sections — UI Library" };

const variants = [
  { title: "Gradient Banner CTA", file: "sections/cta/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Newsletter CTA", file: "sections/cta/Variant2.jsx", Component: Variant2 },
  { title: "Terminal-style CTA", file: "sections/cta/Variant3.jsx", Component: Variant3 },
];

export default function CtaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Call To Action</h1>
        <p className="mt-1 text-sm text-neutral-400">Conversion-focused banner sections.</p>
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
