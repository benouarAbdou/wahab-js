export default function Variant6() {
  return (
    <section className="border-4 border-black bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-black pb-3 font-mono text-xs uppercase text-black">
          <span>[ system ] index — awwwards_hero</span>
          <span>build 2026.07.23</span>
        </div>

        <h1 className="mt-10 text-[length:clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tight text-black">
          Design
          <br />
          without
          <br />
          <span className="bg-lime-300 px-2">apology.</span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="border-2 border-black px-6 py-3 font-mono text-sm font-bold uppercase text-black transition-colors hover:bg-black hover:text-lime-300"
          >
            Enter site →
          </a>
          <span className="font-mono text-xs uppercase text-neutral-500">
            no loading screen required
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 border-2 border-black font-mono text-xs uppercase sm:grid-cols-3">
          {["01 — design", "02 — build", "03 — launch"].map((label, i) => (
            <div
              key={label}
              className={`p-4 ${i !== 0 ? "border-t-2 border-black sm:border-l-2 sm:border-t-0" : ""}`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
