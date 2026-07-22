import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Accordion — UI Library" };

const variants = [
  { title: "Card Accordion", file: "elements/accordion/Variant1.jsx" },
  { title: "Editorial Accordion", file: "elements/accordion/Variant2.jsx" },
  { title: "Dark API Reference Accordion", file: "elements/accordion/Variant3.jsx" },
];

export default function AccordionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Accordion</h1>
        <p className="mt-1 text-sm text-neutral-400">Expandable/collapsible content panels.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="accordion"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
