export default function Variant2() {
  return (
    <footer className="bg-[#faf9f6] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-8 sm:flex-row">
        <p className="font-serif text-lg text-neutral-900">Fieldnotes</p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900">Issues</a>
          <a href="#" className="hover:text-neutral-900">Contributors</a>
          <a href="#" className="hover:text-neutral-900">Subscribe</a>
          <a href="#" className="hover:text-neutral-900">Contact</a>
        </nav>
        <p className="text-xs text-neutral-400">&copy; 2026, printed digitally.</p>
      </div>
    </footer>
  );
}
