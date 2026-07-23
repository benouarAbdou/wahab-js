const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Variant4() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: NOISE }}
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Available for select work
          </span>
          <span>01 / 04</span>
        </div>

        <h1 className="mt-10 text-[length:clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-tight text-white">
          We build
          <br />
          <span style={{ WebkitTextStroke: "1.5px #737373", color: "transparent" }}>
            interfaces
          </span>{" "}
          that
          <br />
          feel inevitable.
        </h1>

        <div className="mt-14 flex flex-col gap-8 border-t border-neutral-800 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            An independent product studio partnering with founders to design
            and ship software people actually enjoy using.
          </p>
          <a
            href="#"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white"
          >
            <span className="border-b border-neutral-600 pb-0.5 transition-colors group-hover:border-lime-400 group-hover:text-lime-400">
              View selected work
            </span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
