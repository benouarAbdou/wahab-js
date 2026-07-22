import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/article-card/Variant1";
import Variant2 from "@/components/library/elements/article-card/Variant2";
import Variant3 from "@/components/library/elements/article-card/Variant3";

export const metadata = { title: "Article Card — UI Library" };

const variants = [
  { title: "Blog Preview Card", file: "elements/article-card/Variant1.jsx", Component: Variant1 },
  { title: "Editorial List Card", file: "elements/article-card/Variant2.jsx", Component: Variant2 },
  { title: "Dark Engineering Card", file: "elements/article-card/Variant3.jsx", Component: Variant3 },
];

export default function ArticleCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Article Card</h1>
        <p className="mt-1 text-sm text-neutral-400">Blog post preview cards.</p>
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
