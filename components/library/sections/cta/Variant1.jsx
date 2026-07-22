import { ArrowRight } from "lucide-react";

export default function Variant1() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Start building today
          </h2>
          <p className="mt-2 text-indigo-100">
            Join thousands of teams already shipping with our components.
          </p>
        </div>
        <button className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">
          Get started free
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
