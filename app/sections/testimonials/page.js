import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Testimonial Sections — UI Library" };

const variants = [
  { title: "Rated Card Grid", file: "sections/testimonials/Variant1.jsx" },
  { title: "Single Editorial Quote", file: "sections/testimonials/Variant2.jsx" },
  { title: "Dark Two-Column", file: "sections/testimonials/Variant3.jsx" },
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Testimonials</h1>
        <p className="mt-1 text-sm text-neutral-400">Social proof and customer quotes.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="testimonials"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
