import { Target, Heart, Rocket } from "lucide-react";

const values = [
  { icon: Target, title: "Focused", text: "We obsess over the few things that matter most to our customers." },
  { icon: Heart, title: "Human", text: "Every decision starts with the person on the other end of the screen." },
  { icon: Rocket, title: "Fast", text: "We ship weekly, learn constantly, and never stop iterating." },
];

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We&apos;re building the tools we always wished we had.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Founded in 2019, our team has spent years in the trenches of
            product design. Now we&apos;re packaging that experience into a
            library anyone can build with.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <v.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
