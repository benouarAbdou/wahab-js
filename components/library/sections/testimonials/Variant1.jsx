import { Star } from "lucide-react";

const quotes = [
  {
    text: "This library saved us weeks of design work. Every component just works out of the box.",
    name: "Amara Okafor",
    role: "Head of Product, Flux",
    initials: "AO",
    tone: "bg-blue-100 text-blue-700",
  },
  {
    text: "The responsiveness and attention to detail is unmatched. Our team ships twice as fast now.",
    name: "Daniel Reyes",
    role: "Founder, Northpeak",
    initials: "DR",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    text: "Clean code, thoughtful defaults, and genuinely beautiful designs. Highly recommend.",
    name: "Priya Nair",
    role: "Design Lead, Cursive",
    initials: "PN",
    tone: "bg-violet-100 text-violet-700",
  },
];

export default function Variant1() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Loved by teams everywhere
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                &ldquo;{q.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${q.tone}`}>
                  {q.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{q.name}</p>
                  <p className="text-xs text-slate-500">{q.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
