import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Article Card — UI Library" };

const variants = [
  { title: "Blog Preview Card", file: "elements/article-card/Variant1.jsx" },
  { title: "Editorial List Card", file: "elements/article-card/Variant2.jsx" },
  { title: "Dark Engineering Card", file: "elements/article-card/Variant3.jsx" },
];

export default function ArticleCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Article Card</h1>
        <p className="mt-1 text-sm text-neutral-400">Blog post preview cards.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="article-card"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
