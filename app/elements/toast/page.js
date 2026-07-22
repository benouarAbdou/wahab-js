import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Toast / Alert — UI Library" };

const variants = [
  { title: "Success Toast", file: "elements/toast/Variant1.jsx" },
  { title: "Editorial Confirmation", file: "elements/toast/Variant2.jsx" },
  { title: "Dark Warning Alert", file: "elements/toast/Variant3.jsx" },
];

export default function ToastPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Toast / Alert</h1>
        <p className="mt-1 text-sm text-neutral-400">Transient notification messages.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="toast"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
