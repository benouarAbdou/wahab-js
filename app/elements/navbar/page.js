import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Navbar — UI Library" };

const variants = [
  { title: "SaaS Navbar", file: "elements/navbar/Variant1.jsx" },
  { title: "Editorial Navbar", file: "elements/navbar/Variant2.jsx" },
  { title: "Dark Navbar with Mobile Menu", file: "elements/navbar/Variant3.jsx" },
];

export default function NavbarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Navbar</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Top site navigation bars. Switch to the mobile viewport to see the third
          variant&apos;s hamburger menu in action — each preview renders in its
          own iframe, so it responds to the viewport width exactly like a real page.
        </p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="navbar"
            variant={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
