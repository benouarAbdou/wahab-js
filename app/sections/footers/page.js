import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/footers/Variant1";
import Variant2 from "@/components/library/sections/footers/Variant2";
import Variant3 from "@/components/library/sections/footers/Variant3";

export const metadata = { title: "Footer Sections — UI Library" };

const variants = [
  { title: "Multi-Column Footer", file: "sections/footers/Variant1.jsx", Component: Variant1 },
  { title: "Minimal Editorial Footer", file: "sections/footers/Variant2.jsx", Component: Variant2 },
  { title: "Dark CTA Footer", file: "sections/footers/Variant3.jsx", Component: Variant3 },
];

export default function FootersPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Footers</h1>
        <p className="mt-1 text-sm text-neutral-400">Site-wide footer layouts with links and legal.</p>
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
