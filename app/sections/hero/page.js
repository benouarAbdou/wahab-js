import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Hero Sections — UI Library" };

const variants = [
  { title: "Gradient SaaS Hero", file: "sections/hero/Variant1.jsx" },
  { title: "Minimal Editorial Hero", file: "sections/hero/Variant2.jsx" },
  { title: "Dark Glow Hero", file: "sections/hero/Variant3.jsx" },
];

export default function HeroPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Hero</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Above-the-fold landing headlines with a primary call to action.
        </p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="hero"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
