export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Issue No. 01 — 2026
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl">
            Design systems, written like a story.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600">
            A quieter approach to building interfaces — considered
            typography, generous space, and components that get out of the
            way.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="border-b-2 border-neutral-900 pb-1 text-sm font-medium text-neutral-900">
              Start reading
            </button>
            <button className="text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Table of contents
            </button>
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] lg:block">
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-lg border border-neutral-300 bg-[#f0ede6]" />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-neutral-300 bg-white shadow-sm">
            <span className="font-serif text-6xl text-neutral-300">Aa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
