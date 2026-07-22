"use client";

import dynamic from "next/dynamic";

// react-pdf touches browser-only APIs at module load time, so each variant
// must be excluded from server rendering. next/dynamic's `ssr: false` can't
// be called directly inside a Server Component file, so it lives here in a
// small client-only wrapper instead.
const loading = () => (
  <div className="flex h-80 items-center justify-center text-sm text-neutral-500">
    Loading PDF viewer…
  </div>
);

export const PdfViewerVariant1 = dynamic(
  () => import("@/components/library/elements/pdf-viewer/Variant1"),
  { ssr: false, loading }
);

export const PdfViewerVariant2 = dynamic(
  () => import("@/components/library/elements/pdf-viewer/Variant2"),
  { ssr: false, loading }
);

export const PdfViewerVariant3 = dynamic(
  () => import("@/components/library/elements/pdf-viewer/Variant3"),
  { ssr: false, loading }
);
