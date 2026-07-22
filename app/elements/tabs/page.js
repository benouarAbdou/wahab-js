import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Tabs — UI Library" };

const variants = [
  { title: "Underline Tabs", file: "elements/tabs/Variant1.jsx" },
  { title: "Editorial Tabs", file: "elements/tabs/Variant2.jsx" },
  { title: "Dark Pill Tabs", file: "elements/tabs/Variant3.jsx" },
];

export default function TabsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Tabs</h1>
        <p className="mt-1 text-sm text-neutral-400">Tabbed content switchers.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="tabs"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
