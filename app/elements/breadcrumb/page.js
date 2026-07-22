import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/breadcrumb/Variant1";
import Variant2 from "@/components/library/elements/breadcrumb/Variant2";
import Variant3 from "@/components/library/elements/breadcrumb/Variant3";

export const metadata = { title: "Breadcrumb — UI Library" };

const variants = [
  { title: "Icon Breadcrumb", file: "elements/breadcrumb/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Breadcrumb", file: "elements/breadcrumb/Variant2.jsx", Component: Variant2 },
  { title: "Dark Path Breadcrumb", file: "elements/breadcrumb/Variant3.jsx", Component: Variant3 },
];

export default function BreadcrumbPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Breadcrumb</h1>
        <p className="mt-1 text-sm text-neutral-400">Hierarchical page location trails.</p>
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
