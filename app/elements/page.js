import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { elements } from "@/lib/nav-data";

export const metadata = { title: "Elements — UI Library" };

export default function ElementsIndexPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Elements</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Reusable interface pieces. Each type has 3 distinct design variants.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {elements.map((item) => (
          <Link
            key={item.slug}
            href={`/elements/${item.slug}`}
            className="group rounded-lg border border-neutral-800 bg-neutral-950 p-5 transition-colors hover:border-neutral-700 hover:bg-neutral-900"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-white">{item.title}</h2>
              <ArrowRight className="h-4 w-4 text-neutral-600 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-300" />
            </div>
            <p className="mt-2 text-sm text-neutral-500">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
