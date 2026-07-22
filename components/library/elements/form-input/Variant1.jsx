import { Mail, Lock } from "lucide-react";

export default function Variant1() {
  return (
    <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div>
        <label className="text-sm font-medium text-slate-700">Email</label>
        <div className="mt-1 flex items-center rounded-md border border-slate-200 px-3 focus-within:border-slate-400">
          <Mail className="h-4 w-4 text-slate-400" />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-transparent px-2 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">Password</label>
        <div className="mt-1 flex items-center rounded-md border border-slate-200 px-3 focus-within:border-slate-400">
          <Lock className="h-4 w-4 text-slate-400" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent px-2 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
