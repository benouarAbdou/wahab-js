import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/contact/Variant1";
import Variant2 from "@/components/library/sections/contact/Variant2";
import Variant3 from "@/components/library/sections/contact/Variant3";

export const metadata = { title: "Contact Sections — UI Library" };

const variants = [
  { title: "Split Contact Form", file: "sections/contact/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Letter Form", file: "sections/contact/Variant2.jsx", Component: Variant2 },
  { title: "Dark On-call Form", file: "sections/contact/Variant3.jsx", Component: Variant3 },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Contact</h1>
        <p className="mt-1 text-sm text-neutral-400">Contact forms and newsletter signups.</p>
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
