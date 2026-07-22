const events = [
  { year: "2019", text: "Founded in a shared apartment in Lisbon." },
  { year: "2021", text: "First 1,000 paying subscribers." },
  { year: "2024", text: "Expanded to a team of twelve writers." },
];

export default function Variant2() {
  return (
    <div className="w-full max-w-sm bg-[#faf9f6] p-6">
      {events.map((e) => (
        <div key={e.year} className="border-l border-neutral-400 pb-6 pl-4 last:pb-0">
          <p className="font-serif text-lg text-neutral-900">{e.year}</p>
          <p className="mt-1 text-sm text-neutral-600">{e.text}</p>
        </div>
      ))}
    </div>
  );
}
