import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/accordion/Variant1";
import Variant2 from "@/components/library/elements/accordion/Variant2";
import Variant3 from "@/components/library/elements/accordion/Variant3";

export const metadata = { title: "Accordion — UI Library" };

const variants = [
  { title: "Card Accordion", file: "elements/accordion/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Accordion", file: "elements/accordion/Variant2.jsx", Component: Variant2 },
  { title: "Dark API Reference Accordion", file: "elements/accordion/Variant3.jsx", Component: Variant3 },
];

export default function AccordionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Accordion</h1>
        <p className="mt-1 text-sm text-neutral-400">Expandable/collapsible content panels.</p>
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
