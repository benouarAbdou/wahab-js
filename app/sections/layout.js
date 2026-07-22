import Sidebar from "@/components/site/Sidebar";
import { sections } from "@/lib/nav-data";

export default function SectionsLayout({ children }) {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6">
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-20">
          <Sidebar items={sections} basePath="/sections" label="Sections" />
        </div>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
