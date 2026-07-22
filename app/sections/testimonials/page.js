import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/testimonials/Variant1";
import Variant2 from "@/components/library/sections/testimonials/Variant2";
import Variant3 from "@/components/library/sections/testimonials/Variant3";

export const metadata = { title: "Testimonial Sections — UI Library" };

const variants = [
  { title: "Rated Card Grid", file: "sections/testimonials/Variant1.jsx", Component: Variant1 },
  { title: "Single Editorial Quote", file: "sections/testimonials/Variant2.jsx", Component: Variant2 },
  { title: "Dark Two-Column", file: "sections/testimonials/Variant3.jsx", Component: Variant3 },
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Testimonials</h1>
        <p className="mt-1 text-sm text-neutral-400">Social proof and customer quotes.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v) => (
          <ComponentPreview key={v.file} title={v.title} code={getComponentSource(v.file)}>
            <v.Component />
          </ComponentPreview>
        ))}
      </div>
    </div>
  );
}
