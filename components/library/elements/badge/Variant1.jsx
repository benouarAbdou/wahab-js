export default function Variant1() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg bg-white p-8">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        New
      </span>
      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
        Active
      </span>
      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
        Pending
      </span>
      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
        Failed
      </span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        Archived
      </span>
    </div>
  );
}
