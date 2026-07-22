import { Terminal } from "lucide-react";

export default function Variant3() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      <div className="mx-auto max-w-2xl text-center">
        <Terminal className="mx-auto h-8 w-8 text-emerald-400" />
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Deploy your first app in under a minute
        </h2>
        <p className="mt-3 text-neutral-400">
          One command. Zero configuration. Global by default.
        </p>
        <div className="mx-auto mt-6 flex max-w-md items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-4 py-3 font-mono text-sm text-emerald-400">
          <span>npx create-app my-project</span>
          <span className="text-neutral-600">copy</span>
        </div>
      </div>
    </section>
  );
}
