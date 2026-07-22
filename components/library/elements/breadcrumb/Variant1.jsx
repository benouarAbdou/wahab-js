import { ChevronRight, Home } from "lucide-react";

const crumbs = ["Dashboard", "Projects", "Website Redesign"];

export default function Variant1() {
  return (
    <nav className="flex items-center gap-2 rounded-lg bg-white p-4 text-sm">
      <Home className="h-4 w-4 text-slate-400" />
      {crumbs.map((c, i) => (
        <div key={c} className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <a
            href="#"
            className={i === crumbs.length - 1 ? "font-medium text-slate-900" : "text-slate-500 hover:text-slate-800"}
          >
            {c}
          </a>
        </div>
      ))}
    </nav>
  );
}
