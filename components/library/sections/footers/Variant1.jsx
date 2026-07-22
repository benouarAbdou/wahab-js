import { Layers, Mail, MessageCircle, Globe } from "lucide-react";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Resources", links: ["Community", "Guides", "Support", "API"] },
];

export default function Variant1() {
  return (
    <footer className="bg-white px-6 py-12 text-slate-600">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-slate-900">
              <Layers className="h-5 w-5" />
              <span className="font-semibold">Company</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Building tools that help teams ship better products, faster.
            </p>
            <div className="mt-4 flex gap-3">
              <Mail className="h-4 w-4 text-slate-400 hover:text-slate-700" />
              <MessageCircle className="h-4 w-4 text-slate-400 hover:text-slate-700" />
              <Globe className="h-4 w-4 text-slate-400 hover:text-slate-700" />
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-slate-900">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>&copy; 2026 Company, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
