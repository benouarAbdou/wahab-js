import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/faq/Variant1";
import Variant2 from "@/components/library/sections/faq/Variant2";
import Variant3 from "@/components/library/sections/faq/Variant3";

export const metadata = { title: "FAQ Sections — UI Library" };

const variants = [
  { title: "Accordion FAQ", file: "sections/faq/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Q&A List", file: "sections/faq/Variant2.jsx", Component: Variant2 },
  { title: "Dark Plus-Icon Accordion", file: "sections/faq/Variant3.jsx", Component: Variant3 },
];

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">FAQ</h1>
        <p className="mt-1 text-sm text-neutral-400">Frequently asked questions layouts.</p>
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
