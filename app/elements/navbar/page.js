import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/navbar/Variant1";
import Variant2 from "@/components/library/elements/navbar/Variant2";
import Variant3 from "@/components/library/elements/navbar/Variant3";

export const metadata = { title: "Navbar — UI Library" };

const variants = [
  { title: "SaaS Navbar", file: "elements/navbar/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Navbar", file: "elements/navbar/Variant2.jsx", Component: Variant2 },
  { title: "Dark Navbar with Mobile Menu", file: "elements/navbar/Variant3.jsx", Component: Variant3 },
];

export default function NavbarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Navbar</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Top site navigation bars. Switch to the mobile viewport to see the third
          variant&apos;s hamburger menu in action.
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
