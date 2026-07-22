import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Pagination — UI Library" };

const variants = [
  { title: "Numbered Pagination", file: "elements/pagination/Variant1.jsx" },
  { title: "Editorial Prev/Next", file: "elements/pagination/Variant2.jsx" },
  { title: "Dark Dot Pagination", file: "elements/pagination/Variant3.jsx" },
];

export default function PaginationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Pagination</h1>
        <p className="mt-1 text-sm text-neutral-400">Page navigation controls.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="pagination"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
