import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Form Input — UI Library" };

const variants = [
  { title: "Icon Inputs", file: "elements/form-input/Variant1.jsx" },
  { title: "Editorial Underline Inputs", file: "elements/form-input/Variant2.jsx" },
  { title: "Dark Search + Field", file: "elements/form-input/Variant3.jsx" },
];

export default function FormInputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Form Input</h1>
        <p className="mt-1 text-sm text-neutral-400">Text inputs and form fields.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="form-input"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
