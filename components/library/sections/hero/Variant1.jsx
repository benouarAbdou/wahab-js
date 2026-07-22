import { ArrowRight, Sparkles } from "lucide-react";

export default function Variant1() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-300 to-orange-200 opacity-30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
          <Sparkles className="h-3.5 w-3.5" />
          Now with AI-powered workflows
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Build products your
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            {" "}
            customers love
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
          Ship faster with a design system built for modern teams. Fully
          responsive, accessible, and ready for production.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700">
            Get started
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
            Watch demo
          </button>
        </div>
      </div>
    </section>
  );
}
