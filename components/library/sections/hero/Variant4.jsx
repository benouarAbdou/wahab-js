import { Anton } from "next/font/google";
import {
  Pencil,
  Globe2,
  ArrowUpRight,
  BookOpen,
  Rocket,
  Camera,
  GraduationCap,
  PieChart,
} from "lucide-react";

const anton = Anton({ subsets: ["latin"], weight: "400" });

const programs = [
  {
    icon: Camera,
    title: "Live Sessions",
    tone: "bg-amber-400",
    desc: "Guided online sessions for students of every age and skill level.",
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    tone: "bg-indigo-500",
    desc: "Funding programs that make learning accessible to everyone.",
  },
  {
    icon: PieChart,
    title: "Progress Tracking",
    tone: "bg-pink-400",
    desc: "Clear, simple reporting so parents always know how it's going.",
  },
];

function BadgeText({ text, radius = 26 }) {
  const chars = text.split("");
  return (
    <span className="relative block h-12 w-12 text-[6px]">
      {chars.map((ch, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 font-bold uppercase text-neutral-400"
          style={{
            transform: `rotate(${(360 / chars.length) * i}deg) translate(0, -${radius}px)`,
            transformOrigin: "0 0",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Variant4() {
  return (
    <section className="relative overflow-hidden bg-[#111113] px-6 py-14 sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#1f1f22 1px, transparent 1px), linear-gradient(90deg, #1f1f22 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-400">
          <div className="hidden gap-8 sm:flex">
            <span>Features</span>
            <span>Programs</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">
            L<span className="text-amber-400">EA</span>RNIO
          </span>
          <div className="hidden items-center gap-6 sm:flex">
            <span>About</span>
            <span className="rounded-full border border-neutral-700 px-4 py-1.5 text-xs">
              Contact Us
            </span>
          </div>
        </nav>

        <div className="relative mt-14 sm:mt-16">
          <Pencil className="absolute -left-2 -top-8 hidden h-9 w-9 -rotate-45 text-rose-300 sm:block" />
          <Globe2 className="absolute right-8 top-2 hidden h-9 w-9 text-sky-400 sm:block" />
          <span className="absolute -left-4 top-44 hidden h-7 w-7 rounded-full bg-violet-500 sm:block" />
          <BookOpen className="absolute -right-2 top-40 hidden h-9 w-9 text-indigo-300 sm:block" />

          <h1
            className={`${anton.className} mx-auto max-w-4xl text-center text-[length:clamp(2.5rem,6.5vw,4.25rem)] uppercase leading-[0.95] tracking-wide text-white`}
          >
            Learn new
            <br />
            <span className="text-amber-400">skills</span> the
            <br />
            <span className="inline-flex items-center gap-3 align-middle text-neutral-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-neutral-600">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </span>
              modern way
            </span>
            <br />
            built for{" "}
            <span className="rounded-md border-2 border-dashed border-indigo-400 px-2 text-indigo-400">
              everyone
            </span>
          </h1>
        </div>

        <div className="mt-20 rounded-2xl bg-neutral-950 p-8 sm:mt-24 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="relative -mt-1 hidden sm:block">
                <BadgeText text="EST 2024 • QUALITY FIRST • " />
                <Rocket className="absolute -right-6 -top-6 h-6 w-6 -rotate-12 text-rose-400" />
              </div>
              <h2
                className={`${anton.className} max-w-md text-2xl uppercase leading-tight text-white sm:text-3xl`}
              >
                Programs made
                <br />
                for your{" "}
                <span className="inline-block -rotate-2 rounded bg-lime-400 px-2 text-neutral-950">
                  growth
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-neutral-500">
              Every plan pairs live instruction with tools that keep parents
              and students in sync.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            {programs.map((p, i) => (
              <div key={p.title} className="flex flex-1 items-center gap-4">
                <div className={`flex-1 rounded-xl ${p.tone} p-5`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/25">
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mt-4 font-semibold text-white">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">
                    {p.desc}
                  </p>
                </div>
                {i < programs.length - 1 && (
                  <span className="hidden h-8 w-1.5 shrink-0 rounded-full bg-neutral-800 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
