import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

function CircularText({ text, radius = 34 }) {
  const chars = text.split("");
  return (
    <div className="relative h-24 w-24 shrink-0 text-[9px]">
      {chars.map((ch, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 font-medium uppercase text-white"
          style={{
            transform: `rotate(${(360 / chars.length) * i}deg) translate(0, -${radius}px)`,
            transformOrigin: "0 0",
          }}
        >
          {ch}
        </span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUpRight className="h-5 w-5 text-white" />
      </div>
    </div>
  );
}

function CornerStripes({ className }) {
  return (
    <div className={`pointer-events-none absolute flex flex-col gap-1 ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="h-3 w-6 -skew-x-[24deg] bg-white/70" />
      ))}
    </div>
  );
}

export default function Variant7() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-8 sm:py-10">
      <CornerStripes className="right-6 top-6 hidden sm:flex" />
      <CornerStripes className="bottom-6 left-6 hidden sm:flex" />

      <nav className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
        <span className="flex items-center gap-1.5 text-lg font-bold text-white">
          <span className="flex items-center -space-x-1">
            <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          Vantik
        </span>
        <div className="hidden items-center gap-7 text-sm text-neutral-300 lg:flex">
          <span className="text-white">Home</span>
          <span>Services</span>
          <span>Pages ▾</span>
          <span>Contact us</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-medium text-white sm:block">Log in</span>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-black">
            Register Now
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </nav>

      <div className="relative mx-auto mt-10 max-w-4xl text-center sm:mt-12">
        <Sparkles className="pointer-events-none absolute -top-6 left-4 hidden h-6 w-6 text-white/60 sm:block" />
        <Sparkles className="pointer-events-none absolute bottom-0 left-16 hidden h-4 w-4 text-white/40 sm:block" />
        <div
          className="pointer-events-none absolute right-0 top-2 hidden h-44 w-44 -translate-y-2 translate-x-6 bg-violet-500 opacity-80 sm:block"
          style={{
            clipPath:
              "polygon(50% 0%, 58% 30%, 85% 15%, 68% 42%, 100% 50%, 68% 58%, 85% 85%, 58% 70%, 50% 100%, 42% 70%, 15% 85%, 32% 58%, 0% 50%, 32% 42%, 15% 15%, 42% 30%)",
          }}
        />

        <h1 className="relative text-4xl font-bold leading-tight text-white sm:text-6xl">
          Get your{" "}
          <span className="inline-flex h-10 w-16 items-center justify-center rounded-full border border-white/40 align-middle sm:h-12 sm:w-20">
            <ArrowRight className="h-4 w-4" />
          </span>{" "}
          best work
          <br />
          done at Vantik
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          <button className="rounded-full bg-lime-300 px-7 py-3.5 text-sm font-semibold text-black">
            Get Started
          </button>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["from-amber-300 to-rose-400", "from-sky-300 to-indigo-400", "from-emerald-300 to-teal-400"].map(
                (tone, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br ${tone}`}
                  />
                )
              )}
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-lime-300 text-[10px] font-bold text-white">
              50k+
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div className="w-[120%] -translate-x-[10%] -rotate-2 bg-lime-300 py-3">
          <div className="flex items-center justify-center gap-10 text-sm font-bold uppercase tracking-wide text-black">
            <span>Web Design</span>
            <Sparkles className="h-3.5 w-3.5" />
            <span>App Design</span>
            <Sparkles className="h-3.5 w-3.5" />
            <span>Branding</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-4xl flex-col items-center gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[15rem] text-lg font-medium leading-snug text-white">
          Flexible solutions for every kind of business
        </div>

        <div className="relative">
          <div
            className="absolute -left-4 top-4 h-40 w-32 bg-fuchsia-500/80 sm:h-48 sm:w-40"
            style={{ borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%" }}
          />
          <div className="relative h-44 w-36 rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900 sm:h-52 sm:w-44" />
          <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 sm:block">
            <CircularText text="TRY IT FOR FREE • TRY IT FOR FREE • " />
          </div>
        </div>

        <div className="flex items-center gap-6 text-white">
          <div>
            <p className="text-xs text-neutral-400">Success</p>
            <p className="text-2xl font-bold">157+</p>
            <p className="text-xs text-neutral-500">Projects Delivered</p>
          </div>
          <div className="h-10 w-px bg-neutral-700" />
          <div>
            <p className="text-xs text-neutral-400">Achieve</p>
            <p className="text-2xl font-bold">20+</p>
            <p className="text-xs text-neutral-500">Design Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
