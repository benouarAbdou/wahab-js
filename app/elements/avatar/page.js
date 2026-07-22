import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Avatar — UI Library" };

const variants = [
  { title: "Stacked + Status Avatar", file: "elements/avatar/Variant1.jsx" },
  { title: "Editorial Byline Avatar", file: "elements/avatar/Variant2.jsx" },
  { title: "Dark Gradient Avatar", file: "elements/avatar/Variant3.jsx" },
];

export default function AvatarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Avatar</h1>
        <p className="mt-1 text-sm text-neutral-400">User profile picture displays.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="avatar"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
