import { Layers } from "lucide-react";

export default function Variant1() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
      <div className="flex items-center gap-2 font-semibold text-slate-900">
        <Layers className="h-5 w-5" />
        Product
      </div>
      <div className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
        <a href="#" className="hover:text-slate-900">Features</a>
        <a href="#" className="hover:text-slate-900">Pricing</a>
        <a href="#" className="hover:text-slate-900">Docs</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="hidden text-sm font-medium text-slate-700 sm:block">Sign in</a>
        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Get started
        </button>
      </div>
    </nav>
  );
}
