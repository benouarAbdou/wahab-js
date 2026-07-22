import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "FAQ Sections — UI Library" };

const variants = [
  { title: "Accordion FAQ", file: "sections/faq/Variant1.jsx" },
  { title: "Editorial Q&A List", file: "sections/faq/Variant2.jsx" },
  { title: "Dark Plus-Icon Accordion", file: "sections/faq/Variant3.jsx" },
];

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">FAQ</h1>
        <p className="mt-1 text-sm text-neutral-400">Frequently asked questions layouts.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="faq"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
