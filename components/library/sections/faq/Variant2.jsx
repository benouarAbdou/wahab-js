const faqs = [
  { q: "How is the newsletter funded?", a: "Entirely through reader subscriptions — no ads, no sponsors." },
  { q: "Can I gift a subscription?", a: "Yes, gift subscriptions are available at checkout for any length of time." },
  { q: "Is there an archive?", a: "Every past issue is available to subscribers in the archive section." },
];

export default function Variant2() {
  return (
    <section className="bg-[#faf9f6] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl text-neutral-900">Questions, answered</h2>
        <dl className="mt-8 space-y-8">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-serif text-lg text-neutral-900">{f.q}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-neutral-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
