export default function Variant5() {
  return (
    <section className="bg-[#efe9df] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between border-b border-neutral-400/60 pb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          <span>Maison Ferrand — SS26</span>
          <span>Paris / Milan</span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <h1 className="font-serif text-[length:clamp(2.75rem,7vw,6rem)] leading-[1.02] text-neutral-900">
            A quiet study
            <br />
            in <span className="italic">restraint</span>.
          </h1>

          <div className="max-w-sm lg:justify-self-end">
            <p className="text-sm leading-relaxed text-neutral-600">
              Twelve pieces, one material, no excess. Considered from the
              first seam to the last stitch.
            </p>
            <a
              href="#"
              className="mt-6 inline-block border-b border-neutral-900 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-900"
            >
              View the collection
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-52 border border-neutral-400/60 p-2">
            <div className="aspect-[3/5] bg-gradient-to-b from-[#d8cdb8] to-[#8a7f6a]" />
            <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Plate 04 — Linen, undyed
            </p>
          </div>
          <p className="max-w-xs text-sm text-neutral-500 sm:text-right">
            Available in three colorways, in stores and online from
            September.
          </p>
        </div>
      </div>
    </section>
  );
}
