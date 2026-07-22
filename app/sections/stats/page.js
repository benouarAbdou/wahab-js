import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/stats/Variant1";
import Variant2 from "@/components/library/sections/stats/Variant2";
import Variant3 from "@/components/library/sections/stats/Variant3";

export const metadata = { title: "Stats & Logos Sections — UI Library" };

const variants = [
  { title: "Stat Row", file: "sections/stats/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Logo Strip", file: "sections/stats/Variant2.jsx", Component: Variant2 },
  { title: "Dark Bordered Stat Grid", file: "sections/stats/Variant3.jsx", Component: Variant3 },
];

export default function StatsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Stats &amp; Logos</h1>
        <p className="mt-1 text-sm text-neutral-400">Metrics rows and social-proof logo strips.</p>
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
