export default function Variant2() {
  return (
    <div className="w-full max-w-sm space-y-6 bg-[#faf9f6] p-6">
      <div>
        <label className="text-xs uppercase tracking-wide text-neutral-500">
          Full name
        </label>
        <input
          type="text"
          className="mt-1 w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-neutral-500">
          Occupation
        </label>
        <input
          type="text"
          className="mt-1 w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none"
        />
      </div>
    </div>
  );
}
