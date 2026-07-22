export default function Variant2() {
  return (
    <div className="flex items-center justify-between gap-6 bg-[#faf9f6] p-4 font-serif text-sm text-neutral-700">
      <a href="#" className="border-b border-neutral-400 hover:border-neutral-900">
        &larr; Previous issue
      </a>
      <span className="text-neutral-400">Issue 4 of 12</span>
      <a href="#" className="border-b border-neutral-400 hover:border-neutral-900">
        Next issue &rarr;
      </a>
    </div>
  );
}
