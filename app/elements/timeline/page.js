import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/timeline/Variant1";
import Variant2 from "@/components/library/elements/timeline/Variant2";
import Variant3 from "@/components/library/elements/timeline/Variant3";

export const metadata = { title: "Timeline — UI Library" };

const variants = [
  { title: "Order Tracking Timeline", file: "elements/timeline/Variant1.jsx", Component: Variant1 },
  { title: "Editorial History Timeline", file: "elements/timeline/Variant2.jsx", Component: Variant2 },
  { title: "Dark Pipeline Timeline", file: "elements/timeline/Variant3.jsx", Component: Variant3 },
];

export default function TimelinePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Timeline</h1>
        <p className="mt-1 text-sm text-neutral-400">Chronological step/event displays.</p>
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
