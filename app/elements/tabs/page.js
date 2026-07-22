import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/tabs/Variant1";
import Variant2 from "@/components/library/elements/tabs/Variant2";
import Variant3 from "@/components/library/elements/tabs/Variant3";

export const metadata = { title: "Tabs — UI Library" };

const variants = [
  { title: "Underline Tabs", file: "elements/tabs/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Tabs", file: "elements/tabs/Variant2.jsx", Component: Variant2 },
  { title: "Dark Pill Tabs", file: "elements/tabs/Variant3.jsx", Component: Variant3 },
];

export default function TabsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Tabs</h1>
        <p className="mt-1 text-sm text-neutral-400">Tabbed content switchers.</p>
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
