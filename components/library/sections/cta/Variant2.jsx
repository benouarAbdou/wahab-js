export default function Variant2() {
  return (
    <section className="border-y border-neutral-300 bg-[#faf9f6] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl text-neutral-900">
          Subscribe to keep reading
        </h2>
        <p className="mt-3 text-neutral-600">
          One email a week. No noise, just the essays that matter.
        </p>
        <form className="mx-auto mt-6 flex max-w-sm items-center gap-2">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border-b border-neutral-400 bg-transparent px-1 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 border-b-2 border-neutral-900 pb-2 text-sm font-medium text-neutral-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
