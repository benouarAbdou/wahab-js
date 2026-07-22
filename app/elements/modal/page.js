import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Modal — UI Library" };

const variants = [
  { title: "Confirmation Modal", file: "elements/modal/Variant1.jsx" },
  { title: "Editorial Modal", file: "elements/modal/Variant2.jsx" },
  { title: "Dark Terminal Modal", file: "elements/modal/Variant3.jsx" },
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
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="modal"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
