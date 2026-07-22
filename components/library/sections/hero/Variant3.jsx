import { ArrowRight } from "lucide-react";

export default function Variant3() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 sm:py-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          The infrastructure layer for
          <span className="text-emerald-400"> your next launch</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          Deploy in seconds. Scale to millions. One platform for your entire
          engineering team.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-400">
            Start deploying
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-neutral-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-900">
            View docs
          </button>
        </div>
      </div>
    </section>
  );
}
