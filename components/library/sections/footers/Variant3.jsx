import { ArrowUpRight } from "lucide-react";

const links = ["Docs", "Changelog", "Status", "Pricing", "Blog"];

export default function Variant3() {
  return (
    <footer className="bg-black px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to build
            <br /> something great?
          </h3>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-900"
          >
            Get started
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-neutral-800 pt-6 text-sm text-neutral-500">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-white">
              {l}
            </a>
          ))}
          <span className="ml-auto text-neutral-600">&copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
