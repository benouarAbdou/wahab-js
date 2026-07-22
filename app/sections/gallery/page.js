import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Gallery Sections — UI Library" };

const variants = [
  { title: "Simple Grid", file: "sections/gallery/Variant1.jsx" },
  { title: "Editorial Mosaic", file: "sections/gallery/Variant2.jsx" },
  { title: "Dark Hover Reveal", file: "sections/gallery/Variant3.jsx" },
];

export default function GalleryPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Gallery</h1>
        <p className="mt-1 text-sm text-neutral-400">Image grids and showcases.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="gallery"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
