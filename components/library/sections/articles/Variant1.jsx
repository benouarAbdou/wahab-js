const posts = [
  { tag: "Engineering", title: "Scaling our design system to 40 teams", tone: "from-blue-300 to-indigo-400", date: "Jun 12" },
  { tag: "Product", title: "How we redesigned onboarding from scratch", tone: "from-emerald-300 to-teal-400", date: "May 28" },
  { tag: "Culture", title: "What remote-first actually looks like", tone: "from-rose-300 to-orange-400", date: "May 09" },
];

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900">From the blog</h2>
          <a href="#" className="text-sm font-medium text-slate-900 underline underline-offset-4">
            All posts
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group block">
              <div className={`aspect-video rounded-xl bg-gradient-to-br ${p.tone}`} />
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                {p.tag} &middot; {p.date}
              </p>
              <h3 className="mt-1 font-semibold text-slate-900 group-hover:underline">
                {p.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
