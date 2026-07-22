import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Footer Sections — UI Library" };

const variants = [
  { title: "Multi-Column Footer", file: "sections/footers/Variant1.jsx" },
  { title: "Minimal Editorial Footer", file: "sections/footers/Variant2.jsx" },
  { title: "Dark CTA Footer", file: "sections/footers/Variant3.jsx" },
];

export default function FootersPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Footers</h1>
        <p className="mt-1 text-sm text-neutral-400">Site-wide footer layouts with links and legal.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="footers"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
