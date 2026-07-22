import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Article Sections — UI Library" };

const variants = [
  { title: "Blog Card Grid", file: "sections/articles/Variant1.jsx" },
  { title: "Editorial List", file: "sections/articles/Variant2.jsx" },
  { title: "Dark Engineering Feed", file: "sections/articles/Variant3.jsx" },
];

export default function ArticlesSectionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Articles</h1>
        <p className="mt-1 text-sm text-neutral-400">Blog/article listing sections.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="articles"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
