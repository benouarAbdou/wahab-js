import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "CTA Sections — UI Library" };

const variants = [
  { title: "Gradient Banner CTA", file: "sections/cta/Variant1.jsx" },
  { title: "Editorial Newsletter CTA", file: "sections/cta/Variant2.jsx" },
  { title: "Terminal-style CTA", file: "sections/cta/Variant3.jsx" },
];

export default function CtaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Call To Action</h1>
        <p className="mt-1 text-sm text-neutral-400">Conversion-focused banner sections.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="cta"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
