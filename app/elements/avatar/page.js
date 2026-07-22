import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/elements/avatar/Variant1";
import Variant2 from "@/components/library/elements/avatar/Variant2";
import Variant3 from "@/components/library/elements/avatar/Variant3";

export const metadata = { title: "Avatar — UI Library" };

const variants = [
  { title: "Stacked + Status Avatar", file: "elements/avatar/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Byline Avatar", file: "elements/avatar/Variant2.jsx", Component: Variant2 },
  { title: "Dark Gradient Avatar", file: "elements/avatar/Variant3.jsx", Component: Variant3 },
];

export default function AvatarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Avatar</h1>
        <p className="mt-1 text-sm text-neutral-400">User profile picture displays.</p>
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
