import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Contact Sections — UI Library" };

const variants = [
  { title: "Split Contact Form", file: "sections/contact/Variant1.jsx" },
  { title: "Editorial Letter Form", file: "sections/contact/Variant2.jsx" },
  { title: "Dark On-call Form", file: "sections/contact/Variant3.jsx" },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Contact</h1>
        <p className="mt-1 text-sm text-neutral-400">Contact forms and newsletter signups.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="contact"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
