const logos = ["Northpeak", "Fieldnotes", "Cursive", "Loopline", "Vantage", "Meridian"];

export default function Variant1() {
  const track = [...logos, ...logos];

  return (
    <section className="bg-[#faf9f6] px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          Trusted by teams at
        </p>
        <div
          className="group relative mt-6 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="animate-marquee-left flex w-max items-center gap-12 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "22s" }}
          >
            {track.map((logo, i) => (
              <span
                key={i}
                className="font-serif text-xl whitespace-nowrap text-neutral-400"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
