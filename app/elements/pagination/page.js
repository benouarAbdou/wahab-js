import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/pagination/Variant1";
import Variant2 from "@/components/library/elements/pagination/Variant2";
import Variant3 from "@/components/library/elements/pagination/Variant3";

export const metadata = { title: "Pagination — UI Library" };

const variants = [
  { title: "Numbered Pagination", file: "elements/pagination/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Prev/Next", file: "elements/pagination/Variant2.jsx", Component: Variant2 },
  { title: "Dark Dot Pagination", file: "elements/pagination/Variant3.jsx", Component: Variant3 },
];

export default function PaginationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Pagination</h1>
        <p className="mt-1 text-sm text-neutral-400">Page navigation controls.</p>
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
