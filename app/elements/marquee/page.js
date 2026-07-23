import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Marquee — UI Library" };

const variants = [
  { title: "Logo Marquee", file: "elements/marquee/Variant1.jsx" },
  { title: "Dual-Row Image Marquee", file: "elements/marquee/Variant2.jsx" },
  { title: "Bordered Tag Marquee", file: "elements/marquee/Variant3.jsx" },
];

export default function MarqueePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Marquee</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Continuously scrolling logo strips, image rows, and tag chips for landing pages.
        </p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="marquee"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
