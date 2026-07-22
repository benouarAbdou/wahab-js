export default function Variant2() {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-300 bg-[#faf9f6] px-6 py-5">
      <span className="font-serif text-xl text-neutral-900">Fieldnotes</span>
      <div className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">
        <a href="#" className="hover:text-neutral-900">Essays</a>
        <a href="#" className="hover:text-neutral-900">Interviews</a>
        <a href="#" className="hover:text-neutral-900">Archive</a>
        <a href="#" className="hover:text-neutral-900">About</a>
      </div>
      <button className="border-b-2 border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900">
        Subscribe
      </button>
    </nav>
  );
}
