import { Sparkles, Zap, ShieldCheck, Rocket, Layers, Gauge } from "lucide-react";

const items = [
  { icon: Sparkles, label: "AI-assisted" },
  { icon: Zap, label: "Instant sync" },
  { icon: ShieldCheck, label: "SOC 2 ready" },
  { icon: Rocket, label: "Fast deploys" },
  { icon: Layers, label: "Composable" },
  { icon: Gauge, label: "Realtime metrics" },
];

export default function Variant3() {
  const track = [...items, ...items];

  return (
    <section className="bg-black px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-neutral-800 py-8">
          <div
            className="group overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div
              className="animate-marquee-left flex w-max items-center gap-3 px-4 group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "26s" }}
            >
              {track.map(({ icon: Icon, label }, i) => (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-300"
                >
                  <Icon className="h-4 w-4 text-emerald-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
