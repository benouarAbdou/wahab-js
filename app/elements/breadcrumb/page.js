import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Breadcrumb — UI Library" };

const variants = [
  { title: "Icon Breadcrumb", file: "elements/breadcrumb/Variant1.jsx" },
  { title: "Editorial Breadcrumb", file: "elements/breadcrumb/Variant2.jsx" },
  { title: "Dark Path Breadcrumb", file: "elements/breadcrumb/Variant3.jsx" },
];

export default function BreadcrumbPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Breadcrumb</h1>
        <p className="mt-1 text-sm text-neutral-400">Hierarchical page location trails.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="breadcrumb"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
