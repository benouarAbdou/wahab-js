import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "Zero-downtime migrations at scale", tag: "Infra", tone: "from-cyan-400 to-blue-500" },
  { title: "Building a real-time collab engine", tag: "Engineering", tone: "from-fuchsia-400 to-purple-500" },
  { title: "Our new observability stack", tag: "Ops", tone: "from-emerald-400 to-teal-500" },
  { title: "Rate limiting, done right", tag: "Security", tone: "from-orange-400 to-rose-500" },
];

export default function Variant3() {
  return (
    <section className="bg-neutral-950 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-white">Engineering blog</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 hover:border-neutral-700"
            >
              <div className={`h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br ${p.tone}`} />
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wide text-neutral-500">{p.tag}</p>
                <h3 className="truncate font-medium text-white">{p.title}</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-600 group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
