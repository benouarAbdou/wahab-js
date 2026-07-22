"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export default function Sidebar({ items, basePath, label }) {
  const pathname = usePathname();

  return (
    <nav>
      {label && (
        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
          {label}
        </p>
      )}
      <div className="space-y-0.5">
        {items.map((item) => {
          const href = `${basePath}/${item.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={item.slug}
              href={href}
              className={cn(
                "block rounded-md px-3 py-1.5 text-sm transition-colors",
                active
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
