"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// Renders inside the /preview iframe route. Measures its own content height
// and reports it to the parent window so ComponentPreview can size the
// iframe to fit — the iframe itself is what gives components a real,
// independent viewport for responsive breakpoints to key off correctly.
export default function PreviewFrame({ children, center = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const report = () => {
      window.parent.postMessage(
        { type: "preview-resize", height: el.scrollHeight },
        "*"
      );
    };

    report();
    const observer = new ResizeObserver(report);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(center && "flex min-h-[16rem] items-center justify-center p-6")}
    >
      {children}
    </div>
  );
}
