import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Hero Sections — UI Library" };

const variants = [
  {
    title: "Minimal Editorial Hero",
    file: "sections/hero/Variant2.jsx",
    prompt: "sections/hero/Variant2.design.md",
  },
  {
    title: "Dark Glow Hero",
    file: "sections/hero/Variant3.jsx",
    prompt: "sections/hero/Variant3.design.md",
  },
  {
    title: "Playful EdTech Hero",
    file: "sections/hero/Variant4.jsx",
    prompt: "sections/hero/Variant4.design.md",
  },
  {
    title: "Fanned Game Cards Hero",
    file: "sections/hero/Variant6.jsx",
    prompt: "sections/hero/Variant6.design.md",
  },
  {
    title: "Bold Studio Hero",
    file: "sections/hero/Variant7.jsx",
    prompt: "sections/hero/Variant7.design.md",
  },
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
            prompt={getComponentSource(v.prompt)}
            category="sections"
            type="hero"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
