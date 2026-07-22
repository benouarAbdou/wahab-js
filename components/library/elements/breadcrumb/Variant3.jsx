import { Slash } from "lucide-react";

const crumbs = ["org", "platform-api", "deployments", "prod-a3f9"];

export default function Variant3() {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs">
      {crumbs.map((c, i) => (
        <div key={c} className="flex items-center gap-1.5">
          <a
            href="#"
            className={i === crumbs.length - 1 ? "text-emerald-400" : "text-neutral-500 hover:text-neutral-300"}
          >
            {c}
          </a>
          {i < crumbs.length - 1 && <Slash className="h-3 w-3 text-neutral-700" />}
        </div>
      ))}
    </nav>
  );
}
