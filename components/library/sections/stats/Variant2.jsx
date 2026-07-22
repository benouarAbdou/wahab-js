const logos = ["Northpeak", "Fieldnotes", "Cursive", "Loopline", "Vantage"];

export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          Trusted by teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="font-serif text-xl text-neutral-400">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
