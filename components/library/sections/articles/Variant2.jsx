const posts = [
  { title: "Notes on typographic rhythm", excerpt: "How consistent line-height creates calm reading experiences.", date: "Jun 2026" },
  { title: "The case for fewer meetings", excerpt: "A short argument for async-first collaboration.", date: "May 2026" },
  { title: "Writing that respects the reader", excerpt: "Editing principles we return to again and again.", date: "Apr 2026" },
];

export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl text-neutral-900">Recent essays</h2>
        <div className="mt-8 divide-y divide-neutral-300 border-t border-neutral-300">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group flex items-baseline justify-between gap-6 py-6">
              <div>
                <h3 className="font-serif text-xl text-neutral-900 group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{p.excerpt}</p>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-wide text-neutral-500">
                {p.date}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
