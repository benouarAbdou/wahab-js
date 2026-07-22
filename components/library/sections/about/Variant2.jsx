export default function Variant2() {
  return (
    <section className="bg-amber-50 px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-200 to-orange-300" />
          <div className="mt-8 aspect-square rounded-2xl bg-gradient-to-br from-rose-200 to-amber-200" />
          <div className="-mt-8 aspect-square rounded-2xl bg-gradient-to-br from-orange-300 to-amber-400" />
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            From a weekend project to a team of 40.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            What started as a side project between three friends is now used
            by thousands of teams every day. We stayed independent, kept our
            values, and never lost sight of why we started.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-orange-200 pt-6">
            <div>
              <p className="text-2xl font-bold text-neutral-900">2019</p>
              <p className="text-sm text-neutral-600">Founded</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-neutral-900">40+</p>
              <p className="text-sm text-neutral-600">Teammates</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-neutral-900">12</p>
              <p className="text-sm text-neutral-600">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
