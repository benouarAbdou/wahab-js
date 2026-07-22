import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/form-input/Variant1";
import Variant2 from "@/components/library/elements/form-input/Variant2";
import Variant3 from "@/components/library/elements/form-input/Variant3";

export const metadata = { title: "Form Input — UI Library" };

const variants = [
  { title: "Icon Inputs", file: "elements/form-input/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Underline Inputs", file: "elements/form-input/Variant2.jsx", Component: Variant2 },
  { title: "Dark Search + Field", file: "elements/form-input/Variant3.jsx", Component: Variant3 },
];

export default function FormInputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Form Input</h1>
        <p className="mt-1 text-sm text-neutral-400">Text inputs and form fields.</p>
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
