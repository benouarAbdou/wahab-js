import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/carousel/Variant1";
import Variant2 from "@/components/library/elements/carousel/Variant2";
import Variant3 from "@/components/library/elements/carousel/Variant3";

export const metadata = { title: "Carousel — UI Library" };

const variants = [
  { title: "Image Carousel", file: "elements/carousel/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Quote Carousel", file: "elements/carousel/Variant2.jsx", Component: Variant2 },
  { title: "Dark Product Carousel", file: "elements/carousel/Variant3.jsx", Component: Variant3 },
];

export default function CarouselPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Carousel</h1>
        <p className="mt-1 text-sm text-neutral-400">Sliding content carousels.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v) => (
          <ComponentPreview key={v.file} title={v.title} code={getComponentSource(v.file)} center>
            <v.Component />
          </ComponentPreview>
        ))}
      </div>
    </div>
  );
}
