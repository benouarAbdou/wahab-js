import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/about/Variant1";
import Variant2 from "@/components/library/sections/about/Variant2";
import Variant3 from "@/components/library/sections/about/Variant3";

export const metadata = { title: "About Us Sections — UI Library" };

const variants = [
  { title: "Values Grid", file: "sections/about/Variant1.jsx", Component: Variant1 },
  { title: "Story with Stats", file: "sections/about/Variant2.jsx", Component: Variant2 },
  { title: "Manifesto", file: "sections/about/Variant3.jsx", Component: Variant3 },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">About Us</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Company story, mission, and values layouts.
        </p>
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
