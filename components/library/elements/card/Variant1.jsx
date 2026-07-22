import { Zap } from "lucide-react";

export default function Variant1() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
        <Zap className="h-5 w-5 text-blue-600" />
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">Instant deploys</h3>
      <p className="mt-1.5 text-sm text-slate-600">
        Push to main and see your changes live in seconds, every time.
      </p>
      <a href="#" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
        Learn more
      </a>
    </div>
  );
}
