export default function Variant3() {
  return (
    <section className="bg-neutral-950 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Manifesto
        </p>
        <h2 className="mt-4 text-2xl font-medium leading-relaxed text-neutral-300 sm:text-3xl">
          We believe software should feel{" "}
          <span className="text-white">calm</span>, not chaotic. Interfaces
          should <span className="text-white">disappear</span>, leaving only
          the work. Every pixel we ship is in service of{" "}
          <span className="text-white">focus</span> — for the people who use
          what we build, every single day.
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          <span>Est. 2019</span>
          <span>Remote-first</span>
          <span>Bootstrapped</span>
          <span>40 people, 12 countries</span>
        </div>
      </div>
    </section>
  );
}
