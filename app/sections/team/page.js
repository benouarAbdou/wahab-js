import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Team Sections — UI Library" };

const variants = [
  { title: "Avatar Grid", file: "sections/team/Variant1.jsx" },
  { title: "Editorial Masthead List", file: "sections/team/Variant2.jsx" },
  { title: "Dark Card Grid", file: "sections/team/Variant3.jsx" },
];

export default function TeamPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Team</h1>
        <p className="mt-1 text-sm text-neutral-400">Team member grids.</p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="sections"
            type="team"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
