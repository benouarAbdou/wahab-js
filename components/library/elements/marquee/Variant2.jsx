const rowA = [
  "from-rose-400 to-orange-300",
  "from-sky-400 to-indigo-300",
  "from-emerald-400 to-teal-300",
  "from-violet-400 to-fuchsia-300",
  "from-amber-400 to-rose-300",
];

const rowB = [
  "from-teal-400 to-sky-300",
  "from-fuchsia-400 to-violet-300",
  "from-orange-400 to-amber-300",
  "from-indigo-400 to-sky-300",
  "from-rose-400 to-fuchsia-300",
];

function Row({ tiles, direction, duration }) {
  const track = [...tiles, ...tiles];
  const anim = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-4 ${anim} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: duration }}
      >
        {track.map((tile, i) => (
          <div
            key={i}
            className={`h-28 w-44 shrink-0 rounded-xl bg-gradient-to-br ${tile} sm:h-32 sm:w-52`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Variant2() {
  return (
    <section className="bg-black px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">From the Gallery</h2>
          <p className="mt-1 text-sm text-neutral-500">Recent work, scrolling both ways.</p>
        </div>
        <div className="space-y-4">
          <Row tiles={rowA} direction="left" duration="28s" />
          <Row tiles={rowB} direction="right" duration="34s" />
        </div>
      </div>
    </section>
  );
}
