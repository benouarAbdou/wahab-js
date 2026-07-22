import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/toast/Variant1";
import Variant2 from "@/components/library/elements/toast/Variant2";
import Variant3 from "@/components/library/elements/toast/Variant3";

export const metadata = { title: "Toast / Alert — UI Library" };

const variants = [
  { title: "Success Toast", file: "elements/toast/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Confirmation", file: "elements/toast/Variant2.jsx", Component: Variant2 },
  { title: "Dark Warning Alert", file: "elements/toast/Variant3.jsx", Component: Variant3 },
];

export default function ToastPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Toast / Alert</h1>
        <p className="mt-1 text-sm text-neutral-400">Transient notification messages.</p>
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
