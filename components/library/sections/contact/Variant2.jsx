export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-serif text-3xl text-neutral-900">Write to us</h2>
        <p className="mt-2 text-neutral-600">
          Letters, corrections, and pitches are always welcome.
        </p>
        <form className="mt-8 space-y-5 text-left">
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-500">Name</label>
            <input
              type="text"
              className="mt-1 w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-500">Email</label>
            <input
              type="email"
              className="mt-1 w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-neutral-500">Message</label>
            <textarea
              rows={3}
              className="mt-1 w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none"
            />
          </div>
          <button className="border-b-2 border-neutral-900 pb-1 text-sm font-medium text-neutral-900">
            Send letter
          </button>
        </form>
      </div>
    </section>
  );
}
