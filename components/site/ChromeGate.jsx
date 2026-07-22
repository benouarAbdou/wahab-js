"use client";

import { usePathname } from "next/navigation";
import TopNav from "./TopNav";
import SiteFooter from "./SiteFooter";

// Preview iframes render through this same root layout, but need to be
// bare (no site nav/footer) since they represent an isolated component
// viewport, not a page within the library site itself.
export default function ChromeGate({ children }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/preview");

  if (bare) return children;

  return (
    <>
      <TopNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
