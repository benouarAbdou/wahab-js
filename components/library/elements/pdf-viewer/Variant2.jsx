"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { cn } from "@/lib/cn";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  standardFontDataUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

export default function Variant2() {
  const [numPages, setNumPages] = useState(0);
  const [active, setActive] = useState(1);

  return (
    <div className="flex h-96 w-full max-w-xl overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
      <Document
        file="/sample.pdf"
        options={options}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p className="p-8 text-sm text-neutral-500">Loading document…</p>}
        className="contents"
      >
        <div className="flex w-24 shrink-0 flex-col gap-2 overflow-y-auto border-r border-neutral-800 bg-neutral-900/50 p-2">
          {Array.from({ length: numPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setActive(num)}
              className={cn(
                "overflow-hidden rounded border-2 transition-colors",
                active === num ? "border-emerald-500" : "border-transparent hover:border-neutral-700"
              )}
            >
              <Page pageNumber={num} width={80} renderTextLayer={false} renderAnnotationLayer={false} />
              <span className="block bg-neutral-900 py-0.5 text-center text-[10px] text-neutral-400">
                {num}
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center overflow-auto p-4">
          <Page pageNumber={active} width={320} />
        </div>
      </Document>
    </div>
  );
}
