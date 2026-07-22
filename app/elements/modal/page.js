import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/modal/Variant1";
import Variant2 from "@/components/library/elements/modal/Variant2";
import Variant3 from "@/components/library/elements/modal/Variant3";

export const metadata = { title: "Modal — UI Library" };

const variants = [
  { title: "Confirmation Modal", file: "elements/modal/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Modal", file: "elements/modal/Variant2.jsx", Component: Variant2 },
  { title: "Dark Terminal Modal", file: "elements/modal/Variant3.jsx", Component: Variant3 },
];

export default function ModalPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Modal</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Dialog / overlay windows. Click the trigger button to open each demo.
        </p>
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
