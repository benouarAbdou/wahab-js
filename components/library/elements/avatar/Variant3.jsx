export default function Variant3() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-neutral-950 p-8">
      <div className="relative h-12 w-12">
        <div className="h-full w-full rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500" />
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-neutral-950 bg-emerald-500">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-white">deploy-bot</p>
        <p className="font-mono text-xs text-neutral-500">last active 2m ago</p>
      </div>
    </div>
  );
}
