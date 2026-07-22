import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "About Us Sections — UI Library" };

const variants = [
  { title: "Values Grid", file: "sections/about/Variant1.jsx" },
  { title: "Story with Stats", file: "sections/about/Variant2.jsx" },
  { title: "Manifesto", file: "sections/about/Variant3.jsx" },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">About Us</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Company story, mission, and values layouts.
        </p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="about"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
