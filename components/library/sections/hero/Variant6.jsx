import { Gamepad2, ShoppingBag, Coins, Plus, User } from "lucide-react";

const games = [
  {
    name: "Nova Quest",
    subtitle: "Battle Royale",
    tone: "from-violet-600 to-purple-700",
    pos: "-rotate-12 translate-y-10",
  },
  {
    name: "Ember Kingdom",
    subtitle: "Platformer",
    tone: "from-rose-500 to-pink-600",
    pos: "-rotate-6 translate-y-4",
    rating: "4,5",
  },
  {
    name: "Puffling",
    subtitle: "Star Allies",
    tone: "from-sky-400 to-cyan-500",
    pos: "rotate-0",
    rating: "4,7",
    featured: true,
  },
  {
    name: "Wild Tamers",
    subtitle: "Creature Quest",
    tone: "from-emerald-400 to-teal-500",
    pos: "rotate-6 translate-y-4",
    rating: "4,2",
  },
  {
    name: "Ink Clash",
    subtitle: "Multiplayer",
    tone: "from-indigo-500 to-blue-600",
    pos: "rotate-12 translate-y-10",
    rating: "3,9",
  },
];

export default function Variant6() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0e] px-6 pb-4 pt-8 sm:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#1c1c20 1px, transparent 1px), linear-gradient(90deg, #1c1c20 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <nav className="flex items-center justify-between text-sm text-neutral-300">
          <div className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-1.5 text-white">
              <Gamepad2 className="h-4 w-4" /> Games
            </span>
            <span className="flex items-center gap-1.5 text-neutral-500">
              <ShoppingBag className="h-4 w-4" /> Store
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-5 w-2.5 rounded-full bg-neutral-200" />
            <span className="h-5 w-2.5 rounded-full bg-neutral-700" />
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1 text-xs sm:flex">
              <Coins className="h-3.5 w-3.5 text-amber-400" />
              1 290.0000
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800 text-neutral-300">
              <Plus className="h-3.5 w-3.5" />
            </span>
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
          </div>
        </nav>

        <div className="mt-10 text-center sm:mt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
            🎁 5 Months <span className="text-neutral-600">—</span> Free Access
          </span>
          <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Fun Games
            <br />
            For Every Player
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400">
            Be sure to try our selection of games, we have carefully chosen
            them. There are games for all tastes.
          </p>
        </div>

        <div className="mt-12 flex items-end justify-center pb-2 sm:mt-16">
          {games.map((g) => (
            <div
              key={g.name}
              className={`group relative -ml-6 shrink-0 cursor-pointer rounded-2xl p-4 shadow-2xl transition-transform duration-300 ease-out first:ml-0 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-105 bg-gradient-to-br ${g.tone} ${g.pos} ${
                g.featured ? "z-20 h-64 w-48" : "z-10 h-56 w-44"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-bold text-white">{g.name}</p>
                  <p className="text-xs text-white/70">{g.subtitle}</p>
                </div>
                {g.rating && (
                  <span className="flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-[10px] font-medium text-white">
                    <User className="h-2.5 w-2.5" />
                    {g.rating}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
