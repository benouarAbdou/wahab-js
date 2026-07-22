const crumbs = ["Archive", "2026", "Issue 04"];

export default function Variant2() {
  return (
    <nav className="bg-[#faf9f6] p-4 font-serif text-sm text-neutral-600">
      {crumbs.map((c, i) => (
        <span key={c}>
          <a href="#" className={i === crumbs.length - 1 ? "text-neutral-900 underline underline-offset-4" : "hover:text-neutral-900"}>
            {c}
          </a>
          {i < crumbs.length - 1 && <span className="mx-2 text-neutral-400">/</span>}
        </span>
      ))}
    </nav>
  );
}
