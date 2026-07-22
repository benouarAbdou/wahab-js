import { Send } from "lucide-react";

export default function Variant3() {
  return (
    <section className="bg-black px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-lg">
        <h2 className="text-2xl font-semibold text-white">Talk to engineering</h2>
        <p className="mt-2 text-sm text-neutral-400">
          Drop your email and a note — we route it straight to the on-call team.
        </p>
        <form className="mt-6 space-y-3">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none"
          />
          <textarea
            rows={3}
            placeholder="What's going on?"
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none"
          />
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400">
            <Send className="h-4 w-4" />
            Send to on-call
          </button>
        </form>
      </div>
    </section>
  );
}
