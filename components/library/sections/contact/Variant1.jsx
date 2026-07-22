import { Mail, MapPin, Phone } from "lucide-react";

export default function Variant1() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Get in touch</h2>
          <p className="mt-2 text-slate-600">
            Have a question? Our team typically replies within a business day.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-slate-400" /> hello@company.com
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-slate-400" /> +1 (555) 012-3456
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-slate-400" /> San Francisco, CA
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
          <button className="w-full rounded-md bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
