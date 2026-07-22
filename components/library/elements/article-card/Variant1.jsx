export default function Variant1() {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
      <div className="aspect-video bg-gradient-to-br from-sky-300 to-indigo-400" />
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
          Engineering
        </p>
        <h3 className="mt-2 font-semibold text-slate-900">
          Scaling our design system to 40 teams
        </h3>
        <p className="mt-1.5 text-sm text-slate-600">
          Lessons learned rolling out a shared component library company-wide.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <div className="h-6 w-6 rounded-full bg-slate-800" />
          <span>Amara Okafor &middot; Jun 12</span>
        </div>
      </div>
    </article>
  );
}
