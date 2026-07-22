import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/articles/Variant1";
import Variant2 from "@/components/library/sections/articles/Variant2";
import Variant3 from "@/components/library/sections/articles/Variant3";

export const metadata = { title: "Article Sections — UI Library" };

const variants = [
  { title: "Blog Card Grid", file: "sections/articles/Variant1.jsx", Component: Variant1 },
  { title: "Editorial List", file: "sections/articles/Variant2.jsx", Component: Variant2 },
  { title: "Dark Engineering Feed", file: "sections/articles/Variant3.jsx", Component: Variant3 },
];

export default function ArticlesSectionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Articles</h1>
        <p className="mt-1 text-sm text-neutral-400">Blog/article listing sections.</p>
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
