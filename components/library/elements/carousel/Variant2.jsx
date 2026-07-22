"use client";

import { useState } from "react";

const quotes = [
  { text: "A publication that respects the time of its readers.", author: "The Reading List" },
  { text: "Consistently the most thoughtful writing on the subject.", author: "Column Weekly" },
  { text: "Essays I actually finish, and think about for days after.", author: "Reader survey" },
];

export default function Variant2() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full max-w-md bg-[#faf9f6] p-8 text-center">
      <p className="font-serif text-xl leading-relaxed text-neutral-900">
        &ldquo;{quotes[index].text}&rdquo;
      </p>
      <p className="mt-4 text-sm text-neutral-500">— {quotes[index].author}</p>
      <div className="mt-6 flex items-center justify-center gap-4 text-sm">
        <button
          onClick={() => setIndex((i) => (i - 1 + quotes.length) % quotes.length)}
          className="text-neutral-500 hover:text-neutral-900"
        >
          Prev
        </button>
        <span className="text-neutral-300">|</span>
        <button
          onClick={() => setIndex((i) => (i + 1) % quotes.length)}
          className="text-neutral-500 hover:text-neutral-900"
        >
          Next
        </button>
      </div>
    </div>
  );
}
