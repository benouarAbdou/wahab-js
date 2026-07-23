import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Carousel — UI Library" };

const variants = [
  { title: "Image Carousel", file: "elements/carousel/Variant1.jsx" },
  { title: "Editorial Quote Carousel", file: "elements/carousel/Variant2.jsx" },
  { title: "Dark Product Carousel", file: "elements/carousel/Variant3.jsx" },
  { title: "Paginated Card Carousel", file: "elements/carousel/Variant4.jsx" },
  { title: "Dark Paginated Card Carousel", file: "elements/carousel/Variant5.jsx" },
];

export default function CarouselPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Carousel</h1>
        <p className="mt-1 text-sm text-neutral-400">Sliding content carousels.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="carousel"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
