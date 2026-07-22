import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";
import Variant1 from "@/components/library/sections/team/Variant1";
import Variant2 from "@/components/library/sections/team/Variant2";
import Variant3 from "@/components/library/sections/team/Variant3";

export const metadata = { title: "Team Sections — UI Library" };

const variants = [
  { title: "Avatar Grid", file: "sections/team/Variant1.jsx", Component: Variant1 },
  { title: "Editorial Masthead List", file: "sections/team/Variant2.jsx", Component: Variant2 },
  { title: "Dark Card Grid", file: "sections/team/Variant3.jsx", Component: Variant3 },
];

export default function TeamPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Team</h1>
        <p className="mt-1 text-sm text-neutral-400">Team member grids.</p>
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
